import React, { Component } from 'react';
import '../App.css';
import Grams from '../components/Grams';
import CO2 from '../components/CO2';
import Land from '../components/Land';
import Water from '../components/Water';


class Impact extends Component {
  
    render() {

        return (

            <div>
                <Grams grams={this.props.grams}/>
                <hr></hr>
                <CO2 CO2={this.props.grams*0.09948}/>
                <hr></hr>
                <Land land={this.props.grams*0.32621}/>
                <hr></hr>
                <Water water={this.props.grams*1.4512}/>
            </div>

        )

    }

}


export default Impact;