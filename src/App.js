import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from './pages/homepage/homepage.component';
import FindUs from './pages/find-us/find-us.component';

import Header from "./components/header/header.component";

import ScrollToTop from "./components/scroll-to-top/scroll-to-top.component";












export default function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route path="/menu" >
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

function Menu() {
  return <h2>Menu</h2>;
}