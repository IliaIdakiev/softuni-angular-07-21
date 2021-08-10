import { createAction, props } from '@ngrx/store';

const namespace = '[GLOBAL]';

export const incrementCounter = createAction(
  `${namespace} increment counter`
);

export const setValue = createAction(
  `${namespace} set value`,
  props<{ value: string }>()
);

export const loadUsers = createAction(
  `${namespace} load users`,
);

export const loadUsersSuccess = createAction(
  `${namespace} load users success`,
  props<{ users: any[] }>()
);

export const loadUsersFailure = createAction(
  `${namespace} load users failure`,
  props<{ error: Error }>()
);

export const loadUsersCancel = createAction(
  `${namespace} load users cancel`,
);

export const clearGlobalState = createAction(
  `${namespace} clear global state`,
);

export const clearAppState = createAction(
  `${namespace} clear app state`,
);