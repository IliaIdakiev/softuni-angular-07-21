import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.scss']
})
export class WelcomeMessageComponent {

  @Input() isLogged!: boolean;

  constructor() { }

}
