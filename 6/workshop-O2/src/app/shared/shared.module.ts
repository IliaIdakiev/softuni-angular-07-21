import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    WelcomeMessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    WelcomeMessageComponent
  ]
})
export class SharedModule { }