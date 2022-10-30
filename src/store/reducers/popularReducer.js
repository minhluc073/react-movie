import * as Actions from "../actions";
const initialState = {
  loading: false,
  popular: {},
  error: null,
};

const popularReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case Actions.GET_POPULAR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Actions.GET_POPULAR_SUCCESS:
        const {payload} = action
      return {
        ...state,
        loading: false,
        popular: payload
      };
    case Actions.GET_POPULAR_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default popularReducer;
