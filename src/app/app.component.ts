import { Component } from '@angular/core';
import { faHome, faCogs, faVideo, faIdCard, faFileAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string;
  public faHome: any;
  public faCogs: any;
  public faVideo: any;
  public faIdCard: any;
  public faFileAlt: any;
  public faSignInAlt: any;

  constructor(){
    this.title = "Rafael Morales WEB";
    this.faHome = faHome;
    this.faCogs = faCogs;
    this.faVideo = faVideo;
    this.faIdCard = faIdCard;
    this.faFileAlt = faFileAlt;
    this.faSignInAlt = faSignInAlt;
  }
}
