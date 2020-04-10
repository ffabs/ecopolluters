import React, { Component } from 'react';
import '../App.css';
import './About.css';
import './Fooprint.css';
import ReactGA from 'react-ga';
import Header from '../components/Header';
import foodprint from '../images/foodprint.png';
import closewizard from '../images/closewizard.png';
import {Link, Redirect} from 'react-router-dom';

function initializeReactGA() {
  ReactGA.initialize('UA-150607597-1');
  ReactGA.pageview('/foodprint/step0');
}
  
class FoodprintStep0 extends Component {

    render() {
        initializeReactGA()
    
        return (        
            
                <div className="foodprint step0-background">

                    {this.props.foodprintStep !== 0 &&
                        <Redirect to={"/foodprint/step"+this.props.foodprintStep} />
                    }

                        <Header page={'Foodprint'} logoColor="white"/>
                        <Link to="/">
                            <img className="closewizard" src={closewizard} />
                        </Link>

                        <div className="foodprint-step0-alignment">
                            
                            <div className="foodprint-step0-text">

                                <div className="foodprint-title">How big is your environmental Foodprint?</div>
                                <div className="foodprint-support">We will ask you what few questions about your weekly food consumption and calculate the relative environmental impact of your consumption choices.</div>
                                <button 
                                    type="button"
                                    className="foodprint-start"
                                    value={this.props.foodprintStep}
                                    onClick={this.props.handleNext}
                                >
                                START NOW
                                </button>

                            </div>

                            <div>
                                <img className="foodprint-image" src={foodprint} alt="foodprint"/>
                            </div>

                        </div>
   
                </div>

        );
        
    }

}

export default FoodprintStep0;