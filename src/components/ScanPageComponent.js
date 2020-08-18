import React, { Component } from 'react';
import QRCode from 'qrcode.react';

class ScanPage extends Component {
  render() {
    return(
      <div className="flex justify-center">
        <QRCode size="200" renderAs="svg" fgColor="#201E50" value="http://facebook.github.io/react/" />
        <h1 className="text-center absolute inset-x-0 bottom-0 textColor font-bold text-xl pb-24">Your friends can scan this QR Code</h1>
      </div>
    );
  }
}

export default ScanPage;