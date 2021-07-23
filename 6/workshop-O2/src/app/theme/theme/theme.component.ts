import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/content.service';
import { ITheme } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {

  theme: ITheme | undefined;

  constructor(
    private contentService: ContentService,
    private activatedRoute: ActivatedRoute
  ) {
    this.fetchTheme();
  }

  fetchTheme(): void {
    this.theme = undefined;
    const id = this.activatedRoute.snapshot.params.themeId;
    this.contentService.loadTheme(id).subscribe(theme => this.theme = theme);
  }
}
