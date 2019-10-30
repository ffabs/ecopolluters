import React, { Component } from 'react';
import '../App.css';
import Nav from '../components/Nav';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {

  render() {

    return (        

        <div className="header">
          <hr></hr>
          <SocialIcon url="https://www.facebook.com/Ecopolluters-112149543528301/?eid=ARBpbIuZygo64Yd0W9hgh_6osBi68vc9NuK8dUm3DgKvpJfs4YslZcF-gwN_hRdpFJtxOLnTg5AcGCNQ" />
          <SocialIcon url="https://www.linkedin.com/company/28890458" />
          <Nav />
          <p>Ecopolluters N.G.O. - All Rights Reserved</p>
        </div>

    );
    
  }

}

export default Footer;