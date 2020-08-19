import React,{ Component } from 'react';
import Loader from './LoaderCompnonent';
import ScanPage from './ScanPageComponent';
import LogsPage from './LogsPageComponent';
import Navbar from './NavbarComponent';
import SectionNav from './SectionNavComponent';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

class Main extends Component{
  state = {
    redirect: false
  }

  componentDidMount() {
    setTimeout(() =>{
      this.setState({ redirect: true });
    }, 1000)
  }

  render() {
    return(
      <div className="container mx-auto">
        <Navbar />
        <BrowserRouter>
          <SectionNav />
          <Route exact path="/scan" component={ScanPage} />
          <Route exact path="/logs" component={LogsPage} />
          {this.state.redirect ? <Redirect to="/scan" /> : <Loader />}
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;