import { Component } from '@angular/core';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  constructor(private userService: UserService) { }

}
