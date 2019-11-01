import React, { Component } from 'react';
import '../App.css';
import Nav from '../components/Nav';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {

  render() {

    return (        

        <div className="header footer">
          <SocialIcon className="icon" url="https://www.facebook.com/Ecopolluters-112149543528301/?eid=ARBpbIuZygo64Yd0W9hgh_6osBi68vc9NuK8dUm3DgKvpJfs4YslZcF-gwN_hRdpFJtxOLnTg5AcGCNQ" style={{ height: 60, width: 60 }}/>
          <SocialIcon className="icon" url="https://twitter.com/ecopolluters" style={{ height: 60, width: 60 }}/>
          <SocialIcon className="icon" url="https://www.linkedin.com/company/28890458" style={{ height: 60, width: 60 }}/>
          <div id="fb-root"></div>
          <script async defer crossorigin="anonymous" src="https://connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v5.0"></script>
          <div class="fb-share-button" data-href="https://ecopolluters.org/#/" data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fecopolluters.org%2F%23%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share on Facebook</a></div>
          <Nav />
          <p>ecopolluters N.G.O. - All Rights Reserved</p>
        </div>

    );
    
  }

}

export default Footer;