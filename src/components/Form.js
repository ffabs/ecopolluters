import React, { Component } from 'react';
import '../App.css';
import {Redirect} from 'react-router-dom';

class Form extends Component {
  
  constructor (props) {
    super(props);   
    this.state = {
      amount: 1,
      select: 200,
      grams: 200,
      toImpact: false,
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
    this.setState({toImpact: true});
  }

  
   render() {

    if (this.state.toImpact === true) {
      return <Redirect to={{ pathname: "/impact", state: {amount: 100} }} />
      // return <Redirect to='/impact' />

    // this.context.router.push({
    //   pathname: '/impact',
      // state: {email: this.state.email}  
  // })

    //   return <Redirect 
    //     push
    //     to={{
    //           pathname: "/impact",
    //           state: {
    //             amount: 100,
    //             select: this.state.select,
    //             grams: this.state.grams,
    //           }
    //         }}
    //   />
    }
      return (
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
      );
  }

}


export default Form;