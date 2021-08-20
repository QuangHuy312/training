import React, { Component } from 'react';
import blackberry from "../assets/img/sp_blackberry.png";
import iphoneX from "../assets/img/sp_iphoneX.png";
import note7 from "../assets/img/sp_note7.png";
import vivo850 from "../assets/img/sp_vivo850.png";

class Smartphone extends Component {
    render() {
        return (
            <div className="pt-5 pb-5 container-fluid">
                <h1 className="text-white">BEST SMARTPHONE</h1>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="container">
                            <div className="card bg-light" style={{ width: "300px" }}>
                                <img src={iphoneX} alt="iphone" className="img-fluid" style={{height :"250px"}} />
                                <div className="card-body">
                                    <h4 className="card-title">iPhone X</h4>
                                    <p className="card-text">iPhone X features a new all-screen design. Face ID, which makes your face your password</p>
                                    <a href="#" className="btn btn-primary mr-2">
                                        Detail
                                    </a>
                                    <a href="#" className="btn btn-danger">
                                        Cart
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="container">
                            <div className="card bg-light" style={{ width: "300px" }}>
                                <img src={note7} alt="note7" className="img-fluid" style={{height :"250px"}} />
                                <div className="card-body">
                                    <h4 className="card-title">Galaxy Note7</h4>
                                    <p className="card-text">The Galaxy Note7 comes with a perfectly symmetrical design for good reason</p>
                                    <a href="#" className="btn btn-primary mr-2">
                                        Detail
                                    </a>
                                    <a href="#" className="btn btn-danger">
                                        Cart
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="container">
                            <div className="card bg-light" style={{ width: "300px" }}>
                                <img src={vivo850} alt="vivo850" className="img-fluid" style={{height :"250px"}} />
                                <div className="card-body">
                                    <h4 className="card-title">Vivo</h4>
                                    <p className="card-text">A young global smartphone brand focusing on introducing perfect sound quality</p>
                                    <a href="#" className="btn btn-primary mr-2">
                                        Detail
                                    </a>
                                    <a href="#" className="btn btn-danger">
                                        Cart
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="container">
                            <div className="card bg-light" style={{ width: "300px" }}>
                                <img src={blackberry} alt="blackberry" className="img-fluid" style={{height :"250px"}} />
                                <div className="card-body">
                                    <h4 className="card-title">Blackberry</h4>
                                    <p className="card-text">BlackBerry is a line of smartphones, tablets, and services originally designed</p>
                                    <a href="#" className="btn btn-primary mr-2">
                                        Detail
                                    </a>
                                    <a href="#" className="btn btn-danger">
                                        Cart
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Smartphone;