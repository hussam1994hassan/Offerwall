import React, { useEffect } from "react";
import PagesURL from "../constants/PagesURL";
import AppENV from "../constants/AppENV";
import {
    MdErrorOutline,
    MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";

const ErrorPage = () => {
    // Page Title
    useEffect(() => {
        document.title = `${AppENV.APP_NAME} - ${PagesURL.NOT_FOUND.TITLE}`;
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 px-4">
            <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center max-w-md w-full">
                <MdErrorOutline size={124} className="text-red-500 mb-6" />
                <h1 className="text-5xl font-extrabold text-red-500 mb-2">
                    404
                </h1>
                <h2 className="text-2xl font-semibold text-red-500 mb-4 flex items-center gap-2">
                    Page Not Found
                </h2>
                <p className="text-gray-500 mb-8 text-center">
                    Sorry, the page you are looking for does not exist or has
                    been moved.
                </p>
                <a
                    href="/"
                    className="inline-flex items-center px-6 py-3 bg-red-600 text-white hover:bg-red-100 hover:text-red-500 font-semibold rounded-lg shadow"
                >
                    <MdOutlineKeyboardDoubleArrowLeft size={24} />
                    Back to Home
                </a>
            </div>
        </div>
    );
};

export default ErrorPage;
