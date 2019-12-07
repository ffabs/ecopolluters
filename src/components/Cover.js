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
            <div className="catchy">
                <div className="page-title">Eat beef?</div>
                <div className="cover-support">Find out your impact on the environment</div>
                <Link to="/impact">
                <button className="impact-button cover-impact-button">CALCULATE YOUR IMPACT</button>
                </Link>
            </div>
            <img className="cover-image" src={cover} alt="hamburgerImpact"/>
        </div>
    );
    
  }

}

export default Cover;