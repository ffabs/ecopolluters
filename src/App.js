import React, { Component } from 'react';
import Home from './pages/Home';
import Impact from './pages/Impact';
import Science from './pages/Science';
import About from './pages/About';
import FoodprintStep0 from './pages/FoodprintStep0';
import FoodprintStep1 from './pages/FoodprintStep1';
import FoodprintStep2 from './pages/FoodprintStep2';
import FoodprintStep3 from './pages/FoodprintStep3';
import FoodprintStep4 from './pages/FoodprintStep4';
import FoodprintStep5 from './pages/FoodprintStep5';
import Data from './impact-data.json';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { hotjar } from 'react-hotjar';
 
hotjar.initialize(1604054);

class App extends Component {
  
  constructor (props) {
    super(props);   
    this.state = {
      unit: 1,
      measure: "item",
      calculation: false,
      newCalculation: false,
      tempCategory: 'animal',
      tempType: 'beef',
      tempAmount: '200',
      tempSelect: '1',
      category: '',
      type: '',
      amount: '',
      select: '',
      grams: '',
      foodprintStep: 0,
      foodprintRefresh: false,
      apples: '0',
      bananas: '0',
      berriesandgrapes: '0',
      broccolis: '0',
      cabbage: '0',
      cassavas: '0',
      citrusfruits: '0',
      lemons: '0',
      oranges: '0',
      groundnuts: '0',
      nuts: '0',
      onions: '0',
      potatoes: '0',
      rootvegetables: '0',
      tomatoes: '0',
      otherfruits: '0',
      othervegetables: '0',
      beef: '0',
      cheese: '0',
      chicken: '0',
      crustaceans: '0',
      eggs: '0',
      fish: '0',
      lamb: '0',
      milk: '0',
      pork: '0',
      bread: '0',
      cornflour: '0',
      oatmeal: '0',
      legumes: '0',
      peas: '0',
      rice: '0',
      tofu: '0',
      soymilk: '0',
      coffee: '0',
      darkchocolate: '0',
      beer: '0',
      wine: '0',
      oliveoil: '0',
      palmoil: '0',
      rapeseedoil: '0',
      soybeanoil: '0',
      sunfloweroil: '0',
      beetsugar: '0',
      canesugar: '0',
    };

    this.handleFoodprintInput = this.handleFoodprintInput.bind(this);
  }

  handleAmount = event => {
    const tempAmount = event.target.value;
    this.setState({
      tempAmount: tempAmount,
      newCalculation: true
    });
  }

  handleSelect = event => {
    const tempSelect = event.target.value;
    this.setState({
      tempSelect: tempSelect,
      newCalculation: true
    });
  }

  handleType = event => {
    const tempType = event.target.value;
    let tempAmount = Data[this.state.tempCategory][tempType].defaultAmount;
    this.setState({
      tempType: tempType,
      tempAmount: tempAmount,
      newCalculation: true
    });
  }

  handleCalculation = event => {
    let unit = Data[this.state.tempCategory][this.state.tempType].unit;
    let measure = Data[this.state.tempCategory][this.state.tempType].measure;
    const grams = this.state.tempAmount*unit;
    const type = this.state.tempType;
    const category = this.state.tempCategory;
    this.setState({
      category: category,
      type: type,
      amount: this.state.tempAmount,
      select: this.state.tempSelect,
      grams: grams,
      calculation: true,
      newCalculation: false,
      unit: unit,
      measure: measure
    });
  }

  handleSolution = event => {
    const alternative = event.target.name;
    let category = Data[this.state.category][this.state.type][alternative].category;
    let type = Data[this.state.category][this.state.type][alternative].name;
    let alternativeUnit = Data[category][type].unit;
    let unit = Data[category][type].unit;
    let measure = Data[category][type].measure;
    let optimise = Data[this.state.category][this.state.type].optimise;
    let amount = 1;
    if(optimise === "CALORIES" || optimise === "PROTEINS" || optimise === "CARBS" || optimise === "FATS" ) {
      optimise = optimise.toLowerCase();
      let alternativeoptimise = Data[category][type]["nutritional values"][optimise];
      let currentnutrvaluetoaimat = ((this.state.grams * Data[this.state.category][this.state.type]["nutritional values"][optimise]).toFixed(0));
      amount = +(currentnutrvaluetoaimat / alternativeoptimise / alternativeUnit).toFixed(1);
    } else {
      amount = +(this.state.amount * this.state.unit * Data[this.state.category][this.state.type][alternative].amount / alternativeUnit).toFixed(1);
    }
    if(measure === "grams"){
      amount = amount.toFixed(0);
    }
    let grams = amount*unit;
    this.setState({
      category: category,
      type: type,
      amount: amount,
      tempCategory: category,
      tempType: type,
      tempAmount: amount,
      // select: this.state.tempSelect,
      grams: grams,
      calculation: true,
      newCalculation: false,
      // calculation: false,
      // newCalculation: true,
      unit: unit,
      measure: measure
    });
  }

