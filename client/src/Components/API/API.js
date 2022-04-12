import axios from "axios";
const url = "http://localhost:8800/";
const token =
  "bearerBearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTAwYjNkMjYwYTRkNTM4YzI4ZDcxNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTc5MjA4MSwiZXhwIjoxNjUwMjI0MDgxfQ.7PrgCO6mikutpHzMAMhkHteXLTtc0DegGgaZum8n5mA";

//Random List

export const RandomList = async (type, genre) => {
  try {
    const res = await axios.get(
      `${url}api/list${type ? "?type=" + type : ""}${
        genre ? "&genre=" + genre : ""
      }`,
      {
        headers: {
          token: token,
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
        token: token,
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
    const res = await axios.get(`${url}api/movie/random?type=${type}`, {
      headers: {
        token: token,
      },
    });
    return res.data[0];
  } catch (err) {
    console.log(err);
  }
};
