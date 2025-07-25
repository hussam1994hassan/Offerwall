import { Gift } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const LogoApp = () => {
    return (
        <Link to={`/`} className="flex items-center space-x-3">
            <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Gift className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
            </div>
            <div>
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    OfferWall
                </span>
                <div className="text-xs text-gray-500 -mt-1">
                    Premium Rewards
                </div>
            </div>
        </Link>
    );
};

export default LogoApp;
