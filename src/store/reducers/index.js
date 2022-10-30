
import { combineReducers } from 'redux';
import popularReducer from './popularReducer';

export default combineReducers({
    popular: popularReducer,
});
