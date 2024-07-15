import { Action } from './AppProvider';

export const appStateReducer = (state, action) => {
  switch (action.type) {
    case Action.TOGGLE_DARK_MODE:
      return { ...state, isDarkMode: !state.isDarkMode };
    case Action.LOGIN:
      return { ...state, isLoggedIn: true };
    case Action.TOGGLE_COACH_SCREEN:
      return { ...state, isCoachScreen: action.payload };
    default:
      return state;
  }
};