import { createSlice } from "@reduxjs/toolkit";
import User from "../../models/User";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        isAdmin: false,
        user: null,
        notifications: [],
        apps: [],
        offers: [],
        payments: [],
        paymentInfo: null,
        reports: [],
        token: null,
        status: "loading",
    },
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
            state.user = User;
            state.isAdmin = User.is_admin;
            state.notifications = User.Notifications;
            state.apps = User.Apps;
            state.offers = User.Offers;
            state.payments = User.Payments;
            state.paymentInfo = User.PaymentInfo;
            state.reports = User.Reports;
            state.token = "c99d2887-62c0-4d3c-b422-1c441cd0ce0e";
            state.status = "success";
            localStorage.setItem("token", state.token);
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.isAdmin = false;
            state.token = null;
            state.notifications = [];
            state.apps = [];
            state.offers = [];
            state.payments = [];
            state.paymentInfo = null;
            state.reports = [];
            state.status = "success";
            localStorage.removeItem("token");
        },
        checkAuth: (state) => {
            if (
                localStorage.getItem("token") != null &&
                localStorage.getItem("token") ==
                    "c99d2887-62c0-4d3c-b422-1c441cd0ce0e"
            ) {
                state.isAuthenticated = true;
                state.status = "success";
                state.user = User;
                state.isAdmin = User.is_admin;
                state.notifications = User.Notifications;
                state.apps = User.Apps;
                state.offers = User.Offers;
                state.payments = User.Payments;
                state.paymentInfo = User.PaymentInfo;
                state.reports = User.Reports;
            }
            state.status = "success";
        },
    },
});

export default authSlice.reducer;
export const { login, logout, checkAuth } = authSlice.actions;
