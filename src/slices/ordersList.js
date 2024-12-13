
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    orders: []
}

const ordersListSlice = createSlice(
    {
        name: "ordersList",
        initialState,
        reducers:
        {
            setOrders: (state, action) => {
                state.orders = action.payload;
            },
            clearOrders: (state) => {
                state.orders = [];
            }
        }
    }
)

export const { setOrders, clearOrders } = ordersListSlice.actions;

export default ordersListSlice.reducer;