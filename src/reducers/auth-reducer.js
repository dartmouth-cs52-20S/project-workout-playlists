import { ActionTypes } from '../actions';


const initialState = {
  authenticated: false,
  newUser: true,
  user: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return {
        ...state, authenticated: true, user: action.payload,
      };
    case ActionTypes.EXIST_USER:
      return {
        ...state, newUser: false,
      };
    case ActionTypes.DEAUTH_USER:
      return { ...state, authenticated: false };
    case ActionTypes.AUTH_ERROR:
      return { ...state, authenticated: false };
    default:
      return state;
  }
};

export default authReducer;
