import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

import axios from "axios";
import Title from "../../components/dashboard/Title";

const Api = "http://localhost:3000/api/";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const handleClick = async (aircraft_no, airline, source, destination) => {
  try {
    const response = await axios.post(Api + "aircraft/addNewAircraft", { 
      aircraft_no,
      airline,
      source,
      destination });
    console.log(response.data);
    if(response.data.success){
        window.location.reload();
    }
  } catch (error) {
    console.log("error", error);
  }
};

const AircraftForm = () => {
  const classes = useStyles();

  const [no, setNo] = useState("");
  const [airline, setAirline] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <>
      <Title>Add Aircrafts</Title>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Aircraft No"
          variant="outlined"
          value={no}
          onChange={(e) => {
            setNo(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Airline"
          variant="outlined"
          value={airline}
          onChange={(e) => {
            setAirline(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Source"
          variant="outlined"
          value={source}
          onChange={(e) => {
            setSource(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Destination"
          variant="outlined"
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
          }}
        />
        <Button
          variant="contained"
          color="inherit"
          size="large"
          disableElevation
          onClick={() => handleClick(no,airline,source,destination)}
        >
          Add
        </Button>
      </form>
    </>
  );
};
export default AircraftForm;
