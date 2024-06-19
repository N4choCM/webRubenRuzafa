import React, { createContext, useReducer } from "react";
import { appStateReducer } from "./AppReducer";

export const AppStateContext = createContext();

export const initialState = {
  isDarkMode: false,
  isLoggedIn: false,
};

export const Action = {
  TOGGLE_DARK_MODE: "TOGGLE_DARK_MODE",
  LOGIN: "LOGIN",
};

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};