import { getUsers, getUserPosts } from '../api/users';
import { ADD_NEW_POST, FETCH_USERS, FETCH_USER_POSTS, SET_USER_ID, SET_USER_POST } from './types';

export const fetchUsers = () => {
  return async dispatch => {
    const users = await getUsers();

    dispatch({ type: FETCH_USERS, payload: users })
  }
}

export const setUserId = (userId) => ({
  type: SET_USER_ID,
  payload: userId,
})

export const fetchUserPosts = (userId) => {
  return async dispatch => {
    const userPosts = await getUserPosts(userId);

    dispatch({ type: FETCH_USER_POSTS, payload: userPosts })
  }
}

export const selectPost = (postId) => {
  return {
    type: SET_USER_POST,
    payload: postId,
  }
}