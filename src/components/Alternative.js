import React, { Component } from 'react';
import '../App.css';
import './Pollution.css';
import './Solution.css';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';

class Alternative extends Component {

    render() {

        return (

            <div className="alternative">
                <Icon icon={this.props.alternativename}/>
                <div className="alternative-amount">
                    - {this.props.alternativeamountneeded+" "} 
                    {this.props.alternativemeasure === "grams" &&
                        <div className="alternative-amount"> g </div>
                    }
                    {this.props.alternativemeasure === "liters" &&
                        <div className="alternative-amount"> l </div>
                    }
                </div>

                <div className="alternative-impact">
                
                    {this.props.alternativeco2difference.toFixed(2) > 0 &&
                        <div>✅ save {this.props.alternativeco2difference.toFixed(2)} kg of CO2</div>
                    }
                    {this.props.alternativeco2difference.toFixed(2) < 0 &&
                        <div className="warning">⚠️ produce {-1*this.props.alternativeco2difference.toFixed(2)} kg of CO2</div>
                    }

                    {this.props.alternativewaterdifference.toFixed(2) > 0 &&
                        <div>✅ save {this.props.alternativewaterdifference.toFixed(2)} liters of water</div>
                    }
                    {this.props.alternativewaterdifference.toFixed(2) < 0 &&
                        <div className="warning">⚠️ consume {-1*this.props.alternativewaterdifference.toFixed(2)} liters of water</div>
                    }

                    {this.props.alternativelanddifference.toFixed(2) > 0 &&
                        <div>✅ save {this.props.alternativelanddifference.toFixed(2)} sqm of land</div>
                    }
                    {this.props.alternativelanddifference.toFixed(2) < 0 &&
                        <div className="warning">⚠️ occupy {-1*this.props.alternativelanddifference.toFixed(2)} sqm of land</div>
                    }  

                </div>
                
                <Link to={"/impact#" + this.props.alternativename}>
                    <button  
                        className="solution-calculation"
                        name={this.props.alternative}
                        onClick={this.props.handleSolution}>
                        Calculate {this.props.alternativename} impact →
                    </button>
                </Link>

            </div>

        )

    }

}


export default Alternative;