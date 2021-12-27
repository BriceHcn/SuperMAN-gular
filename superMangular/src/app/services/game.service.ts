import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { superhero } from '../data/superhero';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  score:number=0;
  scoreObs = new BehaviorSubject<number>(0);
  comp:number=0;

  constructor(private DataService:DataService) { }

  setCharacToComp(){
    this.comp=this.DataService.getRandomArbitrary(1,6);
  }

  updateQuestion():string{
    switch(this.comp){
      case 1 :
        return "intelligent";
      case 2 :
        return "fort";

      case 3 :
        return "rapide";

      case 4 :
        return "endurant";

      case 5 :
        return "puissant";

      case 6 :
        return "technique";

      default :
        return "ERROR";
    }
  }

  compareHero(heroNotChoose:superhero,heroChoose:superhero,carac2comp:number){
    switch(this.comp){
      case 1 :
        if(String(heroNotChoose.powerstats.intelligence)=="null" || String(heroChoose.powerstats.intelligence)=="null"){
          ++this.score;
          this.scoreObs.next(this.score);
          return;
        }
        else{
        if(Number(heroChoose.powerstats.intelligence)>=Number(heroNotChoose.powerstats.intelligence)){
          ++this.score;
          this.scoreObs.next(this.score);
        }else{
          //--this.score;
          this.scoreObs.next(this.score);
        }
      }
      break;

      case 2 :
        if(String(heroNotChoose.powerstats.strength)=="null" || String(heroChoose.powerstats.strength)=="null"){
          ++this.score;
          this.scoreObs.next(this.score);
          return;
        }
        else{
        if(Number(heroChoose.powerstats.strength)>=Number(heroNotChoose.powerstats.strength)){
          ++this.score;
          this.scoreObs.next(this.score);
        }else{
          //--this.score;
          this.scoreObs.next(this.score);
        }
      }
      break;

      case 3 :
        if(String(heroNotChoose.powerstats.speed)=="null" || String(heroChoose.powerstats.speed)=="null"){
          ++this.score;
          this.scoreObs.next(this.score);
          return;
        }
        else{
        if(Number(heroChoose.powerstats.speed)>=Number(heroNotChoose.powerstats.speed)){
          ++this.score;
          this.scoreObs.next(this.score);
        }else{
          //--this.score;
          this.scoreObs.next(this.score);
        }
      }
      break;

      case 4 :
        if(String(heroNotChoose.powerstats.durability)=="null" || String(heroChoose.powerstats.durability)=="null"){
          ++this.score;
          this.scoreObs.next(this.score);
          return;
        }
        else{
        if(Number(heroChoose.powerstats.durability)>=Number(heroNotChoose.powerstats.durability)){
          ++this.score;
          this.scoreObs.next(this.score);
        }else{
          //--this.score;
          this.scoreObs.next(this.score);
        }
      }
      break;

      case 5 :
        if(String(heroNotChoose.powerstats.power)=="null" || String(heroChoose.powerstats.power)=="null"){
          ++this.score;
          this.scoreObs.next(this.score);
          return;
        }
        else{
        if(Number(heroChoose.powerstats.power)>=Number(heroNotChoose.powerstats.power)){
          ++this.score;
          this.scoreObs.next(this.score);
        }else{
          //--this.score;
          this.scoreObs.next(this.score);
        }
      }
      break;

      case 6 :
        if(String(heroNotChoose.powerstats.combat)=="null" || String(heroChoose.powerstats.combat)=="null"){
          ++this.score;
          this.scoreObs.next(this.score);
          return;
        }
        else{
        if(Number(heroChoose.powerstats.combat)>=Number(heroNotChoose.powerstats.combat)){
          ++this.score;
          this.scoreObs.next(this.score);
        }else{
          //--this.score;
          this.scoreObs.next(this.score);
        }
      }
      break;

      default :
      // au cas ou rien ne marche.
      this.scoreObs.next(this.score);
      break;
    }
}


}
