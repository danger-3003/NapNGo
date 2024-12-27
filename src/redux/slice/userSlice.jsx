import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:{
        user:null,
    },
    reducers:{
        LOGIN:(state,action)=>{
            state.user=action.payload;
        },
        LOGOUT:(state)=>{
            state.user=null;
        },
    },
});

export const {LOGIN, LOGOUT} = userSlice.actions;
export default userSlice.reducer;