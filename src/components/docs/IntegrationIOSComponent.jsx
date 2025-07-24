import React from "react";
import AppENV from "../../constants/AppENV";

const IntegrationIOSComponent = () => {
    return (
        <div className="w-full h-auto flex flex-col gap-5">
            <div className="w-full h-auto pb-5 border-b-2 border-dotted border-slate-300 flex flex-col gap-5">
                <h1 className="text-gray-600 capitalize text-3xl font-extrabold">
                    Integeration IOS
                </h1>
                <small className="text-gray-500 text-base">
                    This page will guide you through the integration of{" "}
                    {AppENV.APP_NAME} on IOS app
                </small>
            </div>
            <div className="w-full h-auto">
                <h1 className="text-3xl text-gray-400">Comming soon...</h1>
            </div>
        </div>
    );
};

export default IntegrationIOSComponent;
