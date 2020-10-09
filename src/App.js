import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from './pages/homepage/homepage.component';
import FindUs from './pages/find-us/find-us.component';
import Menu from './pages/menu/menu.component'
import AboutUs from './pages/about-us/about-us.component'
import ContactUs from './pages/contact-us/contact-us.component'

import Header from "./components/header/header.component";

// import ScrollToTop from "./components/scroll-to-top/scroll-to-top.component";


export default function App() {
  return (
    <Router>
      <Header />
      {/* <ScrollToTop /> */}
      <Switch>
        <Route path="/menu" >
          <Menu />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/find-us">
          <FindUs />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

