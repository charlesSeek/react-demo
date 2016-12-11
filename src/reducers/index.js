import { combineReducers } from 'redux';
import requestModalReducer from './RequestModalReducer';
import errorMessageReducer from './ErrorMessageReducer';
import buttonTextReducer from './ButtonTextReducer';
import userReducer from './UserReducer';
import allDoneModalReducer from './AllDoneModalReducer';

const rootReducer = combineReducers({
  requestModal:requestModalReducer,
  allDoneModal:allDoneModalReducer,
  errorMessage:errorMessageReducer,
  buttonText:buttonTextReducer,
  user:userReducer
});

export default rootReducer;
