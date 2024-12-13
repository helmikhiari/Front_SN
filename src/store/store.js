import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice"
import wishListReducer from "../slices/wishListSlice"
import productReducer from "../slices/productSlice"
import cartListReducer from "../slices/cartListSlice"
import ordersListReducer from "../slices/ordersList"
const store = configureStore({
    reducer:
    {
        user: userReducer,
        wishList: wishListReducer,
        products: productReducer,
        cartList: cartListReducer,
        ordersList: ordersListReducer
    }
})

export default store;