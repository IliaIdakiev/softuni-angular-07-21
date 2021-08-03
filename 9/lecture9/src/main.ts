import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



// class MyEventEmitter<T> {

//   subscriptions: ((data: T) => void)[] = [];

//   subscribe(fn: (data: T) => void): void {
//     this.subscriptions.push(fn);
//   }

//   emit(data: T): void {
//     this.subscriptions.forEach(fn => fn(data));
//   }
// }

// const emitter = new MyEventEmitter();

// emitter.subscribe(console.log);

// setTimeout(function () {
//   emitter.emit(100);
// }, 1000);