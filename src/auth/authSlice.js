import { createSlice } from '@reduxjs/toolkit';

// Action creators are generated for each case reducer function
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status:'checando',
        user:{},
        errorMessage:undefined,
    },
    reducers: {
        onChecking: (state, /* action */ ) => {
            state.status='checando';
            state.user={};
            state.errorMessage=undefined;
        },
        onLogin:(state,{payload})=>{
            state.status='autenticado';
            state.user=payload;
            state.errorMessage=undefined;
        },
        onLogout:(state,{payload})=>{
            state.status='no_autenticado';
            state.user={};
            state.errorMessage=payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { onChecking,onLogin,onLogout } = authSlice.actions;