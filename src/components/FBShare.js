import React, { Component } from 'react';
import '../App.css';

class FBShare extends Component {
  
  render() {

    return (        

        <div>
          <div id="fb-root"></div>
          <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v5.0"></script>
          <div className="fb-share-button" data-href="https://ecopolluters.org/#/" data-layout="button" data-size="small">
            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fecopolluters.org%2F%23%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">
              <div className="fb-share-text">SHARE ECOPOLLUTERS ON FACEBOOK</div>
            </a>
          </div>
        </div>

    );
    
  }

}

export default FBShare;