import React, { Component } from "react";
import Navbar from "./navbar";
import Carousel from "./carousel";
import Smartphone from "./smartphone";
import Laptop from "./laptop";
import Promotion from "./promotion";

class HomeEx1 extends Component {
  render() {
    return (
      <div className="bg-dark text-center">
        <Navbar />
        <Carousel />
        <Smartphone />
        <Laptop />
        <Promotion />
      </div>
    );
  }
}

export default HomeEx1;
