import React, { Component } from 'react';
import '../App.css';
import './About.css';
import './Fooprint.css';
import './FoodprintStep5.css';
import ReactGA from 'react-ga';
import Header from '../components/Header';
import closewizard from '../images/closewizard.png';
import {Link, Redirect} from 'react-router-dom';
import Icon from '../components/Icon';
import Data from '../impact-data.json';

function initializeReactGA() {
  ReactGA.initialize('UA-150607597-1');
  ReactGA.pageview('/foodprint/step5');
}
  
class FoodprintStep5 extends Component {


    render() {
        initializeReactGA()
        
        let apples = this.props.apples
        let bananas = this.props.bananas
        let berriesandgrapes = this.props.berriesandgrapes
        let brassicas = this.props.brassicas
        let cassavas = this.props.cassavas
        let citrusfruits = this.props.citrusfruits
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
        let otherlegumes = this.props.otherlegumes
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

        let Foodprint = [apples, bananas, berriesandgrapes, brassicas, cassavas, citrusfruits, groundnuts, nuts, onions, potatoes, rootvegetables, tomatoes, otherfruits, othervegetables, 
                        beef, cheese, chicken, crustaceans, eggs, fish, lamb, milk, pork, 
                        bread, cornflour, oatmeal, otherlegumes, peas, rice,
                        tofu, soymilk, coffee, darkchocolate, beer, wine, oliveoil, palmoil, rapeseedoil, soybeanoil, sunfloweroil, beetsugar, canesugar];
        
        let foodData = ["apples", "bananas", "berries and grapes", "brassicas", "cassavas", "citrus fruits", "groundnuts", "nuts", "onions", "potatoes", "root vegetables", "tomatoes", "other fruits", "other vegetables",
                        "beef", "cheese", "chicken", "crustaceans", "eggs", "fish", "lamb", "milk", "pork",
                        "bread", "corn flour", "oatmeal", "other legumes", "peas", "rice",
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

        //fruits
        let fruitsData = ["apples", "bananas", "berries and grapes", "brassicas", "cassavas", "citrus fruits", "groundnuts", "nuts", "onions", "potatoes", "root vegetables", "tomatoes", "other fruits", "other vegetables"];
        let fruitsFoodprint = [apples, bananas, berriesandgrapes, brassicas, cassavas, citrusfruits, groundnuts, nuts, onions, potatoes, rootvegetables, tomatoes, otherfruits, othervegetables];
        for (let j = 0; j < fruitsFoodprint.length; j++) {
            if (fruitsFoodprint[j] != "0") {
                totalCo2 += Data.fruits[fruitsData[j]].co2 * fruitsFoodprint[j] * Data.fruits[fruitsData[j]].unit;
                Co2Array.push(Data.fruits[fruitsData[j]].co2 * fruitsFoodprint[j] * Data.fruits[fruitsData[j]].unit);
                FoodSelectedC02Array.push(fruitsData[j]);
                totalWater += Data.fruits[fruitsData[j]].water * fruitsFoodprint[j] * Data.fruits[fruitsData[j]].unit;
                WaterArray.push(Data.fruits[fruitsData[j]].water * fruitsFoodprint[j] * Data.fruits[fruitsData[j]].unit);
                FoodSelectedWaterArray.push(fruitsData[j]);
                totalLand += Data.fruits[fruitsData[j]].land * fruitsFoodprint[j] * Data.fruits[fruitsData[j]].unit;
                LandArray.push(Data.fruits[fruitsData[j]].land * fruitsFoodprint[j] * Data.fruits[fruitsData[j]].unit);
                FoodSelectedLandArray.push(fruitsData[j]);
                totalCalories += Data.fruits[fruitsData[j]]['nutritional values'].calories * fruitsFoodprint[j] * Data.fruits[fruitsData[j]].unit;
                totalProteins += Data.fruits[fruitsData[j]]['nutritional values'].proteins * fruitsFoodprint[j] * Data.fruits[fruitsData[j]].unit;
                totalCarbs += Data.fruits[fruitsData[j]]['nutritional values'].carbs * fruitsFoodprint[j] * Data.fruits[fruitsData[j]].unit;
                totalFats += Data.fruits[fruitsData[j]]['nutritional values'].fats * fruitsFoodprint[j] * Data.fruits[fruitsData[j]].unit;
            }
        }

        //animal
        let animalData = ["beef", "cheese", "chicken", "crustaceans", "eggs", "fish", "lamb", "milk", "pork"];
        let animalFoodprint = [beef, cheese, chicken, crustaceans, eggs, fish, lamb, milk, pork];
        for (let z = 0; z < animalFoodprint.length; z++) {
            if (animalFoodprint[z] != "0") {
                totalCo2 += Data.animal[animalData[z]].co2 * animalFoodprint[z] * Data.animal[animalData[z]].unit;
                Co2Array.push(Data.animal[animalData[z]].co2 * animalFoodprint[z] * Data.animal[animalData[z]].unit);
                FoodSelectedC02Array.push(animalData[z]);
                totalWater += Data.animal[animalData[z]].water * animalFoodprint[z] * Data.animal[animalData[z]].unit;
                WaterArray.push(Data.animal[animalData[z]].water * animalFoodprint[z] * Data.animal[animalData[z]].unit);
                FoodSelectedWaterArray.push(animalData[z]);
                totalLand += Data.animal[animalData[z]].land * animalFoodprint[z] * Data.animal[animalData[z]].unit;
                LandArray.push(Data.animal[animalData[z]].land * animalFoodprint[z] * Data.animal[animalData[z]].unit);
                FoodSelectedLandArray.push(animalData[z]);
                totalCalories += Data.animal[animalData[z]]['nutritional values'].calories * animalFoodprint[z] * Data.animal[animalData[z]].unit;
                totalProteins += Data.animal[animalData[z]]['nutritional values'].proteins * animalFoodprint[z] * Data.animal[animalData[z]].unit;
                totalCarbs += Data.animal[animalData[z]]['nutritional values'].carbs * animalFoodprint[z] * Data.animal[animalData[z]].unit;
                totalFats += Data.animal[animalData[z]]['nutritional values'].fats * animalFoodprint[z] * Data.animal[animalData[z]].unit;
            }
        }

        //grains
        let grainsData = ["bread", "corn flour", "oatmeal", "other legumes", "peas", "rice"];
        let grainsFoodprint = [bread, cornflour, oatmeal, otherlegumes, peas, rice];
        for (let q = 0; q < grainsFoodprint.length; q++) {
            if (grainsFoodprint[q] != "0") {
                totalCo2 += Data.grains[grainsData[q]].co2 * grainsFoodprint[q] * Data.grains[grainsData[q]].unit;
                Co2Array.push(Data.grains[grainsData[q]].co2 * grainsFoodprint[q] * Data.grains[grainsData[q]].unit);
                FoodSelectedC02Array.push(grainsData[q]);
                totalWater += Data.grains[grainsData[q]].water * grainsFoodprint[q] * Data.grains[grainsData[q]].unit;
                WaterArray.push(Data.grains[grainsData[q]].water * grainsFoodprint[q] * Data.grains[grainsData[q]].unit);
                FoodSelectedWaterArray.push(grainsData[q]);
                totalLand += Data.grains[grainsData[q]].land * grainsFoodprint[q] * Data.grains[grainsData[q]].unit;
                LandArray.push(Data.grains[grainsData[q]].land * grainsFoodprint[q] * Data.grains[grainsData[q]].unit);
                FoodSelectedLandArray.push(grainsData[q]);
                totalCalories += Data.grains[grainsData[q]]['nutritional values'].calories * grainsFoodprint[q] * Data.grains[grainsData[q]].unit;
                totalProteins += Data.grains[grainsData[q]]['nutritional values'].proteins * grainsFoodprint[q] * Data.grains[grainsData[q]].unit;
                totalCarbs += Data.grains[grainsData[q]]['nutritional values'].carbs * grainsFoodprint[q] * Data.grains[grainsData[q]].unit;
                totalFats += Data.grains[grainsData[q]]['nutritional values'].fats * grainsFoodprint[q] * Data.grains[grainsData[q]].unit;
            }
        }

        //otherfood
        let otherfoodData = ["tofu", "soymilk", "coffee", "dark chocolate", "beer", "wine", "olive oil", "palm oil", "rapeseed oil", "soybean oil", "sunflower oil", "beet sugar", "cane sugar"];
        let otherfoodFoodprint = [tofu, soymilk, coffee, darkchocolate, beer, wine, oliveoil, palmoil, rapeseedoil, soybeanoil, sunfloweroil, beetsugar, canesugar];
        for (let p = 0; p < otherfoodFoodprint.length; p++) {
            if (otherfoodFoodprint[p] != "0") {
                totalCo2 += Data.otherfood[otherfoodData[p]].co2 * otherfoodFoodprint[p] * Data.otherfood[otherfoodData[p]].unit;
                Co2Array.push(Data.otherfood[otherfoodData[p]].co2 * otherfoodFoodprint[p] * Data.otherfood[otherfoodData[p]].unit);
                FoodSelectedC02Array.push(otherfoodData[p]);
                totalWater += Data.otherfood[otherfoodData[p]].water * otherfoodFoodprint[p] * Data.otherfood[otherfoodData[p]].unit;
                WaterArray.push(Data.otherfood[otherfoodData[p]].water * otherfoodFoodprint[p] * Data.otherfood[otherfoodData[p]].unit);
                FoodSelectedWaterArray.push(otherfoodData[p]);
                totalLand += Data.otherfood[otherfoodData[p]].land * otherfoodFoodprint[p] * Data.otherfood[otherfoodData[p]].unit;
                LandArray.push(Data.otherfood[otherfoodData[p]].land * otherfoodFoodprint[p] * Data.otherfood[otherfoodData[p]].unit);
                FoodSelectedLandArray.push(otherfoodData[p]);
                totalCalories += Data.otherfood[otherfoodData[p]]['nutritional values'].calories * otherfoodFoodprint[p] * Data.otherfood[otherfoodData[p]].unit;
                totalProteins += Data.otherfood[otherfoodData[p]]['nutritional values'].proteins * otherfoodFoodprint[p] * Data.otherfood[otherfoodData[p]].unit;
                totalCarbs += Data.otherfood[otherfoodData[p]]['nutritional values'].carbs * otherfoodFoodprint[p] * Data.otherfood[otherfoodData[p]].unit;
                totalFats += Data.otherfood[otherfoodData[p]]['nutritional values'].fats * otherfoodFoodprint[p] * Data.otherfood[otherfoodData[p]].unit;
            }
        }


        //Co2
        totalCo2 = Number(totalCo2).toFixed(2);

        //max Co2
        let maxCo2Index = Co2Array.indexOf(Math.max.apply(Math, Co2Array));
        let maxCo2Value = Number(Co2Array[maxCo2Index]).toFixed(2);
        let foodWithMaxCo2 = FoodSelectedC02Array[maxCo2Index];
        let foodWithMaxCo2Value = Foodprint[foodData.indexOf(foodWithMaxCo2)];
        let maxCo2Percentage = (maxCo2Value / totalCo2 * 100).toFixed(0);
        
        //second max Co2
        Co2Array.splice(maxCo2Index, 1);
        FoodSelectedC02Array.splice(maxCo2Index, 1);
        let secondMaxCo2Index = Co2Array.indexOf(Math.max.apply(Math, Co2Array));
        let secondMaxCo2Value = Number(Co2Array[secondMaxCo2Index]).toFixed(2);
        let foodWithSecondMaxCo2 = FoodSelectedC02Array[secondMaxCo2Index];
        let foodWithSecondMaxCo2Value = Foodprint[foodData.indexOf(foodWithSecondMaxCo2)];
        let secondMaxCo2Percentage = (secondMaxCo2Value / totalCo2 * 100).toFixed(0);

        //third max Co2
        Co2Array.splice(secondMaxCo2Index, 1);
        FoodSelectedC02Array.splice(secondMaxCo2Index, 1);
        let thirdMaxCo2Index = Co2Array.indexOf(Math.max.apply(Math, Co2Array));
        let thirdMaxCo2Value = Number(Co2Array[thirdMaxCo2Index]).toFixed(2);
        let foodWithThirdMaxCo2 = FoodSelectedC02Array[thirdMaxCo2Index];
        let foodWithThirdMaxCo2Value = Foodprint[foodData.indexOf(foodWithThirdMaxCo2)];
        let thirdMaxCo2Percentage = (thirdMaxCo2Value / totalCo2 * 100).toFixed(0);


        //Water
        totalWater = Number(totalWater).toFixed(2);

        //max Water
        let maxWaterIndex = WaterArray.indexOf(Math.max.apply(Math, WaterArray));
        let maxWaterValue = Number(WaterArray[maxWaterIndex]).toFixed(2);
        let foodWithMaxWater = FoodSelectedWaterArray[maxWaterIndex];
        let foodWithMaxWaterValue = Foodprint[foodData.indexOf(foodWithMaxWater)];
        let maxWaterPercentage = (maxWaterValue / totalWater * 100).toFixed(0);

        //second max Water
        WaterArray.splice(maxWaterIndex, 1);
        FoodSelectedWaterArray.splice(maxWaterIndex, 1);
        let secondMaxWaterIndex = WaterArray.indexOf(Math.max.apply(Math, WaterArray));
        let secondMaxWaterValue = Number(WaterArray[secondMaxWaterIndex]).toFixed(2);
        let foodWithSecondMaxWater = FoodSelectedWaterArray[secondMaxWaterIndex];
        let foodWithSecondMaxWaterValue = Foodprint[foodData.indexOf(foodWithSecondMaxWater)];
        let secondMaxWaterPercentage = (secondMaxWaterValue / totalWater * 100).toFixed(0);

        //third max Water
        WaterArray.splice(secondMaxWaterIndex, 1);
        FoodSelectedWaterArray.splice(secondMaxWaterIndex, 1);
        let thirdMaxWaterIndex = WaterArray.indexOf(Math.max.apply(Math, WaterArray));
        let thirdMaxWaterValue = Number(WaterArray[thirdMaxWaterIndex]).toFixed(2);
        let foodWithThirdMaxWater = FoodSelectedWaterArray[thirdMaxWaterIndex];
        let foodWithThirdMaxWaterValue = Foodprint[foodData.indexOf(foodWithThirdMaxWater)];
        let thirdMaxWaterPercentage = (thirdMaxWaterValue / totalWater * 100).toFixed(0);


        //Land
        totalLand = Number(totalLand).toFixed(2);

        //max Land
        let maxLandIndex = LandArray.indexOf(Math.max.apply(Math, LandArray));
        let maxLandValue = Number(LandArray[maxLandIndex]).toFixed(2);
        let foodWithMaxLand = FoodSelectedLandArray[maxLandIndex];
        let foodWithMaxLandValue = Foodprint[foodData.indexOf(foodWithMaxLand)];
        let maxLandPercentage = (maxLandValue / totalLand * 100).toFixed(0);

        //second max Land
        LandArray.splice(maxLandIndex, 1);
        FoodSelectedLandArray.splice(maxLandIndex, 1);
        let secondMaxLandIndex = LandArray.indexOf(Math.max.apply(Math, LandArray));
        let secondMaxLandValue = Number(LandArray[secondMaxLandIndex]).toFixed(2);
        let foodWithSecondMaxLand = FoodSelectedLandArray[secondMaxLandIndex];
        let foodWithSecondMaxLandValue = Foodprint[foodData.indexOf(foodWithSecondMaxLand)];
        let secondMaxLandPercentage = (secondMaxLandValue / totalLand * 100).toFixed(0);

        //third max Land
        LandArray.splice(secondMaxLandIndex, 1);
        FoodSelectedLandArray.splice(secondMaxLandIndex, 1);
        let thirdMaxLandIndex = LandArray.indexOf(Math.max.apply(Math, LandArray));
        let thirdMaxLandValue = Number(LandArray[thirdMaxLandIndex]).toFixed(2);
        let foodWithThirdMaxLand = FoodSelectedLandArray[thirdMaxLandIndex];
        let foodWithThirdMaxLandValue = Foodprint[foodData.indexOf(foodWithThirdMaxLand)];
        let thirdMaxLandPercentage = (thirdMaxLandValue / totalLand * 100).toFixed(0);


        //total nutritional values
        totalCalories = Number(totalCalories).toFixed(0);
        totalProteins = Number(totalProteins).toFixed(0);
        totalCarbs = Number(totalCarbs).toFixed(0);
        totalFats = Number(totalFats).toFixed(0);

    
        return (        

            <div className="foodprint step0-background">
                
                {this.props.foodprintStep !== 5 &&
                    <Redirect to={"/foodprint/step"+this.props.foodprintStep} />
                }

                    <Header page={'Foodprint'}/>
                    <Link to="/">
                        <img className="closewizard" src={closewizard} />
                    </Link>

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
                                    <div>&nbsp;- {apples}</div>
                                </div>
                                }

                                {bananas != "0" &&
                                <div className="food-selected">
                                    <div><Icon icon="bananas"/></div>
                                    <div>&nbsp;- {bananas} </div>                                    
                                </div>
                                }

                                {berriesandgrapes != "0" &&
                                <div className="food-selected">
                                    <div><Icon icon="berries and grapes"/></div>
                                    <div>&nbsp;- {berriesandgrapes} g</div> 
                                </div>
                                }

                                {brassicas != "0" &&
                                <div className="food-selected">
                                    <div><Icon icon="brassicas"/></div>
                                    <div>&nbsp;- {brassicas} g</div>
                                </div>
                                }

                                {cassavas != "0" &&
                                <div className="food-selected">
                                    <div><Icon icon="cassavas"/></div>
                                    <div>&nbsp;- {cassavas} g</div>                                    
                                </div>
                                }

                                {citrusfruits != "0" &&
                                <div className="food-selected">
                                    <div><Icon icon="citrus fruits"/></div>
                                    <div>&nbsp;- {citrusfruits} g</div>                                    
                                </div>
                                }

                                {groundnuts != "0" &&
                                <div className="food-selected">
                                    <div><Icon icon="groundnuts"/></div>
                                    <div>&nbsp;- {groundnuts} g</div>
                                </div>
                                }

                                {nuts != "0" &&
                                <div className="food-selected">
                                    <div><Icon icon="nuts"/></div>
                                    <div>&nbsp;- {nuts} g</div>
                                </div>
                                }

                                {onions != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="onions"/></div>
                                    <div>&nbsp;- {onions} g</div>
                                </div>
                                }

                                {potatoes != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="potatoes"/></div>
                                    <div>&nbsp;- {potatoes} g</div>
                                </div>
                                }

                                {rootvegetables != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="root vegetables"/></div>
                                    <div>&nbsp;- {rootvegetables} g</div>
                                </div>
                                }

                                {tomatoes != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="tomatoes"/></div>
                                    <div>&nbsp;- {tomatoes}</div>
                                </div>
                                }

                                {otherfruits != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="other fruits"/></div>
                                    <div>&nbsp;- {otherfruits} g</div>
                                </div>
                                }

                                {othervegetables != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="other vegetables"/></div>
                                    <div>&nbsp;- {othervegetables} g</div>
                                </div>
                                }

                            </div>

                            <div className="category-selected">

                                <div className="category-selected-title">Animal Products</div>     

                                {beef != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="beef"/></div>
                                    <div>&nbsp;- {beef} g</div>
                                </div>
                                }

                                {cheese != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="cheese"/></div>
                                    <div>&nbsp;- {cheese} g</div>
                                </div>
                                }

                                {chicken != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="chicken"/></div>
                                    <div>&nbsp;- {chicken} g</div>
                                </div>
                                }

                                {crustaceans != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="crustaceans"/></div>
                                    <div>&nbsp;- {crustaceans} g</div>
                                </div>
                                }

                                {eggs != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="eggs"/></div>
                                    <div>&nbsp;- {eggs}</div>
                                </div>
                                }

                                {fish != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="fish"/></div>
                                    <div>&nbsp;- {fish} g</div>
                                </div>
                                }

                                {lamb != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="lamb"/></div>
                                    <div>&nbsp;- {lamb} g</div>
                                </div>
                                }

                                {milk != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="milk"/></div>
                                    <div>&nbsp;- {milk} l</div>
                                </div>
                                }

                                {pork != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="pork"/></div>
                                    <div>&nbsp;- {pork} g</div>
                                </div>
                                }

                            </div>

                            <div className="category-selected">

                                <div className="category-selected-title">Grains and Legumes</div> 

                                {bread != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="bread"/></div>
                                    <div>&nbsp;- {bread} g</div>
                                </div>
                                }

                                {cornflour != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="corn flour"/></div>
                                    <div>&nbsp;- {cornflour} g</div>
                                </div>
                                }

                                {oatmeal != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="oatmeal"/></div>
                                    <div>&nbsp;- {oatmeal} g</div>
                                </div>
                                }

                                {otherlegumes != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="other legumes"/></div>
                                    <div>&nbsp;- {otherlegumes} g</div>
                                </div>
                                }

                                {peas != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="peas"/></div>
                                    <div>&nbsp;- {peas} g</div>
                                </div>
                                }

                                {rice != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="rice"/></div>
                                    <div>&nbsp;- {rice} g</div>
                                </div>
                                }

                            </div>

                            <div className="category-selected categories-selected-right">

                                <div className="category-selected-title">Others</div> 

                                {tofu != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="tofu"/></div>
                                    <div>&nbsp;- {tofu} g</div>
                                </div>
                                }

                                {soymilk != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="soymilk"/></div>
                                    <div>&nbsp;- {soymilk} l</div>
                                </div>
                                }

                                {coffee != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="coffee"/></div>
                                    <div>&nbsp;- {coffee}</div>
                                </div>
                                }

                                {darkchocolate != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="dark chocolate"/></div>
                                    <div>&nbsp;- {darkchocolate} g</div>
                                </div>
                                }

                                {beer != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="beer"/></div>
                                    <div>&nbsp;- {beer} l</div>
                                </div>
                                }

                                {wine != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="wine"/></div>
                                    <div>&nbsp;- {wine} l</div>
                                </div>
                                }

                                {oliveoil != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="olive oil"/></div>
                                    <div>&nbsp;- {oliveoil} l</div>
                                </div>
                                }

                                {palmoil != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="palm oil"/></div>
                                    <div>&nbsp;- {palmoil} l</div>
                                </div>
                                }

                                {rapeseedoil != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="rapeseed oil"/></div>
                                    <div>&nbsp;- {rapeseedoil} l</div>
                                </div>
                                }

                                {soybeanoil != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="soybean oil"/></div>
                                    <div>&nbsp;- {soybeanoil} l</div>
                                </div>
                                }

                                {sunfloweroil != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="sunflower oil"/></div>
                                    <div>&nbsp;- {sunfloweroil} l</div>
                                </div>
                                }

                                {beetsugar != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="beet sugar"/></div>
                                    <div>&nbsp;- {beetsugar} g</div>
                                </div>
                                }

                                {canesugar != "0" &&
                                <div className="food-selected">                                    
                                    <div><Icon icon="cane sugar"/></div>
                                    <div>&nbsp;- {canesugar} g</div>
                                </div>
                                }

                            </div>

                            </div>

                            <div className="foodprint-nutritionalvalues">
                                <div className="foodprint-nutritionalvalues-title">Total weekly nutritional values:</div>
                                <div>
                                    &nbsp;{totalCalories} Calories | {totalProteins} g Proteins | {totalCarbs} g Carbs | {totalFats} g Fats
                                </div>
                            </div>

                        </div>


                        <div className="weeklyfoodprint-title">Your weekly environmental foodprint</div>

                        <div className="weeklyfoodprint-impactcard">
                            <div className="impactcard co2-color">
                                <div className="impactcard-title">{totalCo2} kg of CO2</div>
                                <div className="impactcard-subtitle">Total weekly️ CO2 produced</div>
                            </div>
                            <div className="topthree-section">
                                <div className="topthree-title">⚠️ TOP 3</div>        
                                <div className="polluting-impact-selection">
                                    <div> <Icon icon={foodWithMaxCo2}/> </div> 
                                    <div>&nbsp;- {foodWithMaxCo2Value}</div>
                                </div>
                                <div className="polluting-impact">
                                    <div className="pollution-impact-filling co2-color" style={{width: maxCo2Percentage+"%"}}></div>
                                    <div className="polluting-impact-values">
                                        <div className="polluting-impact-percentage">{maxCo2Percentage}%</div>
                                        <div>&nbsp;- {maxCo2Value} kg of CO2</div>
                                    </div>
                                </div>

                                <div className="polluting-impact-selection">
                                    <div> <Icon icon={foodWithSecondMaxCo2}/> </div> 
                                    <div>&nbsp;- {foodWithSecondMaxCo2Value}</div>
                                </div>
                                <div className="polluting-impact">
                                    <div className="pollution-impact-filling co2-color" style={{width: secondMaxCo2Percentage+"%"}}></div>
                                    <div className="polluting-impact-values">
                                        <div className="polluting-impact-percentage">{secondMaxCo2Percentage}%</div>
                                        <div>&nbsp;- {secondMaxCo2Value} kg of CO2</div>
                                    </div>
                                </div>

                                <div className="polluting-impact-selection">
                                    <div> <Icon icon={foodWithThirdMaxCo2}/> </div> 
                                    <div>&nbsp;- {foodWithThirdMaxCo2Value}</div>
                                </div>
                                <div className="polluting-impact">
                                    <div className="pollution-impact-filling co2-color" style={{width: thirdMaxCo2Percentage+"%"}}></div>
                                    <div className="polluting-impact-values">
                                        <div className="polluting-impact-percentage">{thirdMaxCo2Percentage}%</div>
                                        <div>&nbsp;- {thirdMaxCo2Value} kg of CO2</div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>    
    

                        <div className="weeklyfoodprint-impactcard">
                            <div className="impactcard water-color">
                                <div className="impactcard-title">{totalWater} liters of water</div>
                                <div className="impactcard-subtitle">Total weekly️ water consumed</div>
                            </div>
                            <div className="topthree-section">
                                <div className="topthree-title">⚠️ TOP 3</div>        
                                <div className="polluting-impact-selection">
                                    <div> <Icon icon={foodWithMaxWater}/> </div> 
                                    <div>&nbsp;- {foodWithMaxWaterValue}</div>
                                </div>
                                <div className="polluting-impact">
                                    <div className="pollution-impact-filling water-color" style={{width: maxWaterPercentage+"%"}}></div>
                                    <div className="polluting-impact-values">
                                        <div className="polluting-impact-percentage">{maxWaterPercentage}%</div>
                                        <div>&nbsp;- {maxWaterValue} kg of CO2</div>
                                    </div>
                                </div>
                                
                                <div className="polluting-impact-selection">
                                    <div> <Icon icon={foodWithSecondMaxWater}/> </div> 
                                    <div>&nbsp;- {foodWithSecondMaxWaterValue}</div>
                                </div>
                                <div className="polluting-impact">
                                    <div className="pollution-impact-filling water-color" style={{width: secondMaxWaterPercentage+"%"}}></div>
                                    <div className="polluting-impact-values">
                                        <div className="polluting-impact-percentage">{secondMaxWaterPercentage}%</div>
                                        <div>&nbsp;- {secondMaxWaterValue} kg of CO2</div>
                                    </div>
                                </div>

                                <div className="polluting-impact-selection">
                                    <div> <Icon icon={foodWithThirdMaxWater}/> </div> 
                                    <div>&nbsp;- {foodWithThirdMaxWaterValue}</div>
                                </div>
                                <div className="polluting-impact">
                                    <div className="pollution-impact-filling water-color" style={{width: thirdMaxWaterPercentage+"%"}}></div>
                                    <div className="polluting-impact-values">
                                        <div className="polluting-impact-percentage">{thirdMaxWaterPercentage}%</div>
                                        <div>&nbsp;- {thirdMaxWaterValue} kg of CO2</div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                            
                            
                            <div>Total Land: {totalLand}</div>
                            <div>Biggest Land impact: {foodWithMaxLandValue} {foodWithMaxLand} with {maxLandValue} {maxLandPercentage}</div>
                            <div>Second Biggest Land impact: {foodWithSecondMaxLandValue} {foodWithSecondMaxLand} with {secondMaxLandValue} {secondMaxLandPercentage}</div>
                            <div>Third Biggest Land impact: {foodWithThirdMaxLandValue} {foodWithThirdMaxLand} with {thirdMaxLandValue} {thirdMaxLandPercentage}</div>
                            

                    </div>

            </div>
    
        );
        
    }

}

export default FoodprintStep5;