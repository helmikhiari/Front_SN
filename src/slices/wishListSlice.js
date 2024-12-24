
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
        ,
        toggleWhishlist: (state, action) => {
            const index = state.wishList.indexOf(action.payload)
            if (index == -1)
                state.wishList.push(action.payload)
            else
                state.wishList.splice(index, 1);
        }

    }
})

export const { setWishList, clearWishList, toggleWhishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;