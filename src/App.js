
import React from "react";
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import About from "./pages/About/About";
import Contucts from "./pages/Contucts/Contucts";
import Detail from "./pages/details/Detail";
import Error from "./pages/Error/Error";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/detail/:title">
            <Detail></Detail>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contucts">
            <Contucts></Contucts>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
