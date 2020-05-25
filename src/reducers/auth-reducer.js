import { ActionTypes } from '../actions';


const initialState = {
    authenticated: false,
    spotifyID: '',
};

const authReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { ...state, authenticated: true, spotifyID: action.payload };
    case ActionTypes.DEAUTH_USER:
      return { ...state, authenticated: false };
    case ActionTypes.AUTH_ERROR:
      return { ...state, authenticated: false };
    default:
      return state;
  }
};

export default authReducer;
