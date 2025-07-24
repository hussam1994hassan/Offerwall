import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import LoadingComponent from "../components/LoadingComponent";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import PagesURL from "../constants/PagesURL";
import NotAccessPage from "../pages/NotAccessPage";
import AdminAsideMenu from "../components/admin/AdminAsideMenu";

const AdminLayout = () => {
    const status = useSelector((state) => state.auth.status);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const isAdmin = useSelector((state) => state.auth.isAdmin);

    if (status == "loading") return <LoadingComponent />;

    // Check User isAuthenticated
    if (status == "success" && !isAuthenticated) {
        return <Navigate to={PagesURL.LOGIN.URL} replace />;
    }

    // Check User isAdmin
    if (!isAdmin) {
        return <NotAccessPage />;
    }

    return (
        <>
            <Toaster reverseOrder={false} />
            <div className="flex">
                <AdminAsideMenu />
                <div className="flex-1 min-h-screen flex flex-col">
                    <HeaderComponent auth={true} />
                    <div className="bg-neutral-50 h-auto min-h-[calc(100vh-195px)] flex items-start justify-start p-10 box-border">
                        <Outlet />
                    </div>
                    <FooterComponent />
                </div>
            </div>
        </>
    );
};

export default AdminLayout;
