import React from 'react';
import '../App.css';
import './NavBar';
import NavBar from './NavBar';
//import DrinkList from './DrinkList'
import Search from './Search'
import Favorites from './Favorites';
import { Route, Switch } from "react-router-dom";
import AddDrink from './AddDrink'

function App() {
  return (
     <div>
      <NavBar />
      <Switch>
        <Route exact path="/add">
          <AddDrink />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/">
          <Search />
        </Route>
      </Switch>
     </div>
  );
}

export default App;
