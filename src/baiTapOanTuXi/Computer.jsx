import React, { Component } from "react";
import { connect } from "react-redux";
class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()}{
       0% {top :-50px}
       25%{top :100px}
       50% {top :-50px}
       75% {top :100px}
       100%{top:0}
        
    }`;
    return (
      <div className="playerGame">
        <style>{keyframe}</style>
        <div className="theThink" style={{ position: "relative" }}>
          <img
            style={{
              width: 80,
              height: 80,
              transform: "rotate(120deg)",
              animation: `randomItem${Date.now()} 0.5s `,
              position: "absolute",
              left: "30%"
            }}
            src={this.props.computer.hinhAnh}
            alt=""
          />
        </div>
        <div className="speech-bubble "></div>
        <img
          style={{ width: 150, height: 150 }}
          src="./img/gameOanTuXi/playerComputer.png"
          alt="computer"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.BaiTapGameOanTuXi.computer,
  };
};
export default connect(mapStateToProps)(Computer);
