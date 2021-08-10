import { ActionReducerMap } from "@ngrx/store";
import { IUserDetailState, IUserListState, userDetailReducer, userListReducer } from "./reducers";

export interface IUserState {
  readonly list: IUserListState;
  readonly detail: IUserDetailState;
}

export const reducers: ActionReducerMap<IUserState> = {
  list: userListReducer,
  detail: userDetailReducer
};

