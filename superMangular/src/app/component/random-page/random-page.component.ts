import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { superhero } from 'src/app/data/superhero';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-random-page',
  templateUrl: './random-page.component.html',
  styleUrls: ['./random-page.component.css']
})
export class RandomPageComponent implements OnInit {
  myHeroRand!:superhero;
  subscription!: Subscription;
  random_var!: number;
  text_var!:string;

  constructor(private DataService:DataServiceService) { }


  ngOnInit(): void {
    this.subscription = this.DataService.getSuperhero().subscribe(

      (data:superhero) =>{
        this.myHeroRand = data; }
  );

}

reload(): void{
  // any other execution
  this.ngOnInit()

  this.random_var = this.DataService.getRandomArbitrary(1,6);

  switch(this.random_var){
    case 1 :
      this.text_var = "intelligent";
      console.log(this.myHeroRand.powerstats.intelligence);
      break;

    case 2 :
      this.text_var = "fort";
      console.log(this.myHeroRand.powerstats.strength);
      break;

    case 3 :
      this.text_var = "rapide";
      console.log(this.myHeroRand.powerstats.speed);
      break;

    case 4 :
      this.text_var = "endurant";
      console.log(this.myHeroRand.powerstats.durability);
      break;

    case 5 :
      this.text_var = "puissant";
      console.log(this.myHeroRand.powerstats.power);
      break;

    case 6 :
      this.text_var = "technique";
      console.log(this.myHeroRand.powerstats.combat);
      break;

    default :
      this.text_var = "ERROR";
      break;
  }

  }

}
