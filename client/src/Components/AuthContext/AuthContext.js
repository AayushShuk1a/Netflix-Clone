import { createContext, useReducer } from "react";
import AuthReducers from "./AuthReducer";
import { useEffect } from "react";

const inititialstate = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isfetching: false,
  error: false,
};

export const AuthContext = createContext(inititialstate);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducers, inititialstate);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

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
