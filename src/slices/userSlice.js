import { createSlice } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux";

const initialState =
{
    firstName: "",
    lastName: "",
    email: "",
    isAuthenticated: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:
    {
        setIsAuth: (state, action) => {
            state.isAuthenticated = action.payload
        },

        setData: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
        },
        logout: (state) => {
            state.firstName = "",
                state.lastName = '',
                state.email = "",
                state.isAuthenticated = false;
            localStorage.removeItem("token");
        }
    }
})

export const { setIsAuth, setData, logout } = userSlice.actions;
export default userSlice.reducer;

