import React, { Component } from "react";
import "./testXucXac.css";
import XucXac from "./XucXac";
import Result from "./Result";
import { connect } from "react-redux";

class TestXucXac extends Component {
  render() {
    return (
      <div
        className="game"
        style={{
          background: "url(./img/gameXucXac/bgGame.png)",
          position: "fixed",
          width: "100% ",
          height: "100%",
        }}
      >
        <div className="title-game text-center mt-5">Bài Tập Game Xúc Xắc</div>
        <div className="row text-center mt-5">
          <div className="col-4">
            <button
              onClick={() => {
                this.props.datCuoc(true);
              }}
              className="btn  btn-game"
            >
              Tài
            </button>
          </div>
          <div className="col-4">
            <XucXac />
          </div>
          <div className="col-4">
            <button
              onClick={() => {
                this.props.datCuoc(false);
              }}
              className="btn btn-game"
            >
              Xỉu
            </button>
          </div>
        </div>
        <div className="result-game text-center">
          <Result />

          <button
            onClick={() => {
              this.props.playGame();
            }}
            className="btn btn-success p-2 display-4 mt-5"
          >
            Play Game
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      let action = {
        type: "DAT_CUOC",
        taiXiu,
      };
      dispatch(action);
    },
    playGame: () => {
      dispatch({
        type: "PLAY_GAME",
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(TestXucXac);
