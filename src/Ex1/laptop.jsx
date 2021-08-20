import React, { Component } from 'react';
import laptopHP from '../assets/img/lt_hp.png'
import laptopLenovo from '../assets/img/lt_hp.png'
import laptopMacbook from '../assets/img/lt_macbook.png'
import laptopRog from '../assets/img/lt_rog.png'

class Laptop extends Component {
    render() {
        return (
            <div className ="bg-light text-dark container-fluid pt-5 pb-5">
                <h1>
                    BEST LAPTOP
                </h1>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="container">
                            <div className="card bg-light" style={{ width: "300px" }}>
                                <img src={laptopMacbook} alt="macbook"  style={{height:"250px"}}/>
                                <div className="card-body">
                                    <h4 className="card-title">MACBOOK</h4>
                                    <p className="card-text">The MacBook is a brand of notebook computers manufactured by Apple Inc</p>
                                    <a href="#" className="btn btn-primary mr-2">Detail</a>
                                    <a href="#" className="btn btn-danger">Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="container">
                            <div className="card bg-light" style={{ width: "300px" }}>
                                <img src={laptopRog} alt="asusrog"  style={{height:"250px"}}/>
                                <div className="card-body">
                                    <h4 className="card-title">ASUS ROG</h4>
                                    <p className="card-text">the Asus ROG Strix Flare is the latest addition to Asus' lineup of ROG branded devices</p>
                                    <a href="#" className="btn btn-primary mr-2">Detail</a>
                                    <a href="#" className="btn btn-danger">Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="container">
                            <div className="card bg-light" style={{ width: "300px" }}>
                                <img src={laptopHP} alt="hpomen"  style={{height:"250px"}}/>
                                <div className="card-body">
                                    <h4 className="card-title">HP OMEN</h4>
                                    <p className="card-text">A young global smartphone brand focusing on introducing perfect sound quality</p>
                                    <a href="#" className="btn btn-primary mr-2">Detail</a>
                                    <a href="#" className="btn btn-danger">Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="container">
                            <div className="card bg-light" style={{ width: "300px" }}>
                                <img src={laptopLenovo} alt="lenovo"  style={{height:"250px"}}/>
                                <div className="card-body">
                                    <h4 className="card-title">LENOVO THINKPAD</h4>
                                    <p className="card-text">The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012</p>
                                    <a href="#" className="btn btn-primary mr-2">Detail</a>
                                    <a href="#" className="btn btn-danger">Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Laptop;