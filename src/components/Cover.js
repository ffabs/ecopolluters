import React, { Component } from 'react';
import '../App.css';
import './Cover.css';
import cover from '../images/cover.svg';
import Header from '../components/Header';
import Categories from '../components/Categories'
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
              </div>
            </div>
        </div>
    );
    
  }

}

export default Cover;