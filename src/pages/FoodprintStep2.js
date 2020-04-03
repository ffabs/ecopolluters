import React, { Component } from 'react';
import '../App.css';
import './About.css';
import './Fooprint.css';
import ReactGA from 'react-ga';
import Header from '../components/Header';
import animalpng from '../images/animal.png';
import FoodprintForm from '../components/FoodprintForm';
import closewizard from '../images/closewizard.png';
import {Link, Redirect} from 'react-router-dom';

function initializeReactGA() {
  ReactGA.initialize('UA-150607597-1');
  ReactGA.pageview('/foodprint/step1');
}
  
class FoodprintStep2 extends Component {


    render() {
        initializeReactGA()
    
        return (        

            <div className="foodprint step2-background">
                
                {this.props.foodprintStep !== 2 &&
                    <Redirect to={"/foodprint/step"+this.props.foodprintStep} />
                }

                    <Header page={'Foodprint'}/>
                    <Link to="/">
                        <img className="closewizard" src={closewizard} />
                    </Link>

                    <div className="foodprint-alignment">

                        <div className="foodprint-intro">

                            <div className="foodprint-intro-title">
                                FOODPRINT CALCULATOR
                            </div>
                            
                            <div className="progress-overview">
                                <div className="progress-box progress-box-active"></div>
                                <div className="progress-box progress-box-active"></div>
                                <div className="progress-box"></div>
                                <div className="progress-box"></div>
                            </div>

                            <div className="step-name">
                                <div>Step 2 -&nbsp;</div>
                                <div className="step-name-bold">Animal Products</div>
                            </div>

                            <img className="step-image" src={animalpng} alt="animals"/>

                            <div className="foodprint-calltoaction">
                                What is your animal products consumption weekly?
                            </div>

                            <div className="FoodprintForms">

                                <FoodprintForm 
                                    foodForm={'beef'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'cheese'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'chicken'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'crustaceans'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'eggs'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'fish'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'lamb'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'milk'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'pork'}
                                    {...this.props}
                                />

                            </div>

                        </div>

                        <div className="wizard-buttons step2-background">

                            <button 
                                type="button"
                                className="foodprint-back foodprint-back-background2"
                                value={this.props.foodprintStep}
                                onClick={this.props.handleBack}
                            >  
                                ← BACK
                            </button>

                            <button 
                                type="button"
                                className="foodprint-next"
                                value={this.props.foodprintStep}
                                onClick={this.props.handleNext}
                            >
                                NEXT →
                            </button>
                                
                        </div>
                        
                </div>

            </div>
    
        );
        
    }

}

export default FoodprintStep2;