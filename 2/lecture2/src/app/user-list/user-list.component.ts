import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() userArray: IUser[] = [];
  @Output() addUser = new EventEmitter<IUser>();

  constructor() {
    console.log(this.userArray);
    debugger;
  }

  ngOnInit(): void {
    console.log(this.userArray);
    debugger;
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    console.log(simpleChanges);
    debugger;
  };


  addNewUser(userNameInput: HTMLInputElement, userAgeInput: HTMLInputElement): void {
    const { value: name } = userNameInput;
    const { valueAsNumber: age } = userAgeInput;

    this.addUser.emit({ name, age });

    userNameInput.value = '';
    userAgeInput.value = '';
  }
}
