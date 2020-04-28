import React, { Component } from 'react';
import '../App.css';
import '../pages/Science.css';
import './Datasource.css';
import {Link} from 'react-router-dom';
import undraw_growth_analytics from '../images/undraw_growth_analytics.png';

class Datasource extends Component {
  
  render() {

    return (       
        <div className="background-datasource">
            <img className="img-datasource" src={undraw_growth_analytics} alt="data source"/>
            <div className="text-datasource">
              <div className="datasource-title">Curious where we get our data?</div>
              <div className="datasource-support">We use only articles reviewed and approved by the scientific community. We study the data and derive every bit of information shown here from there. If you are interested in digginng deeper on our sources, check out:</div>
              <a style={{display: "table-cell"}} href="https://science.sciencemag.org/content/360/6392/987" target="_blank">
                  <div className="datasource-article">
                      <div className="science-article-title datasource-article-text">Reducing food’s environmental impacts through producers and consumers</div>
                      <div className="science-article-support datasource-article-text">J. Poore,T. Nemecek - Science - The American Association for the Advancement of Science</div>
                      <div className="science-article-date datasource-article-text">Jun 1, 2018</div>
                  </div>
              </a>
              <Link to="/science">
                <div className="datasource-linksciencepage">See all scientifical sources →</div>
              </Link>
            </div>
        </div>

    );
    
  }

}

export default Datasource;