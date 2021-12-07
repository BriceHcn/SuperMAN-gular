import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { superhero } from '../data/superhero';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  score:number=0;
  scoreObs = new BehaviorSubject<number>(0);
  constructor() { }

  getScore(){
    return this.scoreObs.asObservable();
 }

  compareHero(heroNotChoose:superhero,heroChoose:superhero,carac2comp:number){
    if(heroNotChoose.powerstats.strength===null){
      this.score++;
      this.scoreObs.next(this.score);
      return;
    }else if(heroChoose.powerstats.strength===null){
      this.score++;
      this.scoreObs.next(this.score);
      return;
    }

    if(heroChoose.powerstats.strength>=heroNotChoose.powerstats.strength){
      this.score++;
      this.scoreObs.next(this.score);
    }else{
      this.score;
      this.scoreObs.next(this.score);
    }

  }
}
