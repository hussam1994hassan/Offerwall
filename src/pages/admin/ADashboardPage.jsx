import React, { useEffect } from "react";
import AppENV from "../../constants/AppENV";
import PagesURL from "../../constants/PagesURL";
import {
    LuBadgeDollarSign,
    LuCompass,
    LuLandmark,
    LuMousePointerClick,
} from "react-icons/lu";

const ADashboardPage = () => {
    useEffect(() => {
        document.title = `${AppENV.APP_NAME} - Admin | ${PagesURL.ADMIN.TITLE}`;
    });

    const metrics = [
        {
            title: "Revenue",
            value: "$2,580.00",
            icon: LuBadgeDollarSign,
        },
        {
            title: "Clicks",
            value: "15,847",
            icon: LuMousePointerClick,
        },
        {
            title: "Conversions",
            value: "2,341",
            icon: LuCompass,
        },
        {
            title: "Cashout",
            value: "$18,420.00",
            icon: LuLandmark,
        },
    ];

    return (
        <div className="w-full h-auto flex flex-col gap-10">
            <div className="w-full h-auto flex flex-row items-center justify-between">
                <h1 className="text-gray-400 capitalize text-2xl font-bold flex flex-row gap-2">
                    <PagesURL.ADMIN.ICON size={32} />
                    {PagesURL.ADMIN.TITLE}
                </h1>
            </div>
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {metrics.map((metric, index) => {
                    const IconComponent = metric.icon;
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 animate-fade-in"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="">
                                    <IconComponent
                                        size={32}
                                        className="text-gray-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-600 mb-1">
                                    {metric.value}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {metric.title}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ADashboardPage;
