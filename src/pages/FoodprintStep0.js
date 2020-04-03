import React, { Component } from 'react';
import '../App.css';
import './About.css';
import './Fooprint.css';
import ReactGA from 'react-ga';
import Header from '../components/Header';
import napoleon from '../images/napoleon_white_cow2.png';
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

                        <Header page={'Foodprint'}/>
                        <Link to="/">
                            <img className="closewizard" src={closewizard} />
                        </Link>

                        <div className="about-alignment">

                            <div>
                                <img className="napoleon-image" src={napoleon} alt="napoleonCow"/>
                            </div>

                            <div className="about-vision">

                                <div className="foodprint-title">How big is your environmental Foodprint?</div>
                                <div className="foodprint-support">Find out how your eating habits are impacting the environment and learn what you can do to help that</div>
                                <button 
                                    type="button"
                                    className="foodprint-start"
                                    value={this.props.foodprintStep}
                                    onClick={this.props.handleNext}
                                >
                                START NOW
                                </button>

                            </div>

                        </div>
   
                </div>

        );
        
    }

}

export default FoodprintStep0;