import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    filters: []
}
export const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers:{
        addFilter: (state, action)=>{
            state.filters = [...state.filters, action.payload];
        },
        removeFilter: (state, action)=>{
            state.filters = state.filters.filter((el)=>{
                return el !== action.payload;
            })
        },
        addFilters: (state, action)=>{
            state.filters = state.filters.concat(action.payload);
        },
        resetFilters: (state)=>{
            state.filters = [];
            console.log(state.filters)
        }
    }
})
export const {addFilter, removeFilter, addFilters, resetFilters} = filterSlice.actions;
export default filterSlice.reducer;