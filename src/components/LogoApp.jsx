import React from "react";
import { Link } from "react-router";

const LogoApp = () => {
    return (
        <Link to={`/`} className="text-3xl font-bold text-gray-600">
            LOGO
        </Link>
    );
};

export default LogoApp;
