import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import AllProjects from "./components/AllProjects/AllProjects";
import Form from "./components/Form/Form";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/aboutMe">
            <AboutMe></AboutMe>
          </Route>
          <Route path="/allProjects">
            <AllProjects></AllProjects>
          </Route>
          <Route path="/form">
            <Form></Form>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
