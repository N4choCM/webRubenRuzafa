import { Action } from './AppProvider';

export const appStateReducer = (state, action) => {
  switch (action.type) {
    case Action.TOGGLE_DARK_MODE:
      return { ...state, isDarkMode: !state.isDarkMode };
    case Action.LOGIN:
      return { ...state, isLoggedIn: true };
    default:
      return state;
  }
};