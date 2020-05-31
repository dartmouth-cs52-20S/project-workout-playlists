import { ActionTypes } from '../actions';

const initialState = {
  playback: '',
};

const playbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PLAYBACK:
      return {
        ...state, playlist: action.payload,
      };
    default:
      return state;
  }
};

export default playbackReducer;
