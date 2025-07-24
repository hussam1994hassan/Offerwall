import React from "react";
import PagesURL from "../constants/PagesURL";
import { Link } from "react-router-dom";
import ProfileDropdownMenu from "./ProfileDropdownMenu";
import NotificationDropdown from "./NotificationDropdown";
import LogoApp from "./LogoApp";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <header className="bg-white text-neutral-700 h-20 border border-b-[1px] border-gray-300 sticky top-0 left-0 z-10">
            <div className="w-full mx-auto px-10 py-4 flex items-center justify-end">
                {isAuthenticated ? (
                    <div className="flex items-center space-x-6">
                        <NotificationDropdown />
                        <ProfileDropdownMenu />
                    </div>
                ) : (
                    <div className="flex flex-row items-center justify-between w-full h-full">
                        <LogoApp />
                        <div className="flex items-center space-x-4">
                            <Link
                                to={PagesURL.LOGIN.URL}
                                className="text-indigo-600 hover:text-indigo-800 font-bold"
                            >
                                Sign In
                            </Link>
                            <Link
                                to={PagesURL.REGISTER.URL}
                                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default HeaderComponent;
