import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { incrementCounter, loadUsers, loadUsersCancel, loadUsersFailure, loadUsersSuccess, setValue } from "./actions";
import { catchError, map, switchMap, takeUntil } from 'rxjs/operators';
import { UserService } from "../user.service";


@Injectable()
export class GlobalEffects {

  increment = createEffect(() => this.actions$.pipe(
    ofType(setValue), //same as -> filter(action => action.type === setValue.type)
    map(action => {
      console.log(action);
      return incrementCounter();
    })
  ));

  loadUsers = createEffect(() => this.actions$.pipe(
    ofType(loadUsers),
    switchMap(
      () => this.userService.loadUsers().pipe(
        takeUntil(this.actions$.pipe(ofType(loadUsersCancel))),
        map(users => loadUsersSuccess({ users })),
        catchError(error => [loadUsersFailure({ error })])
      )
    )
  ))

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }
}