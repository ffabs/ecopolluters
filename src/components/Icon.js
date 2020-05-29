import React, { Component } from 'react';
import '../App.css';
import './Icon.css';
// import './Solution.css';

class Icon extends Component {

    render() {

        let icon = "icon-food";
        let iconImage = "";
        let iconText = "";
        if(this.props.foodprint === "true"){
            iconImage = "icon-food-image-foodprint";
            iconText = "hide";
        }
        if(this.props.noImage === "true"){
            iconImage = "hide";
        }
        
        
        return (

            <div>
                {this.props.icon === "beef" &&
                    <div className={icon}>
                        <div className={iconImage}>🐄</div> 
                        <div className={iconText}>&nbsp;Beef</div> 
                    </div>     
                }
                {this.props.icon === "lamb" &&
                    <div className={icon}>
                        <div className={iconImage}>🐑</div> 
                        <div className={iconText}>&nbsp;Lamb</div> 
                    </div>
                }
                {this.props.icon === "crustaceans" &&
                    <div className={icon}>
                        <div className={iconImage}>🦀</div> 
                        <div className={iconText}>&nbsp;Crustaceans</div> 
                    </div>
                }
                {this.props.icon === "cheese" &&
                    <div className={icon}>
                        <div className={iconImage}>🧀</div> 
                        <div className={iconText}>&nbsp;Cheese </div> 
                    </div>
                }
                {this.props.icon === "fish" &&
                    <div className={icon}>
                        <div className={iconImage}>🐟</div> 
                        <div className={iconText}>&nbsp;Fish</div> 
                    </div>
                }
                {this.props.icon === "pork" &&
                    <div className={icon}>
                        <div className={iconImage}>🐖</div> 
                        <div className={iconText}>&nbsp;Pork </div> 
                    </div>
                }
                {this.props.icon === "chicken" &&
                    <div className={icon}>
                        <div className={iconImage}>🐓</div> 
                        <div className={iconText}>&nbsp;Chicken </div> 
                    </div>
                }
                {this.props.icon === "eggs" &&
                    <div className={icon}>
                        <div className={iconImage}>🥚</div> 
                        <div className={iconText}>&nbsp;Eggs </div> 
                    </div>
                }
                {this.props.icon === "milk" &&
                    <div className={icon}>
                        <div className={iconImage}>🥛</div> 
                        <div className={iconText}>&nbsp;Milk</div> 
                    </div>
                }
                {this.props.icon === "groundnuts" &&
                    <div className={icon}>
                        <div className={iconImage}>🥜</div> 
                        <div className={iconText}>&nbsp;Groundnuts</div> 
                    </div>
                }
                {this.props.icon === "tomatoes" &&
                    <div className={icon}>
                        <div className={iconImage}>🍅</div> 
                        <div className={iconText}>&nbsp;Tomatoes</div> 
                    </div>
                }
                {this.props.icon === "berries and grapes" &&
                    <div className={icon}>
                        <div className={iconImage}>🍇</div> 
                        <div className={iconText}>&nbsp;Berries and grapes</div> 
                    </div>
                }
                {this.props.icon === "cassavas" &&
                    <div className={icon}>
                        <div className={iconImage}>🍠</div> 
                        <div className={iconText}>&nbsp;Cassavas </div> 
                    </div>
                }
                {this.props.icon === "bananas" &&
                    <div className={icon}>
                        <div className={iconImage}>🍌</div> 
                        <div className={iconText}>&nbsp;Bananas</div> 
                    </div>
                }
                {this.props.icon === "broccolis" &&
                    <div className={icon}>
                        <div className={iconImage}>🥦</div> 
                        <div className={iconText}>&nbsp;Broccolis </div> 
                    </div>
                }
                {this.props.icon === "cabbage" &&
                    <div className={icon}>
                        <div className={iconImage}>🥬</div> 
                        <div className={iconText}>&nbsp;Cabbage </div> 
                    </div>
                }
                {this.props.icon === "onions" &&
                    <div className={icon}>
                        <div className={iconImage}>⚪</div> 
                        <div className={iconText}>&nbsp;Onions</div> 
                    </div>
                }
                {this.props.icon === "potatoes" &&
                    <div className={icon}>
                        <div className={iconImage}>🥔</div> 
                        <div className={iconText}>&nbsp;Potatoes</div> 
                    </div>
                }
                {this.props.icon === "root vegetables" &&
                    <div className={icon}>
                        <div className={iconImage}>🥕</div> 
                        <div className={iconText}>&nbsp;Root vegetables</div> 
                    </div>
                }
                {this.props.icon === "nuts" &&
                    <div className={icon}>
                        <div className={iconImage}>🌰</div> 
                        <div className={iconText}>&nbsp;Nuts </div> 
                    </div>
                }
                {this.props.icon === "apples" &&
                    <div className={icon}>
                        <div className={iconImage}>🍏</div> 
                        <div className={iconText}>&nbsp;Apples</div> 
                    </div>
                }
                {this.props.icon === "citrus fruits" &&
                    <div className={icon}>
                        <div className={iconImage}>🍋</div> 
                        <div className={iconText}>&nbsp;Citrus fruits</div> 
                    </div>
                }
                {this.props.icon === "lemons" &&
                    <div className={icon}>
                        <div className={iconImage}>🍋</div> 
                        <div className={iconText}>&nbsp;Lemons</div> 
                    </div>
                }
                {this.props.icon === "oranges" &&
                    <div className={icon}>
                        <div className={iconImage}>🍊</div> 
                        <div className={iconText}>&nbsp;Oranges</div> 
                    </div>
                }
                {this.props.icon === "avocados" &&
                    <div className={icon}>
                        <div className={iconImage}>🥑</div> 
                        <div className={iconText}>&nbsp;Avocados</div> 
                    </div>
                }
                {this.props.icon === "other fruits" &&
                    <div className={icon}>
                        <div className={iconImage}>🍓</div> 
                        <div className={iconText}>&nbsp;Other fruits</div> 
                    </div>
                }
                {this.props.icon === "other vegetables" &&
                    <div className={icon}>
                        <div className={iconImage}>🥗</div> 
                        <div className={iconText}>&nbsp;Other vegetables</div> 
                    </div>
                }
                {this.props.icon === "rice" &&
                    <div className={icon}>
                        <div className={iconImage}>🍚</div> 
                        <div className={iconText}>&nbsp;Rice</div> 
                    </div>
                }
                {this.props.icon === "oatmeal" &&
                    <div className={icon}>
                        <div className={iconImage}>🥣</div> 
                        <div className={iconText}>&nbsp;Oatmeal</div> 
                    </div>
                }
                {this.props.icon === "corn flour" &&
                    <div className={icon}>
                        <div className={iconImage}>🌽</div> 
                        <div className={iconText}>&nbsp;Corn flour</div> 
                    </div>
                }
                {this.props.icon === "bread" &&
                    <div className={icon}>
                        <div className={iconImage}>🥖</div> 
                        <div className={iconText}>&nbsp;Bread</div> 
                    </div>
                }
                {this.props.icon === "beer" &&
                    <div className={icon}>
                        <div className={iconImage}>🍺</div> 
                        <div className={iconText}>&nbsp;Beer</div> 
                    </div>
                }
                {this.props.icon === "peas" &&
                    <div className={icon}>
                        <div className={iconImage}>🌱</div> 
                        <div className={iconText}>&nbsp;Peas</div> 
                    </div>
                }
                {this.props.icon === "legumes" &&
                    <div className={icon}>
                        <div className={iconImage}>🍲</div> 
                        <div className={iconText}>&nbsp;Legumes</div> 
                    </div>
                }
                {this.props.icon === "dark chocolate" &&
                    <div className={icon}>
                        <div className={iconImage}>🍫</div> 
                        <div className={iconText}>&nbsp;Dark chocolate</div> 
                    </div>
                }
                {this.props.icon === "coffee" &&
                    <div className={icon}>
                        <div className={iconImage}>☕</div> 
                        <div className={iconText}>&nbsp;Coffee</div> 
                    </div>
                }
                {this.props.icon === "palm oil" &&
                    <div className={icon}>
                        <div className={iconImage}>🌴</div> 
                        <div className={iconText}>&nbsp;Palm oil</div> 
                    </div>
                }
                {this.props.icon === "soybean oil" &&
                    <div className={icon}>
                        <div className={iconImage}>🌿</div> 
                        <div className={iconText}>&nbsp;Soybean oil</div> 
                    </div>
                }
                {this.props.icon === "olive oil" &&
                    <div className={icon}>
                        <div className={iconImage}>🌱</div> 
                        <div className={iconText}>&nbsp;Olive oil</div> 
                    </div>
                }
                {this.props.icon === "rapeseed oil" &&
                    <div className={icon}>
                        <div className={iconImage}>🌼</div> 
                        <div className={iconText}>&nbsp;Rapeseed oil </div> 
                    </div>
                }
                {this.props.icon === "sunflower oil" &&
                    <div className={icon}>
                        <div className={iconImage}>🌻</div> 
                        <div className={iconText}>&nbsp;Sunflower oil</div> 
                    </div>
                }
                {this.props.icon === "tofu" &&
                <div className={icon}>
                    <div className={iconImage}>🍢</div> 
                    <div className={iconText}>&nbsp;Tofu</div> 
                </div>
                }
                {this.props.icon === "cane sugar" &&
                    <div className={icon}>
                        <div className={iconImage}>🍬</div> 
                        <div className={iconText}>&nbsp;Cane sugar</div> 
                    </div>
                }
                {this.props.icon === "beet sugar" &&
                    <div className={icon}>
                        <div className={iconImage}>🍬</div> 
                        <div className={iconText}>&nbsp;Beet sugar</div> 
                    </div>
                }
                {this.props.icon === "wine" &&
                    <div className={icon}>
                        <div className={iconImage}>🍷</div> 
                        <div className={iconText}>&nbsp;Wine </div> 
                    </div>
                }
                {this.props.icon === "soymilk" &&
                    <div className={icon}>
                        <div className={iconImage}>🥛</div> 
                        <div className={iconText}>&nbsp;Soymilk</div> 
                    </div>
                }  
                {this.props.icon === "rolls" &&
                    <div className={icon}>
                        <div className={iconImage}>🧻</div> 
                        <div className={iconText}>&nbsp;Toilet paper</div> 
                    </div>
                }  
                {this.props.icon === "hand" &&
                    <div className={icon}>
                        <div className={iconImage}>✋</div> 
                        <div className={iconText}>&nbsp;Your hand</div> 
                    </div>
                } 
                {this.props.icon === "bidet" &&
                    <div className={icon}>
                        <div className={iconImage}>🚿</div> 
                        <div className={iconText}>&nbsp;Bidet </div> 
                    </div>
                }     
            </div>

        )

    }

}


export default Icon;