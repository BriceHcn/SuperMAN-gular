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
  question!:string;

  constructor(private DataService:DataServiceService,private GameService:GameService) { }

  ngOnInit(): void {
    this.mySpinner='../assets/spinner.gif';
    this.hideMe=false;

    this.GameService.scoreObs.subscribe((value: number) => {
      this.score=value;
      this.refresh();
    }
    );
  }

  //quand on clique sur le bouton de gauche
  actionLeft(){
    //on compare les deux heros selon la caracteridtique choisie au hasard
    this.GameService.compareHero(this.myHero2,this.myHero1,this.GameService.comp);
  }

  //et quand on clique sur le bouton de droite
  actionRight(){
    //on compare mais en inversant les deux supers
    this.GameService.compareHero(this.myHero1,this.myHero2,this.GameService.comp);
  }

  //fonction appeller après chaque tour pour mettre a jours les super hero et la question
  refresh(){
    //on choisi quelle caracteristique des supers on va comparer
    this.GameService.setCharacToComp();

    //on met a jour la question du jeux selon cet characteristique
    this.question="Qui est le plus "+this.GameService.updateQuestion()+" ???";

    //on met a jour nos deux super hero et le spinner
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

  NgOnDestroy(){
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
    this.GameService.scoreObs.unsubscribe();
  }
}
