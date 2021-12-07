import { Component, OnInit } from '@angular/core';
import { superhero } from 'src/app/data/superhero';
import { Subscription } from 'rxjs';
import { DataServiceService } from 'src/app/services/data-service.service';

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

  constructor(private DataService:DataServiceService) { }

  ngOnInit(): void {
    this.subscription = this.DataService.getSuperhero().subscribe(

      (data1:superhero) =>{
        this.myHero1 = data1; }
  );

  this.subscription2 = this.DataService.getSuperhero().subscribe(

    (data2:superhero) =>{
      this.myHero2 = data2; }
);

  }

}
