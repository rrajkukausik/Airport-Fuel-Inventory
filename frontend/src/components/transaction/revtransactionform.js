import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Title from "../dashboard/Title";
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

const handleClick = async (airport_id, aircraft_id, transaction_type, quantity , transaction_id_parent) => {
  try {
    const response = await axios.post(Api + "transactions/reverseTransactions", { 
      airport_id,
      aircraft_id,
      transaction_type,
      quantity,
      transaction_id_parent });
    console.log(response.data);
    if(response.data.success){
        window.location.reload();
    }
  } catch (error) {
    console.log("error", error);
  }
};

const Form = () => {
  const classes = useStyles();

  const [no, setNo] = useState("");
  const [airline, setAirline] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [parent, setParent] = useState("");

  return (
    <>
      <Title>Rev Transaction</Title>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Airport ID"
          variant="outlined"
          value={no}
          onChange={(e) => {
            setNo(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Aircraft ID"
          variant="outlined"
          value={airline}
          onChange={(e) => {
            setAirline(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Transaction Type"
          variant="outlined"
          value={source}
          onChange={(e) => {
            setSource(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="5454"
          variant="outlined"
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="5454"
          variant="outlined"
          value={parent}
          onChange={(e) => {
          setParent(e.target.value);
          }}
        />
        <Button
          variant="contained"
          color="inherit"
          size="large"
          disableElevation
          onClick={() => handleClick(no,airline,source,destination,parent)}
        >
          Add
        </Button>
      </form>
    </>
  );
};
export default Form;


