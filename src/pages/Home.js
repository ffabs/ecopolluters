import React, { Component } from 'react';
import '../App.css';
import Form from '../components/Form';
import Intro from '../components/Intro';
import {Link} from 'react-router-dom';

class Home extends Component {

  render() {
  
    return (        

      <div>
          <Intro />
          <Form {...this.props}/>
          <p><Link to="/science"></Link>Check where we get all the data</p>
      </div>

    );

  }

}

export default Home;