import axios from "axios";

const url = "http://localhost:8800/";

export const GetStats = async () => {
  try {
    const res = await axios.get(`${url}api/stats`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const GetNewUsers = async () => {
  try {
    const res = await axios.get(`${url}api/users?new=5`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getMovie = async (id) => {
  try {
    const res = await axios.get(`${url}api/movie/find/${id}`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const UpdateMovie = async (movie) => {
  try {
    const res = axios.put(`${url}api/movie/${movie._id}`, movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
