import { combineReducers } from 'redux';
import memeImageReducer from './memeImageReducer';
import memeTextFontStylesReducer from './memeTextFontStylesReducer';
import memeTextReducer from './memeTextReducer';

const rootReducer = combineReducers({
  memeImage: memeImageReducer,
  memeText: memeTextReducer,
  memeFont: memeTextFontStylesReducer,
});

export default rootReducer;