  handleCategory = event => {
    const tempCategory = event.target.value;
    switch(tempCategory) {
      case "animal":
        this.setState({
          tempCategory: 'animal',
          tempType: 'beef',
          newCalculation: true,
          tempAmount: Data[tempCategory].beef.defaultAmount
        });
      break;
      case "fruits":
        this.setState({
          tempCategory: 'fruits',
          tempType: 'apples',
          newCalculation: true,
          tempAmount: Data[tempCategory].apples.defaultAmount
        });
      break;
      case "grains":
        this.setState({
          tempCategory: 'grains',
          tempType: 'bread',
          newCalculation: true,
          tempAmount: Data[tempCategory].bread.defaultAmount
        });
      break;
      case "otherfood":
        this.setState({
          tempCategory: 'otherfood',
          tempType: "rolls",
          newCalculation: true,
          tempAmount: Data[tempCategory]["rolls"].defaultAmount
        });
      break;
      default:
        console.log ("null category");
        this.setState({
          tempCategory: 'animal',
          tempType: 'beef',
          newCalculation: true,
          tempAmount: Data[tempCategory].beef.defaultAmount
        });
    }
  }


  // wizard:

  handleNext = event => {
    let foodprintNextStep = Number(event.target.value) + 1;
    this.setState({
      foodprintStep: foodprintNextStep
    });
  }

  handleBack = event => {
    let foodprintNextStep = Number(event.target.value) - 1;
    this.setState({
      foodprintStep: foodprintNextStep
    });
  }

  handleFoodprintInput(input, foodForm) {
    if (input<0) {
      input = 0;
    }
    this.setState({
      [foodForm]: input,
      foodprintRefresh: true,
    });
  }

  

