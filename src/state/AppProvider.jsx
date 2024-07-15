import React, { createContext, useReducer } from "react";
import { appStateReducer } from "./AppReducer";

export const AppStateContext = createContext();

export const initialState = {
  isDarkMode: false,
  isLoggedIn: false,
  isCoachScreen: false,
};

export const Action = {
  TOGGLE_DARK_MODE: "TOGGLE_DARK_MODE",
  LOGIN: "LOGIN",
  TOGGLE_COACH_SCREEN: "TOGGLE_COACH_SCREEN",
};

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};