import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentService } from './content.service';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ThemeModule } from './theme/theme.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    UserModule,
    ThemeModule,
    FontAwesomeModule
  ],
  providers: [
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
