import React from "react";
import AppENV from "../../constants/AppENV";
import { obsidian } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

const ApiReportComponent = () => {
    return (
        <div className="w-full h-auto flex flex-col gap-5">
            <div className="w-full h-auto pb-5 border-b-2 border-dotted border-slate-300 flex flex-col gap-5">
                <h1 className="text-gray-600 capitalize text-3xl font-extrabold">
                    Reporting API
                </h1>
                <small className="text-gray-500 text-base">
                    This page will guide you through the integration of
                    Publisher Reporting API
                </small>
            </div>
            <small className="text-gray-600 text-base">
                This API allows you to efficiently retrieve detailed reports
                based on your specific requirements.
            </small>
            <small className="text-gray-500 text-sm">
                Timezone: All dates and times in the reports are calculated
                based on the Eastern Standard Time - EST. Currency: All monetary
                values are expressed in U.S. dollars, represented as decimal
                values for precision. Response: Please anticipate longer
                response times for each request, as data processing may take
                time depending on the complexity and volume of data.
            </small>
            <div className="w-full h-auto flex flex-col gap-2">
                <h3 className="text-gray-600 capitalize text-xl font-bold">
                    API
                </h3>
                <span className="text-gray-500 text-sm">
                    Method: <b>GET</b>
                </span>
                <div className=" flex flex-row items-center justify-start gap-2">
                    <span className="text-gray-500 text-sm">Base URL:</span>
                    <div className="text-neutral-800 w-auto max-w-max h-auto px-2 py-1 box-border text-sm bg-neutral-200">
                        {AppENV.APP_URL}/api/publisher
                    </div>
                </div>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-neutral-200">
                        <thead className="text-xs text-neutral-300 uppercase bg-neutral-800">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Parameter
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Required
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Example
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">master_key</td>
                                <td className="px-6 py-4">
                                    Your account key. Can be found on the
                                    account page.
                                </td>
                                <td className="px-6 py-4">Yes</td>
                                <td className="px-6 py-4">343effe...</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">start_date</td>
                                <td className="px-6 py-4">
                                    Start date of report in YYYY-mm-dd format.
                                </td>
                                <td className="px-6 py-4">Yes</td>
                                <td className="px-6 py-4">2024-09-01</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">end_date</td>
                                <td className="px-6 py-4">
                                    End date of report in YYYY-mm-dd format.
                                </td>
                                <td className="px-6 py-4">Yes</td>
                                <td className="px-6 py-4">2024-09-30</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">page</td>
                                <td className="px-6 py-4">
                                    Display results from page 1, 2 etc...
                                </td>
                                <td className="px-6 py-4">Yes</td>
                                <td className="px-6 py-4">1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-full h-auto flex flex-col gap-2">
                <h3 className="text-gray-600 capitalize text-xl font-bold">
                    Filter
                </h3>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-neutral-200">
                        <thead className="text-xs text-neutral-300 uppercase bg-neutral-800">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Parameter
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Example
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">offer_id</td>
                                <td className="px-6 py-4">
                                    Filter by specified offer IDs (can be in
                                    array)
                                </td>
                                <td className="px-6 py-4">404918</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">sub_id</td>
                                <td className="px-6 py-4">Filter by sub_id.</td>
                                <td className="px-6 py-4">{AppENV.APP_NAME}</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">Countries</td>
                                <td className="px-6 py-4">
                                    Filter by specified countries using ISO (can
                                    be in array)
                                </td>
                                <td className="px-6 py-4">US,UK,DE</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-full h-auto flex flex-col gap-2">
                <h3 className="text-gray-600 capitalize text-xl font-bold">
                    Response
                </h3>
                <SyntaxHighlighter
                    language="json"
                    style={obsidian}
                    wrapLines={true}
                    wrapLongLines={true}
                >{`{
    "status": "success",
    "data": {
        "results": [
            {
                "offer_id": "1004645",
                "offer_name": "Pyramid Solitaire Deluxe\u00ae 2",
                "event_name": "Open the app",
                "country_code": "US",
                "sub_id": "38492",
                "payout": "0.000000",
                "conversions": "1",
                "clicks": "40",
                "conversion_rate": "2.50",
                "conversion_time": "2024-09-04 17:58:59"
            }
        ],
        "totalReport": {
            "clicks": "40",
            "conversions": "1",
            "payout": "0.000000",
            "conversion_rate": "2.5"
        }
    },
    "pagination": {
        "total": "1",
        "page": "1",
        "pages": 1
    }
}`}</SyntaxHighlighter>
            </div>
        </div>
    );
};

export default ApiReportComponent;
