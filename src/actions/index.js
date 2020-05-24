import axios from 'axios';

const ROOT_URL = 'http://localhost:9090/api';

export const ActionTypes = {

    AUTH_USER: 'AUTH_USER',
    DEAUTH_USER: 'DEAUTH_USER',
    AUTH_ERROR: 'AUTH_ERROR',
};


  export function signinUser( newUser , history) {
    return (dispatch) => {
      axios.post(`${ROOT_URL}/newuser`, newUser)
        .then((response) => {
          dispatch({ type: ActionTypes.AUTH_USER });
        //   history.push('/');
        })
        .catch((error) => { dispatch(authError(`Sign In Failed: ${error.response.data}`)); });
    };
  }