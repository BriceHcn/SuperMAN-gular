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
@Input() showButton!:boolean;
myjson:any=JSON;
env = environment;
@Output() HeroRequest= new EventEmitter<any>();

constructor() { }

 ngOnInit(): void {}

 talkBack(){
  this.HeroRequest.emit();
 }
}
