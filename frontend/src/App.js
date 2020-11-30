import React, { Component, Fragment, useState, useEffect } from "react";
import { Switch, Route, NavLink, useHistory } from "react-router-dom";
import Home from './components/Home'
const App = () => {

  return (
    <div>
      <nav className="navBar">
        <ul>
          <li id="logo">LOGOHERE</li>
          <li>Home</li>
          <li>Destinations</li>
          <li>Custom Vacations</li>
          <li>Travel Resources</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      {/* <div>
        <ul>
          <li><a href="#" title="home">home</a></li>
          <li><a href="#" title="destinations">Destinations</a></li>
          <li><a href="#" title="link1">Custom Vacations</a></li>
          <li><a href="#" title="link1">Travel Resources</a></li>
          <li><a href="#" title="Contact Us">Contact Us</a></li>
        </ul>
      </div> */}

      <Switch>
        <Route exact path='/' render={() => <Home />} />
      </Switch>

    </div>
  )

}
export default App;