  render() {
    return (
      <HashRouter>
        <ScrollToTop>
          <Switch>
            <Route exact={true} path='/' render={() => (
              <Home 
                amount={this.state.amount}
                select={this.state.select}
                grams={this.state.grams}
                type={this.state.type}
                category={this.state.category}
                calculation={this.state.calculation}
                handleAmount={this.handleAmount}
                handleSelect={this.handleSelect}
                handleType={this.handleType}
                handleCalculation={this.handleCalculation}
                handleCategory={this.handleCategory}
              />
            )}/>
            <Route exact={true} path='/impact' render={() => (
              <Impact 
                amount={this.state.amount}
                select={this.state.select}
                grams={this.state.grams}
                unit={this.state.unit}
                measure={this.state.measure}
                type={this.state.type}
                category={this.state.category}
                tempCategory={this.state.tempCategory}
                tempType={this.state.tempType}
                tempAmount={this.state.tempAmount}
                tempSelect={this.state.tempSelect}
                calculation={this.state.calculation}
                newCalculation={this.state.newCalculation}
                handleAmount={this.handleAmount}
                handleSelect={this.handleSelect}
                handleType={this.handleType}
                handleCalculation={this.handleCalculation}
                handleCategory={this.handleCategory}
                handleSolution={this.handleSolution}
              />
            )}/>
            <Route exact={true} path='/science' render={() => (
              <Science />
            )}/>
            <Route exact={true} path='/about' render={() => (
              <About />
            )}/>
            <Route exact={true} path='/foodprint/step0' render={() => (
              <FoodprintStep0 
                foodprintStep={this.state.foodprintStep} 
                handleNext={this.handleNext}
              />
            )}/>
            <Route exact={true} path='/foodprint/step1' render={() => (
              <FoodprintStep1
                foodprintStep={this.state.foodprintStep}
                foodprintRefresh={this.state.foodprintRefresh}
                handleNext={this.handleNext}
                handleBack={this.handleBack}
                handleFoodprintInput={this.handleFoodprintInput}
                apples={this.state.apples} 
                bananas={this.state.bananas}
                berriesandgrapes = {this.state.berriesandgrapes}
                broccolis={this.state.broccolis}
                cabbage={this.state.cabbage}
                cassavas={this.state.cassavas}
                citrusfruits = {this.state.citrusfruits}
                lemons = {this.state.lemons}
                oranges = {this.state.oranges}
                groundnuts={this.state.groundnuts}
                nuts={this.state.nuts}
                onions={this.state.onions}
                potatoes={this.state.potatoes}
                rootvegetables = {this.state.rootvegetables}
                tomatoes={this.state.tomatoes}
                otherfruits = {this.state.otherfruits}
                othervegetables = {this.state.othervegetables}
              />
            )}/>
            <Route exact={true} path='/foodprint/step2' render={() => (
              <FoodprintStep2
                foodprintStep={this.state.foodprintStep} 
                foodprintRefresh={this.state.foodprintRefresh}
                handleNext={this.handleNext}
                handleBack={this.handleBack}
                handleFoodprintInput={this.handleFoodprintInput}
                beef={this.state.beef}
                cheese={this.state.cheese}
                chicken={this.state.chicken}
                crustaceans={this.state.crustaceans}
                eggs={this.state.eggs}
                fish={this.state.fish}
                lamb={this.state.lamb}
                milk={this.state.milk}
                pork={this.state.pork}
              />
            )}/>
            <Route exact={true} path='/foodprint/step3' render={() => (
              <FoodprintStep3
                foodprintStep={this.state.foodprintStep} 
                foodprintRefresh={this.state.foodprintRefresh}
                handleNext={this.handleNext}
                handleBack={this.handleBack}
                handleFoodprintInput={this.handleFoodprintInput}
                bread={this.state.bread}
                cornflour={this.state.cornflour}
                oatmeal={this.state.oatmeal}
                legumes={this.state.legumes}
                peas={this.state.peas}
                rice={this.state.rice}
              />
            )}/>
            <Route exact={true} path='/foodprint/step4' render={() => (
              <FoodprintStep4
                foodprintStep={this.state.foodprintStep} 
                foodprintRefresh={this.state.foodprintRefresh}
                handleNext={this.handleNext}
                handleBack={this.handleBack}
                handleFoodprintInput={this.handleFoodprintInput}
                tofu={this.state.tofu}
                soymilk={this.state.soymilk}
                coffee={this.state.coffee}
                darkchocolate={this.state.darkchocolate}
                beer={this.state.beer}
                wine={this.state.wine}
                oliveoil={this.state.oliveoil}
                palmoil={this.state.palmoil}
                rapeseedoil={this.state.rapeseedoil}
                soybeanoil={this.state.soybeanoil}
                sunfloweroil={this.state.sunfloweroil}
                beetsugar={this.state.beetsugar}
                canesugar={this.state.canesugar}
              />
            )}/>
            <Route exact={true} path='/foodprint/step5' render={() => (
              <FoodprintStep5
                foodprintStep={this.state.foodprintStep}
                handleBack={this.handleBack}
                apples={this.state.apples} 
                bananas={this.state.bananas}
                berriesandgrapes = {this.state.berriesandgrapes}
                broccolis={this.state.broccolis}
                cabbage={this.state.cabbage}                
                cassavas={this.state.cassavas}
                citrusfruits = {this.state.citrusfruits}
                lemons = {this.state.lemons}
                oranges = {this.state.oranges}
                groundnuts={this.state.groundnuts}
                nuts={this.state.nuts}
                onions={this.state.onions}
                potatoes={this.state.potatoes}
                rootvegetables = {this.state.rootvegetables}
                tomatoes={this.state.tomatoes}
                otherfruits = {this.state.otherfruits}
                othervegetables = {this.state.othervegetables}
                beef={this.state.beef}
                cheese={this.state.cheese}
                chicken={this.state.chicken}
                crustaceans={this.state.crustaceans}
                eggs={this.state.eggs}
                fish={this.state.fish}
                lamb={this.state.lamb}
                milk={this.state.milk}
                pork={this.state.pork}
                bread={this.state.bread}
                cornflour={this.state.cornflour}
                oatmeal={this.state.oatmeal}
                legumes={this.state.legumes}
                peas={this.state.peas}
                rice={this.state.rice}
                tofu={this.state.tofu}
                soymilk={this.state.soymilk}
                coffee={this.state.coffee}
                darkchocolate={this.state.darkchocolate}
                beer={this.state.beer}
                wine={this.state.wine}
                oliveoil={this.state.oliveoil}
                palmoil={this.state.palmoil}
                rapeseedoil={this.state.rapeseedoil}
                soybeanoil={this.state.soybeanoil}
                sunfloweroil={this.state.sunfloweroil}
                beetsugar={this.state.beetsugar}
                canesugar={this.state.canesugar}
              />
            )}/>
            <Route render={() => (
              <Redirect to="/" />
            )}/>
          </Switch>
        </ScrollToTop>
      </HashRouter>
    );
  }
}
export default App;