import React from 'react';
import firstImage from '../images/ProtectLandImages/undraw_festivities_tvvj.png';
import secondImage from '../images/ProtectLandImages/treeimage2.png';
import thirdImage from '../images/ProtectLandImages/treeimage3.png';
import sectionSeparation from '../images/ProtectLandImages/sectionseparation.png';
import brazilforest from '../images/ProtectLandImages/brazilforest.png';
import googlemaps from '../images/ProtectLandImages/googlemaps.png';
import how1 from '../images/ProtectLandImages/how1.png';
import how2 from '../images/ProtectLandImages/how2.png';
import how3 from '../images/ProtectLandImages/how3.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ProtectLand.css';

function ProtectLand() {
  return ( 
    <div>
        <Header page={'ProtectLand'}/> 
        <div className="home-sections">
            <div className="home-first-section">
                <div className="home-first-section-text">
                    <div className="home-title">Protect land in danger</div>
                    <div className="home-text">We are on a mission to protect the Brazilian rainforest.</div>
                    <div className="home-text">Get on board and become a natural reserve ambassador.</div>
                    <a style={{display: "table-cell"}} href="https://eepurl.com/hpXOy1" target="_blank" rel="noopener noreferrer">
                        <div className="protectland-button">
                            Protect the Brazilian Rainforest
                        </div>
                    </a>
                    <div className="home-supporting-text">You can protect the land with as little as €4</div>
                </div>
                <div>
                    <img src={firstImage} className="home-first-image" alt="trees" />
                </div>
            </div>

            <div className="home-goal-section">
                <div className="goal-status">Goal status:</div>
                <div className="goal-stauts-content">
                    <div className="goal-status-content-left">
                        <div className="current-number">322</div>
                        <div className="goal-description">out of 3650 days of forest protection</div>
                    </div>
                    <div className="goal-reference">10 acres of land 🌳</div>
                </div>
                <div className="goal-bar-background">
                    <div className="goal-bar-progress"></div>
                </div>
                    <div className="home-supporting-text">Last updated date: 10/02/2021</div>
            </div>

            <img src={sectionSeparation} className="section-separation" alt="sectionSeparation" />
                    
        
            
            <div className="home-second-section-groups">
                <div className="second-section-group">
                    <div><img src={secondImage} className="second-section-image" alt="trees" /></div>
                    <div className="home-text"><b>World is failing</b></div>
                    <div className="home-text">Institutions fail to protect habitats effectively leading to land degraditon.</div>
                </div>
                <div className="second-section-group">
                    <img src={thirdImage} className="second-section-image" alt="trees" />
                    <div className="home-text"><b>Stronger together</b></div>
                    <div className="home-text">Together we can make an impact together. We buy the land and invest to protect it long term.</div>
                </div>
            </div>
            <div className="home-second-section-belowgroups">
                <a style={{display: "table-cell"}} href="https://eepurl.com/hpXOy1" target="_blank" rel="noopener noreferrer">
                    <div className="protectland-button">
                        Protect the Brazilian Rainforest
                    </div>
                </a>
                <img src={sectionSeparation} className="section-separation" alt="sectionSeparation" />
            </div>

            <div className="third-section-group">
                <img src={brazilforest} className="third-section-group-image"/>
                <div className="third-section-group-text">
                    <div className="home-text"><b>Rainforest in Brazil</b></div>
                    <div className="home-text">As the home to approximately 13% of all known species, Brazil has one of the most diverse collections of flora and fauna on the planet.</div>
                    <div className="home-text">However, this biodiversity is threaten by many environmental issues, including deforestation, illegal wildlife trade, air and land degradation, water pollution caused by caused by an expanding agriculture and mining among others.</div>
                </div>
            </div>
            <div className="third-section-googlemaps-group">
                <img src={googlemaps} className="home-googlemaps-image"/>
                <div className="home-text">📍 Address, location, State, Continent | View in maps</div>
                <div className="home-text">50 acres</div>
                <div className="home-text">$30 daily cost</div>
            </div>
            <img src={sectionSeparation} className="section-separation" alt="sectionSeparation" />
            
            <div className="home-title">How does it work?</div>
            <div className="howitworks-section">

                <div className="howitworks-group">
                    <div><img src={how1} className="howitworks-image"/></div>
                    <div className="home-text">1. Choose for how many days you want to protect the land</div>
                </div>

                <div className="howitworks-group">
                    <div><img src={how2} className="howitworks-image"/></div>
                    <div className="home-text">2. Once the minimum amount of days is reached, the payment is processed and the land is bought</div>
                </div>

                <div className="howitworks-group">
                    <div><img src={how3} className="howitworks-image"/></div>
                    <div className="home-text">3. Supporters can visit the land anytime and have access to the monitoring report on a regular basis</div>
                </div>
    
            </div>

            <div className="money-explenation">
                <div>
                    <div className="home-title">Peer contribution</div>
                    <div className="onedaycost">
                        <div className="onedaycost-text">
                            <div className="home-title">1 DAY</div>
                            <div className="home-text">of protection</div>
                            <div className="home-text oneday-space">What users would get when purchasing</div>
                            <div className="one-day-price oneday-space">€30</div>
                        </div>
                        <a style={{display: "table-cell"}} href="https://eepurl.com/hpXOy1" target="_blank" rel="noopener noreferrer">
                            <div className="protectland-button">
                                Protect the Brazilian Rainforest
                            </div>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="home-title">How the money are spent</div>
                </div>
            </div>

            <img src={sectionSeparation} className="section-separation" alt="sectionSeparation" />

        </div>
        
        <Footer page={'ProtectLand'}/>
    </div>  
  );
}

export default ProtectLand;