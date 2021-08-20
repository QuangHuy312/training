import { combineReducers } from "redux";
import BaiTapGameXucXac from './BaiTapXucXac';
import BaiTapGameOanTuXi from './BaiTapOanTuXi';

const rootReducer = combineReducers({
    BaiTapGameXucXac,
    BaiTapGameOanTuXi
});
export default rootReducer;