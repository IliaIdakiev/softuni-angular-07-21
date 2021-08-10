import { createSelector, createFeatureSelector } from "@ngrx/store";
import { IUserState } from ".";

const userModuleSelector = createFeatureSelector<IUserState>('user');

const selectUserList = createSelector(
  userModuleSelector,
  state => state.list
);

const selectUserDetail = createSelector(
  userModuleSelector,
  state => state.detail
);

export const selectUserListUsers = createSelector(selectUserList, s => s.users);
export const selectUserDetailUser = createSelector(selectUserDetail, s => s.user);