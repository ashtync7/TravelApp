import React, { Component, Fragment, useState, useEffect } from "react";
import { Switch, Route, NavLink, useHistory } from "react-router-dom";
import Home from './components/Home'
const App = () => {




  return (
    <div>
      {/* <ul class="menu">
        <li title="home"><a href="#" class="home">home</a></li>
        <li title="destinations"><a href="#" class="destimap">destinations</a></li>
        <li title="pencil"><a href="#" class="pencil">pencil</a></li>
        <li title="travel resources"><a href="#" class="archive">archive</a></li>
        <li title="contact"><a href="#" class="contact">contact</a></li>
      </ul> */}
      <div>
        <ul>
          <li><a href="#" title="home">home</a></li>
          <li><a href="#" title="destinations">Destinations</a></li>
          <li><a href="#" title="link1">Custom Vacations</a></li>
          <li><a href="#" title="link1">Travel Resources</a></li>
          <li><a href="#" title="Contact Us">Contact Us</a></li>
        </ul>
      </div>
    </div >
  )

}
export default App;
