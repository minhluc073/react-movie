
import { combineReducers } from 'redux';
import popularReducer from './popularReducer';
import playingReducer from './nowPlayingReducer';
export default combineReducers({
    popular: popularReducer,
    playingReducer
});
