import React, { Component } from 'react';
import '../App.css';
import cover from '../images/cover.svg';
import Header from '../components/Header';
import {Link} from 'react-router-dom';

class Cover extends Component {
  
  render() {

    return (        
        <div className="cover">
            <Header page={'Home'} />
            {/* <div className="cover-container">  */}
              <div className="catchy">
                  <div className="cover-title">Eat beef?</div>
                  <div className="cover-support">Find out your impact on the environment and what you can do</div>
                  <Link to="/impact">
                  <button className="impact-button impact-button-cover">CALCULATE YOUR IMPACT</button>
                  </Link>
              </div>
            {/* </div> */}
            <img className="cover-image" src={cover} alt="hamburgerImpact"/>
        </div>
    );
    
  }

}

export default Cover;