import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import ASideMenu from "../components/ASideMenu";
import LoadingComponent from "../components/LoadingComponent";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import PagesURL from "../constants/PagesURL";

const AuthLayout = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const status = useSelector((state) => state.auth.status);

    if (status == "loading") return <LoadingComponent />;

    // Check User isAuthenticated
    if (status == "success" && !isAuthenticated) {
        return <Navigate to={PagesURL.LOGIN.URL} replace />;
    }

    return (
        <>
            <Toaster reverseOrder={false} />
            <div className="flex">
                <ASideMenu />
                <div className="flex-1 min-h-screen flex flex-col">
                    <HeaderComponent />
                    <div className="bg-neutral-50 h-auto min-h-[calc(100vh-195px)] flex items-start justify-start p-10 box-border">
                        <Outlet />
                    </div>
                    <FooterComponent />
                </div>
            </div>
        </>
    );
};

export default AuthLayout;
