import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    filters: [],
    searchToken: ''
}
export const filterSlice = createSlice({
    name: "filters", initialState, reducers: {
        changeSearchToken: (state, action) => {
            state.searchToken = action.payload;
        }, addFilter: (state, action) => {
            if (!state.filters.some((filter) => filter.filterName === action.payload.filterName)) {
                state.filters = [...state.filters, action.payload];
            }
        }, removeFilter: (state, action) => {
            state.filters = state.filters.filter((el) => {
                return el.filterName !== action.payload;
            })
        }, resetFilters: (state) => {
            state.filters = [];
        }
    }
})
export const {addFilter, removeFilter, resetFilters, changeSearchToken} = filterSlice.actions;
export default filterSlice.reducer;