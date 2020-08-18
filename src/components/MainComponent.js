import React,{ Component } from 'react';
import Loader from './LoaderCompnonent';
import ScanPage from './ScanPageComponent';
import Navbar from './NavbarComponent';
import SectionNav from './SectionNavComponent';

class Main extends Component{
  render() {
    return(
      <div className="container mx-auto">
        <Navbar />
        {/* <Loader /> */}
        <SectionNav />
        <ScanPage />
      </div>
    );
  }
}

export default Main;