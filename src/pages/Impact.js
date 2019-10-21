import React, { Component } from 'react';
import '../App.css';
import Form from '../components/Form';
import Pollution from '../components/Pollution';
import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('UA-150607597-1');
  ReactGA.pageview('/impact');
}

class Impact extends Component {

   render() {
      return (
          <div>
            <h1>Calculate your impact</h1>
            <Form {...this.props}/>

            {this.props.calculation === true &&
              <Pollution grams={this.props.grams} />
            }
          </div>
      );
  }

}


export default Impact;