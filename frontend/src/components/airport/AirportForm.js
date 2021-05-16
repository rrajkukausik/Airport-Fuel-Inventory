import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Title from "../../components/dashboard/Title";
import { Button } from "@material-ui/core";

import axios from "axios";

const Api = "http://localhost:3000/api/";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const handleClick = async (airport_name,fuel_capacity,fuel_available) => {
  try {
    const response = await axios.post(Api + "airport/addNewAirport", {
      airport_name,
      fuel_capacity,
      fuel_available
    });
    console.log(response.data);
    if (response.data.success) {
      window.location.reload();
    }
  } catch (error) {
    console.log("error", error);
  }
};

const Form = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [available, setAvailable] = useState("");

  return (
    <>
      <Title>Add Airport</Title>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Airport Name"
          variant="outlined"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Fuel Capacity"
          variant="outlined"
          value={capacity}
          onChange={(e) => {
            setCapacity(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Fuel Available"
          variant="outlined"
          value={available}
          onChange={(e) => {
            setAvailable(e.target.value);
          }}
        />
        <Button
          variant="contained"
          color="inherit"
          size="large"
          disableElevation
            onClick={() => handleClick(name,capacity,available)}
        >
          Add
        </Button>
      </form>
    </>
  );
};
export default Form;
