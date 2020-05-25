import axios from 'axios';

const ROOT_URL = 'http://localhost:9090/api';

export const ActionTypes = {
    FETCH_USER: 'FETCH_USER',
    AUTH_USER: 'AUTH_USER',
    DEAUTH_USER: 'DEAUTH_USER',
    AUTH_ERROR: 'AUTH_ERROR',
};

export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}


  export function signupUser( newUser ) {
    console.log(newUser);
    return (dispatch) => {
       axios.post(`${ROOT_URL}/newuser`, newUser)
        .then((response) => {
          dispatch({ type: ActionTypes.AUTH_USER, payload: newUser.spotifyID  });
        //   history.push('/');
        })
        .catch((error) => { 
          console.log('error');
          // dispatch(authError(`Sign up Failed: ${error.response.data}`)); 
        });
    };
  }


  export function fetchUser(spotifyID) {
        return (dispatch) => {
          axios.get(`${ROOT_URL}/getuser/${spotifyID}/`)
            .then((response) => {
              console.log(response);
              // once we are done fetching we can dispatch a redux action with the response data
              dispatch({ type: ActionTypes.FETCH_USER});
            })
            .catch((error) => {
              console.log(error);
            });
        };
     }