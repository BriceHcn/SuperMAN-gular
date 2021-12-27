import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { superhero } from 'src/app/data/superhero';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-superhero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.css']
})
export class SuperheroComponent implements OnInit {
@Input() myHero!:superhero;
myjson:any=JSON;
env = environment;
@Output() HeroRequest= new EventEmitter<String>();

constructor() { }

 ngOnInit(): void {}

 talkBack(name:string){
  this.HeroRequest.emit(name);
 }
}
