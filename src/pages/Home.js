import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header';
import Categories from '../components/Categories'
import FBShare from '../components/FBShare';
// import Intro from '../components/Intro';
import Cover from '../components/Cover';
import ReactGA from 'react-ga';
import Footer from '../components/Footer';
import corona from '../images/corona.png';
import {Link} from 'react-router-dom';
import beefvstofu from '../images/beefvstofu.png';
import beefvstofumobile from '../images/beefvstofumobile.png';
import foodcomparisondesktop from '../images/100grfoodcomparisondesktop.png';
import foodcomparisonmobile from '../images/100grfoodcomparisonmobile.png';


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
          <Header page={'Home'} logoColor="white" />
          <div className="page-title">
            <div className="cover-title">Food pollution?</div>
            <div className="cover-support">Pick a food, we show you its environmental impact and best alternatives</div>
          </div>
          <Categories page={'home'} {...this.props}/> 
          <img className="corona" src={corona} alt="corona feature"/> 
        </div>
        {/* <Intro /> */}
        <img className="beefvstofu" src={beefvstofu} alt="beef vs tofu"/>
        <img className="beefvstofumobile" src={beefvstofumobile} alt="beef vs tofu"/>
        <div className="cover-button">
          <Link to="/impact">
          <button className="impact-button cover-impact-button">SEE OTHER FOOD</button>
          </Link>
        </div>
        <div className="home-note">
          <div className="home-note-bold">Note:&nbsp;</div>
          <div className="home-note-content"> deciding not to eat any of them and skip a meal is the most environmental friendly choice</div>
        </div>
        <div className="red-home-background">
          <div className="red-home-text">
            <div className="red-home-title">Food pollution comparison</div>
            <div className="red-home-support">Food comparison based on 100g of product</div>
          </div>
          <img className="foodcomparisondesktop" src={foodcomparisondesktop} alt="food comparison"/>
          <img className="beefvstofumobile" src={foodcomparisonmobile} alt="food comparison"/>
        </div>
        <FBShare />
        <Footer />
      </div>

    );

  }

}

export default Home;