import React, { Component } from 'react';
import '../App.css';
import Grams from '../components/Grams';
import CO2 from '../components/CO2';
import Land from '../components/Land';
import Water from '../components/Water';
import Data from '../impact-data.json';


class Pollution extends Component {

    render() {
        let pollutions = '';
        if (this.props.newCalculation == false) {
            pollutions += ' pollutions'
        }

        return (

            <div className={pollutions}>

                <Grams grams={this.props.grams}/>
                <CO2 CO2={this.props.grams*Data.beef.co2}/>
                <Water water={this.props.grams*Data.beef.water}/>
                <Land land={this.props.grams*Data.beef.land}/>

            </div>

        )

    }

}


export default Pollution;