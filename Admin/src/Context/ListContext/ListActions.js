export const GetListsStart = () => ({
  type: "GET_LIST_START",
});

export const GetListsSuccess = (list) => ({
  type: "GET_LIST_SUCCESS",
  payload: list,
});

export const GetListsFailure = () => ({
  type: "GET_LIST_FAILIURE",
});

export const CreateListsStart = () => ({
  type: "CREATE_LIST_START",
});

export const CreateListsSuccess = (list) => ({
  type: "CREATE_LIST_SUCCESS",
  payload: list,
});

export const CreateListsFailure = () => ({
  type: "CREATE_LIST_FAILIURE",
});

export const DeleteListsStart = () => ({
  type: "DELETE_LIST_START",
});

export const DeleteListsSuccess = (list) => ({
  type: "DELETE_LIST_SUCCESS",
  payload: list,
});

export const DeleteListsFailure = () => ({
  type: "DELETE_LIST_FAILIURE",
});
