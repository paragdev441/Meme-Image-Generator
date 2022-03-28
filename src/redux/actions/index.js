import {
  ADD_RANDOM_IMAGE,
  Add_TEXT,
  Add_TEXT_COLOR,
  Add_TEXT_DIMENSIONS,
  Add_TEXT_FONT_STYLES,
} from './types';

const addRandomMeme = imageUrl => {
  return {
    type: ADD_RANDOM_IMAGE,
    payload: imageUrl,
  };
};

const addMemeText = text => {
  return {
    type: Add_TEXT,
    payload: text,
  };
};

const addFontStyles = fontStylesObj => {
  return {
    type: Add_TEXT_FONT_STYLES,
    payload: fontStylesObj,
  };
};

const addDimensions = dimensionsObj => {
  return {
    type: Add_TEXT_DIMENSIONS,
    payload: dimensionsObj,
  };
};

const addColor = color => {
  return {
    type: Add_TEXT_COLOR,
    payload: color,
  };
};

export { addRandomMeme, addMemeText, addFontStyles, addDimensions, addColor };
