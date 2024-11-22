import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipes = createAsyncThunk('recipes/fetch', async()=>{
    const result = await axios.get("https://dummyjson.com/recipes")
    sessionStorage.setItem("allRecipes",JSON.stringify(result.data.recipes))
    return result.data.recipes
})


const recipeSlice = createSlice({
    name: 'recipes',
    initialState: {
        allRecipes: [],
        loading: false,
        setSearch: ''
    },
    reducers: {
        setSearch(state, action) {
            state.setSearch = action.payload;
        },

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRecipes.fulfilled,(state,apiResult)=>{
            state.allRecipes = apiResult.payload,
            state.loading = false
        })
        builder.addCase(fetchRecipes.pending,(state)=>{
            state.allRecipes = []
            state.loading = true
        })
        builder.addCase(fetchRecipes.rejected,(state)=>{
            state.allRecipes = []
            state.loading = false
        })
    }
})

export const { setSearch} = recipeSlice.actions; 
export default recipeSlice.reducer