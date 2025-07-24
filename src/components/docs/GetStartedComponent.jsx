import React from "react";
import AppENV from "../../constants/AppENV";
import { FcSalesPerformance } from "react-icons/fc";

const GetStartedComponent = () => {
    return (
        <div className="w-full h-auto flex flex-col gap-5">
            <div className="w-full h-auto pb-5 border-b-2 border-dotted border-slate-300 flex flex-col gap-5">
                <h1 className="text-gray-600 capitalize text-3xl font-extrabold">
                    Getting Started
                </h1>
                <small className="text-gray-500 text-base">
                    This page will help you get started with {AppENV.APP_NAME}{" "}
                    You'll be up and running in a jiffy!
                </small>
            </div>
            <h3 className="text-gray-600 capitalize text-xl font-medium">
                Follow these 3 simple steps to get you started with{" "}
                {AppENV.APP_NAME}:
            </h3>
            <ol className="list-decimal pl-8 text-gray-500 mb-4">
                <li>
                    Create an account by clicking on the following link: Create
                    an Account
                </li>
                <li>
                    Once you've created your account, fill in additional
                    information here: Account Details.
                </li>
                <li>
                    Finally, provide us with Payment & Billing information over
                    here: Payments & Billing
                </li>
            </ol>
            <div className="w-auto max-w-max h-auto p-5 box-border bg-orange-100 text-orange-500 border-l-4 border-orange-500">
                🚧 Make sure you have entered correct Payment & Billing info, or
                else we will not be able to process your payments!
            </div>
        </div>
    );
};

export default GetStartedComponent;
