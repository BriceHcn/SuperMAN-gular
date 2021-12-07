import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { superhero } from 'src/app/data/superhero';
import { Subscription } from 'rxjs';
import { DataServiceService } from 'src/app/services/data-service.service';
import { GameService } from 'src/app/services/game.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-superherolist',
  templateUrl: './superherolist.component.html',
  styleUrls: ['./superherolist.component.css']
})
export class SuperherolistComponent implements OnInit {
  myHero1!:superhero;
  myHero2!:superhero;
  subscription!: Subscription;
  subscription2!: Subscription;
  hideMe:boolean = false;

  score:number=0;

  constructor(private DataService:DataServiceService,private GameService:GameService) { }

  ngOnInit(): void {
    this.subscription = this.DataService.getSuperhero().subscribe(
      (data1:superhero) =>{
        this.myHero1 = data1;
        this.hideMe=true;}
      ,(error) => {console.log("error");}
      ,() => {console.log("bravo");}
    );

    this.subscription2 = this.DataService.getSuperhero().subscribe(
      (data2:superhero) =>{

        this.myHero2 = data2;}
      ,(error) => {console.log("error");}
      ,() => {console.log("bravo");}
    );

    this.GameService.scoreObs.subscribe((value: number) => {
      console.log("caca");

      this.score=value;

      this.subscription2 = this.DataService.getSuperhero().subscribe(
        (data2:superhero) =>{

          this.myHero2 = data2;}
        ,(error) => {console.log("error");}
        ,() => {console.log("bravo");}
      );

      this.subscription = this.DataService.getSuperhero().subscribe(
        (data1:superhero) =>{
          this.myHero1 = data1;
          this.hideMe=true;}
        ,(error) => {console.log("error");}
        ,() => {console.log("bravo");}
      );


    }
    );
  }

  actionLeft(){
    console.log("les deux super etait "+this.myHero1.name +" & "+this.myHero2.name);
    console.log("jai choisi le super gauche : "+this.myHero1.name);
    this.GameService.compareHero(this.myHero2,this.myHero1,1);

  }

  actionRight(){
    console.log("les deux super etait "+this.myHero2.name +" & "+this.myHero2.name);
    console.log("jai choisi le super droite : "+this.myHero2.name);
    this.GameService.compareHero(this.myHero1,this.myHero2,1);

  }

  NgOnDestroy(){
    //this.subscription.unsubscribe();
    //this.subscription2.unsubscribe();
    //this.GameService.scoreObs.unsubscribe();
  }
}
