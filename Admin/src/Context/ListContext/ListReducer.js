const ListReducers = (state, action) => {
  switch (action.type) {
    case "GET_LIST_START":
      return { lists: [], isfetching: true, error: false };

    case "GET_LIST_SUCCESS":
      return { lists: action.payload, isfetching: false, error: false };

    case "GET_LIST_FAILURE":
      return { lists: [], isfetching: false, error: true };

    case "CREATE_LIST_START":
      return { ...state, isfetching: true, error: false };

    case "CREATE_LIST_SUCCESS":
      return {
        lists: [...state.lists, action.payload],
        isfetching: false,
        error: false,
      };

    case "CREATE_LIST_FAILURE":
      return { ...state, isfetching: false, error: true };

    case "DELETE_LIST_SUCCESS":
      return {
        lists: state.lists.filter((item) => item._id !== action.payload),
        isfetching: false,
        error: false,
      };

    case "DELETE_LIST_FAILURE":
      return { ...state, isfetching: false, error: true };

    default:
      return { ...state };
  }
};

export default ListReducers;
