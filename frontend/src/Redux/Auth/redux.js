import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "./actionTypes";
const inital_state = {
  loading: false,
  error: false,
  isAuth: [],
};

const reducer = (state = inital_state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: false };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        isAuth: payload,
      };
    case LOGIN_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
export { reducer };
