import React, { Component } from 'react';
import '../App.css';
import './About.css';
import './Fooprint.css';
import ReactGA from 'react-ga';
import Header from '../components/Header';
import animalpng from '../images/animal.png';
import FoodprintForm from '../components/FoodprintForm';
import {Redirect} from 'react-router-dom';

function initializeReactGA() {
  ReactGA.initialize('UA-150607597-1');
  ReactGA.pageview('/foodprint/step2');
}
  
class FoodprintStep2 extends Component {


    render() {
        initializeReactGA()
    
        return (        

            <div className="page">

            <div className="foodprint step2-background step2-background-heightresponsive">
                
                {this.props.foodprintStep !== 2 &&
                    <Redirect to={"/foodprint/step"+this.props.foodprintStep} />
                }

                    <Header page={'Foodprint'} logoColor="white"/>

                    <div className="foodprint-alignment">

                        <div className="foodprint-intro">

                            <div className="foodprint-intro-title">
                                FIND OUT YOUR FOODPRINT
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
                                What did you eat last week?
                            </div>

                            <div className="FoodprintForms">

                                <FoodprintForm 
                                    foodForm={'eggs'}
                                    categoryForm="animal"
                                    foodprintState={'eggs'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'beef'}
                                    categoryForm="animal"
                                    foodprintState={'beef'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'cheese'}
                                    categoryForm="animal"
                                    foodprintState={'cheese'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'chicken'}
                                    categoryForm="animal"
                                    foodprintState={'chicken'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'crustaceans'}
                                    categoryForm="animal"
                                    foodprintState={'crustaceans'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'fish'}
                                    categoryForm="animal"
                                    foodprintState={'fish'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'lamb'}
                                    categoryForm="animal"
                                    foodprintState={'lamb'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'milk'}
                                    categoryForm="animal"
                                    foodprintState={'milk'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'pork'}
                                    categoryForm="animal"
                                    foodprintState={'pork'}
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

            </div>
    
        );
        
    }

}

export default FoodprintStep2;