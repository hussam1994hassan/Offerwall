import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router";
import { FiLogOut, FiSettings, FiUser } from "react-icons/fi";
import { BiWallet } from "react-icons/bi";
import { logout } from "../redux/store";
import PagesURL from "../constants/PagesURL";
import { LuCrown } from "react-icons/lu";

const DropdownMenu = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const user = useSelector((state) => state.auth.user);
    const isAdmin = useSelector((state) => state.auth.isAdmin);
    const avatarUrl = user?.image;

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate(PagesURL.LOGIN.URL);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                className="focus:outline-none cursor-pointer flex flex-row items-center justify-between gap-2"
                onClick={() => setOpen((prev) => !prev)}
            >
                <span className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    J
                </span>
            </button>
            {open && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg z-50 ring-1 ring-black/5">
                    <div className="px-4 py-2 border-b border-gray-100 flex items-center">
                        <img
                            src={avatarUrl}
                            alt="avatar"
                            className="w-8 h-8 rounded-full mr-3"
                        />
                        <div>
                            <div className="font-semibold text-gray-800">
                                {user?.first_name} {user?.last_name}
                            </div>
                            <div className="text-xs text-gray-400">
                                {user?.email || ""}
                            </div>
                        </div>
                    </div>
                    <ul className="py-1">
                        {isAdmin &&
                        location.pathname.split("/")[1] == "admin" ? (
                            <li>
                                <Link
                                    to={PagesURL.DASHBOARD.URL}
                                    className="flex items-center px-4 py-2 text-sm text-blue-700 hover:bg-gray-100"
                                    onClick={() => setOpen(false)}
                                >
                                    <span className="mr-3 text-lg text-blue-600">
                                        <PagesURL.DASHBOARD.ICON />
                                    </span>
                                    Dashboard
                                </Link>
                            </li>
                        ) : (
                            <li>
                                <Link
                                    to={PagesURL.ADMIN.URL}
                                    className="flex items-center px-4 py-2 text-sm text-orange-700 hover:bg-gray-100"
                                    onClick={() => setOpen(false)}
                                >
                                    <span className="mr-3 text-lg text-orange-600">
                                        <PagesURL.ADMIN.ICON />
                                    </span>
                                    Admin Panel
                                </Link>
                            </li>
                        )}

                        <li>
                            <Link
                                to="/profile"
                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setOpen(false)}
                            >
                                <span className="mr-3 text-lg text-gray-600">
                                    <FiUser />
                                </span>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/settings"
                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setOpen(false)}
                            >
                                <span className="mr-3 text-lg text-gray-600">
                                    <FiSettings />
                                </span>
                                Settings
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/withdraw"
                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setOpen(false)}
                            >
                                <span className="mr-3 text-lg text-gray-600">
                                    <BiWallet />
                                </span>
                                Withdraw
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    setOpen(false);
                                    handleLogout();
                                }}
                                className="flex items-center w-full px-4 py-2 text-sm text-red-500 hover:bg-gray-100 cursor-pointer"
                            >
                                <span className="mr-3 text-lg">
                                    <FiLogOut />
                                </span>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
