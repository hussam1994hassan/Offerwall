import React from "react";
import { Navigate, Outlet } from "react-router";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import PagesURL from "../constants/PagesURL";
import LoadingComponent from "../components/LoadingComponent";

const GuestLayout = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const status = useSelector((state) => state.auth.status);

    if (status == "loading") return <LoadingComponent />;

    // Check User unAuthenticated
    if (status == "success" && isAuthenticated) {
        return <Navigate to={PagesURL.DASHBOARD.URL} replace />;
    }

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <HeaderComponent />
            <div className="bg-neutral-50 h-auto min-h-[calc(100vh-190px)] flex items-center justify-center p-10 box-border">
                <Outlet />
            </div>
            <FooterComponent />
        </>
    );
};

export default GuestLayout;
