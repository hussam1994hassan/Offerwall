import React, { useEffect } from "react";
import AppENV from "../constants/AppENV";
import PagesURL from "../constants/PagesURL";

const DemoPage = () => {
    useEffect(() => {
        document.title = `${AppENV.APP_NAME} - ${PagesURL.DEMO.TITLE}`;
    }, []);

    return (
        <div className="w-full h-auto flex flex-col gap-10">
            <div className="w-full h-auto flex flex-row items-center justify-between">
                <h1 className="text-gray-400 capitalize text-2xl font-bold flex flex-row gap-2">
                    <PagesURL.DEMO.ICON size={32} />
                    {PagesURL.DEMO.TITLE}
                </h1>
            </div>
        </div>
    );
};

export default DemoPage;
