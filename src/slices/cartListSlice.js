import { createSlice } from "@reduxjs/toolkit"


const initialState =
{
    cart: []
}

const cartListSlice = createSlice(
    {
        name: "cartList",
        initialState,
        reducers:
        {
            setCartList: (state, action) => {
                state.cart = action.payload;
            },

            deleteFromCart: (state, action) => {
                state.cart = state.cart.filter((item) => item._id != action.payload);
            },

            plusQuantity: (state, action) => {
                const index = state.cart.findIndex((item) => item._id == action.payload);
                state.cart[index].quantity++;
            },

            minusQuantity: (state, action) => {
                const index = state.cart.findIndex((item) => item._id == action.payload);
                state.cart[index].quantity--;
            }
        }
    }
)

export const { setCartList, deleteFromCart, plusQuantity, minusQuantity } = cartListSlice.actions;
export default cartListSlice.reducer;