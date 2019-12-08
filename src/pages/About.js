import React, { Component } from 'react';
import '../App.css';
import ReactGA from 'react-ga';
import Header from '../components/Header';
import Footer from '../components/Footer';
import napoleon from '../images/napoleon_white_cow.png';

function initializeReactGA() {
  ReactGA.initialize('UA-150607597-1');
  ReactGA.pageview('/about');
}
  
class About extends Component {

    render() {
        initializeReactGA()
    
        return (        

            <div className="about-background">
                <Header page={'About'}/>

                    <div className="about-alignment">

                        <div>
                            <img className="napoleon-image" src={napoleon} alt="napoleonCow"/>
                        </div>

                        <div className="about-vision">

                            <div className="vision">Our vision is to make human society sustainable by empowering individual behavioural change</div>
                            <div className="vision-support">☝️We believe in freedom of choice and accountability</div>
                            <div className="vision-support">🔬We believe in science over myths and fake news</div>
                            <div className="vision-support">👁️We believe in the power of awareness</div>
                            <div className="vision-support">🌳We stand for the beauty of nature</div>

                        </div>

                    </div>

                <Footer />
            </div>
    
        );
        
    }

}

export default About;