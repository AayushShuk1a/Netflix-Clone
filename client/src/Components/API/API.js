import axios from "axios";
const url = "http://localhost:8800/";

//Random List

export const RandomList = async (type, genre) => {
  try {
    console.log(type);
    const res = await axios.get(
      `${url}api/list${type ? "?type=" + type : ""}${
        genre ? "&genre=" + genre : ""
      }`,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

//get Single Movie
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

//Get Random Movie/Series
export const RandomContent = async (type) => {
  try {
    const res = await axios.get(
      `${url}api/movie/random?type=${type ? "?type=" + type : ""}`,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    return res.data[0];
  } catch (err) {
    console.log(err);
  }
};

//RegisterPerson

export const RegisterPerson = async (user) => {
  try {
    const person = await axios.post(`${url}api/auth/register`, user);
    console.log(person);
  } catch (err) {
    console.log(err);
  }
};
