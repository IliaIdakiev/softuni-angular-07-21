import { createReducer, on } from "@ngrx/store";

export interface IUserListState {
  readonly users: any[] | null;
}

const initialUserListState: IUserListState = {
  users: null,
};

export const userListReducer = createReducer(
  initialUserListState,
);


export interface IUserDetailState {
  readonly user: any | null;
}

const initialUserDetailState: IUserDetailState = {
  user: null,
};

export const userDetailReducer = createReducer(
  initialUserDetailState,
);