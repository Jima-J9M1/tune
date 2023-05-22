import {createSlice } from '@reduxjs/toolkit';

const intialState = {
    user:null,
    loading: false,
    error: null
}

const userSlice = createSlice({
    name:"user",
    initialState:intialState,
    reducers:{
        fetchUserList:(state)=>{
            state.loading=true;
            console.log(state.loading)
            state.error=null;
        },
        fetchUserSuccess:(state, action)=>{
            state.user = action.payload;
            console.log(state.user)
            state.loading=false;
            state.error=null;
        },
        fetchUserFailer:(state, action)=>{
            state.loading=false;
            state.error = action.payload;
        },
        addUser:(state, action)=>{
            state.user.push(action.payload)
        },
        deleteUser:(state,action)=>{
            const userId = action.payload;
            state.user = state.user.filter((user)=>user.id !== userId);
        },
        updateUser:(state,action)=>{
            const updateUser = action.payload;
            const indexOfUser = state.user.indexOf((user)=>user.id === updateUser.id);

            if(indexOfUser != -1){
                state.user[indexOfUser] = updateUser;
            }

        },
    }
})


export const {
    fetchUserFailer,
    fetchUserList,
    fetchUserSuccess,
    addUser,
    deleteUser,
    updateUser,
} = userSlice.actions

export default userSlice.reducer;

