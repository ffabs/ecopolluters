import React, { Component } from 'react';
import '../App.css';
import Nav from '../components/Nav';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {

  render() {

    return (        

        <div className="header footer">
          <SocialIcon className="icon" url="https://www.facebook.com/Ecopolluters-112149543528301/?eid=ARBpbIuZygo64Yd0W9hgh_6osBi68vc9NuK8dUm3DgKvpJfs4YslZcF-gwN_hRdpFJtxOLnTg5AcGCNQ" style={{ height: 60, width: 60 }}/>
          <SocialIcon className="icon" url="https://www.linkedin.com/company/28890458" style={{ height: 60, width: 60 }}/>
          <SocialIcon className="icon" url="https://twitter.com/ecopolluters" style={{ height: 60, width: 60 }}/>
          <Nav />
          <p>ecopolluters N.G.O. - All Rights Reserved</p>
        </div>

    );
    
  }

}

export default Footer;