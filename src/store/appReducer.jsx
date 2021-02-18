import {
  SHOW_MESSAGE,
  SHOW_MODAL_CREATE,
  SHOW_MODAL_EDIT,
} from './types';

const initialState = {
  showMesage: false,
  showModalCreate: false,
  showModalEdit: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {
        ...state,
        showMessage: action.payload,
      };
    case SHOW_MODAL_CREATE:
      return {
        ...state,
        showModalCreate: action.payload,
      };
    case SHOW_MODAL_EDIT:
      return {
        ...state,
        showModalEdit: action.payload,
      };

    default:
      return state;
  }
};
