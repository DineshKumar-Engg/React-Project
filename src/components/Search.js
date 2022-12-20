import React, { useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { useState, useContext } from "react";
import ShowContext from "../Context/showsContext";
import { Alert } from "@mui/material";
import alertsContext from "../Alerts/alertsContext";

const Search = () => {
  const [value, setValue] = useState(""); ////-------------------------->>>>  RadioButton value
  const [placeholder, setPlaceholder] = useState("Search"); //////////---------------->>>>>> placeholder change value
  const [inputValue, setInputValue] = useState(""); ////////////--------------<>>>>>>>>>> user input value
  const showsContext = useContext(ShowContext);
  const { searchShows } = showsContext;

  const {alert,setAlert}=useContext(alertsContext)

  const HandleChange = (event) => {
    setValue(event.target.value);
    const data = event.target.value;
    if (data === "people") setPlaceholder("Eg:Akon,Deniel Redcliffe");
    if (data === "shows") setPlaceholder("Eg:Friends,Girls");
  };

  useEffect(() => {
    if(inputValue !== "" && inputValue !== "!@#$%^&*()_+/*-+"){
      searchShows(inputValue);
      setAlert("You got the Result...")
    }
  }, [inputValue]);

  return (
    //////////------------------> Main return
    <div>
      <div className="RadioBtn">
        <FormControl>
          <FormLabel
            id="demo-controlled-radio-buttons-group"
            className="RadioBtn"
          >
            Choose Your Search
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={HandleChange}
            row
          >
            <FormControlLabel
              value="people"
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
          {alert ?<Alert severity="success">You Got Result</Alert>:null}
        </FormControl>
      </div>
    </div>
  );
};
export default Search;
