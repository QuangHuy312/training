import React, { Component } from "react";
import imgcontent from '../assets/img/img-content.jpg'

class Content extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1>What We Do</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              nostrum molestias nobis nulla modi exercitationem culpa sapiente
              quaerat quae ut?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              nostrum molestias nobis nulla modi exercitationem culpa sapiente
              quaerat quae ut?
            </p>
          </div>
          <div className="col-4">
            <h1>Contact Us</h1>
            <p>Cybersoft</p>
            <p>Su Van Hanh, quận 10, Tp.HCM</p>
            <p>website: cybersoft.edu.vn</p>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={imgcontent} className="card-img-top" alt="content" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={imgcontent} className="card-img-top" alt="content" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={imgcontent} className="card-img-top" alt="content" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
