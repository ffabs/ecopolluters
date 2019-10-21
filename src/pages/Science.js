import React, { Component } from 'react';
import '../App.css';
import ReactGA from 'react-ga';

function initializeReactGA() {
    ReactGA.initialize('UA-150607597-1');
    ReactGA.pageview('/science');
  }

class Science extends Component {
    
    render() {
        initializeReactGA()
    
        return (        

            <div>
                <h1> Science page</h1>
            </div>
    
        );
        
    }

}

export default Science;