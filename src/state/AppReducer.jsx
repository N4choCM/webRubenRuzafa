import { Action } from './constants';

export const appStateReducer = (state, action) => {
  switch (action.type) {
    case Action.TOGGLE_DARK_MODE:
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};
