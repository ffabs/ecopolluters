import React, { Component } from 'react';
import '../App.css';
import {withRouter} from 'react-router-dom';
import logo from '../logo.svg';

class Form extends Component {
  
  constructor (props) {
    super(props);   
    this.state = {
      amount: 1,
      select: 200,
      grams: 200,
    };
  }
  
handleChange = event => {
  const name = event.target.name;
  const value = event.target.value;
  
  this.setState({
    ...this.state,[name]: value
  })
  
}

  handleCalculation = event => {
    const grams = this.state.amount*this.state.select;
    this.setState({grams: grams});
    this.props.history.replace({
        pathname: '/impact',
        state: {
          amount: this.state.amount,
          select: this.state.select,
          grams: grams,
        }  
      });
  }

  
   render() {
      return (
          <form onSubmit={e => { e.preventDefault(); }}>

            <div>
              <h1>What is your impact?</h1>
              <p>We preparred kick-ass algorithm to tell you how bad you are</p>
              <img src={logo} className="greta" alt="logo" />
            </div>

            When you eat

              <input type="number" 
                     name="amount"
                     defaultValue={this.state.amount}
                     min="1"
                     onChange={this.handleChange} 
              />

              <select name="select" defaultValue={this.state.select} onChange={this.handleChange}>
                   <option value="200"> hamburger (200 g) </option>
                   <option value="225"> steak (225 g) </option>
                   <option value="1"> g </option>
              </select>

              of beef, this is your impact:

              <button type="button" onClick={this.handleCalculation}>
                Calculate impact
              </button> 

          </form> 
      );
  }

}


export default withRouter (Form);