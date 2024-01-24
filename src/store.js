import {configureStore} from "@reduxjs/toolkit";
import filterReducer from "../src/features/filtering/filterSlice"
export const store = configureStore({
    reducer:{
        filtering: filterReducer
    }
})