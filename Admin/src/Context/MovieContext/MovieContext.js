import { createContext, useReducer } from "react";
import MovieReducers from "./MovieReducer";

const INITIAL_STATE = { movies: [], isfetching: false, error: false };

export const MovieContext = createContext(INITIAL_STATE);

export const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MovieReducers, INITIAL_STATE);

  console.log("Hello");
  console.log(state.isfetching);
  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        isfetching: state.isfetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
