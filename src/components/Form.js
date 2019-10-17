import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

class Form extends Component {
  
   render() {
      return (
          <form onSubmit={e => { e.preventDefault(); }}>

            When you eat

              <input type="number" 
                     name="amount"
                     defaultValue={this.props.amount}
                     min="1"
                     onChange={this.props.handleAmount}
              />

              <select name="select" defaultValue={this.props.select} onChange={this.props.handleSelect}>
                   <option value="200"> hamburger (200 g) </option>
                   <option value="225"> steak (225 g) </option>
                   <option value="1"> g </option>
              </select>

              of beef, this is your impact:
              <Link to="/impact">
                <button type="button" onClick={this.props.handleCalculation}>
                  Calculate impact
                </button>
              </Link>

          </form> 
      );
  }

}


export default Form;