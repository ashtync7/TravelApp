import React, { Component, Fragment, useState, useEffect } from "react";
import { Switch, Route, NavLink, useHistory } from "react-router-dom";
import Home from './components/Home'
const App = () => {

  return (
    <div>
      <ul class="menu">
        <li title="home"><a href="#" class="home">home</a></li>
        <li title="destinations"><a href="#" class="fa-map-marker-alt">destinations</a></li>
        <li title="pencil"><a href="#" class="pencil">pencil</a></li>
        <li title="travel resources"><a href="#" class="archive">archive</a></li>
        <li title="contact"><a href="#" class="contact">contact</a></li>
      </ul>
 

      <Switch>
        <Route exact path="/" render={() => <Home/> } />
      </Switch>
    </div>
  )

}
export default App;
