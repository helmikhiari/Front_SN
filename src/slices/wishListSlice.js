
import { createSlice } from '@reduxjs/toolkit';

const initialState =
{
    wishList: []
}

const wishlistSlice = createSlice({
    name: "wishList",
    initialState,
    reducers: {
        setWishList: (state, action) => {
            state.wishList = action.payload;
        },
        clearWishList: (state) => {
            state.wishList = [];
        }

    }
})

export const { setWishList, clearWishList } = wishlistSlice.actions;

export default wishlistSlice.reducer;