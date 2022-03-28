import { Add_TEXT } from '../actions/types';

const INITIAL_STATE = {
  text: '',
};

const memeTextReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Add_TEXT:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

export default memeTextReducer;
