import React, { useState } from "react";
import ProfileDropdownMenu from "./ProfileDropdownMenu";
import NotificationDropdown from "./NotificationDropdown";
import LogoApp from "./LogoApp";
import { useSelector } from "react-redux";
import { Bell, Coins, DollarSign, Menu, X } from "lucide-react";
import { Link } from "react-router";
import PagesURL from "../constants/PagesURL";

const HeaderComponent = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white h-20 border-b border-gray-200 sticky top-0 left-0 right-0 z-50 transition-all duration-500">
            <div className="w-full h-full px-10 box-border">
                <div className="flex justify-between items-center h-full">
                    {isAuthenticated ? (
                        <>
                            <small className="bg-violet-500/10 text-violet-500 text-xs px-2 py-1 box-border rounded">
                                Last Payment: $1,647.32
                            </small>
                            <div className="hidden md:flex items-center gap-5">
                                <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full">
                                    <Coins className="w-4 h-4 text-green-600" />
                                    <span className="text-green-600 font-semibold">
                                        $47.32
                                    </span>
                                </div>
                                <NotificationDropdown />
                                <ProfileDropdownMenu />
                            </div>
                        </>
                    ) : (
                        <>
                            <LogoApp />
                            {/* Desktop Navigation */}
                            <nav className="hidden md:flex items-center space-x-8">
                                <a
                                    href="#offers"
                                    className="text-gray-600 hover:text-indigo-600 transition-all duration-300 relative group font-medium"
                                >
                                    Offers
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                                <a
                                    href="#rewards"
                                    className="text-gray-600 hover:text-indigo-600 transition-all duration-300 relative group font-medium"
                                >
                                    Rewards
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                                <a
                                    href="#how-it-works"
                                    className="text-gray-600 hover:text-indigo-600 transition-all duration-300 relative group font-medium"
                                >
                                    How it Works
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                                <a
                                    href="#leaderboard"
                                    className="text-gray-600 hover:text-indigo-600 transition-all duration-300 relative group font-medium"
                                >
                                    Leaderboard
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </nav>

                            {/* Enhanced CTA Buttons */}
                            <div className="hidden md:flex items-center space-x-4">
                                <Link
                                    to={PagesURL.LOGIN.URL}
                                    className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    to={PagesURL.REGISTER.URL}
                                    className="relative overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                                >
                                    <span className="relative z-10">
                                        Get Started
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </Link>
                            </div>
                        </>
                    )}

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Enhanced Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl rounded-b-2xl">
                        <div className="p-6 space-y-4">
                            <a
                                href="#offers"
                                className="block text-gray-600 hover:text-indigo-600 transition-colors py-2"
                            >
                                Offers
                            </a>
                            <a
                                href="#rewards"
                                className="block text-gray-600 hover:text-indigo-600 transition-colors py-2"
                            >
                                Rewards
                            </a>
                            <a
                                href="#how-it-works"
                                className="block text-gray-600 hover:text-indigo-600 transition-colors py-2"
                            >
                                How it Works
                            </a>
                            <a
                                href="#leaderboard"
                                className="block text-gray-600 hover:text-indigo-600 transition-colors py-2"
                            >
                                Leaderboard
                            </a>
                            <div className="pt-4 border-t border-gray-100 space-y-3">
                                <button className="block w-full text-left text-gray-600 py-2">
                                    Sign In
                                </button>
                                <button className="block w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default HeaderComponent;
