import React, { Component } from 'react';
import '../App.css';
import Form from '../components/Form';
import Pollution from '../components/Pollution';

class Impact extends Component {

   render() {
      return (
          <div>
            <h1>Calculate your impact</h1>
            <Form {...this.props}/>

            {this.props.calculation === true &&
              <Pollution grams={this.props.grams} />
            }
          </div>
      );
  }

}


export default Impact;