import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { RouterModule } from '@angular/router';
import { CustomValidatorDirective } from './custom-validator.directive';

@NgModule({
  declarations: [
    WelcomeMessageComponent,
    CustomValidatorDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    WelcomeMessageComponent,
    CustomValidatorDirective
  ]
})
export class SharedModule { }