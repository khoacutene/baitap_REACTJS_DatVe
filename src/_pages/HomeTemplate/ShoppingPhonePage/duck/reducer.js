import data from "./../data.json";
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    phones: data,
    phoneDetail: data[0],
    carts: [],
}

const _findIndex = (carts, maSP) => {
    const index = carts.findIndex((item) => item.maSP === maSP)
    return index
}

const ShoppingPhoneReducer = createSlice({
    name: "ShoppingPhoneReducer",
    initialState,
    reducers: {
        setPhoneDetail: (state, action) => {
            const {payload} = action
            state.phoneDetail = payload
        },
        setPhoneAddToCart: (state, action) => {
            console.log("action", action);
            const {payload} = action
            const newCarts = [...state.carts];
            // tạo object mới từ data
            const phoneAddToCart = {
                ...payload,
                soLuong: 1,
              };
              const index = _findIndex(newCarts,phoneAddToCart.maSP)
              if (index !== -1) {
                newCarts[index].soLuong += 1
              }else {
                newCarts.push(phoneAddToCart)
              }
            state.carts = newCarts;
        },
        setUpdateQty: (state, action) => {
            console.log("action", action);
            const newCarts = [...state.carts]
            const {payload} = action
            const index =  _findIndex(newCarts, payload.maSP)
            if (index !== 1 ) {
                if (payload.status) {
                    newCarts[index].soLuong +=1
                } else {
                    if (newCarts[index].soLuong > 1) {
                        newCarts[index].soLuong -= 1;
                      } else {
                        newCarts.splice(index, 1);
                      }
                }
            }
            state.carts = newCarts;
        },
    },
});

export const {setPhoneDetail,setPhoneAddToCart,setUpdateQty} = ShoppingPhoneReducer.actions
export default ShoppingPhoneReducer.reducer;