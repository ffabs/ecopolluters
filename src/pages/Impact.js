import React, { Component } from 'react';
import '../App.css';
import Form from '../components/Form';
import Pollution from '../components/Pollution';
import ReactGA from 'react-ga';
import Header from '../components/Header';
import Footer from '../components/Footer';
import defaultimpact from '../images/impact-empty-state.png';
import FBShare from '../components/FBShare';

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
              <Form page={'Impact'} {...this.props}/>
            </div>
              {this.props.calculation === true &&
                <Pollution grams={this.props.grams} loading={this.props.loading} />
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