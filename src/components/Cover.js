import React, { Component } from 'react';
import '../App.css';
import './Cover.css';
import cover from '../images/cover.svg';
import Header from '../components/Header';
import {Link} from 'react-router-dom';

class Cover extends Component {
  
  render() {

    return (        
        <div className="cover">
            <Header page={'Home'} />
            <div className="page">
              <div className="page-title">
                <div className="cover-title">Eat beef?</div>
                <div className="cover-support">Find out your impact on the environment</div>
                 <div className="cover-button">
                  <Link to="/impact">
                  <button className="impact-button cover-impact-button">CALCULATE YOUR IMPACT</button>
                  </Link>
                </div>
              </div>
            </div>
            <img className="cover-image" src={cover} alt="hamburgerImpact"/>
        </div>
    );
    
  }

}

export default Cover;