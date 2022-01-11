import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { superhero } from 'src/app/data/superhero';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, delay, mergeMap } from 'rxjs/operators';
import { result } from 'src/app/data/result';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  subscription!: Subscription;
  HeroesSearched!: result;
  Result!: string;
  hideMe!: boolean;
  hideExHeroes!: boolean;

  searchForm!: FormGroup;
  searchControl!: FormControl;

  constructor(private DataService:DataService) { }

  ngOnInit(): void {

    this.hideMe = true;

    this.searchControl = new FormControl('');
    this.searchForm = new FormGroup({
        search: this.searchControl
    });

    this.searchControl.valueChanges.pipe(
      debounceTime(1000),
      mergeMap(data => this.DataService.getSuperheroSearched(data))
  ).subscribe(
    (data:result) => {
      this.Result = "No result";
      this.hideMe = false;
      this.hideExHeroes = true;
      if(data.response == 'success'){
        this.HeroesSearched = data;
        this.Result = "";
        this.hideMe = true;
        this.hideExHeroes = false;
      }
    },
    (error) => {console.log("error");},
  )

  }

}
