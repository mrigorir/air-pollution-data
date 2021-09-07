import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import DataDetails from './components/dataDetails/DataDetails';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/air-pollution-details">
            <DataDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
