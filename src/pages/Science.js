import React, { Component } from 'react';
import '../App.css';
import ReactGA from 'react-ga';
import Header from '../components/Header';

function initializeReactGA() {
    ReactGA.initialize('UA-150607597-1');
    ReactGA.pageview('/science');
  }

class Science extends Component {
    
    render() {
        initializeReactGA()

        return (        

            <div>
            <Header page={'Science'}/>
                <p>Main scientific article:</p>
                <p>"Reducing food’s environmental impacts through producers and consumers"</p>
                <p>By J. Poore and T. Nemecek</p>
            </div>
    
        );
        
    }

}

export default Science;