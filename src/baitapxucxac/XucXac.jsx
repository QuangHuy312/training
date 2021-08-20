import React, { Component } from 'react';
import {connect} from 'react-redux'

class XucXac extends Component {
    renderXucXac =()=>{
        return this.props.mangXucXac.map((xucXac,index)=>{
            return (
                <img key={index }src={xucXac.img} alt={xucXac.img} style={{width:35 , height:35}}  className="ml-2"/>
                
            )
        })
    }
    render() {
        return (
            <div>
                {this.renderXucXac()}
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        mangXucXac : state.BaiTapGameXucXac.mangXucXac,
    }
}

export default connect(mapStateToProps)(XucXac);