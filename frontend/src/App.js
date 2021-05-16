import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Aircraft from "./components/aircraft/Aircraft";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import Airport from "./components/airport/Airport";
import Transaction from "./components/transaction/Transaction";
import Addairport from "./components/airport/addairport";
import Addaircraft from "./components/aircraft/addaircraft";
import Addtransaction from "./components/transaction/addtransaction"
import Revtransaction from "./components/transaction/revtransaction"

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
      <Route path='/aircrafts' component={Aircraft}></Route>
      <Route path='/airports' component={Airport}></Route> 
      <Route path='/transactions' component={Transaction}></Route>
      <Route path='/addaircraft' component={Addaircraft}></Route>
      <Route path='/addairport' component={Addairport}></Route>
      <Route path='/reversetransaction' component={Revtransaction}></Route>
      <Route path='/addtransaction' component={Addtransaction}></Route>   
      <Redirect to="/"></Redirect>
    </Switch>
  );
};

export default App;
