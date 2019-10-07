import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header';
import Form from '../components/Form';
import Footer from '../components/Footer';
  
class Home extends Component {

  constructor (props) {
    super(props);   
    this.state = {
      amount: 1,
      select: 200,
      grams: 200,
    };
  }

  render() {
  
    return (        

      <div>
          <Header />
          <Form />
          <Footer />
      </div>

    );

  }

}

export default Home;