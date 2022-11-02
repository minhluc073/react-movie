
import { combineReducers } from 'redux';
import popularReducer from './popularReducer';
import playingReducer from './nowPlayingReducer';
import topRatedReducer from './topRatedReducer'
export default combineReducers({
    popular: popularReducer,
    playingReducer,
    topRatedReducer
});
