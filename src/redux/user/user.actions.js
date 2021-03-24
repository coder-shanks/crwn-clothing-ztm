import { UserActionTypes } from './user.types';
// setCurrentUser => Action Creator
// {type: '***', payload: *** } => Action
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
