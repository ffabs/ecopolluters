import React, { Component } from 'react';
import '../App.css';
import './About.css';
import './Fooprint.css';
import ReactGA from 'react-ga';
import Header from '../components/Header';
import fruitspng from '../images/fruits.png';
import FoodprintForm from '../components/FoodprintForm';
import {Redirect} from 'react-router-dom';

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

                    <Header page={'Foodprint'} logoColor="white"/>

                    <div className="foodprint-alignment">

                        <div className="foodprint-intro">

                            <div className="foodprint-intro-title">
                                FIND OUT YOUR FOODPRINT
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
                                What did you eat last week?
                            </div>

                            <div className="FoodprintForms">

                                <FoodprintForm 
                                    foodForm={'apples'}
                                    categoryForm="fruits"
                                    foodprintState={'apples'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'bananas'}
                                    categoryForm="fruits"
                                    foodprintState={'bananas'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'tomatoes'}
                                    categoryForm="fruits"
                                    foodprintState={'tomatoes'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'berries and grapes'}
                                    categoryForm="fruits"
                                    foodprintState={'berriesandgrapes'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'brassicas'}
                                    categoryForm="fruits"
                                    foodprintState={'brassicas'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'cassavas'}
                                    categoryForm="fruits"
                                    foodprintState={'cassavas'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'citrus fruits'}
                                    categoryForm="fruits"
                                    foodprintState={'citrusfruits'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'groundnuts'}
                                    categoryForm="fruits"
                                    foodprintState={'groundnuts'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'nuts'}
                                    categoryForm="fruits"
                                    foodprintState={'nuts'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'onions'}
                                    categoryForm="fruits"
                                    foodprintState={'onions'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'potatoes'}
                                    categoryForm="fruits"
                                    foodprintState={'potatoes'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'root vegetables'}
                                    categoryForm="fruits"
                                    foodprintState={'rootvegetables'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'other fruits'}
                                    categoryForm="fruits"
                                    foodprintState={'otherfruits'}
                                    {...this.props}
                                />

                                <FoodprintForm 
                                    foodForm={'other vegetables'}
                                    categoryForm="fruits"
                                    foodprintState={'othervegetables'}
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