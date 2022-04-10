const AuthReducers = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { user: null, isfetching: true, error: false };

    case "LOGIN_SUCCESS":
      return { user: action.payload, isfetching: false, error: false };

    case "FAILURE":
      return { user: null, isfetching: false, error: true };

    case "LOGOUT":
      return { user: null, isfetching: false, error: false };

    default:
      return { ...state };
  }
};

export default AuthReducers;
