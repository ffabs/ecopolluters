import React, { Component } from 'react';
import '../App.css';
import './Pollution.css';
import Grams from '../components/Grams';
import CO2 from '../components/CO2';
import Land from '../components/Land';
import Water from '../components/Water';
import Data from '../impact-data.json';


class Pollution extends Component {

    render() {
        let pollutions = 'pollutions';
        if (this.props.newCalculation === false) {
            pollutions += ' pollutions-animation'
        }

        let type = Data[this.props.category][this.props.type];

        
        return (

            <div className={pollutions}>

                <Grams {...this.props}/>
                <div className="pollution-card">
                    <CO2 CO2={this.props.grams*type.co2}/>
                    <Water water={this.props.grams*type.water}/>
                    <Land land={this.props.grams*type.land}/>
                </div>

            </div>

        )

    }

}


export default Pollution;