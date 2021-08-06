import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'softuni-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  inUpdateMode = false;

  isLoading = true;

  get user() {
    return this.userService.user;
  }

  constructor(private userService: UserService) {
    this.userService.getProfileInfo().subscribe(() => {
      this.isLoading = false;
    });
  }

  updateProfile(form: NgForm): void {
    if (form.invalid) { return; }
    this.userService.updateProfile(form.value).subscribe({
      next: () => {
        this.inUpdateMode = false;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
