import React, { Component } from 'react';
import '../App.css';
import './Pollution.css';
import './Solution.css';
import Data from '../impact-data.json';
import Alternative from '../components/Alternative';

class Solution extends Component {

    render() {
        let solutions = 'solution form-input-section-impactpage';
        if (this.props.newCalculation === false) {
            solutions += ' pollutions-animation'
        }

        let type = Data[this.props.category][this.props.type];

        // alternative1
        let alternative1name = type.alternative1.name;

        // alternative2
        let alternative2name = type.alternative2.name;

        // alternative3
        let alternative3name = type.alternative3.name;

        // alternative4
        let alternative4name = type.alternative4.name;
        
        return (

            <div className={solutions}>

                <div className="solution-title-section">
                    <div className="solution-title">
                        Alternatives to get the same amount of
                        <div className="solution-title-bold">
                            {type.optimise + " "} 
                            <div className="solution-title"> in </div> 
                            {this.props.amount + " "}
                            {this.props.measure === "grams" &&
                                <div className="solution-title"> 
                                    <div className="solution-title solution-title-bold"> g </div>
                                    <div className="solution-title"> of </div> 
                                </div>
                            }
                            {this.props.measure === "liters" &&
                                <div className="solution-title"> 
                                    <div className="solution-title solution-title-bold"> l </div>
                                    <div className="solution-title"> of </div> 
                                </div>
                            }
                            <div className="solution-title solution-title-bold uppercase">{this.props.type}:</div>
                        </div>
                    </div>
                </div>

                <div className="alternatives">

                    {alternative1name !== "none" && 
                    <div className="alternative-recommended">
                        <div className="alternative-recommended-text"> LEAST POLLUTING ALTERNATIVE </div> 
                        <Alternative
                            alternative={'alternative1'}
                            {...this.props}
                        />
                    </div>
                    }

                    {alternative2name !== "none" && 
                    <div className="alternative-not-rec">
                        <Alternative
                            alternative={'alternative2'}
                            {...this.props}
                        />
                    </div>
                    }

                    {alternative3name !== "none" && 
                    <div className="alternative-not-rec">
                        <Alternative
                            alternative={'alternative3'}
                            {...this.props}
                        />
                    </div>
                    }

                    {alternative4name !== "none" && 
                    <div className="alternative-not-rec">
                        <Alternative
                            alternative={'alternative4'}
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