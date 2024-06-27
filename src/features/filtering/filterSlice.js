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
            if (state.filters[key]) {
                if (!state.filters[key].some((filter) => filter === action.payload.filterName)) {
                    state.filters[key] = [...state.filters[key], action.payload.filterName];
                }
            } else {
                state.filters[key] = [action.payload.filterName];
            }
        },
        removeFilter: (state, action) => {
            let key = action.payload.filterStack.toLowerCase();
            if (state.filters[key]) {
                state.filters[key] = state.filters[key].filter((filter) => {
                    return filter !== action.payload.filterName;
                })
            }
            if (state.filters[key].length === 0) {
                delete state.filters[key];
            }
        },
        resetFilters: (state) => {
            state.filters = {};
        },
        resetSelectAll: (state, action) => {
            let key = action.payload.filterStack.toLowerCase();
            delete state.filters[key];
        },
    }
})
export const {addFilter, removeFilter, resetFilters, changeSearchToken, resetSelectAll} = filterSlice.actions;
export default filterSlice.reducer;