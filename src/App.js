import React, { Component } from 'react';
import Home from './pages/Home';
import Impact from './pages/Impact';
import Science from './pages/Science';
import About from './pages/About';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

class App extends Component {

  // constructor (props) {
  //   super(props);   
    // this.state = {
    //   amount: 1,
    //   select: 200,
    //   grams: 200,
    // };
  // }

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