import { createSlice } from "@reduxjs/toolkit";


const initialState={
    hero: 0,
}



export const heroSlice = createSlice({
    name: 'hero',
    initialState,
    reducers:{
        setIdMovie: (state, action) =>{
            state.hero = action.payload;
        }
    }
})

export const {setIdMovie} = heroSlice.actions;

export const selectMovie = state => state.hero.hero;

export default heroSlice.reducer;