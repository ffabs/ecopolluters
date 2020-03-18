import React, { Component } from 'react';
import '../App.css';
// import './Solution.css';

class Icon extends Component {

    render() {
        
        return (

            <div>
                {this.props.icon === "beef" &&
                    <div> 🐄 Beef </div>
                }
                {this.props.icon === "lamb" &&
                    <div> 🐑 Lamb </div>
                }
                {this.props.icon === "crustaceans" &&
                    <div> 🦀 Crustaceans </div>
                }
                {this.props.icon === "cheese" &&
                    <div> 🧀 Cheese </div>
                }
                {this.props.icon === "fish" &&
                    <div> 🐟 Fish </div>
                }
                {this.props.icon === "pork" &&
                    <div> 🐖 Pork </div>
                }
                {this.props.icon === "chicken" &&
                    <div> 🐓 Chicken </div>
                }
                {this.props.icon === "eggs" &&
                    <div> 🥚 Eggs </div>
                }
                {this.props.icon === "milk" &&
                    <div> 🥛 Milk </div>
                }
                {this.props.icon === "groundnuts" &&
                    <div> 🥜 Groundnuts </div>
                }
                {this.props.icon === "tomatoes" &&
                    <div> 🍅 Tomatoes </div>
                }
                {this.props.icon === "berries and grapes" &&
                    <div> 🍇 Berries and grapes </div>
                }
                {this.props.icon === "cassavas" &&
                    <div> 🍠 Cassavas </div>
                }
                {this.props.icon === "bananas" &&
                    <div> 🍌 Bananas </div>
                }
                {this.props.icon === "brassicas" &&
                    <div> 🥦 Brassicas </div>
                }
                {this.props.icon === "onions" &&
                    <div> ⚪ Onions </div>
                }
                {this.props.icon === "potatoes" &&
                    <div> 🥔 Potatoes </div>
                }
                {this.props.icon === "root vegetables" &&
                    <div> 🥕 Root vegetables </div>
                }
                {this.props.icon === "nuts" &&
                    <div> 🌰 Nuts </div>
                }
                {this.props.icon === "apples" &&
                    <div> 🍏 Apples </div>
                }
                {this.props.icon === "citrus fruits" &&
                    <div> 🍋 Citrus fruits </div>
                }
                {this.props.icon === "other fruits" &&
                    <div> 🍓 Other fruits </div>
                }
                {this.props.icon === "other vegetables" &&
                    <div> 🥗 Other vegetables </div>
                }
                {this.props.icon === "rice" &&
                    <div> 🍚 Rice </div>
                }
                {this.props.icon === "oatmeal" &&
                    <div> 🥣 Oatmeal </div>
                }
                {this.props.icon === "corn flour" &&
                    <div> 🌽 Corn flour </div>
                }
                {this.props.icon === "bread" &&
                    <div> 🥖 Bread </div>
                }
                {this.props.icon === "beer" &&
                    <div> 🍺 Beer </div>
                }
                {this.props.icon === "peas" &&
                    <div> 🌱 Peas </div>
                }
                {this.props.icon === "other legumes" &&
                    <div> 🍲 Other legumes </div>
                }
                {this.props.icon === "dark chocolate" &&
                    <div> 🍫 Dark chocolate </div>
                }
                {this.props.icon === "coffee" &&
                    <div> ☕ Coffee </div>
                }
                {this.props.icon === "palm oil" &&
                    <div> 🌴 Palm oil </div>
                }
                {this.props.icon === "soybean oil" &&
                    <div> 🌿 Soybean oil </div>
                }
                {this.props.icon === "olive oil" &&
                    <div> 🌱 Olive oil </div>
                }
                {this.props.icon === "rapeseed oil" &&
                    <div> 🌼 Rapeseed oil </div>
                }
                {this.props.icon === "sunflower oil" &&
                    <div> 🌻 Sunflower oil </div>
                }
                {this.props.icon === "tofu" &&
                    <div> 🍢 Tofu </div>
                }
                {this.props.icon === "cane sugar" &&
                    <div> 🍬 Cane sugar </div>
                }
                {this.props.icon === "beet sugar" &&
                    <div> 🍬 Beet sugar </div>
                }
                {this.props.icon === "wine" &&
                    <div> 🍷 Wine </div>
                }
                {this.props.icon === "soymilk" &&
                    <div> 🥛 Soymilk </div>
                }  
                {this.props.icon === "rolls" &&
                    <div> 🚽 Toilet paper </div>
                }      
            </div>

        )

    }

}


export default Icon;