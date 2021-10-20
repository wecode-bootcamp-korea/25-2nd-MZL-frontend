import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './pages/main/Main';
import ProductCard from './components/ProductCard/ProductCard';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/productcard" component={ProductCard} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
