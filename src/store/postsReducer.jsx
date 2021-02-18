import { FETCH_USER_POSTS, SET_USER_POST } from './types';

const initialState = {
  posts: [],
  selectedPost: null,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case SET_USER_POST:
      return {
        ...state,
        selectedPost: action.payload,
      };

    default:
      return state;
  }
};
