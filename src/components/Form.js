import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import beef from '../images/beef.svg';

class Form extends Component {
  
   render() {
      return (
          <form className="impact-form" onSubmit={e => { e.preventDefault(); }}>
            <div>
              <p className="section-title algorithm-title">Calculate your impact</p>
              <p className="algorithm-support" >We have preparred a kick-ass algorithm to help you understand your impact and give you ideas for what you can do</p>
            </div>
            <div className="impact-form-visual">
              <div>
                <div>
                  <input  
                    className="impact-input-form impact-number-form" 
                    type="number" 
                    name="amount"
                    defaultValue={this.props.amount}
                    min="1"
                    onChange={this.props.handleAmount}
                  />
                  <select className="impact-input-form impact-select-form" name="select" defaultValue={this.props.select} onChange={this.props.handleSelect}>
                        <option value="200"> hamburger (200 g) </option>
                        <option value="225"> steak (225 g) </option>
                        <option value="1"> g </option>
                  </select>
                </div>
                <Link to="/impact">
                  <button 
                    className="impact-button impact-button-form" 
                    type="button" 
                    onClick={this.props.handleCalculation}>
                    CALCULATE IMPACT
                  </button>
                </Link>
              </div>
              <div>
                <img className="beef-image" src={beef} alt="beef"/>
              </div>
            </div>
          </form> 
      );
  }

}


export default Form;