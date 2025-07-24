import React from "react";
import AppENV from "../../constants/AppENV";
import SyntaxHighlighter from "react-syntax-highlighter";
import { obsidian } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const ApiOfferComponent = () => {
    return (
        <div className="w-full h-auto flex flex-col gap-5">
            <div className="w-full h-auto pb-5 border-b-2 border-dotted border-slate-300 flex flex-col gap-5">
                <h1 className="text-gray-600 capitalize text-3xl font-extrabold">
                    Offers API
                </h1>
                <small className="text-gray-500 text-base">
                    This page will guide you through the integration of
                    {AppENV.APP_NAME} API
                </small>
            </div>
            <small className="text-gray-500 text-base">
                The Offers API is designed for backend or server-side use,
                giving you access to our available inventory. You can use this
                feed to enhance your current offer inventory or to create a new
                offer system from scratch.
            </small>
            <h3 className="text-gray-600 capitalize text-xl font-bold">API</h3>
            <div className="w-full h-auto flex flex-col gap-2">
                <span className="text-gray-500 text-sm">
                    Method: <b>GET</b>
                </span>
                <div className=" flex flex-row items-center justify-start gap-2">
                    <span className="text-gray-500 text-sm">Base URL:</span>
                    <div className="text-neutral-800 w-auto max-w-max h-auto px-2 py-1 box-border text-sm bg-neutral-200">
                        {AppENV.APP_URL}/api/offers
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
                                    Type
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">API key</td>
                                <td className="px-6 py-4">
                                    Can be found here.
                                </td>
                                <td className="px-6 py-4">
                                    String Optional Parameters:
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <span className="text-gray-500 text-base">
                    Optional Parameters:
                </span>
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
                                    Type
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Example
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">countries</td>
                                <td className="px-6 py-4">
                                    Filter by specific countries. Accepts a list
                                    of comma-separated country codes.
                                </td>
                                <td className="px-6 py-4">String</td>
                                <td className="px-6 py-4">us,ca,de</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">offer</td>
                                <td className="px-6 py-4">
                                    Filter by specific offer name.
                                </td>
                                <td className="px-6 py-4">String</td>
                                <td className="px-6 py-4">Kraken</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">device</td>
                                <td className="px-6 py-4">
                                    Filter by specific devices. Accepts a list
                                    of comma-separated devices from this list:
                                    desktop, android, ios, all.
                                </td>
                                <td className="px-6 py-4">String</td>
                                <td className="px-6 py-4">ios,android</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">featured</td>
                                <td className="px-6 py-4">
                                    Filter by featured offers. Accepts 'yes' or
                                    'no'.
                                </td>
                                <td className="px-6 py-4">String</td>
                                <td className="px-6 py-4">yes</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">id</td>
                                <td className="px-6 py-4">
                                    Filter by specific offer ID.
                                </td>
                                <td className="px-6 py-4">Integer</td>
                                <td className="px-6 py-4">2416</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">sort</td>
                                <td className="px-6 py-4">
                                    Order results by either payout (high to low)
                                    or epc (low to high).
                                </td>
                                <td className="px-6 py-4">String</td>
                                <td className="px-6 py-4">high</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">limit</td>
                                <td className="px-6 py-4">
                                    Limit the number of results to X. Maximum
                                    value is 100.
                                </td>
                                <td className="px-6 py-4">Integer</td>
                                <td className="px-6 py-4">100</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">page</td>
                                <td className="px-6 py-4">
                                    Specify the page of results to return.
                                    Requires limit to be set.
                                </td>
                                <td className="px-6 py-4">Integer</td>
                                <td className="px-6 py-4">1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <span className="text-gray-500 text-sm">
                    Example Request:{" "}
                    <SyntaxHighlighter
                        language="text"
                        style={obsidian}
                        wrapLines={true}
                        wrapLongLines={true}
                    >
                        {`${AppENV.APP_URL}/api/offers?apikey=YOUR_API_KEY&limit=100&page=1&device=ios,android`}
                    </SyntaxHighlighter>
                </span>
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
                >
                    {`{
    "status": "success",
    "data": [
        {
            "added": "2023-01-01",
            "status": "active",
            "id": "672488",
            "name": "Dream Gym",
            "description": "Complete Level 21 within 14 days. You must click “Allow” if tracking permission is requested within the app.",
            "featured": yes,
            "daily_cap": "10",
            "payout": {
                "usd": "5.25",
                "reward": "525.0",
                "currency": "Coins"
            },
            "reporting": {
                "epc": "0.50",
                "conversion_rate": "1.2"
            },
            "devices": [
                {
                    "name": "android"
                },
                {
                    "name": "ios"
                }
            ],
            "geo_targeting": {
                "countries": [
                    {
                        "country_code": "US"
                    },
                    {
                        "country_code": "CA"
                    }
                ],
                "states": []
            },
            "creatives": {
                "icon": "https://link_to_icon_image"
            },
            "events": [
                {
                    "name": "Install",
                    "payout": "0.50"
                },
                {
                    "name": "Reach Level 21",
                    "payout": "1.00"
                }
            ],
            "url": "${AppENV.APP_URL}/click?apiKey=wpvnaqodiv6lc9nsm6mw16ds8yo5x1&offerId=672488&userId=",
            "preview_url": "https://link_to_preview"
        }
    ]
}`}
                </SyntaxHighlighter>
            </div>
            <div className="w-auto max-w-max h-auto p-5 box-border bg-blue-100 text-blue-500 border-l-4 border-blue-500">
                📘 The API should be called periodically from your backend
                (e.g., every 10 minutes) to get a fresh list of offers. Avoid
                using live traffic to request offers.
            </div>
        </div>
    );
};

export default ApiOfferComponent;
