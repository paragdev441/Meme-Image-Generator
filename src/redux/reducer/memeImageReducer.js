import { ADD_RANDOM_IMAGE } from '../actions/types';

const INITIAL_STATE = {
  imageURL: 'https://i.imgflip.com/1bij.jpg',
};

const memeImageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_RANDOM_IMAGE:
      return { ...state, imageURL: action.payload };
    default:
      return state;
  }
};

export default memeImageReducer;
