import axios from "axios";
import { Failure, loginStart, loginSuccess } from "./AuthActions";

const url = "http://localhost:8800/";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${url}api/auth/login`, user);
    console.log(res.data);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(Failure());
  }
};
