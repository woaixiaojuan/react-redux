import axios from 'axios';

//uasage examples:
// import * as user from './userActions';

// user.setUserName('lyn');
// import { setUserName } from './userActions'
// setUserName('lyn');

//thunk need return function
export function fetchPosts() {
  return function (dispatch) {
    dispatch({
      type: 'FETCH_POSTS_PENDING',
    });
    axios.get('/api/posts')
    .then((res) => {
      dispatch({
        type: 'FETCH_POSTS_FULFILLED',
        payload: res.data.data,
      })
    })
    .catch((err) => {
      dispatch({
        type: 'FETCH_POSTS_REJECTED',
        payload: err,
      });
    })
  }
}

export function addPost(id, text) {
  return {
    type: 'ADD_POST',
    payload: {
      id,
      text,
    },
  }
}
export function updatePost(id, text) {
  return {
    type: 'UPDATE_POST',
    payload: {
      id,
      text,
    },
  }
}

export function deletePost(id) {
  return {
    type: 'DELETE_POST',
    payload: id,
  }
}
