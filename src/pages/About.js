import React, { Component } from 'react';
import '../App.css';
import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('UA-150607597-1');
  ReactGA.pageview('/about');
}
  
class About extends Component {

    render() {
        initializeReactGA()
    
        return (        

            <div>
                <h3>Our mission is to connect individuals with the environment by fighting ignorance</h3>
                <p>We believe in freedom of choice and accountability</p>
                <p>We believe in science over mith and fake news</p>
                <p>We believe in the power of awareness</p>
                <p>We stand for the beauty of nature</p>
            </div>
    
        );
        
    }

}

export default About;