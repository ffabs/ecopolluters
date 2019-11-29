import React, { Component } from 'react';
import '../App.css';
import Form from '../components/Form';
import FBShare from '../components/FBShare';
import Intro from '../components/Intro';
import Cover from '../components/Cover';
import ReactGA from 'react-ga';

function initializeReactGA() {
  // { 'optimize_id': 'GTM-TVPWRD7'} <-- ab testing code
  ReactGA.initialize('UA-150607597-1');
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
        <FBShare />
      </div>

    );

  }

}

export default Home;