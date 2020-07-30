import React, { Component } from 'react';
import '../App.css';
import './About.css';
import './Fooprint.css';
import './FoodprintStep5.css';
import '../components/Solution.css';
import ReactGA from 'react-ga';
import Header from '../components/Header';
import {Redirect} from 'react-router-dom';
import Icon from '../components/Icon';
import Data from '../impact-data.json';
import FBShare from '../components/FBShare';
import CO2 from '../components/CO2';
import Land from '../components/Land';
import Water from '../components/Water';
import arrowDesktop from '../images/arrowDesktop.png';
import arrowMobile from '../images/arrowMobile.png';
import Alternative from '../components/Alternative';
import Grams from '../components/Grams';
import Datasource from '../components/Datasource';

function initializeReactGA() {
  ReactGA.initialize('UA-150607597-1');
  ReactGA.pageview('/foodprint/step5');
}
  
class FoodprintStep5 extends Component {

    checkCategory(foodName) {
        switch(foodName) {
            case "apples":
                return("fruits");
            break;
            case "bananas":
                return("fruits");
            break;
            case "berries and grapes":
                return("fruits");
            break;
            case "broccolis":
                return("fruits");
            break;
            case "cabbage":
                return("fruits");
            break;
            case "cassavas":
                return("fruits");
            break;
            case "citrus fruits":
                return("fruits");
            break;
            case "lemons":
                return("fruits");
            break;
            case "oranges":
                return("fruits");
            break;
            case "avocados":
                return("fruits");
            break;
            case "groundnuts":
                return("fruits");
            break;
            case "nuts":
                return("fruits");
            break;
            case "onions":
                return("fruits");
            break;
            case "potatoes":
                return("fruits");
            break;
            case "root vegetables":
                return("fruits");
            break;
            case "tomatoes":
                return("fruits");
            break;
            case "other fruits":
                return("fruits");
            break;
            case "other vegetables":
                return("fruits");
            break;

            case "beef":
                return("animal");
            break;
            case "cheese":
                return("animal");
            break;
            case "chicken":
                return("animal");
            break;
            case "crustaceans":
                return("animal");
            break;
            case "eggs":
                return("animal");
            break;
            case "fish":
                return("animal");
            break;
            case "lamb":
                return("animal");
            break;
            case "milk":
                return("animal");
            break;
            case "pork":
                return("animal");
            break;

            case "bread":
                return("grains");
            break;
            case "corn flour":
                return("grains");
            break;
            case "oatmeal":
                return("grains");
            break;
            case "legumes":
                return("grains");
            break;
            case "peas":
                return("grains");
            break;
            case "rice":
                return("grains");
            break;

            case "tofu":
                return("otherfood");
            break;
            case "soymilk":
                return("otherfood");
            break;
            case "coffee":
                return("otherfood");
            break;
            case "dark chocolate":
                return("otherfood");
            break;
            case "beer":
                return("otherfood");
            break;
            case "wine":
                return("otherfood");
            break;
            case "olive oil":
                return("otherfood");
            break;
            case "palm oil":
                return("otherfood");
            break;
            case "rapeseed oil":
                return("otherfood");
            break;
            case "soybean oil":
                return("otherfood");
            break;
            case "sunflower oil":
                return("otherfood");
            break;
            case "beet sugar":
                return("otherfood");
            break;
            case "cane sugar":
                return("otherfood");
            break;

            default:
                return("otherfood");
          }
      };


