import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
  
class About extends Component {

    render() {
    
        return (        

            <div>
                <Header />
                <h1> About us page</h1>
                <Footer />
            </div>
    
        );
    }
    }

export default About;