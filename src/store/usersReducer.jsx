import { FETCH_USERS, SET_USER_ID } from './types';

const initialState = {
  users: [],
  userId: null,
}

export const usersReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      }
    case SET_USER_ID:
      return {
        ...state,
        userId: action.payload,
      }
    

    default:
      return state;
  }
}