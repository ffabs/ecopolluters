import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header';
import Form from '../components/Form';
import Footer from '../components/Footer';

class Calculate extends Component {
    
    render() {
    
        return (        

            <div>
                <Header />
                <h1> Calculation page</h1>
                <Form />
                <Footer />
            </div>
    
        );
        
    }

}

export default Calculate;