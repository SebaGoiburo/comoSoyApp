import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/CounterSlice'
import testReducer from '../features/TestSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        test: testReducer
    }
})