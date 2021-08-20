import React, { Component } from "react";
import "./BaiTapOanTuXi.css";
import Player from "./Player"
import Computer from "./Computer"
import KetQuaTroChoi from "./KetQuaTroChoi";
import {connect} from "react-redux"

class BaiTapOanTuXi extends Component {
  render() {
    return (
      <div
        className="gameOanTuXi"
        style={{
          background: "url(./img/gameOanTuXi/bgGame.png",
          position: "fixed",
          width: "100% ",
          height: "100%",
          backgroundSize :"100%"
        }}
      >
          
        <div className="row text-center mt-5">
            <div className="col-4">
                <Player/>
            </div>
            <div className="col-4">
                <KetQuaTroChoi/>
                <button onClick={()=>{this.props.playGame()}} className="btn btn-success display-4 mt-5">Play game</button>
            </div>
            <div className="col-4">
                <Computer/>
            </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps= dispatch=>{
    return {
        playGame : ()=>{
            let count =0;
            let randomComputer = setInterval(() => {
                dispatch({
                    type :"RAN_DOM"
                });
                count ++ ;
                if(count > 8){
                    clearInterval(randomComputer)
                }
            }, 100);
            
        }
    }
}

export default connect(null, mapDispatchToProps)(BaiTapOanTuXi);
