import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from './components/Home/MainPage';
import Client from './components/Home/Client';

export const Routes = () =>{
  return(
    <Switch>
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/clientes" component={Client}/>
    </Switch>
  )
}