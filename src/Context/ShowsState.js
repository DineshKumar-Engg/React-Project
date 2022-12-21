import { useReducer } from "react";
import axios from "axios";
import ShowContext from "./showsContext";
import ShowsReducer from "./showsReducer";
import {
  SEARCH_SHOWS,
  SET_LOADING,
  SET_SINGLE_SHOW,
  SEARCH_ACTOR,
} from "../Context/types";



const ShowsState = (props) => {


  const initialState = {
    shows: [],
    actor: [],
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


  const searchActor = async (id) => {

    dispatch({ type: SET_LOADING });

    const { data } = await axios.get(`https://api.tvmaze.com/people/${id}/castcredits?embed=show`);
    dispatch({
      type: SEARCH_ACTOR,
      payload: data,
    });

  };

  const getSingleShow = async (id) => {
    dispatch({
      type: SET_LOADING,
    });

    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    dispatch({
      type: SET_SINGLE_SHOW,
      payload: data,
    });
  };


  return (
    <ShowContext.Provider
      value={{
        shows: state.shows,
        actor: state.actor,
        singleShow: state.singleShow,
        loading: state.loading,
        searchShows,
        searchActor,
        getSingleShow,
      }}
    >
      {props.children}
    </ShowContext.Provider>
  );
};

export default ShowsState;
