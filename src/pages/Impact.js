import React, { Component } from 'react';
import '../App.css';
import './Impact.css';
import Categories from '../components/Categories'
import Form from '../components/Form';
import Pollution from '../components/Pollution';
import Solution from '../components/Solution';
import ReactGA from 'react-ga';
import Header from '../components/Header';
import Footer from '../components/Footer';
import defaultimpact from '../images/impact-empty-state.png';
import FBShare from '../components/FBShare';
import coronaimpact from '../images/coronaimpactpage.png';

function initializeReactGA() {
  ReactGA.initialize('UA-150607597-1');
  ReactGA.pageview('/impact');
}

class Impact extends Component {

   render() {
      initializeReactGA()
      
      return (
          <div className="page">
            <div className="impact-cover">
              <Header page={'Impact'}/>
              <Categories page={'Impact'} {...this.props}/>
              <img className="corona-impact" src={coronaimpact} alt="corona feature"/> 
              <Form {...this.props}/>
            </div>
            {this.props.calculation === true &&
              <Pollution {...this.props} />
            }
            {this.props.calculation === true &&
              <div className="solution-cover">
                <Solution {...this.props} />
              </div>
            }
            {this.props.calculation === false &&
                <img className="default-impact-image" src={defaultimpact} alt="defaultimpact"/>
            }
            <FBShare />
            <Footer />
          </div>
      );
  }

}


export default Impact;