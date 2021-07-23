import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'softuni-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private userService: UserService) { }

  register(): void {
  }

}
