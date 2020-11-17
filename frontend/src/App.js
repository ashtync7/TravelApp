import React, { Component, Fragment, useState, useEffect } from "react";
import { Switch, Route, NavLink, useHistory } from "react-router-dom";
import Home from './components/Home'
const App = () => {
  
  return(
    <div>

      <Switch>
        <Route exact path="/" render={() => <Home/> } />
      </Switch>

    
      
    </div>
  )

}
export default App;
