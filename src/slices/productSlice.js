import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [],
    filteredProducts: []
}


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers:
    {
        setProducts: (state, action) => {
            state.products = action.payload;
            state.filteredProducts = action.payload
        },
        setFilteredProducts: (state, action) => {
            state.filteredProducts = action.payload;
        }
    }
})

export const { setProducts, setFilteredProducts } = productSlice.actions;

export default productSlice.reducer;