import React, { useEffect, useState } from "react";
import PagesURL from "../../constants/PagesURL";
import AppENV from "../../constants/AppENV";
import { useSelector } from "react-redux";
import {
    MdOutlineKeyboardDoubleArrowLeft,
    MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const ReportsPage = () => {
    const reports = useSelector((state) => state.auth.reports);
    const [reportsData, setReportsData] = useState([]);

    const items = 10;
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(items);

    const initReports = () => {
        const filter = reports.filter((report, index) => {
            return index >= offset && index < limit;
        });

        setReportsData(filter);
    };

    useEffect(() => {
        initReports();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offset, limit]);

    useEffect(() => {
        document.title = `${AppENV.APP_NAME} - ${PagesURL.REPORTS.TITLE}`;
    }, []);

    const nextPage = () => {
        if (limit < reports.length) {
            setOffset(offset + items);
            setLimit(limit + items);
            initReports();
        }
    };

    const prevPage = () => {
        if (offset > 0) {
            setOffset(offset - items);
            setLimit(limit - items);
            initReports();
        }
    };

    return (
        <div className="w-full h-auto flex flex-col gap-10">
            <div className="w-full h-auto flex flex-col gap-10">
                <div className="w-full h-auto flex flex-row items-center justify-between">
                    <h1 className="text-gray-400 capitalize text-2xl font-bold flex flex-row gap-2">
                        <PagesURL.REPORTS.ICON size={32} />
                        {PagesURL.REPORTS.TITLE}
                    </h1>
                </div>
            </div>
            <div className="bg-white w-full h-auto rounded-2xl shadow flex flex-col">
                <div className="w-full h-auto grid grid-cols-10 gap-5 items-center border-b-2 border-gray-100 p-7 box-border">
                    <span className="text-gray-400 text-sm font-medium uppercase col-span-1">
                        user
                    </span>
                    <span className="text-gray-400 text-sm font-medium uppercase col-span-2">
                        offer
                    </span>
                    <span className="text-gray-400 text-sm font-medium uppercase col-span-1">
                        payout
                    </span>
                    <span className="text-gray-400 text-sm font-medium uppercase col-span-1">
                        revenue
                    </span>
                    <span className="text-gray-400 text-sm font-medium uppercase col-span-1">
                        app
                    </span>
                    <span className="text-gray-400 text-sm font-medium uppercase col-span-1">
                        payout
                    </span>
                    <span className="text-gray-400 text-sm font-medium uppercase col-span-1">
                        status
                    </span>
                    <span className="text-gray-400 text-sm font-medium uppercase col-span-1">
                        country
                    </span>
                    <span className="text-gray-400 text-sm font-medium uppercase col-span-1">
                        date
                    </span>
                </div>
                <div className="w-full h-auto flex flex-col gap-5 mb-4">
                    {reportsData.length > 0 ? (
                        reportsData.map((report, index) => (
                            <div
                                key={index}
                                className="w-full h-auto grid grid-cols-10 gap-5 p-7 box-border border-b-2 border-gray-200 border-dotted"
                            >
                                <span className="text-gray-400 text-sm font-medium col-span-1">
                                    {report.username}
                                </span>
                                <span className="text-gray-400 text-sm font-medium col-span-2 max-w-max truncate">
                                    {report.offer_name}
                                </span>
                                <span className="text-green-400 text-sm col-span-1">
                                    ${report.payout.toFixed(2)}
                                </span>
                                <span className="text-indigo-400 text-sm col-span-1">
                                    ${report.revenue.toFixed(2)}
                                </span>
                                <span className="text-gray-400 text-sm font-medium col-span-1">
                                    {report.app_name}
                                </span>
                                <span className="text-gray-400 text-sm font-medium col-span-1">
                                    {report.status == 1 ? (
                                        <small className="bg-green-100 text-green-500 max-w-max px-4 py-1 text-xs rounded-xl">
                                            completed
                                        </small>
                                    ) : (
                                        <small className="bg-red-100 text-red-500 max-w-max px-4 py-1 text-xs rounded-xl">
                                            chargeback
                                        </small>
                                    )}
                                </span>
                                <span className="text-gray-400 text-sm font-medium col-span-1">
                                    {report.postback == 1 ? (
                                        <small className="bg-green-100 text-green-500 max-w-max px-4 py-1 text-xs rounded-xl">
                                            Approved
                                        </small>
                                    ) : (
                                        <small className="bg-red-100 text-red-500 max-w-max px-4 py-1 text-xs rounded-xl">
                                            Rejected
                                        </small>
                                    )}
                                </span>
                                <span className="text-gray-400 text-sm font-medium col-span-1 flex justify-center items-center">
                                    <img
                                        className="w-5 h-5 rounded-full"
                                        src={`https://hatscripts.github.io/circle-flags/flags/${report.country.toLowerCase()}.svg`}
                                        alt={report.country}
                                    />
                                </span>
                                <small className="text-gray-400 text-xs font-medium col-span-1">
                                    {report.date}
                                </small>
                            </div>
                        ))
                    ) : (
                        <small className="text-gray-300 w-full h-auto min-h-40 flex flex-row items-center justify-center text-4xl font-bold">
                            You have no reports!
                        </small>
                    )}
                </div>
                <div className="w-full h-auto flex flex-row items-center justify-between gap-5 p-5 box-border">
                    <div className="w-auto h-auto flex flex-row items-center justify-start gap-5">
                        {offset > 0 && (
                            <button
                                className="bg-transparent text-indigo-400 cursor-pointer flex flex-row gap-2 justify-center items-center"
                                onClick={prevPage}
                            >
                                <MdOutlineKeyboardDoubleArrowLeft />
                                Previous
                            </button>
                        )}
                        {reports.length >= limit && (
                            <button
                                className="bg-transparent text-indigo-400 cursor-pointer flex flex-row gap-2 justify-center items-center"
                                onClick={nextPage}
                            >
                                Next
                                <MdOutlineKeyboardDoubleArrowRight />
                            </button>
                        )}
                    </div>
                    <small className="text-gray-400 text-sm">
                        You are showing (
                        {limit > reports.length ? reports.length : limit} of{" "}
                        {reports.length}).
                    </small>
                </div>
            </div>
        </div>
    );
};

export default ReportsPage;
