import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/CounterSlice'
import testReducer from '../features/TestSlice'
import { testApi } from "../services/testServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authServices";
import authReducer from "../features/UserSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        test: testReducer,
        auth: authReducer,
        [testApi.reducerPath]: testApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(testApi.middleware).concat(authApi.middleware)
});

setupListeners(store.dispatch);

export default store;