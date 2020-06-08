import axios from 'axios';

const ROOT_URL = 'https://workout-playlists-final-proj.herokuapp.com/api';

export const ActionTypes = {
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  EXIST_USER: 'EXIST_USER',
  FETCH_PLAYLIST: 'FETCH_PLAYLIST',
  FETCH_PLAYLIST_ERROR: 'FETCH_PLAYLIST_ERROR',
  FETCH_PLAYLISTS: 'FETCH_PLAYLISTS',
  FETCH_PLAYBACK: 'FETCH_PLAYBACK',
  NONE_PLAYLIST: 'NONE_PLAYLIST',
  ERASE_PLAYLIST_ERROR: 'ERASE_PLAYLIST_ERROR',
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

export function userExists() {
  return (dispatch) => {
    dispatch({ type: ActionTypes.EXIST_USER });
  };
}

export function eraseError() {
  console.log('calling erase error');
  return (dispatch) => {
    dispatch({ type: ActionTypes.ERASE_PLAYLIST_ERROR });
  };
}

export function fetchUser(spotifyID) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/getuser/${spotifyID}/`)
      .then((response) => {
        dispatch({ type: ActionTypes.AUTH_USER, payload: response.data });
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
        dispatch({ type: ActionTypes.AUTH_USER, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function updatePlaylist(id, playlist) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/playlists/${id}/`, playlist)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_PLAYLIST, payload: response.data });
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
        if (response.data.error) {
          dispatch({ type: ActionTypes.FETCH_PLAYLIST_ERROR });
        } else {
          dispatch({ type: ActionTypes.FETCH_PLAYLIST, payload: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function savePlaylist(accessToken, spotifyID, playlist) {
  return () => {
    axios.post(`${ROOT_URL}/save/${accessToken}`, { spotifyID, playlist })
      .then(() => {
        // console.log('saved playlist to spotify');
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function fetchPlaylist(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/playlist/${id}/`)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_PLAYLIST, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function deletePlaylist(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/playlist/${id}/`)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_PLAYLIST, payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function fetchPlaylists(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/playlists/${id}`)
      .then((response) => {
        console.log(response.data.length);
        if (response.data.length !== 0) {
          dispatch({ type: ActionTypes.FETCH_PLAYLISTS, payload: response.data });
        } else {
          console.log('dispatching none');
          dispatch({ type: ActionTypes.NONE_PLAYLIST });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
