import { ActionTypes } from '../actions';


const initialState = {
  playlist: '',
};

const playlistReducer = (state = initialState, action) => {
    console.log('in reducer: ', action.payload);
    switch (action.type) {
    case ActionTypes.FETCH_PLAYLIST:
      return {
        ...state, playlist: action.payload,
      };
    default:
      return state;
  }
};

export default playlistReducer;
