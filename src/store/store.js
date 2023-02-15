import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import incDecSlice from "./incDec";


const store = configureStore({
    reducer: {
        incDec: incDecSlice.reducer
    }
})

export default store