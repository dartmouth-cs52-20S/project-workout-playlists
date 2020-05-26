import { ActionTypes } from '../actions';


const initialState = {
  authenticated: false,
  accessToken: '',
  spotifyID: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return {
        ...state, authenticated: true, accessToken: action.payload.accessToken, spotifyID: action.payload.spotifyID,
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
