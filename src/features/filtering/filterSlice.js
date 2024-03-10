import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    filters: {},
    searchToken: ''
}
export const filterSlice = createSlice({
    name: "filters", initialState, reducers: {
        changeSearchToken: (state, action) => {
            state.searchToken = action.payload;
        },
        addFilter: (state, action) => {
            let key = action.payload.filterStack.toLowerCase();
            if(state.filters[key]){
                if (!state.filters[key].some((filter) => filter === action.payload.filterName)) {
                    state.filters[key] = [...state.filters[key], action.payload.filterName];
                }
            } else {
                state.filters[key] = [action.payload.filterName];
            }
        },
        removeFilter: (state, action) => {
            let key = action.payload.filterStack.toLowerCase();
            if(state.filters[key]){
                state.filters[key] = state.filters[key].filter((filter)=>{
                    return filter !== action.payload.filterName;
                })
            }
        },
        resetFilters: (state) => {
            state.filters = {};
        }
    }
})
export const {addFilter, removeFilter, resetFilters, changeSearchToken} = filterSlice.actions;
export default filterSlice.reducer;