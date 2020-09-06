import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import FadeIn from 'react-fade-in';

class ScanPage extends Component {
  render() {
    return(
      <div className="flex justify-center">
        <FadeIn>
          <div>
            <QRCode size={200} renderAs="svg" fgColor="#201E50" value="http://facebook.github.io/react/" />
          </div>
          <div className="pt-24">
            <h1 className="text-center absolute inset-x-0 bottom-0 textColor font-bold text-xl">Your friends can scan this QR Code</h1>
          </div>
        </FadeIn>
      </div>
    );
  }
}

export default ScanPage;