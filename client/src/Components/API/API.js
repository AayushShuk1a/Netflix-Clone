import axios from "axios";
const url = "http://localhost:8800/";

//Random List

export const RandomList = async (type, genre) => {
  try {
    const res = await axios.get(
      `${url}api/list${type ? "?type=" + type : ""}${
        genre ? "&genre=" + genre : ""
      }`,
      {
        headers: {
          token:
            "bearerBearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGNhOGM3NTA3MTUwMTI3NjM5NmI3NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTI3MzcwNSwiZXhwIjoxNjQ5NzA1NzA1fQ.cgS9Iir-wVg-vKa66wgtT6_TszBL_AiULQME8530qfo",
        },
      }
    );

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
