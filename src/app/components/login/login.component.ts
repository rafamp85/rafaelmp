import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [UserService]
})

export class LoginComponent implements OnInit {

  public title:string;
  public user: User;

  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _userService: UserService
    ){
    this.title = 'Login';
    this.user = new User('', '', '', '', '', 'ROLE_USER', '');
  }

  ngOnInit(){
    console.log('Login cargado!!!');
  }

  onSubmit(){
    console.log(this.user);
    console.log(this._userService.signup(this.user));
  }

}
