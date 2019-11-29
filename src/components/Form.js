import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import beef from '../images/beef.svg';

class Form extends Component {
  
   render() {
    let classform = '';
    let impact = 'impact-button form-button';
    let title = 'section-title form-title';
    let support = 'form-support';
    let formimpactsection = "form-input-section";
    let buttonposition  = "form-button-position-home";
    switch(this.props.page) {
      case "Impact":
        classform += 'form-impact';
        impact += ' impact-button-impactpage';
        title = 'page-title';
        support = 'hide';
        formimpactsection = 'form-input-section-impactpage';
        buttonposition  = "form-button-position-impact";
        break;
      default:
        classform = 'form-home';
        impact = 'impact-button form-button';
        title = 'section-title form-title';
        support = 'form-support';
        formimpactsection = "form-input-section";
        buttonposition  = "form-button-position-home";
    }


      return (
        <form className={classform} onSubmit={e => { e.preventDefault(); }}>
          <div>
            <div className={title}>Calculate your impact</div>
            <div className={support} >We have preparred a kick-ass algorithm to help you understand your impact and give you ideas for what you can do</div>
          </div>
          <div className={formimpactsection}>
            <div className={buttonposition}>
              <div>
                <input  
                  className="form-input form-number" 
                  type="number" 
                  name="amount"
                  defaultValue={this.props.amount}
                  min="1"
                  onChange={this.props.handleAmount}
                />
                <select className="form-input form-select" name="select" defaultValue={this.props.select} onChange={this.props.handleSelect}>
                      <option value="200"> 🍔 hamburger (200 g) </option>
                      <option value="225"> 🥩 steak (225 g) </option>
                      <option value="1"> ⚖️ grams </option>
                </select>
              </div>
              <div>
              <Link to="/impact">
                <button 
                  className={impact} 
                  type="button" 
                  onClick={this.props.handleCalculation}>
                  CALCULATE IMPACT
                </button>
              </Link>
              </div>
            </div>
            {this.props.page === 'home' &&
              <div>
                <img className="form-image" src={beef} alt="beef"/>
              </div>
            }
          </div>
        </form>
      );
  }

}


export default Form;