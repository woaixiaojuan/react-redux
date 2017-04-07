import { combineReducers } from 'redux';

import post from './postReducer';
import user from './userReducer';
import table from './tableReducer';
import adType from './adReducer';

export default combineReducers({
  post,
  user,
  table,
  adType,
})
