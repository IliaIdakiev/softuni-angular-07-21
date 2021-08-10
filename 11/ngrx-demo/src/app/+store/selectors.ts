import { createSelector } from "@ngrx/store";
import { IState } from ".";

export const selectGlobal = (state: IState) => state.global;

export const selectGlobalCounter = createSelector(
  selectGlobal,
  state => state.counter
);

export const selectGlobalValue = createSelector(
  selectGlobal,
  state => state.value
);

export const selectGlobalUsers = createSelector(
  selectGlobal,
  state => state.users
);
