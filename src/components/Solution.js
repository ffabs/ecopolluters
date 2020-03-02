import React, { Component } from 'react';
import '../App.css';
import './Pollution.css';
import './Solution.css';
import Data from '../impact-data.json';
import Alternative from '../components/Alternative';

class Solution extends Component {

    render() {
        let solutions = 'solution';
        if (this.props.newCalculation === false) {
            solutions += ' pollutions-animation'
        }

        let type = Data[this.props.category][this.props.type];

        let currentc02 = this.props.grams*type.co2;
        let currentwater = this.props.grams*type.water;
        let currentland = this.props.grams*type.land;

        // alternative1
        let alternative1category = type.alternative1.category;
        let alternative1name = type.alternative1.name;
        let alternative1amountneeded = 1;
        let alternative1co2difference = 1;
        let alternative1waterdifference = 1;
        let alternative1landdifference = 1;
        let alternative1measure = 1;
        if(alternative1name!=="none"){
            let alternative1 = Data[alternative1category][alternative1name];
            alternative1measure = Data[alternative1category][alternative1name].measure;
            let alternative1unit = Data[alternative1category][alternative1name].unit;      
            // alternative1amountneeded
            let alternative1amount = type.alternative1.amount;
            alternative1amountneeded = +(this.props.amount * alternative1amount / alternative1unit ).toFixed(1);
            if(alternative1measure !== "liters"){
                alternative1amountneeded = alternative1amountneeded.toFixed(0);
            }
            // alternative1co2difference
            let alternative1co2 = alternative1amountneeded * alternative1.co2;
            alternative1co2difference = currentc02 - alternative1co2;
            // alternative1waterdifference
            let alternative1water = alternative1amountneeded * alternative1.water;
            alternative1waterdifference = currentwater - alternative1water;
            // alternative1landdifference
            let alternative1land = alternative1amountneeded * alternative1.land;
            alternative1landdifference = currentland - alternative1land;
        }

        // alternative2
        let alternative2category = type.alternative2.category;
        let alternative2name = type.alternative2.name;
        let alternative2amountneeded = 1;
        let alternative2co2difference = 1;
        let alternative2waterdifference = 1;
        let alternative2landdifference = 1;
        let alternative2measure = 1;
        if(alternative2name!=="none"){
            let alternative2 = Data[alternative2category][alternative2name];
            alternative2measure = Data[alternative2category][alternative2name].measure;
            let alternative2unit = Data[alternative2category][alternative2name].unit;      
            // alternative2amountneeded
            let alternative2amount = type.alternative2.amount;
            alternative2amountneeded = +(this.props.amount * alternative2amount / alternative2unit ).toFixed(1);
            if(alternative2measure !== "liters"){
                alternative2amountneeded = alternative2amountneeded.toFixed(0);
            }
            // alternative2co2difference
            let alternative2co2 = alternative2amountneeded * alternative2.co2;
            alternative2co2difference = currentc02 - alternative2co2;
            // alternative2waterdifference
            let alternative2water = alternative2amountneeded * alternative2.water;
            alternative2waterdifference = currentwater - alternative2water;
            // alternative2landdifference
            let alternative2land = alternative2amountneeded * alternative2.land;
            alternative2landdifference = currentland - alternative2land;
        }

        // alternative3
        let alternative3category = type.alternative3.category;
        let alternative3name = type.alternative3.name;
        let alternative3amountneeded = 1;
        let alternative3co2difference = 1;
        let alternative3waterdifference = 1;
        let alternative3landdifference = 1;
        let alternative3measure = 1;
        if(alternative3name!=="none"){
            let alternative3 = Data[alternative3category][alternative3name];
            alternative3measure = Data[alternative3category][alternative3name].measure;
            let alternative3unit = Data[alternative3category][alternative3name].unit;      
            // alternative3amountneeded
            let alternative3amount = type.alternative3.amount;
            alternative3amountneeded = +(this.props.amount * alternative3amount / alternative3unit ).toFixed(1);
            if(alternative3measure !== "liters"){
                alternative3amountneeded = alternative3amountneeded.toFixed(0);
            }
            // alternative3co2difference
            let alternative3co2 = alternative3amountneeded * alternative3.co2;
            alternative3co2difference = currentc02 - alternative3co2;
            // alternative3waterdifference
            let alternative3water = alternative3amountneeded * alternative3.water;
            alternative3waterdifference = currentwater - alternative3water;
            // alternative3landdifference
            let alternative3land = alternative3amountneeded * alternative3.land;
            alternative3landdifference = currentland - alternative3land;
        }

        // alternative4
        let alternative4category = type.alternative4.category;
        let alternative4name = type.alternative4.name;
        let alternative4amountneeded = 1;
        let alternative4co2difference = 1;
        let alternative4waterdifference = 1;
        let alternative4landdifference = 1;
        let alternative4measure = 1;
        if(alternative4name!=="none"){
            let alternative4 = Data[alternative4category][alternative4name];
            alternative4measure = Data[alternative4category][alternative4name].measure;
            let alternative4unit = Data[alternative4category][alternative4name].unit;       
            // alternative4amountneeded
            let alternative4amount = type.alternative4.amount;
            alternative4amountneeded = +(this.props.amount * alternative4amount / alternative4unit ).toFixed(1);
            if(alternative4measure !== "liters"){
                alternative4amountneeded = alternative4amountneeded.toFixed(0);
            }
            // alternative4co2difference
            let alternative4co2 = alternative4amountneeded * alternative4.co2;
            alternative4co2difference = currentc02 - alternative4co2;
            // alternative4waterdifference
            let alternative4water = alternative4amountneeded * alternative4.water;
            alternative4waterdifference = currentwater - alternative4water;
            // alternative4landdifference
            let alternative4land = alternative4amountneeded * alternative4.land;
            alternative4landdifference = currentland - alternative4land;
        }
        
        return (

            <div className={solutions}>

                <div className="solution-title">Alternatives to get the same amount of
                    <div className="solution-title-bold">
                        {type.optimise + " "} 
                        <div className="solution-title"> in </div> 
                        {this.props.amount + " "}
                        {this.props.measure === "grams" &&
                            <div className="solution-title"> 
                                <div className="solution-title solution-title-bold"> G </div>
                                <div className="solution-title"> of </div> 
                            </div>
                        }
                        {this.props.measure === "liters" &&
                            <div className="solution-title"> 
                                <div className="solution-title solution-title-bold"> L </div>
                                <div className="solution-title"> of </div> 
                            </div>
                        }
                        <div className="solution-title solution-title-bold uppercase">{this.props.type}:</div>
                    </div>
                </div>

                <div className="alternatives">
                    {alternative1name !== "none" && 
                    <div className="alternative-recommended">
                        <div className="alternative-recommended-text"> RECOMMENDED </div> 
                        <Alternative
                            alternative={'alternative1'}
                            alternativename={alternative1name} 
                            alternativeamountneeded={alternative1amountneeded}
                            alternativeco2difference={alternative1co2difference}
                            alternativewaterdifference={alternative1waterdifference}
                            alternativelanddifference={alternative1landdifference}
                            alternativemeasure={alternative1measure}
                            {...this.props}
                        />
                    </div>
                    }
                    
                    {alternative2name !== "none" && 
                    <div className="alternative-not-rec">
                        <Alternative
                            alternative={'alternative2'}
                            alternativename={alternative2name} 
                            alternativeamountneeded={alternative2amountneeded}
                            alternativeco2difference={alternative2co2difference}
                            alternativewaterdifference={alternative2waterdifference}
                            alternativelanddifference={alternative2landdifference}
                            alternativemeasure={alternative2measure}
                            {...this.props}
                        />
                    </div>
                    }

                    {alternative3name !== "none" && 
                    <div className="alternative-not-rec">
                        <Alternative
                            alternative={'alternative3'}
                            alternativename={alternative3name} 
                            alternativeamountneeded={alternative3amountneeded}
                            alternativeco2difference={alternative3co2difference}
                            alternativewaterdifference={alternative3waterdifference}
                            alternativelanddifference={alternative3landdifference}
                            alternativemeasure={alternative3measure}
                            {...this.props}
                        />
                    </div>
                    }

                    {alternative4name !== "none" && 
                    <div className="alternative-not-rec">
                        <Alternative
                            alternative={'alternative4'}
                            alternativename={alternative4name} 
                            alternativeamountneeded={alternative4amountneeded}
                            alternativeco2difference={alternative4co2difference}
                            alternativewaterdifference={alternative4waterdifference}
                            alternativelanddifference={alternative4landdifference}
                            alternativemeasure={alternative4measure}
                            {...this.props}
                        />
                    </div>
                    }

                </div>

            </div>

        )

    }

}


export default Solution;