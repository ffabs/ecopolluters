import React, { Component } from 'react';
import '../App.css';
import Form from '../components/Form';
import Intro from '../components/Intro';

class Home extends Component {

  render() {
  
    return (        

      <div>
          <Intro />
          <Form {...this.props}/>
          <p><a href="/science">Check where we get all the data</a></p>
      </div>

    );

  }

}

export default Home;