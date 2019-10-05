import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../components/Form';
  
class Home extends Component {

    render() {
    
        return (        

            <div>
                <Header />
                <h1> Home page</h1>
                <Form />
                <Footer />
            </div>
    
        );
    }
    }

export default Home;