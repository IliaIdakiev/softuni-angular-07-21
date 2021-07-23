import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';

@Component({
  selector: 'softuni-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  icons = {
    faEnvelope,
    faLock
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  login(email: string, password: string): void {
    this.userService.login(email, password)
    const redirectUrl = this.activatedRoute.snapshot.queryParams.redirectUrl || '/';
    this.router.navigate([redirectUrl]);
  }
}
