import React, { Component } from 'react';
import promotion_1 from "../assets/img/promotion_1.png"
import promotion_2 from "../assets/img/promotion_2.png"
import promotion_3 from "../assets/img/promotion_3.png"

class Promotion extends Component {
    render() {
        return (
            <div className="container-fluid pt-5 pb-5">
                <h1 className="text-white">PROMOTION</h1>
                <div className="container pt-5 pb-5 bg-light">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="container">
                                <img src={promotion_1} alt="promotion-1" className="img-fluid" />
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="container">
                                <img src={promotion_2} alt="promotion-2" className="img-fluid"/>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="container">
                                <img src={promotion_3} alt="promotion-3" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Promotion;