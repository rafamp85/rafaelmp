import { Component } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.css'],
  animations: [fadeIn]
})


export class MyServicesComponent {
  public title:string;

  constructor(){
    this.title = 'Servicios';
  }
}
