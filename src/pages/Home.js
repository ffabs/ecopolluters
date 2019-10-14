import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header';
import Form from '../components/Form';
import Footer from '../components/Footer';
import Intro from '../components/Intro';

class Home extends Component {

  render() {
  
    return (        

      <div>
          <Header />
          <Intro />
          <Form />
          <p><a href="/science">Check where we get all the data</a></p>
          <Footer />
      </div>

    );

  }

}

export default Home;