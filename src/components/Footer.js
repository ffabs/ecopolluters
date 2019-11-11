import React, { Component } from 'react';
import '../App.css';
import Nav from '../components/Nav';
import { SocialIcon } from 'react-social-icons';
import ecopolluters from '../images/ecopolluters.svg';
import {Link} from 'react-router-dom';

class Footer extends Component {

  render() {

    return (        

        <div className="footer">
          <div id="fb-root"></div>
          <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v5.0"></script>
          <div className="fb-share-button" data-href="https://ecopolluters.org/#/" data-layout="button" data-size="small">
            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fecopolluters.org%2F%23%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">
              SHARE ON FACEBOOK ➡️
            </a>
          </div>
          <div className="social-section">
            <div className="social">
              <SocialIcon className="icon" url="https://www.facebook.com/Ecopolluters-112149543528301/?eid=ARBpbIuZygo64Yd0W9hgh_6osBi68vc9NuK8dUm3DgKvpJfs4YslZcF-gwN_hRdpFJtxOLnTg5AcGCNQ" style={{ height: 50, width: 50 }} bgColor="#98A1AB"/>
            </div>  
            <div className="social">
              <SocialIcon className="icon" url="https://twitter.com/ecopolluters" style={{ height: 50, width: 50 }} bgColor="#98A1AB"/>
            </div>  
            <div className="social">
              <SocialIcon className="icon" url="https://www.linkedin.com/company/28890458" style={{ height: 50, width: 50 }} bgColor="#98A1AB"/>
            </div>
          </div>
          <div>
            <Nav page={'Footer'}/>
          </div>
          <div>
            <div className="rights">ecopolluters N.G.O. - All Rights Reserved</div>
          </div>
          <Link to="/">
                <img src={ecopolluters} alt="ecopolluters"/>
          </Link>
        </div>

    );
    
  }

}

export default Footer;