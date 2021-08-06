import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  errorMessage: string;

  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    this.errorMessage = activatedRoute.snapshot.queryParams.error;
  }

  goToMainPage(): void {
    this.router.navigate(['/']);
  }
}
