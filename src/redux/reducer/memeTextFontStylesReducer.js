import {
  Add_TEXT_COLOR,
  Add_TEXT_DIMENSIONS,
  Add_TEXT_FONT_STYLES,
} from '../actions/types';

const INITIAL_STATE = {
  font: {
    family: 'Impact',
    size: '22px',
    weight: 'normal',
    style: 'normal',
  },
  dimension: {
    width: 210,
    height: 36,
  },
  color: {
    text: '#e9f728',
    background: 'transparent',
  },
};

const memeTextFontStylesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Add_TEXT_FONT_STYLES:
      return { ...state, font: { ...state.font, ...action.payload } };
    case Add_TEXT_DIMENSIONS:
      return {
        ...state,
        dimension: { ...state.dimension, ...action.payload },
      };
    case Add_TEXT_COLOR:
      return {
        ...state,
        color: { ...state.color, ...action.payload },
      };
    default:
      return state;
  }
};

export default memeTextFontStylesReducer;
