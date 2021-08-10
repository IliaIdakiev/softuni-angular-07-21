import { Component } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { merge, of, Subject, Subscription } from 'rxjs';
import { mapTo, takeUntil } from 'rxjs/operators';
import { clearAppState, incrementCounter, loadUsers, loadUsersFailure, loadUsersSuccess, setValue } from './+store/actions';
import { selectGlobalCounter, selectGlobalUsers, selectGlobalValue } from './+store/selectors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  counter$ = this.store.select(selectGlobalCounter);
  value$ = this.store.select(selectGlobalValue);
  users$ = this.store.select(selectGlobalUsers);

  subscription = new Subscription();
  // killSubscriptions = new Subject();


  isLoadingUsers$ = merge(
    this.actions$.pipe(ofType(loadUsers), mapTo(true)),
    this.actions$.pipe(ofType(loadUsersSuccess), mapTo(false)),
    this.actions$.pipe(ofType(loadUsersFailure), mapTo(false)),
    of(false)
  );

  constructor(
    private store: Store<any>,
    private actions$: Actions
  ) {

    this.subscription.add(
      this.users$.pipe(
        // takeUntil(this.killSubscriptions)
      ).subscribe(console.log)
    );

    this.subscription.add(
      this.counter$.pipe(
        // takeUntil(this.killSubscriptions)
      ).subscribe(console.log)
    );

  }

  incrementCounter(): void {
    this.store.dispatch(incrementCounter());
  }

  setValue(valueInput: HTMLInputElement) {
    this.store.dispatch(setValue({ value: valueInput.value }));
    valueInput.value = '';
  }

  loadUsers(): void {
    this.store.dispatch(loadUsers())
  }

  resetState(): void {
    this.store.dispatch(clearAppState());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    // this.killSubscriptions.next();
    // this.killSubscriptions.complete();
  }

}
