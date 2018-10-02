import { Component } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.css'],
  animations: [fadeIn]
})


export class VideosComponent {
  public title:string;

  constructor(){
    this.title = 'Mis videos';
  }
}
