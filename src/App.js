import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Home from './components/home/Home';
import DataDetails from './components/details/DataDetails';
import Topbar from './components/topbar/Topbar';
import countries from './components/countries/countries';
import './css/core.css';
import './css/form.css';
import './css/countries.css';
import './css/data.css';

function App() {
  return (
    <Router>
      <Topbar />
      <Container fluid>
        <Switch>
          {countries.map((country) => (
            country.map((c) => (
              <Route key={c} path={`/air-pollution-details/${c.name}`}>
                <DataDetails />
              </Route>
            ))
          ))}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
