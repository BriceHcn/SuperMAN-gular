import { Component, OnInit } from '@angular/core';
import { superhero } from 'src/app/data/superhero';
import { Subscription } from 'rxjs';
import { DataServiceService } from 'src/app/services/data-service.service';
import { GameService } from 'src/app/services/game.service';

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
  hideMe!:boolean;
  mySpinner!:string;

  score:number=0;

  constructor(private DataService:DataServiceService,private GameService:GameService) { }

  ngOnInit(): void {
    this.mySpinner='../assets/spinner.gif';
    this.hideMe=false;
    //this.refresh();

    this.GameService.scoreObs.subscribe((value: number) => {
      //console.log(value);
      this.score=value;
      this.refresh();


    }
    );
  }

  actionLeft(){
    //console.log("les deux super etait "+this.myHero1.name +" & "+this.myHero2.name);
    //console.log("jai choisi le super gauche : "+this.myHero1.name);
    this.GameService.compareHero(this.myHero2,this.myHero1,1);

  }

  actionRight(){
    //console.log("les deux super etait "+this.myHero1.name +" & "+this.myHero2.name);
    //console.log("jai choisi le super droite : "+this.myHero2.name);
    this.GameService.compareHero(this.myHero1,this.myHero2,1);

  }

  NgOnDestroy(){
    //this.subscription.unsubscribe();
    //this.subscription2.unsubscribe();
    //this.GameService.scoreObs.unsubscribe();
  }

  refresh(){
    this.subscription = this.DataService.getSuperhero().subscribe(
      (data1:superhero) =>{
        this.myHero1 = data1;
        this.hideMe=false;
      }
      ,(error) => {console.log("error");}
      ,() => {
        this.hideMe=true;
      }
    );

    this.subscription2 = this.DataService.getSuperhero().subscribe(
      (data2:superhero) =>{
        this.hideMe=false;
        this.myHero2 = data2;
    }
      ,(error) => {console.log("error");}
      ,() => {
        this.hideMe=true;
      }
    );
  }
}
