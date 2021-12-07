import { Injectable } from '@angular/core';
import { superhero } from '../data/superhero';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  score:number=1;
  constructor() { }

  compareHero(heroNotChoose:superhero,heroChoose:superhero,carac2comp:number):number{
    if(heroChoose.powerstats.strength>=heroNotChoose.powerstats.strength){
      return this.score++;
    }else{
      return this.score--;
    }

  }
}
