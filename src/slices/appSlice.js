import { createSlice } from "@reduxjs/toolkit"


const initialState =
{
    param_category: null,
    param_search:"",
}

const appSlice = createSlice(
    {
        name: "app",
        initialState,
        reducers:
        {
            setParamCategory: (state, action) => {
                state.param_category = action.payload;
            },
            setParamSearch:(state,action)=>
            {
                state.param_search=action.payload.toLowerCase()
            }
        }
    }
)

export const { setParamCategory,setParamSearch } = appSlice.actions;

export default appSlice.reducer