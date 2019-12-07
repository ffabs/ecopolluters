import React, { Component } from 'react';
import '../App.css';
import ReactGA from 'react-ga';
import Header from '../components/Header';

function initializeReactGA() {
  ReactGA.initialize('UA-150607597-1');
  ReactGA.pageview('/about');
}
  
class About extends Component {

    render() {
        initializeReactGA()
    
        return (        

            <div>
            <Header page={'About'}/>

                <div className="vision">Our vision is to make human society sustainable by empowering individual behavioural change</div>
                <div>We believe in freedom of choice and accountability</div>
                <div>We believe in science over myths and fake news</div>
                <div>We believe in the power of awareness</div>
                <div>We stand for the beauty of nature</div>
            </div>
    
        );
        
    }

}

export default About;