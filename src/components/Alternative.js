import React, { Component } from 'react';
import '../App.css';
import './Pollution.css';
import './Solution.css';
import Data from '../impact-data.json';
import Icon from '../components/Icon';
import Grams from '../components/Grams';
import {Link} from 'react-router-dom';

class Alternative extends Component {

    render() {

        let type = Data[this.props.category][this.props.type];
        
        let currentc02 = this.props.grams*type.co2;
        let currentwater = this.props.grams*type.water;
        let currentland = this.props.grams*type.land;

        //alternative data
        let alternativecategory = type[this.props.alternative].category;
        let alternativename = type[this.props.alternative].name;
        let alternativeamountneeded = 1;
        let alternativeco2difference = 1;
        let alternativewaterdifference = 1;
        let alternativelanddifference = 1;
        let alternativemeasure = 1;
        let alternativegramsneeded = "";
        let hidealternativelink = "false";
        if(alternativename!=="none"){
            if(alternativename ==="bidet" || alternativename ==="hand"){
                hidealternativelink = "true";
            }
            let alternative = Data[alternativecategory][alternativename];
            alternativemeasure = Data[alternativecategory][alternativename].measure;
            let alternativeunit = Data[alternativecategory][alternativename].unit;       
            // alternativeamountneeded
            let alternativeamount = type[this.props.alternative].amount;
            alternativeamountneeded = +(this.props.grams * alternativeamount / alternativeunit ).toFixed(1);
            if(alternativemeasure == "grams"){
                alternativeamountneeded = alternativeamountneeded.toFixed(0);
            }
            // alternativegramsneeded
            alternativegramsneeded = alternativeamountneeded * alternativeunit;
            // alternativeco2difference
            let alternativeco2 = alternativegramsneeded * alternative.co2;
            alternativeco2difference = currentc02 - alternativeco2;
            // alternativewaterdifference
            let alternativewater = alternativegramsneeded * alternative.water;
            alternativewaterdifference = currentwater - alternativewater;
            // alternativelanddifference
            let alternativeland = alternativegramsneeded * alternative.land;
            alternativelanddifference = currentland - alternativeland;
        }


        return (

            <div className="alternative">
            <div className="alternative-grams">
                <Grams measure={alternativemeasure} category={alternativecategory} type={alternativename} grams={alternativegramsneeded} amount={alternativeamountneeded}/>
            </div>
                {/* <div className="alternative-items">
                    <div>
                        <Icon icon={alternativename}/>
                    </div>
                    <div>
                        <div className="alternative-amount">&nbsp;• {alternativeamountneeded+" "} </div>
                        {alternativemeasure === "grams" &&
                            <div className="alternative-amount"> g </div>
                        }
                        {alternativemeasure === "liters" &&
                            <div className="alternative-amount"> l </div>
                        }
                    </div>
                </div> */}

                <div className="alternative-impact">
                
                    {alternativeco2difference.toFixed(2) > 0 &&
                        <div>✅ save {alternativeco2difference.toFixed(2)} kg of CO2</div>
                    }
                    {alternativeco2difference.toFixed(2) < 0 &&
                        <div className="warning">⚠️ + {-1*alternativeco2difference.toFixed(2)} kg of CO2 produced</div>
                    }
                    {alternativeco2difference.toFixed(2) == 0 &&
                        <div className="same-impact"> same kg of CO2 produced</div>
                    }

                    {alternativewaterdifference.toFixed(2) > 0 &&
                        <div>✅ save {alternativewaterdifference.toFixed(2)} liters of water</div>
                    }
                    {alternativewaterdifference.toFixed(2) < 0 &&
                        <div className="warning">⚠️ + {-1*alternativewaterdifference.toFixed(2)} liters of water consumed</div>
                    }
                    {alternativewaterdifference.toFixed(2) == 0 &&
                        <div className="same-impact"> same liters of water consumed</div>
                    }

                    {alternativelanddifference.toFixed(2) > 0 &&
                        <div>✅ save {alternativelanddifference.toFixed(2)} sqm of land</div>
                    }
                    {alternativelanddifference.toFixed(2) < 0 &&
                        <div className="warning">⚠️ + {-1*alternativelanddifference.toFixed(2)} sqm of land occupied</div>
                    }  
                    {alternativelanddifference.toFixed(2) == 0 &&
                        <div className="same-impact"> same sqm of land occupied</div>
                    }

                </div>

                {hidealternativelink ==="false" &&
                    <Link to={"/impact#" + alternativename}>
                        <button  
                            className="solution-calculation"
                            name={this.props.alternative}
                            onClick={this.props.handleSolution}>
                            Calculate {alternativename} impact →
                        </button>
                    </Link>
                } 

            </div>

        )

    }

}


export default Alternative;