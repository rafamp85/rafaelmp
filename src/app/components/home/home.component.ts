import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.css'],
  animations: [fadeIn]
})


export class HomeComponent {
  public title:string;
  public subtitle:string;

  constructor(){
    this.title = 'Bienvenidos';
    this.subtitle = 'Desarrollador web y asesor IT';
  }
}
