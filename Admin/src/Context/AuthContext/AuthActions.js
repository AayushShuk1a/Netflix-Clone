export const loginStart = () => ({
  type: "LOGIN_START",
});

export const loginSuccess = () => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const Failure = () => ({
  type: "Failure",
});
