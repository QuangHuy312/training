import React, { Component } from 'react';
import {connect} from 'react-redux'
class Result extends Component {
    render() {
        const {soBanThang , taiXiu , tongSoBanChoi} = this.props
        return (
            <div>
                <div className="display-4">BẠN CHỌN : <span className="text-danger">{taiXiu ? "TÀI" : "XỈU"}</span>
                </div>

                <div className="display-4">BÀN THẮNG : <span className="text-success">{soBanThang}</span>
                </div>  

                <div className="display-4"> TỔNG SỐ BÀN CHƠI : <span className="text-primary">{tongSoBanChoi}</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        soBanThang : state.BaiTapGameXucXac.soBanThang,
        taiXiu : state.BaiTapGameXucXac.taiXiu,
        tongSoBanChoi : state.BaiTapGameXucXac.tongSoBanChoi,
    };
};
export default connect(mapStateToProps)(Result);