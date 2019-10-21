import React, { Component } from 'react';
import '../App.css';
import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('UA-150607597-1');
  ReactGA.pageview('/about');
}
  
class About extends Component {

    render() {
    
        return (        

            <div>
                <h1> About us page</h1>
            </div>
    
        );
        
    }

}

export default About;