    render() {
        initializeReactGA()

        let apples = this.props.apples
        let bananas = this.props.bananas
        let berriesandgrapes = this.props.berriesandgrapes
        let broccolis = this.props.broccolis
        let cabbage = this.props.cabbage
        let cassavas = this.props.cassavas
        let citrusfruits = this.props.citrusfruits
        let lemons = this.props.lemons
        let oranges = this.props.oranges
        let avocados = this.props.avocados
        let groundnuts = this.props.groundnuts
        let nuts = this.props.nuts
        let onions = this.props.onions
        let potatoes = this.props.potatoes
        let rootvegetables = this.props.rootvegetables
        let tomatoes = this.props.tomatoes
        let otherfruits = this.props.otherfruits
        let othervegetables = this.props.othervegetables
        let beef = this.props.beef
        let cheese = this.props.cheese
        let chicken = this.props.chicken
        let crustaceans = this.props.crustaceans
        let eggs = this.props.eggs
        let fish = this.props.fish
        let lamb = this.props.lamb
        let milk = this.props.milk
        let pork = this.props.pork
        let bread = this.props.bread
        let cornflour = this.props.cornflour
        let oatmeal = this.props.oatmeal
        let legumes = this.props.legumes
        let peas = this.props.peas
        let rice = this.props.rice
        let tofu = this.props.tofu
        let soymilk = this.props.soymilk
        let coffee = this.props.coffee
        let darkchocolate = this.props.darkchocolate
        let beer = this.props.beer
        let wine = this.props.wine
        let oliveoil = this.props.oliveoil
        let palmoil = this.props.palmoil
        let rapeseedoil = this.props.rapeseedoil
        let soybeanoil = this.props.soybeanoil
        let sunfloweroil = this.props.sunfloweroil
        let beetsugar = this.props.beetsugar
        let canesugar = this.props.canesugar

        let Foodprint = [apples, bananas, berriesandgrapes, broccolis, cabbage, cassavas, citrusfruits, lemons, oranges, avocados, groundnuts, nuts, onions, potatoes, rootvegetables, tomatoes, otherfruits, othervegetables, 
                        beef, cheese, chicken, crustaceans, eggs, fish, lamb, milk, pork, 
                        bread, cornflour, oatmeal, legumes, peas, rice,
                        tofu, soymilk, coffee, darkchocolate, beer, wine, oliveoil, palmoil, rapeseedoil, soybeanoil, sunfloweroil, beetsugar, canesugar];
        
        let foodData = ["apples", "bananas", "berries and grapes", "broccolis", "cabbage", "cassavas", "citrus fruits", "lemons", "oranges", "avocados", "groundnuts", "nuts", "onions", "potatoes", "root vegetables", "tomatoes", "other fruits", "other vegetables",
                        "beef", "cheese", "chicken", "crustaceans", "eggs", "fish", "lamb", "milk", "pork",
                        "bread", "corn flour", "oatmeal", "legumes", "peas", "rice",
                        "tofu", "soymilk", "coffee", "dark chocolate", "beer", "wine", "olive oil", "palm oil", "rapeseed oil", "soybean oil", "sunflower oil", "beet sugar", "cane sugar"];

        let selected = 0;

        for (let i = 0; i < Foodprint.length; i++) {
            if (Foodprint[i] != "0") {
                selected += 1;
            }
        }

        let totalCo2 = 0;
        let Co2Array = [];
        let FoodSelectedC02Array = [];
        let totalWater = 0;
        let WaterArray = [];
        let FoodSelectedWaterArray = [];
        let totalLand = 0;
        let LandArray = [];
        let FoodSelectedLandArray = [];
        let totalCalories = 0;
        let totalProteins = 0;
        let totalCarbs = 0;
        let totalFats = 0;

        for (let a = 0; a < Foodprint.length; a++) {

            let aCategory = this.checkCategory(foodData[a]);
            let aGrams = Foodprint[a] * Data[aCategory][foodData[a]].unit;

            let aCO2 = Data[aCategory][foodData[a]].co2 * aGrams;
            totalCo2 += aCO2;
            Co2Array.push(aCO2);
            FoodSelectedC02Array.push(foodData[a]);

            let aWater = Data[aCategory][foodData[a]].water * aGrams;
            totalWater += aWater;
            WaterArray.push(aWater);
            FoodSelectedWaterArray.push(foodData[a]);

            let aLand = Data[aCategory][foodData[a]].land * aGrams;
            totalLand += aLand;
            LandArray.push(aLand);
            FoodSelectedLandArray.push(foodData[a]);

            let aCalories = Data[aCategory][foodData[a]]['nutritional values'].calories * aGrams;
            totalCalories += aCalories;
            let aProteins = Data[aCategory][foodData[a]]['nutritional values'].proteins * aGrams;
            totalProteins += aProteins;
            let aCarbs = Data[aCategory][foodData[a]]['nutritional values'].carbs * aGrams;
            totalCarbs += aCarbs;
            let aFats = Data[aCategory][foodData[a]]['nutritional values'].fats * aGrams;
            totalFats += aFats;

        }


        //Co2
        totalCo2 = Number(totalCo2).toFixed(2);

        //max Co2
        let maxCo2Index = Co2Array.indexOf(Math.max.apply(Math, Co2Array));
        let maxCo2Value = Number(Co2Array[maxCo2Index]).toFixed(2);
        let foodWithMaxCo2 = FoodSelectedC02Array[maxCo2Index];
        let foodWithMaxCo2Value = Foodprint[foodData.indexOf(foodWithMaxCo2)];
        let maxCo2Percentage = (maxCo2Value / totalCo2 * 100).toFixed(0);
        let maxCO2Category = this.checkCategory(foodWithMaxCo2);
        let maxCo2Measure = Data[maxCO2Category][foodWithMaxCo2].measure;
        let maxCO2Grams = foodWithMaxCo2Value * Data[maxCO2Category][foodWithMaxCo2].unit;
        let maxCO2Optimise = Data[maxCO2Category][foodWithMaxCo2].optimise;
        let maxCO2OptimiseLowercase = maxCO2Optimise.toLowerCase();
        let maxCO2Showgrams = false;
        if (maxCO2OptimiseLowercase === "proteins" || maxCO2OptimiseLowercase === "carbs" || maxCO2OptimiseLowercase === "fats") {
            maxCO2Showgrams = true;
        }
        let maxCO2ShowDetails = false;
        if (maxCO2OptimiseLowercase === "calories" || maxCO2OptimiseLowercase === "proteins" || maxCO2OptimiseLowercase === "carbs" || maxCO2OptimiseLowercase === "fats") {
            maxCO2ShowDetails = true;
        }
        let maxCO2OptimiseNutritionalvalue = (Data[maxCO2Category][foodWithMaxCo2]['nutritional values'][maxCO2OptimiseLowercase] * maxCO2Grams).toFixed(0);
        let maxC02alternativename1 = Data[maxCO2Category][foodWithMaxCo2].alternative1.name;
        let maxC02alternativename2 = Data[maxCO2Category][foodWithMaxCo2].alternative2.name;
        let maxC02alternativename3 = Data[maxCO2Category][foodWithMaxCo2].alternative3.name;
        let maxC02alternativename4 = Data[maxCO2Category][foodWithMaxCo2].alternative4.name;
        
        //second max Co2
        Co2Array.splice(maxCo2Index, 1);
        FoodSelectedC02Array.splice(maxCo2Index, 1);
        let secondMaxCo2Index = Co2Array.indexOf(Math.max.apply(Math, Co2Array));
        let secondMaxCo2Value = Number(Co2Array[secondMaxCo2Index]).toFixed(2);
        let foodWithSecondMaxCo2 = FoodSelectedC02Array[secondMaxCo2Index];
        let foodWithSecondMaxCo2Value = Foodprint[foodData.indexOf(foodWithSecondMaxCo2)];
        let secondMaxCo2Percentage = (secondMaxCo2Value / totalCo2 * 100).toFixed(0);
        let secondMaxCO2Category = this.checkCategory(foodWithSecondMaxCo2);
        let secondMaxCo2Measure = Data[secondMaxCO2Category][foodWithSecondMaxCo2].measure;

        //third max Co2
        Co2Array.splice(secondMaxCo2Index, 1);
        FoodSelectedC02Array.splice(secondMaxCo2Index, 1);
        let thirdMaxCo2Index = Co2Array.indexOf(Math.max.apply(Math, Co2Array));
        let thirdMaxCo2Value = Number(Co2Array[thirdMaxCo2Index]).toFixed(2);
        let foodWithThirdMaxCo2 = FoodSelectedC02Array[thirdMaxCo2Index];
        let foodWithThirdMaxCo2Value = Foodprint[foodData.indexOf(foodWithThirdMaxCo2)];
        let thirdMaxCo2Percentage = (thirdMaxCo2Value / totalCo2 * 100).toFixed(0);
        let thirdMaxCO2Category = this.checkCategory(foodWithThirdMaxCo2);
        let thirdMaxCo2Measure = Data[thirdMaxCO2Category][foodWithThirdMaxCo2].measure;


        //Water
        totalWater = Number(totalWater).toFixed(2);

        //max Water
        let maxWaterIndex = WaterArray.indexOf(Math.max.apply(Math, WaterArray));
        let maxWaterValue = Number(WaterArray[maxWaterIndex]).toFixed(2);
        let foodWithMaxWater = FoodSelectedWaterArray[maxWaterIndex];
        let foodWithMaxWaterValue = Foodprint[foodData.indexOf(foodWithMaxWater)];
        let maxWaterPercentage = (maxWaterValue / totalWater * 100).toFixed(0);
        let maxWaterCategory = this.checkCategory(foodWithMaxWater);
        let maxWaterMeasure = Data[maxWaterCategory][foodWithMaxWater].measure;
        let maxWaterGrams = foodWithMaxWaterValue * Data[maxWaterCategory][foodWithMaxWater].unit;
        let maxWaterOptimise = Data[maxWaterCategory][foodWithMaxWater].optimise;
        let maxWaterOptimiseLowercase = maxWaterOptimise.toLowerCase();
        let maxWaterShowgrams = false;
        if (maxWaterOptimiseLowercase === "proteins" || maxWaterOptimiseLowercase === "carbs" || maxWaterOptimiseLowercase === "fats") {
            maxWaterShowgrams = true;
        }
        let maxWaterShowDetails = false;
        if (maxWaterOptimiseLowercase === "calories" || maxWaterOptimiseLowercase === "proteins" || maxWaterOptimiseLowercase === "carbs" || maxWaterOptimiseLowercase === "fats") {
            maxWaterShowDetails = true;
        }
        let maxWaterOptimiseNutritionalvalue = (Data[maxWaterCategory][foodWithMaxWater]['nutritional values'][maxWaterOptimiseLowercase] * maxWaterGrams).toFixed(0);
        let maxWateralternativename1 = Data[maxWaterCategory][foodWithMaxWater].alternative1.name;
        let maxWateralternativename2 = Data[maxWaterCategory][foodWithMaxWater].alternative2.name;
        let maxWateralternativename3 = Data[maxWaterCategory][foodWithMaxWater].alternative3.name;
        let maxWateralternativename4 = Data[maxWaterCategory][foodWithMaxWater].alternative4.name;

        //second max Water
        WaterArray.splice(maxWaterIndex, 1);
        FoodSelectedWaterArray.splice(maxWaterIndex, 1);
        let secondMaxWaterIndex = WaterArray.indexOf(Math.max.apply(Math, WaterArray));
        let secondMaxWaterValue = Number(WaterArray[secondMaxWaterIndex]).toFixed(2);
        let foodWithSecondMaxWater = FoodSelectedWaterArray[secondMaxWaterIndex];
        let foodWithSecondMaxWaterValue = Foodprint[foodData.indexOf(foodWithSecondMaxWater)];
        let secondMaxWaterPercentage = (secondMaxWaterValue / totalWater * 100).toFixed(0);
        let secondMaxWaterCategory = this.checkCategory(foodWithSecondMaxWater);
        let secondMaxWaterMeasure = Data[secondMaxWaterCategory][foodWithSecondMaxWater].measure;

        //third max Water
        WaterArray.splice(secondMaxWaterIndex, 1);
        FoodSelectedWaterArray.splice(secondMaxWaterIndex, 1);
        let thirdMaxWaterIndex = WaterArray.indexOf(Math.max.apply(Math, WaterArray));
        let thirdMaxWaterValue = Number(WaterArray[thirdMaxWaterIndex]).toFixed(2);
        let foodWithThirdMaxWater = FoodSelectedWaterArray[thirdMaxWaterIndex];
        let foodWithThirdMaxWaterValue = Foodprint[foodData.indexOf(foodWithThirdMaxWater)];
        let thirdMaxWaterPercentage = (thirdMaxWaterValue / totalWater * 100).toFixed(0);
        let thirdMaxWaterCategory = this.checkCategory(foodWithThirdMaxWater);
        let thirdMaxWaterMeasure = Data[thirdMaxWaterCategory][foodWithThirdMaxWater].measure;


        //Land
        totalLand = Number(totalLand).toFixed(2);

        //max Land
        let maxLandIndex = LandArray.indexOf(Math.max.apply(Math, LandArray));
        let maxLandValue = Number(LandArray[maxLandIndex]).toFixed(2);
        let foodWithMaxLand = FoodSelectedLandArray[maxLandIndex];
        let foodWithMaxLandValue = Foodprint[foodData.indexOf(foodWithMaxLand)];
        let maxLandPercentage = (maxLandValue / totalLand * 100).toFixed(0);
        let maxLandCategory = this.checkCategory(foodWithMaxLand);
        let maxLandMeasure = Data[maxLandCategory][foodWithMaxLand].measure;
        let maxLandGrams = foodWithMaxLandValue * Data[maxLandCategory][foodWithMaxLand].unit;
        let maxLandOptimise = Data[maxLandCategory][foodWithMaxLand].optimise;
        let maxLandOptimiseLowercase = maxLandOptimise.toLowerCase();
        let maxLandShowgrams = false;
        if (maxLandOptimiseLowercase === "proteins" || maxLandOptimiseLowercase === "carbs" || maxLandOptimiseLowercase === "fats") {
            maxLandShowgrams = true;
        }
        let maxLandShowDetails = false;
        if (maxLandOptimiseLowercase === "calories" || maxLandOptimiseLowercase === "proteins" || maxLandOptimiseLowercase === "carbs" || maxLandOptimiseLowercase === "fats") {
            maxLandShowDetails = true;
        }
        let maxLandOptimiseNutritionalvalue = (Data[maxLandCategory][foodWithMaxLand]['nutritional values'][maxLandOptimiseLowercase] * maxLandGrams).toFixed(0);
        let maxLandalternativename1 = Data[maxLandCategory][foodWithMaxLand].alternative1.name;
        let maxLandalternativename2 = Data[maxLandCategory][foodWithMaxLand].alternative2.name;
        let maxLandalternativename3 = Data[maxLandCategory][foodWithMaxLand].alternative3.name;
        let maxLandalternativename4 = Data[maxLandCategory][foodWithMaxLand].alternative4.name;

        //second max Land
        LandArray.splice(maxLandIndex, 1);
        FoodSelectedLandArray.splice(maxLandIndex, 1);
        let secondMaxLandIndex = LandArray.indexOf(Math.max.apply(Math, LandArray));
        let secondMaxLandValue = Number(LandArray[secondMaxLandIndex]).toFixed(2);
        let foodWithSecondMaxLand = FoodSelectedLandArray[secondMaxLandIndex];
        let foodWithSecondMaxLandValue = Foodprint[foodData.indexOf(foodWithSecondMaxLand)];
        let secondMaxLandPercentage = (secondMaxLandValue / totalLand * 100).toFixed(0);
        let secondMaxLandCategory = this.checkCategory(foodWithSecondMaxLand);
        let secondMaxLandMeasure = Data[secondMaxLandCategory][foodWithSecondMaxLand].measure;

        //third max Land
        LandArray.splice(secondMaxLandIndex, 1);
        FoodSelectedLandArray.splice(secondMaxLandIndex, 1);
        let thirdMaxLandIndex = LandArray.indexOf(Math.max.apply(Math, LandArray));
        let thirdMaxLandValue = Number(LandArray[thirdMaxLandIndex]).toFixed(2);
        let foodWithThirdMaxLand = FoodSelectedLandArray[thirdMaxLandIndex];
        let foodWithThirdMaxLandValue = Foodprint[foodData.indexOf(foodWithThirdMaxLand)];
        let thirdMaxLandPercentage = (thirdMaxLandValue / totalLand * 100).toFixed(0);
        let thirdMaxLandCategory = this.checkCategory(foodWithThirdMaxLand);
        let thirdMaxLandMeasure = Data[thirdMaxLandCategory][foodWithThirdMaxLand].measure;


        //total nutritional values
        totalCalories = Number(totalCalories).toFixed(0);
        totalProteins = Number(totalProteins).toFixed(0);
        totalCarbs = Number(totalCarbs).toFixed(0);
        totalFats = Number(totalFats).toFixed(0);


        // save foodprint data
        if (this.props.foodprintStep === 5) {
            ReactGA.ga((tracker) => {
                let clientId = tracker.get('clientId');
              
                this.props.saveFoodprintData(clientId, totalCo2, totalWater, totalLand, totalCalories, totalProteins, totalCarbs, totalFats, 
                    apples, bananas, berriesandgrapes, broccolis, cabbage, cassavas, lemons, oranges, avocados, groundnuts,
                    nuts, onions, potatoes, rootvegetables, tomatoes, otherfruits, othervegetables, beef, cheese, chicken, crustaceans, 
                    eggs, fish, lamb, milk, pork, bread, cornflour, oatmeal, legumes, peas, rice, tofu, soymilk, coffee, darkchocolate,
                    beer, wine, oliveoil, palmoil, rapeseedoil, soybeanoil, sunfloweroil, beetsugar, canesugar);
                    
            });
        }


    
        return (        

            <div className="page">

            <div className="foodprint step0-background">
                
                {this.props.foodprintStep !== 5 &&
                    <Redirect to={"/foodprint/step"+this.props.foodprintStep} />
                }

                    <Header page={'Foodprint'} logoColor="white"/>

                    <div className="foodprint-alignment">

                        <div className="foodprint-ready">✅ Your environmental foodprint is ready!</div> 

                        <div className="foodselected-and-editbutton">
                            <div className="food-selected-title">{selected} Food types selected</div>

                            <button 
                                type="button"
                                className="edit-foodprint"
                                value={this.props.foodprintStep}
                                onClick={this.props.handleBack}
                            >  
                                edit
                            </button>
                        </div>

                        <div className="categories-selected">

                            <div className="four-categories">

                            <div className="category-selected categories-selected-left">

                                <div className="category-selected-title">Fruits and vegetables</div>                   
                                
                                {apples != "0" &&
                                <div className="food-selected">
                                    <div><Icon icon="apples"/></div>
                                    <div>&nbsp;• {apples}</div>
                                </div>
                                }

                                {bananas != "0" &&
                                <div className="food-selected">
                                    <div><Icon icon="bananas"/></div>
                                    <div>&nbsp;• {bananas} </div>                                    
                                </div>
                                }


                                {tomatoes != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="tomatoes"/></div>
                                    <div>&nbsp;• {tomatoes}</div>
                                </div>
                                }

                                {berriesandgrapes != "0" &&
                                <div className="food-selected">
                                    <div><Icon icon="berries and grapes"/></div>
                                    <div>&nbsp;• {berriesandgrapes} g</div> 
                                </div>
                                }

                                {broccolis != "0" &&
                                <div className="food-selected">
                                    <div><Icon icon="broccolis"/></div>
                                    <div>&nbsp;• {broccolis} g</div>
                                </div>
                                }

                                {cabbage != "0" &&
                                <div className="food-selected">
                                    <div><Icon icon="cabbage"/></div>
                                    <div>&nbsp;• {cabbage} g</div>
                                </div>
                                }                       

                                {cassavas != "0" &&
                                <div className="food-selected">
                                    <div><Icon icon="cassavas"/></div>
                                    <div>&nbsp;• {cassavas} g</div>                                    
                                </div>
                                }

                                {citrusfruits != "0" &&
                                <div className="food-selected">
                                    <div><Icon icon="citrus fruits"/></div>
                                    <div>&nbsp;• {citrusfruits} g</div>                                    
                                </div>
                                }

                                {lemons != "0" &&
                                <div className="food-selected">
                                    <div><Icon icon="lemons"/></div>
                                    <div>&nbsp;• {lemons}</div>                                    
                                </div>
                                }

                                {oranges != "0" &&
                                <div className="food-selected">
                                    <div><Icon icon="oranges"/></div>
                                    <div>&nbsp;• {oranges}</div>                                    
                                </div>
                                }

                                {avocados != "0" &&
                                <div className="food-selected">
                                    <div><Icon icon="avocados"/></div>
                                    <div>&nbsp;• {avocados}</div>                                    
                                </div>
                                }

                                {groundnuts != "0" &&
                                <div className="food-selected">
                                    <div><Icon icon="groundnuts"/></div>
                                    <div>&nbsp;• {groundnuts} g</div>
                                </div>
                                }

                                {nuts != "0" &&
                                <div className="food-selected">
                                    <div><Icon icon="nuts"/></div>
                                    <div>&nbsp;• {nuts} g</div>
                                </div>
                                }

                                {onions != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="onions"/></div>
                                    <div>&nbsp;• {onions} g</div>
                                </div>
                                }

                                {potatoes != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="potatoes"/></div>
                                    <div>&nbsp;• {potatoes} g</div>
                                </div>
                                }

                                {rootvegetables != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="root vegetables"/></div>
                                    <div>&nbsp;• {rootvegetables} g</div>
                                </div>
                                }

                                {otherfruits != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="other fruits"/></div>
                                    <div>&nbsp;• {otherfruits} g</div>
                                </div>
                                }

                                {othervegetables != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="other vegetables"/></div>
                                    <div>&nbsp;• {othervegetables} g</div>
                                </div>
                                }

                            </div>

                            <div className="category-selected">

                                <div className="category-selected-title">Animal Products</div>     

                                {eggs != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="eggs"/></div>
                                    <div>&nbsp;• {eggs}</div>
                                </div>
                                }

                                {beef != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="beef"/></div>
                                    <div>&nbsp;• {beef} g</div>
                                </div>
                                }

                                {cheese != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="cheese"/></div>
                                    <div>&nbsp;• {cheese} g</div>
                                </div>
                                }

                                {chicken != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="chicken"/></div>
                                    <div>&nbsp;• {chicken} g</div>
                                </div>
                                }

                                {crustaceans != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="crustaceans"/></div>
                                    <div>&nbsp;• {crustaceans} g</div>
                                </div>
                                }

                                {fish != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="fish"/></div>
                                    <div>&nbsp;• {fish} g</div>
                                </div>
                                }

                                {lamb != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="lamb"/></div>
                                    <div>&nbsp;• {lamb} g</div>
                                </div>
                                }

                                {milk != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="milk"/></div>
                                    <div>&nbsp;• {milk} l</div>
                                </div>
                                }

                                {pork != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="pork"/></div>
                                    <div>&nbsp;• {pork} g</div>
                                </div>
                                }

                            </div>

                            <div className="category-selected">

                                <div className="category-selected-title">Grains and Legumes</div> 

                                {bread != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="bread"/></div>
                                    <div>&nbsp;• {bread} g</div>
                                </div>
                                }

                                {cornflour != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="corn flour"/></div>
                                    <div>&nbsp;• {cornflour} g</div>
                                </div>
                                }

                                {oatmeal != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="oatmeal"/></div>
                                    <div>&nbsp;• {oatmeal} g</div>
                                </div>
                                }

                                {peas != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="peas"/></div>
                                    <div>&nbsp;• {peas} g</div>
                                </div>
                                }

                                {legumes != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="legumes"/></div>
                                    <div>&nbsp;• {legumes} g</div>
                                </div>
                                }

                                {rice != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="rice"/></div>
                                    <div>&nbsp;• {rice} g</div>
                                </div>
                                }

                            </div>

                            <div className="category-selected categories-selected-right">

                                <div className="category-selected-title">Others</div> 

                                {coffee != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="coffee"/></div>
                                    <div>&nbsp;• {coffee}</div>
                                </div>
                                }

                                {tofu != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="tofu"/></div>
                                    <div>&nbsp;• {tofu} g</div>
                                </div>
                                }

                                {soymilk != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="soymilk"/></div>
                                    <div>&nbsp;• {soymilk} l</div>
                                </div>
                                }

                                {darkchocolate != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="dark chocolate"/></div>
                                    <div>&nbsp;• {darkchocolate} g</div>
                                </div>
                                }

                                {beer != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="beer"/></div>
                                    <div>&nbsp;• {beer} l</div>
                                </div>
                                }

                                {wine != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="wine"/></div>
                                    <div>&nbsp;• {wine} l</div>
                                </div>
                                }

                                {oliveoil != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="olive oil"/></div>
                                    <div>&nbsp;• {oliveoil} l</div>
                                </div>
                                }

                                {palmoil != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="palm oil"/></div>
                                    <div>&nbsp;• {palmoil} l</div>
                                </div>
                                }

                                {rapeseedoil != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="rapeseed oil"/></div>
                                    <div>&nbsp;• {rapeseedoil} l</div>
                                </div>
                                }

                                {soybeanoil != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="soybean oil"/></div>
                                    <div>&nbsp;• {soybeanoil} l</div>
                                </div>
                                }

                                {sunfloweroil != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="sunflower oil"/></div>
                                    <div>&nbsp;• {sunfloweroil} l</div>
                                </div>
                                }

                                {beetsugar != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="beet sugar"/></div>
                                    <div>&nbsp;• {beetsugar} g</div>
                                </div>
                                }

                                {canesugar != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="cane sugar"/></div>
                                    <div>&nbsp;• {canesugar} g</div>
                                </div>
                                }

                            </div>

                            </div>

                            <div className="foodprint-nutritionalvalues">
                                <div className="foodprint-nutritionalvalues-title">Total nutritional values:</div>
                                <div>
                                    &nbsp;{totalCalories} Calories | {totalProteins} g Proteins | {totalCarbs} g Carbs | {totalFats} g Fats
                                </div>
                            </div>

                        </div>


                        <div className="weeklyfoodprint-title">Your weekly environmental foodprint</div>

                        <div className="weeklyfoodprint-cards">

                        <div className="weeklyfoodprint-impactcard">
                            <div className="impactcard co2-color">
                                <div className="impactcard-title">{totalCo2} kg of CO2</div>
                                <div className="impactcard-subtitle">Total weekly️ CO2 produced</div>
                            </div>
                            <div className="topthree-section">
                                <div className="topthree-title">💀 WORST 3</div>        
                                <div className="polluting-impact-selection">
                                    <div> <Icon icon={foodWithMaxCo2}/> </div> 
                                    <div>&nbsp;• {foodWithMaxCo2Value}</div>
                                    {maxCo2Measure === "grams" &&
                                        <div>&nbsp;g</div>
                                    }
                                    {maxCo2Measure === "liters" &&
                                        <div>&nbsp;l</div>
                                    }
                                </div>
                                <div className="polluting-impact">
                                    <div className="pollution-impact-filling co2-color" style={{width: maxCo2Percentage+"%"}}></div>
                                    <div className="polluting-impact-values">
                                        <div className="polluting-impact-percentage">{maxCo2Percentage}%</div>
                                        <div>&nbsp;• {maxCo2Value} kg of CO2</div>
                                    </div>
                                </div>

                                <div className="polluting-impact-selection">
                                    <div> <Icon icon={foodWithSecondMaxCo2}/> </div> 
                                    <div>&nbsp;• {foodWithSecondMaxCo2Value}</div>
                                    {secondMaxCo2Measure === "grams" &&
                                        <div>&nbsp;g</div>
                                    }
                                    {secondMaxCo2Measure === "liters" &&
                                        <div>&nbsp;l</div>
                                    }
                                </div>
                                <div className="polluting-impact">
                                    <div className="pollution-impact-filling co2-color" style={{width: secondMaxCo2Percentage+"%"}}></div>
                                    <div className="polluting-impact-values">
                                        <div className="polluting-impact-percentage">{secondMaxCo2Percentage}%</div>
                                        <div>&nbsp;• {secondMaxCo2Value} kg of CO2</div>
                                    </div>
                                </div>

                                <div className="polluting-impact-selection">
                                    <div> <Icon icon={foodWithThirdMaxCo2}/> </div> 
                                    <div>&nbsp;• {foodWithThirdMaxCo2Value}</div>
                                    {thirdMaxCo2Measure === "grams" &&
                                        <div>&nbsp;g</div>
                                    }
                                    {thirdMaxCo2Measure === "liters" &&
                                        <div>&nbsp;l</div>
                                    }
                                </div>
                                <div className="polluting-impact">
                                    <div className="pollution-impact-filling co2-color" style={{width: thirdMaxCo2Percentage+"%"}}></div>
                                    <div className="polluting-impact-values">
                                        <div className="polluting-impact-percentage">{thirdMaxCo2Percentage}%</div>
                                        <div>&nbsp;• {thirdMaxCo2Value} kg of CO2</div>
                                    </div>
                                </div>
                            </div>
                            <CO2 CO2={totalCo2} foodprint="true"/>
                        </div>    
    

                        <div className="weeklyfoodprint-impactcard">
                            <div className="impactcard water-color">
                                <div className="impactcard-title">{totalWater} l of water</div>
                                <div className="impactcard-subtitle">Total weekly️ water consumed</div>
                            </div>
                            <div className="topthree-section">
                                <div className="topthree-title">💀 WORST 3</div>        
                                <div className="polluting-impact-selection">
                                    <div> <Icon icon={foodWithMaxWater}/> </div> 
                                    <div>&nbsp;• {foodWithMaxWaterValue}</div>
                                    {maxWaterMeasure === "grams" &&
                                        <div>&nbsp;g</div>
                                    }
                                    {maxWaterMeasure === "liters" &&
                                        <div>&nbsp;l</div>
                                    }
                                </div>
                                <div className="polluting-impact">
                                    <div className="pollution-impact-filling water-color" style={{width: maxWaterPercentage+"%"}}></div>
                                    <div className="polluting-impact-values">
                                        <div className="polluting-impact-percentage">{maxWaterPercentage}%</div>
                                        <div>&nbsp;• {maxWaterValue} l of water</div>
                                    </div>
                                </div>
                                
                                <div className="polluting-impact-selection">
                                    <div> <Icon icon={foodWithSecondMaxWater}/> </div> 
                                    <div>&nbsp;• {foodWithSecondMaxWaterValue}</div>
                                    {secondMaxWaterMeasure === "grams" &&
                                        <div>&nbsp;g</div>
                                    }
                                    {secondMaxWaterMeasure === "liters" &&
                                        <div>&nbsp;l</div>
                                    }
                                </div>
                                <div className="polluting-impact">
                                    <div className="pollution-impact-filling water-color" style={{width: secondMaxWaterPercentage+"%"}}></div>
                                    <div className="polluting-impact-values">
                                        <div className="polluting-impact-percentage">{secondMaxWaterPercentage}%</div>
                                        <div>&nbsp;• {secondMaxWaterValue} l of water</div>
                                    </div>
                                </div>

                                <div className="polluting-impact-selection">
                                    <div> <Icon icon={foodWithThirdMaxWater}/> </div> 
                                    <div>&nbsp;• {foodWithThirdMaxWaterValue}</div>
                                    {thirdMaxWaterMeasure === "grams" &&
                                        <div>&nbsp;g</div>
                                    }
                                    {thirdMaxWaterMeasure === "liters" &&
                                        <div>&nbsp;l</div>
                                    }
                                </div>
                                <div className="polluting-impact">
                                    <div className="pollution-impact-filling water-color" style={{width: thirdMaxWaterPercentage+"%"}}></div>
                                    <div className="polluting-impact-values">
                                        <div className="polluting-impact-percentage">{thirdMaxWaterPercentage}%</div>
                                        <div>&nbsp;• {thirdMaxWaterValue} l of water</div>
                                    </div>
                                </div>
                            </div>
                            <Water water={totalWater} foodprint="true"/>
                        </div>

                            
                        <div className="weeklyfoodprint-impactcard">
                            <div className="impactcard land-color">
                                <div className="impactcard-title">{totalLand} sqm</div>
                                <div className="impactcard-subtitle">Total weekly️ land occupied</div>
                            </div>
                            <div className="topthree-section">
                                <div className="topthree-title">💀 WORST 3</div>        
                                <div className="polluting-impact-selection">
                                    <div> <Icon icon={foodWithMaxLand}/> </div> 
                                    <div>&nbsp;• {foodWithMaxLandValue}</div>
                                    {maxLandMeasure === "grams" &&
                                        <div>&nbsp;g</div>
                                    }
                                    {maxLandMeasure === "liters" &&
                                        <div>&nbsp;l</div>
                                    }
                                </div>
                                <div className="polluting-impact">
                                    <div className="pollution-impact-filling land-color" style={{width: maxLandPercentage+"%"}}></div>
                                    <div className="polluting-impact-values">
                                        <div className="polluting-impact-percentage">{maxLandPercentage}%</div>
                                        <div>&nbsp;• {maxLandValue} sqm</div>
                                    </div>
                                </div>
                                
                                <div className="polluting-impact-selection">
                                    <div> <Icon icon={foodWithSecondMaxLand}/> </div> 
                                    <div>&nbsp;• {foodWithSecondMaxLandValue}</div>
                                    {secondMaxLandMeasure === "grams" &&
                                        <div>&nbsp;g</div>
                                    }
                                    {secondMaxLandMeasure === "liters" &&
                                        <div>&nbsp;l</div>
                                    }
                                </div>
                                <div className="polluting-impact">
                                    <div className="pollution-impact-filling land-color" style={{width: secondMaxLandPercentage+"%"}}></div>
                                    <div className="polluting-impact-values">
                                        <div className="polluting-impact-percentage">{secondMaxLandPercentage}%</div>
                                        <div>&nbsp;• {secondMaxLandValue} sqm</div>
                                    </div>
                                </div>

                                <div className="polluting-impact-selection">
                                    <div> <Icon icon={foodWithThirdMaxLand}/> </div> 
                                    <div>&nbsp;• {foodWithThirdMaxLandValue}</div>
                                    {thirdMaxLandMeasure === "grams" &&
                                        <div>&nbsp;g</div>
                                    }
                                    {thirdMaxLandMeasure === "liters" &&
                                        <div>&nbsp;l</div>
                                    }
                                </div>
                                <div className="polluting-impact">
                                    <div className="pollution-impact-filling land-color" style={{width: thirdMaxLandPercentage+"%"}}></div>
                                    <div className="polluting-impact-values">
                                        <div className="polluting-impact-percentage">{thirdMaxLandPercentage}%</div>
                                        <div>&nbsp;• {thirdMaxLandValue} sqm</div>
                                    </div>
                                </div>
                            </div>
                            <Land land={totalLand} foodprint="true"/>
                        </div>



                        </div>

                        <div className="weeklyfoodprint-title">What can you do?</div>
                        <div className="weeklyfoodprint-support">We show alternatives based on same nutritional values</div>

                        <div className="foodprint-solution">
                                
                            <div className="foodprint-alternative-title-section">
                                <div className="foodprint-alternative-titleandimage">
                                    <Grams 
                                        measure={maxCo2Measure} 
                                        category={maxCO2Category} 
                                        type={foodWithMaxCo2} 
                                        grams={maxCO2Grams} 
                                        amount={foodWithMaxCo2Value} 
                                        foodprint="true"
                                    />                             
                                </div>
                                {maxCO2ShowDetails === true && 
                                <div className="foodprint-alternative-optimisenutrvalue">
                                    <div>{maxCO2OptimiseNutritionalvalue}</div>
                                    {maxCO2Showgrams === true && 
                                        <div>&nbsp;g</div>
                                    }
                                    <div>&nbsp;{maxCO2OptimiseLowercase}</div> 
                                </div>
                                }
                            </div>

                            <img className="arrow-desktop" src={arrowDesktop} alt="arrowDesktop"/>
                            <img className="arrow-mobile" src={arrowMobile} alt="arrowMobile"/>

                            <div className="alternatives-group-foodprint">

                                {maxC02alternativename1 !== "none" &&  
                                <div className="alternative-recommended-foodprint"> 
                                <div className="alternative-recommended-text"> LEAST POLLUTING ALTERNATIVE </div>                       
                                <Alternative
                                    alternative={'alternative1'}
                                    foodprint="true"
                                    optimise={maxCO2Optimise}
                                    type={foodWithMaxCo2}
                                    category={maxCO2Category}
                                    grams={maxCO2Grams}
                                    showGrams={maxCO2Showgrams}
                                />
                                </div>
                                }
                                {maxC02alternativename2 !== "none" &&    
                                <div className="alternative-not-rec-foodprint">                     
                                <Alternative
                                    alternative={'alternative2'}
                                    foodprint="true"
                                    optimise={maxCO2Optimise}
                                    type={foodWithMaxCo2}
                                    category={maxCO2Category}
                                    grams={maxCO2Grams}
                                    showGrams={maxCO2Showgrams}
                                />
                                </div>
                                }
                                {maxC02alternativename3 !== "none" &&  
                                <div className="alternative-not-rec-foodprint">                       
                                <Alternative
                                    alternative={'alternative3'}
                                    foodprint="true"
                                    optimise={maxCO2Optimise}
                                    type={foodWithMaxCo2}
                                    category={maxCO2Category}
                                    grams={maxCO2Grams}
                                    showGrams={maxCO2Showgrams}
                                />
                                </div>
                                }

                                {maxC02alternativename4 !== "none" &&   
                                <div className="alternative-not-rec-foodprint">                      
                                <Alternative
                                    alternative={'alternative4'}
                                    foodprint="true"
                                    optimise={maxCO2Optimise}
                                    type={foodWithMaxCo2}
                                    category={maxCO2Category}
                                    grams={maxCO2Grams}
                                    showGrams={maxCO2Showgrams}
                                />
                                </div>
                                }

                            </div>  

                        </div>


                        {foodWithMaxWater !== foodWithMaxCo2 &&
                                
                        <div className="foodprint-solution">

                            <div className="foodprint-alternative-title-section">
                                <div className="foodprint-alternative-titleandimage">
                                    <Grams 
                                        measure={maxWaterMeasure} 
                                        category={maxWaterCategory} 
                                        type={foodWithMaxWater} 
                                        grams={maxWaterGrams} 
                                        amount={foodWithMaxWaterValue} 
                                        foodprint="true"
                                    />                           
                                </div>
                                {maxWaterShowDetails === true && 
                                <div className="foodprint-alternative-optimisenutrvalue">
                                    <div>{maxWaterOptimiseNutritionalvalue}</div>
                                    {maxWaterShowgrams === true && 
                                        <div>&nbsp;g</div>
                                    }
                                    <div>&nbsp;{maxWaterOptimiseLowercase}</div> 
                                </div>                                
                                }
                            </div>

                            <img className="arrow-desktop" src={arrowDesktop} alt="arrowDesktop"/>
                            <img className="arrow-mobile" src={arrowMobile} alt="arrowMobile"/>

                            <div className="alternatives-group-foodprint">

                                {maxWateralternativename1 !== "none" &&    
                                <div className="alternative-recommended-foodprint"> 
                                <div className="alternative-recommended-text"> LEAST POLLUTING ALTERNATIVE </div>                       
                                <Alternative
                                    alternative={'alternative1'}
                                    foodprint="true"
                                    optimise={maxWaterOptimise}
                                    type={foodWithMaxWater}
                                    category={maxWaterCategory}
                                    grams={maxWaterGrams}
                                    showGrams={maxWaterShowgrams}
                                />
                                </div>
                                }

                                {maxWateralternativename2 !== "none" &&   
                                <div className="alternative-not-rec-foodprint">                      
                                <Alternative
                                    alternative={'alternative2'}
                                    foodprint="true"
                                    optimise={maxWaterOptimise}
                                    type={foodWithMaxWater}
                                    category={maxWaterCategory}
                                    grams={maxWaterGrams}
                                    showGrams={maxWaterShowgrams}
                                />
                                </div>
                                }

                                {maxWateralternativename3 !== "none" &&  
                                <div className="alternative-not-rec-foodprint">                       
                                <Alternative
                                    alternative={'alternative3'}
                                    foodprint="true"
                                    optimise={maxWaterOptimise}
                                    type={foodWithMaxWater}
                                    category={maxWaterCategory}
                                    grams={maxWaterGrams}
                                    showGrams={maxWaterShowgrams}
                                />
                                </div>
                                }

                                {maxWateralternativename4 !== "none" &&    
                                <div className="alternative-not-rec-foodprint">                     
                                <Alternative
                                    alternative={'alternative4'}
                                    foodprint="true"
                                    optimise={maxWaterOptimise}
                                    type={foodWithMaxWater}
                                    category={maxWaterCategory}
                                    grams={maxWaterGrams}
                                    showGrams={maxWaterShowgrams}
                                />
                                </div>
                                }

                            </div>  

                        </div>

                        }


                        {foodWithMaxLand !== foodWithMaxCo2 && foodWithMaxLand !== foodWithMaxWater &&

                        <div className="foodprint-solution">

                            <div className="foodprint-alternative-title-section">
                                <div className="foodprint-alternative-titleandimage">
                                    <Grams 
                                        measure={maxLandMeasure} 
                                        category={maxLandCategory} 
                                        type={foodWithMaxLand} 
                                        grams={maxLandGrams} 
                                        amount={foodWithMaxLandValue} 
                                        foodprint="true"
                                    />                           
                                </div>
                                {maxLandShowDetails === true && 
                                <div className="foodprint-alternative-optimisenutrvalue">
                                    <div>{maxLandOptimiseNutritionalvalue}</div>
                                    {maxLandShowgrams === true && 
                                        <div>&nbsp;g</div>
                                    }
                                    <div>&nbsp;{maxLandOptimiseLowercase}</div> 
                                </div>
                                }
                            </div>

                            <img className="arrow-desktop" src={arrowDesktop} alt="arrowDesktop"/>
                            <img className="arrow-mobile" src={arrowMobile} alt="arrowMobile"/>

                            <div className="alternatives-group-foodprint">

                                {maxLandalternativename1 !== "none" &&    
                                <div className="alternative-recommended-foodprint"> 
                                <div className="alternative-recommended-text"> LEAST POLLUTING ALTERNATIVE </div>                       
                                <Alternative
                                    alternative={'alternative1'}
                                    foodprint="true"
                                    optimise={maxLandOptimise}
                                    type={foodWithMaxLand}
                                    category={maxLandCategory}
                                    grams={maxLandGrams}
                                    showGrams={maxLandShowgrams}
                                />
                                </div>
                                }

                                {maxLandalternativename2 !== "none" &&   
                                <div className="alternative-not-rec-foodprint">                      
                                <Alternative
                                    alternative={'alternative2'}
                                    foodprint="true"
                                    optimise={maxLandOptimise}
                                    type={foodWithMaxLand}
                                    category={maxLandCategory}
                                    grams={maxLandGrams}
                                    showGrams={maxLandShowgrams}
                                />
                                </div>
                                }

                                {maxLandalternativename3 !== "none" && 
                                <div className="alternative-not-rec-foodprint">                        
                                <Alternative
                                    alternative={'alternative3'}
                                    foodprint="true"
                                    optimise={maxLandOptimise}
                                    type={foodWithMaxLand}
                                    category={maxLandCategory}
                                    grams={maxLandGrams}
                                    showGrams={maxLandShowgrams}
                                />
                                </div>
                                }

                                {maxLandalternativename4 !== "none" &&      
                                <div className="alternative-not-rec-foodprint">                   
                                <Alternative
                                    alternative={'alternative4'}
                                    foodprint="true"
                                    optimise={maxLandOptimise}
                                    type={foodWithMaxLand}
                                    category={maxLandCategory}
                                    grams={maxLandGrams}
                                    showGrams={maxLandShowgrams}
                                />
                                </div>
                                }

                            </div>  

                        </div>
                        }

                        <div className="foodprint-note">
                            <div className="note-bold">Note:&nbsp;</div>
                            <div className="note-content">we based alternatives on lessening pollution and mantaining comparable nutritional values. However we recommend to always refer to specialists to set up a salutary and well-balanced diet.</div>
                        </div>

                        <FBShare foodprint="true"/>

                        <div className="foodprint-datasource-section">

                            <Datasource />

                        </div>

                        
                    </div>

                    

            </div>

            </div>
    
        );
        
    }

}

export default FoodprintStep5;