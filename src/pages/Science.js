import React, { Component } from 'react';
import '../App.css';
import ReactGA from 'react-ga';
import Header from '../components/Header';

function initializeReactGA() {
    ReactGA.initialize('UA-150607597-1');
    ReactGA.pageview('/science');
  }

class Science extends Component {
    
    render() {
        initializeReactGA()

        return (        

            <div>
            <Header />
                <h1> Science page</h1>
            </div>
    
        );
        
    }

}

export default Science;