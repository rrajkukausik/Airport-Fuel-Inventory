import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';
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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

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

const List = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("component mounted");
    const getList = async () => {
      try {
        const response = await axios.get(Api + "airport/");
        setProducts(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getList();
  }, []);

  const classes = useStyles();

  return (
    <>
      <Title>Airports List</Title>
      {products.success === true && (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell className={classes.header}>Airport ID</StyledTableCell>
                <StyledTableCell className={classes.header}>Airport Name</StyledTableCell>
                <StyledTableCell className={classes.header}>Fuel Capacity</StyledTableCell>
                <StyledTableCell className={classes.header}>Fuel Available</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.airports.map((product) => (
                <StyledTableRow key={product._id}>
                  <StyledTableCell component="th" scope="row">
                    {product._id}
                  </StyledTableCell>
                  <StyledTableCell>{product.airport_name}</StyledTableCell>
                  <StyledTableCell>{product.fuel_capacity}</StyledTableCell>
                  <StyledTableCell>{product.fuel_available}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default List;
