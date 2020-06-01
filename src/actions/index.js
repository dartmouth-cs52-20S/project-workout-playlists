import axios from 'axios';

const ROOT_URL = 'http://localhost:9090/api';
// const ROOT_URL = 'https://workout-playlists-final-proj.herokuapp.com/api';

export const ActionTypes = {
  FETCH_USER: 'FETCH_USER',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  FETCH_PLAYLIST: 'FETCH_PLAYLIST',
  FETCH_PLAYBACK: 'FETCH_PLAYBACK',
};

export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function authenticate() {
  return (dispatch) => {
    dispatch({ type: ActionTypes.AUTH_USER });
  };
}

export function fetchUser(spotifyID) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/getuser/${spotifyID}/`)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_USER, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function updateUser(user) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/update/${user.spotifyID}`, user)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_USER, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function createPlaylist(playlist) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/playlist/`, playlist)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_PLAYLIST, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function fetchPlaylist(ID) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/playlist/${ID}/`)
      .then((response) => {
        console.log(response);
        dispatch({ type: ActionTypes.FETCH_PLAYLIST, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function fetchPlayback(accessToken) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/playback/${accessToken}/`)
      .then((response) => {
        console.log(response.data);
        dispatch({ type: ActionTypes.FETCH_PLAYBACK, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function playMedia(accessToken, uris) {
  return () => {
    console.log('calling play', accessToken);
    axios.put(`${ROOT_URL}/play/${accessToken}/`, uris)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function pauseMedia(accessToken) {
  return () => {
    axios.put(`${ROOT_URL}/pause/${accessToken}/`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
