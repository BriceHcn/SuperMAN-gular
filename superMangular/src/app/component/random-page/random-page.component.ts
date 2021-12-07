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

  switch()

  }

}
