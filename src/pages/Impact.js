import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pollution from '../components/Pollution';
import {withRouter} from 'react-router-dom';

class Impact extends Component {
  
  constructor (props) {
    super(props);   
    this.state = {
      amount: this.props.location.state.amount,
      select: this.props.location.state.select,
      grams: this.props.location.state.grams,
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
          <div>
            <Header />

            <h1>Calculate your impact</h1>
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

            <Pollution grams={this.state.grams} />
            <Footer />
          </div>
      );
  }

}


export default withRouter(Impact);