import React, { useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { useState, useContext } from "react";
import ShowContext from "../Context/showsContext";
import axios from "axios";
import ListItem from "./ListItem";
import Loader from "./Loader";

const Search = () => {
  const [value, setValue] = useState(""); //-------------------------->>>>  RadioButton value
  const [placeholder, setPlaceholder] = useState("Search"); //--------------->>>>>> placeholder change value
  const [inputValue, setInputValue] = useState(""); //------------>>>>>>>>>> user input value
  const [actorData, setActorData] = useState([]);

  const showsContext = useContext(ShowContext);

  const { searchShows, searchActor, shows, actor,loading } = showsContext;
  const HandleChange = (event) => {
    setValue(event.target.value);
    const data = event.target.value;
    if (data === "actor") setPlaceholder("Eg:Akon,Deniel Redcliffe");
    if (data === "shows") setPlaceholder("Eg:Friends,Girls");
    setInputValue("");
  };


  useEffect(() => {
    if (value === "actor") {
      const actdata = async () => {
        const response = await axios.get(`https://api.tvmaze.com/search/people?q=${inputValue}`)
        const data = response.data
        setActorData(data);
      }
      actdata();
      const id = actorData[0]?.person?.id;
      if (id) {
        searchActor(id)
      }
    }
    else {
      searchShows(inputValue);
    }
  }, [inputValue]);

  return (
    <div>
      <div className="RadioBtn">
        <FormControl>
          <h3 className="Radio-title">Choose Your Search</h3>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={HandleChange}
            row
          >
            <FormControlLabel
              value="actor"
              control={<Radio color="success" />}
              label="About Actor"
            />
            <FormControlLabel
              value="shows"
              control={<Radio color="default" />}
              label="About Show"
            />
          </RadioGroup>

          <div className="SearchBar">
            <input
              id="outlined-name"
              placeholder={placeholder}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              type="text"
            />
          </div>
          </FormControl>
      </div>
      {loading ?(
        <Loader/>
      )
      : value === "actor" ? (
        <div className="gridContainer" spacing={3}>
          {actor.map((item, id) => (
            <div
              key={id}
              style={{ textAlign: 'justify' }}
              className='gridItem'
            >
              <ListItem
                key={item._embedded.show.id}
                id={item._embedded.show.id}
                image={
                  item._embedded.show.image
                    ? item._embedded.show.image.medium
                    : "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
                }
                name={item._embedded.show.name}
                rating={
                  item._embedded.show.rating.average
                    ? item._embedded.show.rating.average
                    : "No rating"
                }
              />
            </div>
          ))};
        </div>
      ) :
        (
          <div className="gridContainer" spacing={3}>
            {shows.map((item, id) => (
              <div
                key={id}
                style={{ textAlign: 'justify' }}
                className='gridItem'
              >
                <ListItem
                  key={item.show.id}
                  id={item.show.id}
                  image={
                    item.show.image
                      ? item.show.image.medium
                      : "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
                  }
                  name={item.show.name}
                  rating={
                    item.show.rating.average
                      ? item.show.rating.average
                      : "No rating"
                  }
                />
              </div>
            ))};
          </div>
        )
      }
    </div>
  );
};
export default Search;
