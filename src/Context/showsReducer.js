import {
  SEARCH_ACTOR,
  SEARCH_SHOWS,
  SET_LOADING,
  SET_SINGLE_SHOW,
} from "../Context/types";

const showsReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_SHOWS:
      return {
        ...state,
        shows: action.payload,
        loading: false,
      };
      case SEARCH_ACTOR:
      return {
        ...state,
        actor: action.payload,
        loading: false,
      };
    case SET_SINGLE_SHOW:
      return {
        ...state,
        singleShow: action.payload,
        loading: false,
      };
    
    default:
      return state;
  }
};
export default showsReducer;
