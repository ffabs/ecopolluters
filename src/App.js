import React, { Component } from 'react';
// import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Impact from './pages/Impact';
import Science from './pages/Science';
import About from './pages/About';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

class App extends Component {
  
  constructor (props) {
    super(props);   
    this.state = {
      amount: 1,
      select: 200,
      grams: 200,
      calculation: false,
      tempAmount: 1,
      tempSelect: 200,
      tempGrams: 200,
    };
  }

  handleAmount = event => {
    const tempAmount = event.target.value;
    this.setState({tempAmount: tempAmount});
  }

  handleSelect = event => {
    const tempSelect = event.target.value;
    this.setState({tempSelect: tempSelect});
  }

  handleCalculation = event => {
    const grams = this.state.tempAmount*this.state.tempSelect;
    this.setState({
      amount: this.state.tempAmount,
      select: this.state.tempSelect,
      grams: grams,
      calculation: true,
    });
  }

  render() {
    return (
      <HashRouter>
        <ScrollToTop>
          <Switch>
            <Route exact={true} path='/' render={() => (
              <Home 
                amount={this.state.amount}
                select={this.state.select}
                grams={this.state.grams}
                calculation={this.state.calculation}
                handleAmount={this.handleAmount}
                handleSelect={this.handleSelect}
                handleCalculation={this.handleCalculation}
              />
            )}/>
            <Route exact={true} path='/impact' render={() => (
              <Impact 
                amount={this.state.amount}
                select={this.state.select}
                grams={this.state.grams}
                calculation={this.state.calculation}
                handleAmount={this.handleAmount}
                handleSelect={this.handleSelect}
                handleCalculation={this.handleCalculation}
              />
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
          <Footer />
        </ScrollToTop>
      </HashRouter>
    );
  }
}
export default App;