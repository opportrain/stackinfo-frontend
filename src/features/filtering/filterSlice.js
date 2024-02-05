import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    filters: []
}
export const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers:{
        addFilter: (state, action)=>{
            if (!state.filters.some((filter) => filter === action.payload)) {
                state.filters = [...state.filters, action.payload];
            }
        },
        removeFilter: (state, action)=>{
            state.filters = state.filters.filter((el)=>{
                return el !== action.payload;
            })
        },
        resetFilters: (state)=>{
            state.filters = [];
        }
    }
})
export const {addFilter, removeFilter, resetFilters} = filterSlice.actions;
export default filterSlice.reducer;