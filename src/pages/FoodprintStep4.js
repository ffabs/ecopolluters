import React, { Component } from 'react';
import '../App.css';
import './About.css';
import './Fooprint.css';
import ReactGA from 'react-ga';
import Header from '../components/Header';
import otherfoodpng from '../images/otherfood.png';
import FoodprintForm from '../components/FoodprintForm';
import {Link, Redirect} from 'react-router-dom';

function initializeReactGA() {
  ReactGA.initialize('UA-150607597-1');
  ReactGA.pageview('/foodprint/step4');
}
  
class FoodprintStep4 extends Component {


    render() {
        initializeReactGA()
    
        return (        

            <div className="foodprint step4-background">
                
                {this.props.foodprintStep !== 4 &&
                    <Redirect to={"/foodprint/step"+this.props.foodprintStep} />
                }

                    <Header page={'Foodprint'} logoColor="white"/>

                    <div className="foodprint-alignment">

                        <div className="foodprint-intro">

                            <div className="foodprint-intro-title">
                                FOODPRINT CALCULATOR
                            </div>
                            
                            <div className="progress-overview">
                                <div className="progress-box progress-box-active"></div>
                                <div className="progress-box progress-box-active"></div>
                                <div className="progress-box progress-box-active"></div>
                                <div className="progress-box progress-box-active"></div>
                            </div>

                            <div className="step-name">
                                <div>Step 4 -&nbsp;</div>
                                <div className="step-name-bold">Others</div>
                            </div>

                            <img className="step-image" src={otherfoodpng} alt="other food"/>

                            <div className="foodprint-calltoaction">
                                What other food do you consume weekly?
                            </div>

                            <div className="FoodprintForms">

                                <FoodprintForm 
                                    foodForm={'tofu'}
                                    categoryForm="otherfood"
                                    foodprintState={'tofu'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'soymilk'}
                                    categoryForm="otherfood"
                                    foodprintState={'soymilk'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'coffee'}
                                    categoryForm="otherfood"
                                    foodprintState={'coffee'}
                                    {...this.props}
                                />
                                
                                <FoodprintForm 
                                    foodForm={'dark chocolate'}
                                    categoryForm="otherfood"
                                    foodprintState={'darkchocolate'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'beer'}
                                    categoryForm="otherfood"
                                    foodprintState={'beer'}
                                    {...this.props}
                                />
                                
                                <FoodprintForm 
                                    foodForm={'wine'}
                                    categoryForm="otherfood"
                                    foodprintState={'wine'}
                                    {...this.props}
                                />
                                
                                <FoodprintForm 
                                    foodForm={'olive oil'}
                                    categoryForm="otherfood"
                                    foodprintState={'oliveoil'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'palm oil'}
                                    categoryForm="otherfood"
                                    foodprintState={'palmoil'}
                                    {...this.props}
                                />
                                
                                <FoodprintForm 
                                    foodForm={'rapeseed oil'}
                                    categoryForm="otherfood"
                                    foodprintState={'rapeseedoil'}
                                    {...this.props}
                                />
                                
                                <FoodprintForm 
                                    foodForm={'soybean oil'}
                                    categoryForm="otherfood"
                                    foodprintState={'soybeanoil'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'sunflower oil'}
                                    categoryForm="otherfood"
                                    foodprintState={'sunfloweroil'}
                                    {...this.props}
                                />
                                
                                <FoodprintForm 
                                    foodForm={'beet sugar'}
                                    categoryForm="otherfood"
                                    foodprintState={'beetsugar'}
                                    {...this.props}
                                />
                                
                                <FoodprintForm 
                                    foodForm={'cane sugar'}
                                    categoryForm="otherfood"
                                    foodprintState={'canesugar'}
                                    {...this.props}
                                />

                            </div>

                        </div>

                        <div className="wizard-buttons step4-background">

                            <button 
                                type="button"
                                className="foodprint-back foodprint-back-background4"
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
                                CALCULATE →
                            </button>
                                
                        </div>
                        
                </div>

            </div>
    
        );
        
    }

}

export default FoodprintStep4;