import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/content.service';

@Component({
  selector: 'softuni-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.scss']
})
export class NewThemeComponent {

  constructor(
    private contentService: ContentService,
    private router: Router
  ) { }

  createTheme(form: NgForm): void {
    if (form.invalid) { return; }
    this.contentService.saveTheme(form.value).subscribe({
      next: () => {
        this.router.navigate(['/themes']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
