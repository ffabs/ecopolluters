import React, { Component } from 'react';
import Home from './pages/Home';
import Impact from './pages/Impact';
import Calculate from './pages/Calculate';
import Science from './pages/Science';
import About from './pages/About';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path='/' render={() => (
            <Home />
          )}/>
          <Route exact={true} path='/impact' render={() => (
            <Impact />
          )}/>
          <Route exact={true} path='/calculate' render={() => (
            <Calculate />
          )}/>
          <Route exact={true} path='/science' render={() => (
            <Science />
          )}/>
          <Route exact={true} path='/about' render={() => (
            <About />
          )}/>
          <Route render={() => (
            <Redirect to="/" />
          )}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;