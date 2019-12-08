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
                <div>Reducing food’s environmental impacts through producers and consumers</div>
                <div>Author: J. Poore,T. Nemecek</div>
                <div>Publication: Science</div>
                <div>Publisher: The American Association for the Advancement of Science</div>
                <div>Date: Jun 1, 2018</div>
                <div>
                    <a style={{display: "table-cell"}} href="https://science.sciencemag.org/content/360/6392/987" target="_blank">
                        Read the article here
                    </a>
                </div>
            </div>
    
        );
        
    }

}

export default Science;