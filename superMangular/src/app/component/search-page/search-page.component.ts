import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { superhero } from 'src/app/data/superhero';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  subscription!: Subscription;
  HeroesSearched!: Array<superhero>;

  constructor(private DataService:DataService) { }

  ngOnInit(): void {

    this.subscription = this.DataService.getSuperheroSearched().subscribe(

      (data:Array<superhero>) => {
        this.HeroesSearched = data;
        console.log(data);
      },
      (error) => {console.log("error");},
    );

  }

}
