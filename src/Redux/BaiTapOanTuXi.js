const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/gameOanTuXi/keo.png', datCuoc: true },
        { ma: 'bua', hinhAnh: './img/gameOanTuXi/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './img/gameOanTuXi/bao.png', datCuoc: false },
    ],
    ketQua: 'Im iron man, i love u 3000',
    soBanThang: 0,
    soBanChoi: 0,
    computer:
        { ma: 'bao', hinhAnh: './img/gameOanTuXi/bao.png', datCuoc: false },

}
const BaiTapGameOanTuXi = (state = stateDefault, action) => {
    switch (action.type) {
        case "CHON_KEO_BUA_BAO": {
            let mangDatCuocUpdate = [...state.mangDatCuoc];
            mangDatCuocUpdate = mangDatCuocUpdate.map((item, index) => {
                return { ...item, datCuoc: false }
            })
            let index = mangDatCuocUpdate.findIndex((i) => i.ma === action.maCuoc);
            if(index !== -1){
                mangDatCuocUpdate[index].datCuoc= true;
            }
            state.mangDatCuoc = mangDatCuocUpdate;
            return {...state}
        };
        case "RAN_DOM" : {
            let soNgauNhien = Math.floor(Math.random()*3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien]
            state.computer = quanCuocNgauNhien

           return {...state}
        }
        default: return { ...state };
    };
};
export default BaiTapGameOanTuXi;