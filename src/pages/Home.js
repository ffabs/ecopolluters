import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header';
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
        <div className="pink-cover-background">
          <Header page={'Home'} />
          <div className="page-title">
            <div className="cover-title">Food pollution?</div>
            <div className="cover-support">Pick a food to check its impact on the environment and best alternatives</div>
          </div>
          <Categories page={'home'} {...this.props}/> 
        </div>
        <Intro />
        <FBShare />
        <Footer />
      </div>

    );

  }

}

export default Home;