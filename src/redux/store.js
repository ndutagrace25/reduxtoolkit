import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./counter";

export default configureStore({
    reducer: {
        counter: counterSliceReducer
    }
})