import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from './pages/homepage/homepage.component';

import Header from "./components/header/header.component";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/find-us">
          <FindUs />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

function About() {
  return <h2>A propos de nous</h2>;
}

function FindUs() {
  return <h2>Nous trouver</h2>;
}

function Menu() {
  return <h2>Menu</h2>;
}