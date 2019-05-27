import React, { Component } from "react";
import { Element } from "react-scroll";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueNfo from "./components/venueNfo";
import Highlights from "./components/Highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/Footer";
import "./resources/styles.css";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", background: "#ffff" }}>
        <Header />
        <Element name="Featured">
          <Featured />
        </Element>
        <Element name="VenueNfo">
          <VenueNfo />
        </Element>
        <Element name="Highlights">
          <Highlights />
        </Element>
        <Element name="Pricing">
          <Pricing />
        </Element>
        <Element name="Location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
