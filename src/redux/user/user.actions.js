// setCurrentUser => Action Creator
// {type: '***', payload: *** } => Action
export const setCurrentUser = (user) => ({
  type: 'SET_CURRENT_USER',
  payload: user,
});
