import React, { Component } from 'react';
import '../App.css';
import './About.css';
import './Fooprint.css';
import ReactGA from 'react-ga';
import Header from '../components/Header';
import grainspng from '../images/grains.png';
import FoodprintForm from '../components/FoodprintForm';
import closewizard from '../images/closewizard.png';
import {Link, Redirect} from 'react-router-dom';

function initializeReactGA() {
  ReactGA.initialize('UA-150607597-1');
  ReactGA.pageview('/foodprint/step1');
}
  
class FoodprintStep3 extends Component {


    render() {
        initializeReactGA()
    
        return (        

            <div className="foodprint step3-background">
                
                {this.props.foodprintStep !== 3 &&
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
                                <div className="progress-box progress-box-active"></div>
                                <div className="progress-box"></div>
                            </div>

                            <div className="step-name">
                                <div>Step 3 -&nbsp;</div>
                                <div className="step-name-bold">Grains and Legumes</div>
                            </div>

                            <img className="step-image" src={grainspng} alt="grains"/>

                            <div className="foodprint-calltoaction">
                                What is your grains and legumes consumption weekly?
                            </div>

                            <div className="FoodprintForms">

                                <FoodprintForm 
                                    foodForm={'bread'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'corn flour'}
                                    {...this.props}
                                />
                                
                                <FoodprintForm 
                                    foodForm={'oatmeal'}
                                    {...this.props}
                                />
                                
                                <FoodprintForm 
                                    foodForm={'other legumes'}
                                    {...this.props}
                                />
                                
                                <FoodprintForm 
                                    foodForm={'peas'}
                                    {...this.props}
                                />
                                
                                <FoodprintForm 
                                    foodForm={'rice'}
                                    {...this.props}
                                />

                            </div>

                        </div>

                        <div className="wizard-buttons step3-background">

                            <button 
                                type="button"
                                className="foodprint-back foodprint-back-background3"
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

export default FoodprintStep3;