import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myLogo!: string;

  constructor() { }

  ngOnInit(): void {
    this.myLogo = '../assets/SuperMAngular.png';
  }

}
