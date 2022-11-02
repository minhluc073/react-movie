import * as Actions from "../actions";
const initialState = {
  loading: false,
  playing: {},
  error: null,
};

const playingReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case Actions.GET_PLAYING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Actions.GET_PLAYING_SUCCESS:
        const {payload} = action
      return {
        ...state,
        loading: false,
        playing: payload
      };
    case Actions.GET_PLAYING_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default playingReducer;
