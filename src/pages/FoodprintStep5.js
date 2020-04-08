import React, { Component } from 'react';
import '../App.css';
import './About.css';
import './Fooprint.css';
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
        for (let p = 0; p < fruitsFoodprint.length; p++) {
            if (fruitsFoodprint[p] != "0") {
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

        //second max Co2
        Co2Array.splice(maxCo2Index, 1);
        FoodSelectedC02Array.splice(maxCo2Index, 1);
        let secondMaxCo2Index = Co2Array.indexOf(Math.max.apply(Math, Co2Array));
        let secondMaxCo2Value = Number(Co2Array[secondMaxCo2Index]).toFixed(2);
        let foodWithSecondMaxCo2 = FoodSelectedC02Array[secondMaxCo2Index];

        //third max Co2
        Co2Array.splice(secondMaxCo2Index, 1);
        FoodSelectedC02Array.splice(secondMaxCo2Index, 1);
        let thirdMaxCo2Index = Co2Array.indexOf(Math.max.apply(Math, Co2Array));
        let thirdMaxCo2Value = Number(Co2Array[thirdMaxCo2Index]).toFixed(2);
        let foodWithThirdMaxCo2 = FoodSelectedC02Array[thirdMaxCo2Index];


        //Water
        totalWater = Number(totalWater).toFixed(2);

        //max Water
        let maxWaterIndex = WaterArray.indexOf(Math.max.apply(Math, WaterArray));
        let maxWaterValue = Number(WaterArray[maxWaterIndex]).toFixed(2);
        let foodWithMaxWater = FoodSelectedWaterArray[maxWaterIndex];

        //second max Water
        WaterArray.splice(maxWaterIndex, 1);
        FoodSelectedWaterArray.splice(maxWaterIndex, 1);
        let secondMaxWaterIndex = WaterArray.indexOf(Math.max.apply(Math, WaterArray));
        let secondMaxWaterValue = Number(WaterArray[secondMaxWaterIndex]).toFixed(2);
        let foodWithSecondMaxWater = FoodSelectedWaterArray[secondMaxWaterIndex];

        //third max Water
        WaterArray.splice(secondMaxWaterIndex, 1);
        FoodSelectedWaterArray.splice(secondMaxWaterIndex, 1);
        let thirdMaxWaterIndex = WaterArray.indexOf(Math.max.apply(Math, WaterArray));
        let thirdMaxWaterValue = Number(WaterArray[thirdMaxWaterIndex]).toFixed(2);
        let foodWithThirdMaxWater = FoodSelectedWaterArray[thirdMaxWaterIndex];


        //Land
        totalLand = Number(totalLand).toFixed(2);

        //max Land
        let maxLandIndex = LandArray.indexOf(Math.max.apply(Math, LandArray));
        let maxLandValue = Number(LandArray[maxLandIndex]).toFixed(2);
        let foodWithMaxLand = FoodSelectedLandArray[maxLandIndex];

        //second max Land
        LandArray.splice(maxLandIndex, 1);
        FoodSelectedLandArray.splice(maxLandIndex, 1);
        let secondMaxLandIndex = LandArray.indexOf(Math.max.apply(Math, LandArray));
        let secondMaxLandValue = Number(LandArray[secondMaxLandIndex]).toFixed(2);
        let foodWithSecondMaxLand = FoodSelectedLandArray[secondMaxLandIndex];

        //third max Land
        LandArray.splice(secondMaxLandIndex, 1);
        FoodSelectedLandArray.splice(secondMaxLandIndex, 1);
        let thirdMaxLandIndex = LandArray.indexOf(Math.max.apply(Math, LandArray));
        let thirdMaxLandValue = Number(LandArray[thirdMaxLandIndex]).toFixed(2);
        let foodWithThirdMaxLand = FoodSelectedLandArray[thirdMaxLandIndex];

        //total nutritional values

        totalCalories = Number(totalCalories).toFixed(0);
        totalProteins = Number(totalProteins).toFixed(0);
        totalCarbs = Number(totalCarbs).toFixed(0);
        totalFats = Number(totalFats).toFixed(0);

    
        return (        

            <div className="foodprint step5-background">
                
                {this.props.foodprintStep !== 5 &&
                    <Redirect to={"/foodprint/step"+this.props.foodprintStep} />
                }

                    <Header page={'Foodprint'}/>
                    <Link to="/">
                        <img className="closewizard" src={closewizard} />
                    </Link>

                    <div className="foodprint-alignment">

                        <div>✅ Your environmental foodprint is ready!</div> 

                        <div>{selected} Food types selected</div>

                        <div className="categories-selected">

                            <div className="category-selected">

                                <div>Fruits and vegetables</div>                   
                                
                                {apples != "0" &&
                                <div className="food-selected">
                                    {apples} 
                                    <Icon icon="apples"/>
                                </div>
                                }

                                {bananas != "0" &&
                                <div className="food-selected">
                                    {bananas} 
                                    <Icon icon="bananas"/>
                                </div>
                                }

                                {berriesandgrapes != "0" &&
                                <div className="food-selected">
                                    {berriesandgrapes} 
                                    <Icon icon="berries and grapes"/>
                                </div>
                                }

                                {brassicas != "0" &&
                                <div className="food-selected">
                                    {brassicas} 
                                    <Icon icon="brassicas"/>
                                </div>
                                }

                                {cassavas != "0" &&
                                <div className="food-selected">
                                    {cassavas} 
                                    <Icon icon="cassavas"/>
                                </div>
                                }

                                {citrusfruits != "0" &&
                                <div className="food-selected">
                                    {citrusfruits} 
                                    <Icon icon="citrus fruits"/>
                                </div>
                                }

                                {groundnuts != "0" &&
                                <div className="food-selected">
                                    {groundnuts} 
                                    <Icon icon="groundnuts"/>
                                </div>
                                }

                                {nuts != "0" &&
                                <div className="food-selected">
                                    {nuts} 
                                    <Icon icon="nuts"/>
                                </div>
                                }

                                {onions != "0" &&
                                <div className="food-selected">
                                    {onions} 
                                    <Icon icon="onions"/>
                                </div>
                                }

                                {potatoes != "0" &&
                                <div className="food-selected">
                                    {potatoes} 
                                    <Icon icon="potatoes"/>
                                </div>
                                }

                                {rootvegetables != "0" &&
                                <div className="food-selected">
                                    {rootvegetables} 
                                    <Icon icon="root vegetables"/>
                                </div>
                                }

                                {tomatoes != "0" &&
                                <div className="food-selected">
                                    {tomatoes} 
                                    <Icon icon="tomatoes"/>
                                </div>
                                }

                                {otherfruits != "0" &&
                                <div className="food-selected">
                                    {otherfruits} 
                                    <Icon icon="other fruits"/>
                                </div>
                                }

                                {othervegetables != "0" &&
                                <div className="food-selected">
                                    {othervegetables} 
                                    <Icon icon="other vegetables"/>
                                </div>
                                }

                            </div>

                            <div className="category-selected">

                                <div>Animal Products</div>     

                                {beef != "0" &&
                                <div className="food-selected">
                                    {beef} 
                                    <Icon icon="beef"/>
                                </div>
                                }

                                {cheese != "0" &&
                                <div className="food-selected">
                                    {cheese} 
                                    <Icon icon="cheese"/>
                                </div>
                                }

                                {chicken != "0" &&
                                <div className="food-selected">
                                    {chicken} 
                                    <Icon icon="chicken"/>
                                </div>
                                }

                                {crustaceans != "0" &&
                                <div className="food-selected">
                                    {crustaceans} 
                                    <Icon icon="crustaceans"/>
                                </div>
                                }

                                {eggs != "0" &&
                                <div className="food-selected">
                                    {eggs} 
                                    <Icon icon="eggs"/>
                                </div>
                                }

                                {fish != "0" &&
                                <div className="food-selected">
                                    {fish} 
                                    <Icon icon="fish"/>
                                </div>
                                }

                                {lamb != "0" &&
                                <div className="food-selected">
                                    {lamb} 
                                    <Icon icon="lamb"/>
                                </div>
                                }

                                {milk != "0" &&
                                <div className="food-selected">
                                    {milk} 
                                    <Icon icon="milk"/>
                                </div>
                                }

                                {pork != "0" &&
                                <div className="food-selected">
                                    {pork} 
                                    <Icon icon="pork"/>
                                </div>
                                }

                            </div>

                            <div className="category-selected">

                                <div>Grains and Legumes</div> 

                                {bread != "0" &&
                                <div className="food-selected">
                                    {bread} 
                                    <Icon icon="bread"/>
                                </div>
                                }

                                {cornflour != "0" &&
                                <div className="food-selected">
                                    {cornflour} 
                                    <Icon icon="corn flour"/>
                                </div>
                                }

                                {oatmeal != "0" &&
                                <div className="food-selected">
                                    {oatmeal} 
                                    <Icon icon="oatmeal"/>
                                </div>
                                }

                                {otherlegumes != "0" &&
                                <div className="food-selected">
                                    {otherlegumes} 
                                    <Icon icon="other legumes"/>
                                </div>
                                }

                                {peas != "0" &&
                                <div className="food-selected">
                                    {peas} 
                                    <Icon icon="peas"/>
                                </div>
                                }

                                {rice != "0" &&
                                <div className="food-selected">
                                    {rice} 
                                    <Icon icon="rice"/>
                                </div>
                                }

                            </div>

                            <div className="category-selected">

                                <div>Others</div> 

                                {tofu != "0" &&
                                <div className="food-selected">
                                    {tofu} 
                                    <Icon icon="tofu"/>
                                </div>
                                }

                                {soymilk != "0" &&
                                <div className="food-selected">
                                    {soymilk} 
                                    <Icon icon="soymilk"/>
                                </div>
                                }

                                {coffee != "0" &&
                                <div className="food-selected">
                                    {coffee} 
                                    <Icon icon="coffee"/>
                                </div>
                                }

                                {darkchocolate != "0" &&
                                <div className="food-selected">
                                    {darkchocolate} 
                                    <Icon icon="dark chocolate"/>
                                </div>
                                }

                                {beer != "0" &&
                                <div className="food-selected">
                                    {beer} 
                                    <Icon icon="beer"/>
                                </div>
                                }

                                {wine != "0" &&
                                <div className="food-selected">
                                    {wine} 
                                    <Icon icon="wine"/>
                                </div>
                                }

                                {oliveoil != "0" &&
                                <div className="food-selected">
                                    {oliveoil} 
                                    <Icon icon="olive oil"/>
                                </div>
                                }

                                {palmoil != "0" &&
                                <div className="food-selected">
                                    {palmoil} 
                                    <Icon icon="palm oil"/>
                                </div>
                                }

                                {rapeseedoil != "0" &&
                                <div className="food-selected">
                                    {rapeseedoil} 
                                    <Icon icon="rapeseed oil"/>
                                </div>
                                }

                                {soybeanoil != "0" &&
                                <div className="food-selected">
                                    {soybeanoil} 
                                    <Icon icon="soybean oil"/>
                                </div>
                                }

                                {sunfloweroil != "0" &&
                                <div className="food-selected">
                                    {sunfloweroil} 
                                    <Icon icon="sunflower oil"/>
                                </div>
                                }

                                {beetsugar != "0" &&
                                <div className="food-selected">
                                    {beetsugar} 
                                    <Icon icon="beet sugar"/>
                                </div>
                                }

                                {canesugar != "0" &&
                                <div className="food-selected">
                                    {canesugar} 
                                    <Icon icon="cane sugar"/>
                                </div>
                                }

                            </div>

                        </div>



                        <button 
                            type="button"
                            value={this.props.foodprintStep}
                            onClick={this.props.handleBack}
                        >  
                            edit
                        </button>
                            
                            <div>Total Calories: {totalCalories} </div>
                            <div>Total Proteins: {totalProteins}</div>
                            <div>Total Carbs: {totalCarbs}</div>
                            <div>Total Fats: {totalFats}</div>
                            
                            <div>Total Co2: {totalCo2}</div>
                            <div>Biggest Co2 impact: {foodWithMaxCo2} with {maxCo2Value}</div>
                            <div>Second Biggest Co2 impact: {foodWithSecondMaxCo2} with {secondMaxCo2Value}</div>
                            <div>Third Biggest Co2 impact: {foodWithThirdMaxCo2} with {thirdMaxCo2Value}</div>

                            <div>Total Water: {totalWater}</div>
                            <div>Biggest Water impact: {foodWithMaxWater} with {maxWaterValue}</div>
                            <div>Second Biggest Water impact: {foodWithSecondMaxWater} with {secondMaxWaterValue}</div>
                            <div>Third Biggest Water impact: {foodWithThirdMaxWater} with {thirdMaxWaterValue}</div>

                            <div>Total Land: {totalLand}</div>
                            <div>Biggest Land impact: {foodWithMaxLand} with {maxLandValue}</div>
                            <div>Second Biggest Land impact: {foodWithSecondMaxLand} with {secondMaxLandValue}</div>
                            <div>Third Biggest Land impact: {foodWithThirdMaxLand} with {thirdMaxLandValue}</div>
                            

                    </div>

            </div>
    
        );
        
    }

}

export default FoodprintStep5;