import { Injectable } from '@angular/core';
import { superhero } from '../data/superhero';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  score:number=0;
  constructor() { }

  compareHero(heroNotChoose:superhero,heroChoose:superhero,carac2comp:number):number{
    //comparer le choisi et l'autre sur la meme qualite et incrementer le score ou non en fonction de ca
    if(heroChoose.powerstats.strength>=heroNotChoose.powerstats.strength){
      return this.score++;
    }else{
      return this.score--;
    }

  }
}
