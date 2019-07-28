import { combineReducers } from 'redux';
import event from './event';
import InputForm from './inputFormReducer';
export default combineReducers({
  event,
  InputForm
})

