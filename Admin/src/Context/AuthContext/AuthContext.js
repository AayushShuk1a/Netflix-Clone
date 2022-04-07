import { createContext, useReducer } from "react";
import AuthReducers from "./AuthReducer";

const inititialstate = { user: null, isfetching: false, error: false };

export const AuthContext = createContext(inititialstate);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducers, inititialstate);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isfetching: state.isfetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
