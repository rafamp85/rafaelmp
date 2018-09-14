import { Component } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  animations: [fadeIn]
})


export class ContactComponent {
  public title:string;

  constructor(){
    this.title = 'Contacta con nosotros';
  }
}
