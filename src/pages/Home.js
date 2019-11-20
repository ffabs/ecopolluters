import React, { Component } from 'react';
import '../App.css';
import Form from '../components/Form';
import Intro from '../components/Intro';
import Cover from '../components/Cover';
import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('UA-150607597-1', { 'optimize_id': 'GTM-TVPWRD7'});
  ReactGA.pageview('/homepage');
}

class Home extends Component {

  render() {
    initializeReactGA()
  
    return (        

      <div className="page">
        <Cover />
        <Intro />
        <Form page={'home'} {...this.props}/>
      </div>

    );

  }

}

export default Home;