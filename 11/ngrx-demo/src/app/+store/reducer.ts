import { createReducer, on } from "@ngrx/store";
import { clearGlobalState, incrementCounter, loadUsersSuccess, setValue } from "./actions";

export interface IGlobalState {
  readonly counter: number;
  readonly value: any;
  readonly users: any[] | null;
}

const initialState: IGlobalState = {
  counter: 0,
  value: null,
  users: null,
};

export const globalReducer = createReducer(
  initialState,
  on(incrementCounter, (state) => ({ ...state, counter: state.counter + 1 })),
  on(setValue, (state, { value }) => ({ ...state, value })),
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users })),
  on(clearGlobalState, () => initialState)
);