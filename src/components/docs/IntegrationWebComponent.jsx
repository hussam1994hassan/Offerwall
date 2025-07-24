import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { obsidian } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import AppENV from "../../constants/AppENV";

const IntegrationWebComponent = () => {
    const iframeCode = `<iframe src="${AppENV.APP_URL}/offerwall/[API_KEY]/[USER_ID]/[SUB1]"></iframe>`;
    return (
        <div className="w-full h-auto flex flex-col gap-5">
            <div className="w-full h-auto pb-5 border-b-2 border-dotted border-slate-300 flex flex-col gap-5">
                <h1 className="text-gray-600 capitalize text-3xl font-extrabold">
                    Integeration Web
                </h1>
                <small className="text-gray-500 text-base">
                    This page will guide you through the integration of{" "}
                    {AppENV.APP_NAME}
                    on your website
                </small>
            </div>

            <span className="text-gray-600 text-base">
                You can send your users into the {AppENV.APP_NAME} offer wall
                just by opening a link. You can configure the behavior of the
                offer wall and what should happen after an offer is completed in{" "}
                {AppENV.APP_NAME}
                dashboard in the Website Settings.
            </span>
            <div className="w-full h-auto flex flex-col gap-2">
                <h3 className="text-gray-600 capitalize text-xl font-bold">
                    1. API Key
                </h3>
                <small className="text-gray-500 text-base">
                    You can find your API Key in Manage - Apps - Configure. It
                    will look like the following image:
                </small>
                <div className="w-full h-auto min-h-64 bg-neutral-900 border border-slate-300 rounded-sm flex justify-center items-center text-gray-400 text-3xl">
                    IMG
                </div>
            </div>
            <div className="w-full h-auto flex flex-col gap-2">
                <h3 className="text-gray-600 capitalize text-xl font-bold">
                    2. User ID
                </h3>
                <small className="text-gray-500 text-base">
                    This is a dynamic value that should be replaced with a
                    unique identifier for each of your users. The userId may be
                    any string up to 255 characters long (username, unique id of
                    your user etc..)
                </small>
                <SyntaxHighlighter
                    language="html"
                    style={obsidian}
                    wrapLines={true}
                    wrapLongLines={true}
                >
                    {`${AppENV.APP_URL}/offerwall/[API_KEY]/[USER_ID]/`}
                </SyntaxHighlighter>
            </div>
            <div className="w-full h-auto flex flex-col gap-2">
                <small className="text-gray-500 text-base">
                    This is where you will need the API key from the dashboard,
                    as you will need to replace{" "}
                    <b className="text-red-500">API_KEY</b> with it. For{" "}
                    <b className="text-green-500">USER_ID</b>, you will need to
                    dynamically insert the user id for each app user. Make sure
                    the ID used here is unique and that it does not change, as
                    the user's profile will be stored under this ID.
                </small>
                <SyntaxHighlighter
                    language="html"
                    style={obsidian}
                    wrapLines={true}
                    wrapLongLines={true}
                >
                    {`${AppENV.APP_URL}/offerwall/[API_KEY]/[USER_ID]/`}
                </SyntaxHighlighter>
                <small className="text-gray-500 text-base">
                    In case you need to add a custom value for each userId that
                    you need to get back in the postback call, you can add SUB1
                    in the offerwall link.
                </small>
                <SyntaxHighlighter
                    language="html"
                    style={obsidian}
                    wrapLines={true}
                    wrapLongLines={true}
                >
                    {iframeCode}
                </SyntaxHighlighter>
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
                                    Value
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-neutral-400 whitespace-nowrap"
                                >
                                    [API_KEY]
                                </th>
                                <td className="px-6 py-4">
                                    Unique API Code provided for approved
                                    placements
                                </td>
                                <td className="px-6 py-4">varchar(32)</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-neutral-400 whitespace-nowrap"
                                >
                                    [USER_ID]
                                </th>
                                <td className="px-6 py-4">
                                    Unique identifier code of the user of your
                                    site
                                </td>
                                <td className="px-6 py-4">varchar(32)</td>
                            </tr>
                            <tr className="bg-neutral-900">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-neutral-400 whitespace-nowrap"
                                >
                                    [SUB1]
                                </th>
                                <td className="px-6 py-4">
                                    Custom value that can be returned in the
                                    postback
                                </td>
                                <td className="px-6 py-4">varchar(32)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default IntegrationWebComponent;
