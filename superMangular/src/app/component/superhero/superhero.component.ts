import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { superhero } from 'src/app/data/superhero';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-superhero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.css']
})
export class SuperheroComponent implements OnInit {
//myHero!:superhero;

//subscription!: Subscription;

  constructor(private DataService:DataServiceService) { }

 ngOnInit(): void {}
   /*
    this.subscription = this.DataService.getSuperhero(3).subscribe(

      (data) =>{ this.myHero = data }
  );
  }


  ngOnDestroy(){
    this.subscription.unsubscribe();
  } */
}
