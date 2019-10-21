import React, { Component } from 'react';
import '../App.css';
function initializeReactGA() {
    ReactGA.initialize('UA-150607597-1');
    ReactGA.pageview('/Science');
  }

class Science extends Component {
    
    render() {
    
        return (        

            <div>
                <h1> Science page</h1>
            </div>
    
        );
        
    }

}

export default Science;