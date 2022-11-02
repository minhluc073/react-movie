import * as Actions from "../actions";
const initialState = {
  loading: false,
  rated: {},
  error: null,
};

const ratedReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case Actions.GET_RATED_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Actions.GET_RATED_SUCCESS:
        const {payload} = action
      return {
        ...state,
        loading: false,
        rated: payload
      };
    case Actions.GET_RATED_FAILURE:
      return {
        ...state,
        rated: false,
      };
    default:
      return state;
  }
};

export default ratedReducer;
