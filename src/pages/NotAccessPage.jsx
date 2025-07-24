import React, { useEffect } from "react";
import PagesURL from "../constants/PagesURL";
import AppENV from "../constants/AppENV";
import { RiUserForbidFill } from "react-icons/ri";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const NotAccessPage = () => {
    useEffect(() => {
        document.title = `${AppENV.APP_NAME} - ${PagesURL.NOT_FOUND.TITLE}`;
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-50 px-4">
            <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center max-w-md w-full">
                <RiUserForbidFill size={124} className="text-indigo-400 mb-6" />
                <h1 className="text-5xl font-extrabold text-indigo-500 mb-2">
                    405
                </h1>
                <h2 className="text-2xl font-semibold text-indigo-500 mb-4 flex items-center gap-2">
                    You are not authorized
                </h2>
                <p className="text-gray-500 mb-8 text-center">
                    Sorry, you are not authorized to access this page.
                </p>
                <a
                    href="/"
                    className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white hover:bg-indigo-100 hover:text-indigo-500 font-semibold rounded-lg shadow"
                >
                    <MdOutlineKeyboardDoubleArrowLeft size={24} />
                    Back to Home
                </a>
            </div>
        </div>
    );
};

export default NotAccessPage;
