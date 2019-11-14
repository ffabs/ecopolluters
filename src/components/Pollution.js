import React, { Component } from 'react';
import '../App.css';
import Grams from '../components/Grams';
import CO2 from '../components/CO2';
import Land from '../components/Land';
import Water from '../components/Water';


class Pollution extends Component {
  
    render() {

        return (

            <div className="pollutions">
                <Grams grams={this.props.grams}/>
                <CO2 CO2={this.props.grams*0.09948}/>
                <Water water={this.props.grams*1.4512}/>
                <Land land={this.props.grams*0.32621}/>
            </div>

        )

    }

}


export default Pollution;