import React, { Component, Fragment, useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Destinations from './components/Destinations';
import CustomVacations from './components/CustomVacation';
import TravelResources from './components/TravelResources';
import ContactUs from './components/Contact';

const App = () => {

  return (
    <div>
      <nav className="navBar">
        <ul>
          <Link to='/'><img id="logo" src="images/WTAlogoVan1.png"></img></Link>
          <Link to='/'><li>Home</li></Link>
          <Link to={`/Destinations`}><li>Destinations</li></Link>
          <Link to={`/CustomVacations`}><li>Custom Vacations</li></Link>
          <Link to={`/TravelResources`}><li>Travel Resources</li></Link>
          <Link to={`/ContactUs`}><li>About Us</li></Link>
        </ul>
      </nav>

      <Link to={`/`}><img src="images/WTAlogoVan1.png" alt="Our Van Logo" id="middleLogo" /></Link>

      <nav className="menu-wrap">
        <input type="checkbox" class="toggler" />
        <div class="hamburger">
          <div></div>
        </div>
        <div class="menu">
          <div>
            <div>
              <ul>
                <Link to={`/`} id="menu2li"><li>Home</li></Link>
                <Link to={`/Destinations`} id="menu2li"><li>Destinations</li></Link>
                <Link to={`/CustomVacations`} id="menu2li"><li>Custom Vacations</li></Link>
                <Link to={`/TravelResources`} id="menu2li"><li>Travel Resources</li></Link>
                <Link to={`/ContactUs`} id="menu2li"><li>About Us</li></Link>
              </ul>
            </div>
          </div>
        </div>
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
