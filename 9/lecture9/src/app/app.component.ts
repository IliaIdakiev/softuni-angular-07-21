import { Component } from '@angular/core';;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isActive = false;

  data = [{ test: 99999 }, { test: 2 }, { test: 3 }];

  addItem() {
    this.data.push({ test: 4 });
  }

  activateHandler(data: any): void {
    console.log(data);
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }
}
