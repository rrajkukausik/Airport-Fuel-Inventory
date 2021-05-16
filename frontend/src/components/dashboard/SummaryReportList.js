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
import Title from "./Title";

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

const SummaryReportList = () => {
  const [products, setProducts] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    console.log("component mounted");
    const getSummaryReportList = async () => {
      try {
        const response = await axios.get(Api + "reports/summaryReport");
        setProducts(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getSummaryReportList();
  }, []);

  return (
    <>
      <Title>Airport Summary Report</Title>
      {products.success === true && (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.header}>Airport</TableCell>
                <TableCell className={classes.header}>Fuel available</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.airports.map((product) => (
                <TableRow key={product.airport_name}>
                  <TableCell component="th" scope="row">
                    {product.airport_name}
                  </TableCell>
                  <TableCell>{product.fuel_available}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default SummaryReportList;
