import React, { Component, Fragment, useState, useEffect } from "react";
import { Switch, Route, NavLink, useHistory } from "react-router-dom";
import Home from './components/Home'
const App = () => {




  return (
    <div>
      <ul class="menu">
        <li title="home"><a href="#" class="home">home</a></li>
        <li title="search"><a href="#" class="search">search</a></li>
        <li title="pencil"><a href="#" class="pencil">pencil</a></li>
        <li title="about"><a href="#" class="active about">about</a></li>
        <li title="travel resources"><a href="#" class="archive">archive</a></li>
        <li title="contact"><a href="#" class="contact">contact</a></li>
      </ul>

    </div >
  )

}
export default App;
