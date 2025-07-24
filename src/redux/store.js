import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import adminSlice from "./reducers/adminSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        admin: adminSlice,
    },
});

export default store;
export * from "./reducers/authSlice";
export * from "./reducers/adminSlice";
