import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { NavLink } from "react-router-dom";
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import EvStationIcon from '@material-ui/icons/EvStation';
import AssessmentIcon from '@material-ui/icons/Assessment';


const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

const activeStyle = {
  fontWeight: "bold",
  color: "#4287f5",
  textDecoration: "none",
};

export const mainListItems = (
  <div>
    <NavLink to="/dashboard" style={linkStyle} activeStyle={activeStyle}>
      <ListItem button>
        <ListItemIcon>
          <AssessmentIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </NavLink>
    <NavLink to="/transactions" style={linkStyle} activeStyle={activeStyle}>
      <ListItem button>
        <ListItemIcon>
         <EvStationIcon/>
        </ListItemIcon>
        <ListItemText primary="Transactions" />
      </ListItem>
    </NavLink>
    <NavLink to="/aircrafts" style={linkStyle} activeStyle={activeStyle}>
      <ListItem button>
        <ListItemIcon>
        <AirplanemodeActiveIcon/>
        </ListItemIcon>
        <ListItemText primary="Aircrafts List" />
      </ListItem>
    </NavLink>
    <NavLink to="/airports" style={linkStyle} activeStyle={activeStyle}>
      <ListItem button>
        <ListItemIcon>
        <FlightTakeoffIcon/>
        </ListItemIcon>
        <ListItemText primary="Airports List" />
      </ListItem>
    </NavLink>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>ADD NEW DATA</ListSubheader>
    <NavLink to="/addaircraft" style={linkStyle} activeStyle={activeStyle}>
      <ListItem button>
        <ListItemIcon>
        <AirplanemodeActiveIcon/>
        </ListItemIcon>
        <ListItemText primary="Add Aircraft" />
      </ListItem>
    </NavLink>
    <NavLink to="/addairport" style={linkStyle} activeStyle={activeStyle}>
      <ListItem button>
        <ListItemIcon>
        <FlightTakeoffIcon/>
        </ListItemIcon>
        <ListItemText primary="Add Airport" />
      </ListItem>
    </NavLink>
    <NavLink to="/addtransaction" style={linkStyle} activeStyle={activeStyle}>
      <ListItem button>
        <ListItemIcon>
        <EvStationIcon/>
        </ListItemIcon>
        <ListItemText primary="Add Transaction" />
      </ListItem>
    </NavLink>
    <NavLink to="/reversetransaction" style={linkStyle} activeStyle={activeStyle}>
      <ListItem button>
        <ListItemIcon>
        <EvStationIcon/>
        </ListItemIcon>
        <ListItemText primary="Reverse Transaction" />
      </ListItem>
    </NavLink>
  </div>
);
