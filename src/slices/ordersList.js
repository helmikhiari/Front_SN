
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    ordersList: []
}

const ordersListSlice = createSlice(
    {
        name: "ordersList",
        initialState,
        reducers:
        {
            setOrders: (state, action) => {
                state.ordersList = action.payload;
            },
            clearOrders: (state) => {
                state.ordersList = [];
            }
        }
    }
)

export const { setOrders, clearOrders } = ordersListSlice.actions;

export default ordersListSlice.reducer;