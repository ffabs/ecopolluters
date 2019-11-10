import React, { Component } from 'react';
import '../App.css';
import Form from '../components/Form';
import Pollution from '../components/Pollution';
import ReactGA from 'react-ga';
import Header from '../components/Header';

function initializeReactGA() {
  ReactGA.initialize('UA-150607597-1');
  ReactGA.pageview('/impact');
}

class Impact extends Component {

   render() {
      initializeReactGA()
      
      return (
          <div>
            <Header/>
            <Form {...this.props}/>
            {this.props.calculation === true &&
              <Pollution grams={this.props.grams} />
            }
          </div>
      );
  }

}


export default Impact;