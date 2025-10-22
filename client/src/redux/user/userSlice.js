import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
}

const useSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailur: (state, action) => {
            state.currentUser = null,
                state.loading = false,
                state.error = action.payload
        }
    }
})

export const {signInFailur,signInStart,signInSuccess}= useSlice.actions

export default useSlice.reducer
