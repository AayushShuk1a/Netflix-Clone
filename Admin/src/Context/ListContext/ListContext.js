import { createContext, useReducer } from "react";
import ListReducers from "./ListReducer";

const INITIAL_STATE = { lists: [], isfetching: false, error: false };

export const ListContext = createContext(INITIAL_STATE);

export const ListContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ListReducers, INITIAL_STATE);

  return (
    <ListContext.Provider
      value={{
        lists: state.lists,
        isfetching: state.isfetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
