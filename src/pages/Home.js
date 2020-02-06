import React, { Component } from 'react';
import '../App.css';
import Categories from '../components/Categories'
import FBShare from '../components/FBShare';
import Intro from '../components/Intro';
import Cover from '../components/Cover';
import ReactGA from 'react-ga';
import Footer from '../components/Footer';

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
        <Categories page={'home'} {...this.props}/>
        <FBShare />
        <Footer />
      </div>

    );

  }

}

export default Home;