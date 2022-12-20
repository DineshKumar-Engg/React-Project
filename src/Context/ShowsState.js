import { useReducer } from "react";
import axios from "axios";
import ShowContext from "./showsContext";
import ShowsReducer from "./showsReducer";
import {
  SEARCH_SHOWS,
  SET_LOADING,
  SET_SINGLE_SHOW,
} from "../Context/types";

const ShowsState = (props) => {
  const initialState = {
    shows: [],
    singleShow: {},
    loading: false,
  };
  const [state, dispatch] = useReducer(ShowsReducer, initialState);

  const searchShows = async (inputValue) => {
    dispatch({ type: SET_LOADING });
    
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${inputValue}`
    );


    dispatch({
      type: SEARCH_SHOWS,
      payload: data,
    });
  };
  

  const getSingleShow = async (id) => {
    dispatch({
      type: SET_LOADING,
    });

    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);

    console.log(data);

    dispatch({
      type: SET_SINGLE_SHOW,
      payload: data,
    });
  };


  return (
    <ShowContext.Provider
      value={{
        shows: state.shows,
        singleShow: state.singleShow,
        loading: state.loading,
        searchShows,
        getSingleShow,
      }}
    >
      {props.children}
    </ShowContext.Provider>
  );
};

export default ShowsState;
