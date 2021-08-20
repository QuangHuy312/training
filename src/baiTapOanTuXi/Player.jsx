import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <div className="playerGame">
        <div className="theThink">
          <img
            style={{ width: 80, height: 80, transform: "rotate(120deg)" }}
            src={this.props.mangDatCuoc.find((item)=> item.datCuoc).hinhAnh}
            alt=""
          />
        </div>
        <div className="speech-bubble "></div>
        <img
          style={{ width: 150, height: 150 }}
          src="./img/gameOanTuXi/player.png"
          alt="player"
        />
        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            let border = {};
            if (item.datCuoc) {
              border = { border: "3px solid orange" };
            }

            return (
              <div  key={index} className="col-4">
                <button onClick ={()=>{this.props.datCuoc(item.ma)}} style={border} className="btn btnItem">
                  <img
                    style={{ width: 50, height: 50 }}
                    src={item.hinhAnh}
                    alt="{item.hinhAnh}"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.BaiTapGameOanTuXi.mangDatCuoc,
  };
};

const mapDispatchToProps = dispatch => {
    return {
        datCuoc : (maCuoc)=>{
            dispatch({
                type :"CHON_KEO_BUA_BAO",
                maCuoc,
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Player);
