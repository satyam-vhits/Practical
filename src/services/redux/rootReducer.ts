import {combineReducers} from 'redux';
import userReducer from './user/userSlice';
const RootReducer = combineReducers({
  userReducer,
});

export default RootReducer;
