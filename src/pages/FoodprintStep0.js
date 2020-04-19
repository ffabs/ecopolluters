import React, { Component } from 'react';
import '../App.css';
import './About.css';
import './Fooprint.css';
import ReactGA from 'react-ga';
import Header from '../components/Header';
import foodprint from '../images/foodprint.png';
import {Redirect} from 'react-router-dom';

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

                        <div className="foodprint-step0-alignment">
                            
                            <div className="foodprint-step0-text">

                                <div className="foodprint-title">What did you eat last week?</div>
                                <div className="foodprint-support">Select the food you ate last week, and we will give you back your impact plus what you can do to reduce it.</div>
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