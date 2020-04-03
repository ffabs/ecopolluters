import React, { Component } from 'react';
import '../App.css';
import './About.css';
import './Fooprint.css';
import ReactGA from 'react-ga';
import Header from '../components/Header';
import fruitspng from '../images/fruits.png';
import FoodprintForm from '../components/FoodprintForm';
import closewizard from '../images/closewizard.png';
import {Link, Redirect} from 'react-router-dom';

function initializeReactGA() {
  ReactGA.initialize('UA-150607597-1');
  ReactGA.pageview('/foodprint/step1');
}
  
class FoodprintStep1 extends Component {


    render() {
        initializeReactGA()
    
        return (        

            <div className="foodprint step1-background">
                
                {this.props.foodprintStep !== 1 &&
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
                                <div className="progress-box"></div>
                                <div className="progress-box"></div>
                                <div className="progress-box"></div>
                            </div>

                            <div className="step-name">
                                <div>Step 1 -&nbsp;</div>
                                <div className="step-name-bold">Fruits and vegetables</div>
                            </div>

                            <img className="step-image" src={fruitspng} alt="fruits"/>

                            <div className="foodprint-calltoaction">
                                What is your fruit and vegetables consumption weekly?
                            </div>

                            <div className="FoodprintForms">

                                <FoodprintForm 
                                    foodForm={'apples'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'bananas'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'berries and grapes'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'brassicas'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'cassavas'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'citrus fruits'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'groundnuts'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'nuts'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'onions'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'potatoes'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'root vegetables'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'tomatoes'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'other fruits'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'other vegetables'}
                                    {...this.props}
                                />

                            </div>

                        </div>

                        <div className="wizard-buttons step1-background">

                            <button 
                                type="button"
                                className="foodprint-back foodprint-back-background1"
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

export default FoodprintStep1;