import axios from "axios";
import {
  CreateMovieFailure,
  CreateMoviesStart,
  CreateMovieSuccess,
  DeleteMovieFailure,
  DeleteMoviesStart,
  DeleteMovieSuccess,
  GetMovieFailure,
  GetMoviesStart,
  GetMovieSuccess,
} from "./MovieActions";
const url = "https://netflix-c1one.herokuapp.com/";

export const getMovies = async (dispatch) => {
  dispatch(GetMoviesStart());
  try {
    const res = await axios.get(`${url}api/movie`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    dispatch(GetMovieSuccess(res.data));
  } catch (err) {
    dispatch(GetMovieFailure());
  }
};

export const DeleteMovie = async (id, dispatch) => {
  dispatch(DeleteMoviesStart());
  try {
    await axios.delete(`${url}api/movie/${id}`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(DeleteMovieSuccess(id));
  } catch (err) {
    dispatch(DeleteMovieFailure());
  }
};

export const CreateMovie = async (movie, dispatch) => {
  dispatch(CreateMoviesStart());
  try {
    const res = await axios.post(`${url}api/movie`, movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(CreateMovieSuccess(res.data));
  } catch (err) {
    dispatch(CreateMovieFailure());
  }
};
