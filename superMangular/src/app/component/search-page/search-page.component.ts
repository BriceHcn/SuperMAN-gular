import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { superhero } from 'src/app/data/superhero';
import { FormControl, FormGroup } from '@angular/forms';
import { delay } from 'rxjs/operators';
import { result } from 'src/app/data/result';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  subscription!: Subscription;
  HeroesSearched!: result;
  Input!: string;

  constructor(private DataService:DataService) { }

  ngOnInit(): void {

  }

  callHero(input : string): void {

    this.Input = input;

    this.subscription = this.DataService.getSuperheroSearched(this.Input).subscribe(

      (data:result) => {
        this.HeroesSearched = data;

      },
      (error) => {console.log("error");},
    );

  }

}
