import { ActionTypes } from '../actions';


const initialState = {
  user: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER:
      return {
        ...state, user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
