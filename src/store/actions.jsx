import { getUsers, getUserPosts, getPostComments } from '../api/api';
import {
  FETCH_POST_COMMENTS,
  FETCH_USERS,
  FETCH_USER_POSTS,
  SET_USER_ID,
  SET_USER_POST,
  SHOW_MESSAGE,
  SHOW_MODAL_CREATE,
  SHOW_MODAL_EDIT,
} from './types';

export const fetchUsers = () => async(dispatch) => {
  const users = await getUsers();

  dispatch({ type: FETCH_USERS, payload: users });
};

export const setUserId = userId => ({
  type: SET_USER_ID,
  payload: userId,
});

export const fetchUserPosts = userId => async(dispatch) => {
  const userPosts = await getUserPosts(userId);

  dispatch({ type: FETCH_USER_POSTS, payload: userPosts });
};

export const selectPost = selectedPost => ({
  type: SET_USER_POST,
  payload: selectedPost,
});

export const fetchPostComments = postId => async(dispatch) => {
  const postComments = await getPostComments(postId);

  dispatch({ type: FETCH_POST_COMMENTS, payload: postComments });
};

export const showMessage = status => ({
  type: SHOW_MESSAGE,
  payload: status,
});

export const showModalCreate = status => ({
  type: SHOW_MODAL_CREATE,
  payload: status,
});

export const showModalEdit = status => ({
  type: SHOW_MODAL_EDIT,
  payload: status,
});
