import React from "react";
import AppENV from "../../constants/AppENV";

const CreateAppComponent = () => {
    return (
        <div className="w-full h-auto flex flex-col gap-5">
            <div className="w-full h-auto pb-5 border-b-2 border-dotted border-slate-300 flex flex-col gap-5">
                <h1 className="text-gray-600 capitalize text-3xl font-extrabold">
                    Create an App
                </h1>
                <small className="text-gray-500 text-base">
                    Adding your placement is a crucial step, don't skip it!
                </small>
            </div>
            <h3 className="text-gray-600 capitalize text-xl font-medium">
                An "App" represents the platform where you will be placing{" "}
                {AppENV.APP_NAME}. It can be any of the following:
            </h3>
            <ul className="list-disc pl-8 text-gray-500 mb-4">
                <li>Android App</li>
                <li>iOS App</li>
                <li>Website</li>
                <li>Network / API</li>
            </ul>
            <div className="w-auto max-w-max h-auto p-5 box-border bg-blue-100 border-l-4 border-blue-500 flex flex-col gap-2">
                <span className="text-blue-500">
                    📘 I have a combination of placements, what do I do?
                </span>
                <span className="text-gray-700 text-base">
                    Let's say you have both an Android and an iOS app, you will
                    need to add 2 placements, one for each app!
                </span>
            </div>
            <span className="text-gray-600 text-sm">
                To add your app, click here Add an App and fill in the
                information requested.
            </span>
            <span className="text-gray-600 text-sm">
                P.S. By adding your app, you will receive your API key and
                Secret key which will be needed for successful integration!
            </span>
        </div>
    );
};

export default CreateAppComponent;
