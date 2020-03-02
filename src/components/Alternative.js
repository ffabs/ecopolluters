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
                <div className="alternative-items">
                    <div>
                        <Icon icon={this.props.alternativename}/>
                    </div>
                    <div>
                        <div className="alternative-amount"> &nbsp - {this.props.alternativeamountneeded+" "} </div>
                        {this.props.alternativemeasure === "grams" &&
                            <div className="alternative-amount"> g </div>
                        }
                        {this.props.alternativemeasure === "liters" &&
                            <div className="alternative-amount"> l </div>
                        }
                    </div>
                </div>

                <div className="alternative-impact">
                
                    {this.props.alternativeco2difference.toFixed(2) > 0 &&
                        <div>✅ save {this.props.alternativeco2difference.toFixed(2)} kg of CO2</div>
                    }
                    {this.props.alternativeco2difference.toFixed(2) < 0 &&
                        <div className="warning">⚠️ + {-1*this.props.alternativeco2difference.toFixed(2)} kg of CO2 produced</div>
                    }
                    {this.props.alternativeco2difference.toFixed(2) == 0 &&
                        <div className="same-impact"> same kg of CO2 produced</div>
                    }

                    {this.props.alternativewaterdifference.toFixed(2) > 0 &&
                        <div>✅ save {this.props.alternativewaterdifference.toFixed(2)} liters of water</div>
                    }
                    {this.props.alternativewaterdifference.toFixed(2) < 0 &&
                        <div className="warning">⚠️ + {-1*this.props.alternativewaterdifference.toFixed(2)} liters of water consumed</div>
                    }
                    {this.props.alternativewaterdifference.toFixed(2) == 0 &&
                        <div className="same-impact"> same liters of water consumed</div>
                    }

                    {this.props.alternativelanddifference.toFixed(2) > 0 &&
                        <div>✅ save {this.props.alternativelanddifference.toFixed(2)} sqm of land</div>
                    }
                    {this.props.alternativelanddifference.toFixed(2) < 0 &&
                        <div className="warning">⚠️ + {-1*this.props.alternativelanddifference.toFixed(2)} sqm of land occupied</div>
                    }  
                    {this.props.alternativelanddifference.toFixed(2) == 0 &&
                        <div className="same-impact"> same sqm of land occupied</div>
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