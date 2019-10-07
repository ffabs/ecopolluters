import React, { Component } from 'react';
import '../App.css';
import Impact from '../components/Impact';


class Form extends Component {
  
  constructor (props) {
    super(props);   
    this.state = {
      amount: 1,
      select: 200,
      grams: 200,
      impact: false,
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
    this.setState({
      grams: grams,
      impact: true,
    });
  }

  
  render() {

    if (this.state.impact === false){
      return (

        <div>
          <h1>Home page</h1>
          <form onSubmit={e => { e.preventDefault(); }}>

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

              of beef

              <button type="button" onClick={this.handleCalculation}>
                Calculate impact
              </button> 

          </form> 

        </div>

      )
    } else {
      return (

        <div>
            <h1>Impact page</h1>
            <form onSubmit={e => { e.preventDefault(); }}>

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

                of beef

                <button type="button" onClick={this.handleCalculation}>
                    Calculate impact
                </button> 

            </form>      
            <Impact grams={this.state.grams}/>
          </div>

      )
    }

  }

}


export default Form;