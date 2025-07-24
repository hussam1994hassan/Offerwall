import { createSlice } from "@reduxjs/toolkit";
import Admin from "../../models/Admin";

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        users: [],
        status: "loading",
    },
    reducers: {
        getUsers(state) {
            state.users = Admin.Users;
        },
    },
});

export default adminSlice.reducer;
export const { getUsers } = adminSlice.actions;
