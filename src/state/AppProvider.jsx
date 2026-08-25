import { createContext, useReducer } from 'react';
import { appStateReducer } from './AppReducer';
import { initialState } from './constants';

export const AppStateContext = createContext();

/* eslint-disable react/prop-types */
export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
