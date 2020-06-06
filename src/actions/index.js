import axios from 'axios';

const ROOT_URL = 'http://localhost:9090/api';
// const ROOT_URL = 'https://workout-playlists-final-proj.herokuapp.com/api';

export const ActionTypes = {
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  EXIST_USER: 'EXIST_USER',
  FETCH_PLAYLIST: 'FETCH_PLAYLIST',
  FETCH_PLAYLIST_ERROR: 'FETCH_PLAYLIST_ERROR',
  FETCH_PLAYLISTS: 'FETCH_PLAYLISTS',
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

export function userExists() {
  return (dispatch) => {
    dispatch({ type: ActionTypes.EXIST_USER });
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
  console.log('user is updated to', user);
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

export function createPlaylist(playlist) {
  console.log('playlist creating to', playlist);
  return (dispatch) => {
    axios.post(`${ROOT_URL}/playlist/`, playlist)
      .then((response) => {
        if (response.error) {
          dispatch({ type: ActionTypes.FETCH_PLAYLIST_ERROR, payload: response.data });
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
        console.log('saved playlist to spotify');
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
  console.log('into fetch playlists FE', id);
  return (dispatch) => {
    axios.get(`${ROOT_URL}/playlists/${id}`)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_PLAYLISTS, payload: response.data });
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

export function nextMedia(accessToken) {
  return () => {
    axios.post(`${ROOT_URL}/next/${accessToken}/`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
