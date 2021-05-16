import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import axios from "axios";
import Title from "../../components/dashboard/Title";

const Api = "http://localhost:3000/api/";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  header: {
    position: "sticky",
    top: 0,
    background: "grey",
    color: "white",
  },
});

const AircraftList = () => {
  const classes = useStyles();

  const [Aircraft, setAircraft] = useState([]);

  useEffect(() => {
    console.log("component mounted");
    const getList = async () => {
      try {
        const response = await axios.get(Api + "aircraft/");
        setAircraft(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getList();
  }, []);

  return (
    <>
      <Title>Aircraft List</Title>
      {Aircraft.success === true && (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.header}>Aircraft ID</TableCell>
                <TableCell className={classes.header}>Aircraft No</TableCell>
                <TableCell className={classes.header}>Airline</TableCell>
                <TableCell className={classes.header}>Source</TableCell>
                <TableCell className={classes.header}>Destination</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Aircraft.aircrafts.map((customer) => (
                <TableRow key={customer._id}>
                  <TableCell component="th" scope="row">
                    {customer._id}
                  </TableCell>
                  <TableCell>{customer.aircraft_no}</TableCell>
                  <TableCell>{customer.airline}</TableCell>
                  <TableCell>{customer.source}</TableCell>
                  <TableCell>{customer.destination}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default AircraftList;
