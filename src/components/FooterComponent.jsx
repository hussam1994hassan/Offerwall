import {
    Briefcase,
    ChevronDown,
    ChevronRight,
    Facebook,
    Gift,
    Github,
    Globe,
    Headphones,
    Layers,
    Linkedin,
    Shield,
    Twitter,
} from "lucide-react";
import React from "react";

const FooterComponent = () => {
    return (
        <footer className="bg-gradient-to-br from-gray-50 to-indigo-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Enhanced Company Info */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                <Gift className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                OfferWall
                            </span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                            The premium rewards platform where your time creates
                            real value. Join millions earning daily rewards.
                        </p>
                        <div className="flex space-x-4">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer">
                                <Facebook className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center hover:bg-sky-200 transition-colors cursor-pointer">
                                <Twitter className="w-4 h-4 text-sky-600" />
                            </div>
                            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center hover:bg-indigo-200 transition-colors cursor-pointer">
                                <Linkedin className="w-4 h-4 text-indigo-600" />
                            </div>
                            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                                <Github className="w-4 h-4 text-gray-600" />
                            </div>
                        </div>
                    </div>

                    {/* Platform */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-6 flex items-center">
                            <Layers className="w-4 h-4 mr-2 text-indigo-500" />
                            Platform
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-indigo-600 text-sm transition-colors flex items-center"
                                >
                                    <ChevronRight className="w-3 h-3 mr-2" />
                                    How it Works
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-indigo-600 text-sm transition-colors flex items-center"
                                >
                                    <ChevronRight className="w-3 h-3 mr-2" />
                                    Earn Points
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-indigo-600 text-sm transition-colors flex items-center"
                                >
                                    <ChevronRight className="w-3 h-3 mr-2" />
                                    Redeem Rewards
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-indigo-600 text-sm transition-colors flex items-center"
                                >
                                    <ChevronRight className="w-3 h-3 mr-2" />
                                    Mobile App
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-6 flex items-center">
                            <Headphones className="w-4 h-4 mr-2 text-green-500" />
                            Support
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-green-600 text-sm transition-colors flex items-center"
                                >
                                    <ChevronRight className="w-3 h-3 mr-2" />
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-green-600 text-sm transition-colors flex items-center"
                                >
                                    <ChevronRight className="w-3 h-3 mr-2" />
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-green-600 text-sm transition-colors flex items-center"
                                >
                                    <ChevronRight className="w-3 h-3 mr-2" />
                                    Community
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-green-600 text-sm transition-colors flex items-center"
                                >
                                    <ChevronRight className="w-3 h-3 mr-2" />
                                    Live Chat
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-6 flex items-center">
                            <Briefcase className="w-4 h-4 mr-2 text-purple-500" />
                            Resources
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-purple-600 text-sm transition-colors flex items-center"
                                >
                                    <ChevronRight className="w-3 h-3 mr-2" />
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-purple-600 text-sm transition-colors flex items-center"
                                >
                                    <ChevronRight className="w-3 h-3 mr-2" />
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-purple-600 text-sm transition-colors flex items-center"
                                >
                                    <ChevronRight className="w-3 h-3 mr-2" />
                                    Cookie Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-purple-600 text-sm transition-colors flex items-center"
                                >
                                    <ChevronRight className="w-3 h-3 mr-2" />
                                    Security
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-500 text-sm">
                            © 2024 OfferWall. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2 bg-white rounded-lg px-3 py-1 shadow-sm border border-gray-100">
                                <Globe className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-600 text-sm">
                                    English
                                </span>
                                <ChevronDown className="w-3 h-3 text-gray-400" />
                            </div>
                            <div className="flex items-center space-x-2 bg-green-50 rounded-lg px-3 py-1 border border-green-100">
                                <Shield className="w-4 h-4 text-green-500" />
                                <span className="text-green-600 text-sm font-medium">
                                    SSL Secured
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
