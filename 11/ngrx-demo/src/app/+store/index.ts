import { ActionReducerMap } from "@ngrx/store";
import { globalReducer, IGlobalState } from "./reducer";

export interface IState {
  readonly global: IGlobalState;
}

export const reducers: ActionReducerMap<IState> = {
  global: globalReducer
}
