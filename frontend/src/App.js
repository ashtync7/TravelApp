import React, { Component, Fragment, useState, useEffect } from "react";
import { Switch, Route, NavLink, useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';
import Home from './components/Home'
import Destinations from './components/Destinations';
import CustomVacations from './components/CustomVacation';
import TravelResources from './components/TravelResources';
import ContactUs from './components/Contact';

const App = () => {

  return (
    <div>
      <nav className="navBar">
        <ul>
        <Link to={`/`}><img id="logo" src="images/WTAlogoVan1.png"></img></Link>
          <Link to={`/`}><li>Home</li></Link>
          <Link to={`/Destinations`}><li>Destinations</li></Link>
          <Link to={`/CustomVacations`}><li>Custom Vacations</li></Link>
          <Link to={`/TravelResources`}><li>Travel Resources</li></Link>
          <Link to={`/ContactUs`}><li>Contact Us</li></Link>
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
        <Route exact path='/Destinations' render={() => <Destinations />} />
        <Route exact path='/CustomVacations' render={() => <CustomVacations />} />
        <Route exact path='/TravelResources' render={() => <TravelResources />} />
        <Route exact path='/ContactUs' render={() => <ContactUs />} />
      </Switch>

    </div>
  )

}
export default App;
