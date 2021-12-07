import { Component, Input, OnInit } from '@angular/core';
import { superhero } from 'src/app/data/superhero';

@Component({
  selector: 'app-superhero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.css']
})
export class SuperheroComponent implements OnInit {
@Input() myHero!:superhero;



  constructor() { }

 ngOnInit(): void {


  }

}
