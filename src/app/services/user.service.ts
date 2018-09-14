import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class UserService{
  public url: string;

  constructor(private _http: Http){
    this.url = GLOBAL.url;
  }

  register(){
    return "Texto desde servicio Register";
  }

  signup(user_to_login, gettoken = null){
    return "Texto desde servicio Login";
  }
}


//.pipe(map(res => res.json()));
