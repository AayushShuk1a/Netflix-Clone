import axios from "axios";
import {
  CreateListsFailure,
  CreateListsStart,
  CreateListsSuccess,
  DeleteListsFailure,
  DeleteListsStart,
  DeleteListsSuccess,
  GetListsFailure,
  GetListsStart,
  GetListsSuccess,
} from "./ListActions";

const url = "https://netflix-c1one.herokuapp.com/";

export const getLists = async (dispatch) => {
  dispatch(GetListsStart());
  try {
    const res = await axios.get(`${url}api/list`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    dispatch(GetListsSuccess(res.data));
  } catch (err) {
    dispatch(GetListsFailure());
  }
};

export const DeleteList = async (id, dispatch) => {
  dispatch(DeleteListsStart());
  try {
    await axios.delete(`${url}api/list/${id}`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(DeleteListsSuccess(id));
  } catch (err) {
    dispatch(DeleteListsFailure());
  }
};

export const CreateList = async (list, dispatch) => {
  dispatch(CreateListsStart());
  try {
    const res = await axios.post(`${url}api/list`, list, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(CreateListsSuccess(res.data));
  } catch (err) {
    dispatch(CreateListsFailure());
  }
};
