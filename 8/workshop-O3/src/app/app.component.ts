import { Component } from '@angular/core';
import { ContentService } from './content.service';
import { IPost } from './shared/interfaces';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  recentPosts: IPost[] | undefined;

  toggleTemplate = false;

  get isAuthenticating(): boolean {
    return this.userService.user === undefined;
  }

  constructor(
    private userService: UserService
  ) {
    this.userService.getProfileInfo().subscribe({
      error: () => {
        this.userService.user = null;
      }
    })
  }
}
