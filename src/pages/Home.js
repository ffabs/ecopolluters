import React, { Component } from 'react';
import '../App.css';
import Form from '../components/Form';
import Intro from '../components/Intro';
import {Link} from 'react-router-dom';
import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('UA-150607597-1');
  ReactGA.pageview('/homepage');
}

class Home extends Component {

  render() {
    initializeReactGA()
  
    return (        

      <div>
        <Intro />
        <Form {...this.props}/>
      </div>

    );

  }

}

export default Home;