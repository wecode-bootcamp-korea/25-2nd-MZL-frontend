import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/main/Main';
import Flightschedule from './components/Flightschedule/Flightschedule';
import SimpleSlider from './components/Advertisement/Advertisement';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <SimpleSlider />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/fs" component={Flightschedule} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
