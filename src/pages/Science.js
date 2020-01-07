import React, { Component } from 'react';
import '../App.css';
import './Science.css';
import ReactGA from 'react-ga';
import Header from '../components/Header';
import Footer from '../components/Footer';

function initializeReactGA() {
    ReactGA.initialize('UA-150607597-1');
    ReactGA.pageview('/science');
  }

class Science extends Component {
    
    render() {
        initializeReactGA()

        return (        

            <div className="science-background">
                <Header page={'Science'}/>

                <div className="page science-page"> 
                    
                    <div className="page-title">Scientific sources</div>

                    <div className="science-section-title">Main research article</div>
                    
                    <a style={{display: "table-cell"}} href="https://science.sciencemag.org/content/360/6392/987" target="_blank">
                        <div className="science-article">
                            <div className="science-article-title">Reducing food’s environmental impacts through producers and consumers</div>
                            <div className="science-article-support">J. Poore,T. Nemecek - Science - The American Association for the Advancement of Science</div>
                            <div className="science-article-date">Jun 1, 2018</div>
                        </div>
                    </a>

                    <div className="science-section-title">Supplementary research articles</div>

                    <a style={{display: "table-cell"}} href="https://www.cambridge.org/core/services/aop-cambridge-core/content/view/DB40E5C12D662913CC342D3C19F85F7D/S1368980014002377a.pdf/environmental_cost_of_protein_food_choices.pdf" target="_blank">
                        <div className="science-article">
                            <div className="science-article-title">The environmental cost of protein food choices</div>
                            <div className="science-article-support">K. Sranacharoenpong, S. Soret, H. Harwatt, M. Wien, J. Sabaté - Public Health Nutrition</div>
                            <div className="science-article-date">6 Nov, 2014</div>
                        </div>
                    </a>

                    <a style={{display: "table-cell"}} href="https://www.chathamhouse.org/sites/default/files/publications/research/CHHJ3820%20Diet%20and%20climate%20change%2018.11.15_WEB_NEW.pdf" target="_blank">
                        <div className="science-article">
                            <div className="science-article-title">Changing Climate, Changing Diets Pathways to Lower Meat Consumption</div>
                            <div className="science-article-support">L. Wellesley, C. Happer, A. Froggatt - Chatham House Report - The Royal Institute of International Affairs</div>
                            <div className="science-article-date">Nov, 2015</div>
                        </div>
                    </a>

                    <a style={{display: "table-cell"}} href="https://www.ncbi.nlm.nih.gov/pubmed/29691877" target="_blank">
                        <div className="science-article">
                            <div className="science-article-title">Carbon footprint of organic beef meat from farm to fork: a case study of short supply chain</div>
                            <div className="science-article-support">A. Vitali, G. Grossi, G. Martino, U. Bernabucci, A. Nardone, N. Lacetera - Science of Food and Agriculture</div>
                            <div className="science-article-date">24 Apr, 2018</div>
                        </div>
                    </a>

                    <a style={{display: "table-cell"}} href="https://www.ncbi.nlm.nih.gov/pubmed/29458352" target="_blank">
                        <div className="science-article">
                            <div className="science-article-title">Reducing GHG emissions while improving diet quality: exploring the potential of reduced meat, cheese and alcoholic and soft drinks consumption at specific moments during the day</div>
                            <div className="science-article-support">van de Kamp ME, Seves SM, Temme EHM - BMC Public Health</div>
                            <div className="science-article-date">2o Feb, 2018</div>
                        </div>
                    </a>

                    <a style={{display: "table-cell"}} href="https://www.ncbi.nlm.nih.gov/pubmed/?term=Availability+of+disaggregated+greenhouse+gas+emissions+from+beef+cattle+production%3A+A+systematic+review" target="_blank">
                        <div className="science-article">
                            <div className="science-article-title">Availability of disaggregated greenhouse gas emissions from beef cattle production: A systematic review</div>
                            <div className="science-article-support">J. Lynch - Environ Impact Assess Rev.</div>
                            <div className="science-article-date">May, 2019</div>
                        </div>
                    </a>

                    <a style={{display: "table-cell"}} href="https://www.cifor.org/publications/pdf_files/media/Amazon.pdf" target="_blank">
                        <div className="science-article">
                            <div className="science-article-title">Hamburger Connection Fuels Amazon Destruction</div>
                            <div className="science-article-support">D. Kaimowitz, B. Mertens, S. Wunder and P. Pacheco - Center for International Forestry Research</div>
                            <div className="science-article-date">Jan, 2004</div>
                        </div>
                    </a>

                    <a style={{display: "table-cell"}} href="https://www.ncbi.nlm.nih.gov/pubmed/28813467" target="_blank">
                        <div className="science-article">
                            <div className="science-article-title">Meat consumption reduction in Italian regions: Health co-benefits and decreases in GHG emissions</div>
                            <div className="science-article-support">S. Farchi, M. De Sario, E. Lapucci, M. Davoli, P. Michelozzi - PLoS One</div>
                            <div className="science-article-date">15 Aug, 2017</div>
                        </div>
                    </a>

                    <a style={{display: "table-cell"}} href="https://www.ncbi.nlm.nih.gov/pubmed/31362803" target="_blank">
                        <div className="science-article">
                            <div className="science-article-title">Are our diets getting healthier and more sustainable? Insights from the European Prospective Investigation into Cancer and Nutrition - Netherlands (EPIC-NL) cohort</div>
                            <div className="science-article-support">S. Biesbroek, WM. Verschuren, JM. Boer, YT. van der Schouw, I. Sluijs, EH. Temme - Public Health Nutr.</div>
                            <div className="science-article-date">22 Nov, 2019</div>
                        </div>
                    </a>

                    <a style={{display: "table-cell"}} href="https://www.ncbi.nlm.nih.gov/pubmed/22894818" target="_blank">
                        <div className="science-article">
                            <div className="science-article-title">Excessive meat consumption in Brazil: diet quality and environmental impacts</div>
                            <div className="science-article-support">AM. de Carvalho, CL. César, RM. Fisberg, DM. Marchioni - Public Health Nutr.</div>
                            <div className="science-article-date">16 Oct, 2013</div>
                        </div>
                    </a>

                    <a style={{display: "table-cell"}} href="https://www.ncbi.nlm.nih.gov/pubmed/30968696" target="_blank">
                        <div className="science-article">
                            <div className="science-article-title">Efficiency and Carbon Footprint of the German Meat Supply Chain</div>
                            <div className="science-article-support">L. Xue, N. Prass, S. Gollnow, J. Davis, S. Scherhaufer, K. Östergren, S. Cheng, G. Liu - Environ Sci Technol.</div>
                            <div className="science-article-date">7 May, 2019</div>
                        </div>
                    </a>

                    <a style={{display: "table-cell"}} href="https://www.ncbi.nlm.nih.gov/pubmed/29981520" target="_blank">
                        <div className="science-article">
                            <div className="science-article-title">Carbon footprint and nutritional quality of different human dietary choices</div>
                            <div className="science-article-support">S. González-García, X. Esteve-Llorens, MT. Moreira, G. Feijoo - Sci Total Environ.</div>
                            <div className="science-article-date">10 Dec, 2018</div>
                        </div>
                    </a>

                    <a style={{display: "table-cell"}} href="https://www.ncbi.nlm.nih.gov/pubmed/28008979" target="_blank">
                        <div className="science-article">
                            <div className="science-article-title">Beef and coal are key drivers of Australia's high nitrogen footprint</div>
                            <div className="science-article-support">X. Liang, AM. Leach, JN. Galloway, B. Gu, SK. Lam, D. Chen - Sci Rep.</div>
                            <div className="science-article-date">23 Dec, 2016</div>
                        </div>
                    </a>

                    <a style={{display: "table-cell"}} href="https://www.ncbi.nlm.nih.gov/pubmed/26554680" target="_blank">
                        <div className="science-article">
                            <div className="science-article-title">Reduction of meat consumption and greenhouse gas emissions associated with health benefits in Italy</div>
                            <div className="science-article-support">S. Farchi, E. Lapucci, P. Michelozzi - Epidemiol Prev.</div>
                            <div className="science-article-date">Sep-Dec, 2015</div>
                        </div>
                    </a>

                    <a style={{display: "table-cell"}} href="https://www.ncbi.nlm.nih.gov/pubmed/27783931" target="_blank">
                        <div className="science-article">
                            <div className="science-article-title">Carbon footprint of conventional and organic beef production systems: An Italian case study</div>
                            <div className="science-article-support">C. Buratti, F. Fantozzi, M. Barbanera, E. Lascaro, M. Chiorri, L. Cecchini - Sci Total Environ.</div>
                            <div className="science-article-date">15 Jan, 2017</div>
                        </div>
                    </a>

                    <a style={{display: "table-cell"}} href="https://www.ncbi.nlm.nih.gov/pubmed/26020346" target="_blank">
                        <div className="science-article">
                            <div className="science-article-title">Cradle-to-farm gate environmental footprints of beef cattle production in Kansas, Oklahoma, and Texas</div>
                            <div className="science-article-support">CA. Rotz, S. Asem-Hiablie, J. Dillon, H. Bonifacio - J Anim Sci.</div>
                            <div className="science-article-date">May, 2015</div>
                        </div>
                    </a>

                    <a style={{display: "table-cell"}} href="https://pubs.acs.org/doi/pdf/10.1021/es103240z" target="_blank">
                        <div className="science-article">
                            <div className="science-article-title">Including Carbon Emissions from Deforestation in the Carbon Footprint of Brazilian Beef</div>
                            <div className="science-article-support">C. Cederberg, UM. Persson, K. Neovius, S. Molander, R. Clift - Environ Sci Technol.</div>
                            <div className="science-article-date">1 Mar, 2011</div>
                        </div>
                    </a>
                
                </div>

                <Footer />
            </div>
    
        );
        
    }

}

export default Science;