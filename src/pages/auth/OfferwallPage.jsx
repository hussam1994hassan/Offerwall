import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import AppENV from "../../constants/AppENV";
import PagesURL from "../../constants/PagesURL";
import { MdCurrencyExchange, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GrUnlink } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";

const OfferwallPage = () => {
    const apps = useSelector((state) => state.auth.apps);
    const params = useParams();
    const { id } = params;
    const [app, setApp] = useState(null);

    const [collapse, setCollapse] = useState("currency");

    useEffect(() => {
        setApp(apps.filter((app) => app.id == id)[0]);
    }, [apps, id]);

    useEffect(() => {
        document.title = `${AppENV.APP_NAME} - ${PagesURL.OFFERWALL.TITLE} - ${app?.name}`;
    }, [app]);

    return (
        <div className="w-full h-auto flex flex-col gap-6">
            <div className="w-full h-auto flex flex-row items-center justify-between">
                <h1 className="text-gray-400 capitalize text-2xl font-bold flex flex-row gap-2">
                    <PagesURL.OFFERWALL.ICON size={32} />
                    {PagesURL.OFFERWALL.TITLE}
                </h1>
            </div>

            {app ? (
                <div className="w-full h-auto grid grid-cols-5 gap-5">
                    <div className="bg-white shadow-sm w-full h-auto flex flex-col rounded-2xl justify-start items-start col-span-3">
                        <div className="w-full h-auto flex flex-col gap-2">
                            <button
                                onClick={() => setCollapse("currency")}
                                className="w-full h-auto flex flex-row items-center justify-between gap-2 border-b border-slate-200 p-5 box-border cursor-pointer"
                            >
                                <span
                                    className={`flex flex-row items-center gap-2 font-bold ${
                                        collapse == "currency"
                                            ? "text-blue-500"
                                            : "text-gray-500"
                                    }`}
                                >
                                    <MdCurrencyExchange size={20} />
                                    Currency
                                </span>
                                <MdOutlineKeyboardArrowDown
                                    size={24}
                                    className={`${
                                        collapse == "currency"
                                            ? "text-blue-500 rotate-180"
                                            : "text-gray-500 rotate-0"
                                    }`}
                                />
                            </button>
                            {collapse == "currency" && (
                                <div className="w-full h-auto p-5 box-border flex flex-col gap-5">
                                    <div className="w-full h-10 flex flex-col gap-1 rounded-md border border-gray-200 relative">
                                        <span className="text-gray-500 bg-white px-2 py-1 max-w-max text-xs capitalize absolute -top-3 left-2">
                                            Api Key
                                        </span>
                                        <input
                                            type="text"
                                            className="bg-transparent w-full h-full text-gray-600 outline-none py-2 px-4 box-border absolute top-0 left-0 disabled:cursor-not-allowed"
                                            name="api_key"
                                            id="api_key"
                                            defaultValue={app?.api_key}
                                            placeholder="Api Key"
                                            disabled
                                        />
                                    </div>
                                    <div className="w-full h-10 flex flex-col gap-1 rounded-md border border-gray-200 relative">
                                        <span className="text-gray-500 bg-white px-2 py-1 max-w-max text-xs capitalize absolute -top-3 left-2">
                                            App Name
                                        </span>
                                        <input
                                            type="text"
                                            className="bg-transparent w-full h-full text-gray-600 outline-none py-2 px-4 box-border absolute top-0 left-0"
                                            name="app_name"
                                            id="app_name"
                                            defaultValue={app?.name}
                                            placeholder="App Name"
                                        />
                                    </div>
                                    <div className="w-full h-auto flex flex-row items-center justify-between gap-2">
                                        <div className="w-full h-10 flex flex-col gap-1 rounded-md border border-gray-200 relative">
                                            <span className="text-gray-500 bg-white px-2 py-1 max-w-max text-xs capitalize absolute -top-3 left-2">
                                                Currency Name
                                            </span>
                                            <input
                                                type="text"
                                                className="bg-transparent w-full h-full text-gray-600 outline-none py-2 px-4 box-border absolute top-0 left-0"
                                                name="currency_name"
                                                id="currency_name"
                                                defaultValue={app?.currency}
                                                placeholder="Currency Name"
                                            />
                                        </div>
                                        <div className="w-full h-10 flex flex-col gap-1 rounded-md border border-gray-200 relative">
                                            <span className="text-gray-500 bg-white px-2 py-1 max-w-max text-xs capitalize absolute -top-3 left-2">
                                                Currency Decimals
                                            </span>
                                            <input
                                                type="text"
                                                className="bg-transparent w-full h-full text-gray-600 outline-none py-2 px-4 box-border absolute top-0 left-0"
                                                name="currency_decimals"
                                                id="currency_decimals"
                                                defaultValue={app?.decimals}
                                                placeholder="Currency Decimals"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-full h-10 flex flex-col gap-1 rounded-md border border-gray-200 relative">
                                            <span className="text-gray-500 bg-white px-2 py-1 max-w-max text-xs capitalize absolute -top-3 left-2">
                                                Exchange Rate
                                            </span>
                                            <input
                                                type="text"
                                                className="bg-transparent w-full h-full text-gray-600 outline-none py-2 px-4 box-border absolute top-0 left-0"
                                                name="exchange_rate"
                                                id="exchange_rate"
                                                defaultValue={app?.rate}
                                                placeholder="Exchange Rate"
                                            />
                                        </div>
                                        <small className="text-gray-500 text-xs">
                                            if an Offer Payout is{" "}
                                            <b className="font-bold text-green-500">
                                                $1.00
                                            </b>{" "}
                                            the user will receive {app?.rate}{" "}
                                            {app?.currency}
                                        </small>
                                    </div>
                                    {/* <div className="w-full h-auto flex items-center justify-between gap-2 flex-row-reverse">
                                        <button className="max-w-max h-auto px-4 py-2 box-border cursor-pointer bg-indigo-500 hover:bg-indigo-600 text-white rounded-md">
                                            Save Currency
                                        </button>
                                    </div> */}
                                </div>
                            )}
                        </div>
                        <div className="w-full h-auto flex flex-col gap-2">
                            <button
                                onClick={() => setCollapse("postback")}
                                className="w-full h-auto flex flex-row items-center justify-between gap-2 border-t border-b border-slate-200 p-5 box-border cursor-pointer"
                            >
                                <span
                                    className={`flex flex-row items-center gap-2 font-bold ${
                                        collapse == "postback"
                                            ? "text-blue-500"
                                            : "text-gray-500"
                                    }`}
                                >
                                    <GrUnlink size={20} />
                                    Postback
                                </span>
                                <MdOutlineKeyboardArrowDown
                                    size={24}
                                    className={`${
                                        collapse == "postback"
                                            ? "text-blue-500 rotate-180"
                                            : "text-gray-500 rotate-0"
                                    }`}
                                />
                            </button>
                            {collapse == "postback" && (
                                <div className="w-full h-auto p-5 box-border flex flex-col gap-5">
                                    <div className="w-full h-auto flex flex-col gap-2">
                                        <div className="w-full h-10 flex flex-col gap-1 rounded-md border border-gray-200 relative">
                                            <span className="text-gray-500 bg-white px-2 py-1 max-w-max text-xs capitalize absolute -top-3 left-2">
                                                Secret Key
                                            </span>
                                            <input
                                                type="text"
                                                className="bg-transparent w-full h-full text-gray-600 outline-none py-2 px-4 box-border absolute top-0 left-0 disabled:cursor-not-allowed"
                                                name="secret_key"
                                                id="secret_key"
                                                defaultValue={app?.secret_key}
                                                placeholder="Secret Key"
                                                disabled
                                            />
                                        </div>
                                        <small className="text-gray-500 text-xs">
                                            Your Postback Secret Key That can be
                                            used for generation a postback
                                            signture.
                                        </small>
                                    </div>
                                    <div className="w-full h-auto flex flex-col gap-2">
                                        <div className="w-full h-10 flex flex-col gap-1 rounded-md border border-gray-200 relative">
                                            <span className="text-gray-500 bg-white px-2 py-1 max-w-max text-xs capitalize absolute -top-3 left-2">
                                                Postback
                                            </span>
                                            <select
                                                name="postback_receive"
                                                id="postback_receive"
                                                className="bg-transparent w-full h-full text-gray-600 outline-none py-2 px-4 box-border absolute top-0 left-0"
                                                defaultValue={
                                                    app?.postback_receive
                                                }
                                                onChange={() => {}}
                                            >
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                        </div>
                                        <small className="text-gray-500 text-xs">
                                            Do you want to receive a postback.
                                        </small>
                                    </div>
                                    <div className="w-full h-auto flex flex-col gap-2">
                                        <div className="w-full h-10 flex flex-col gap-1 rounded-md border border-gray-200 relative">
                                            <span className="text-gray-500 bg-white px-2 py-1 max-w-max text-xs capitalize absolute -top-3 left-2">
                                                Method
                                            </span>
                                            <select
                                                name="postback_method"
                                                id="postback_method"
                                                className="bg-transparent w-full h-full text-gray-600 outline-none py-2 px-4 box-border absolute top-0 left-0"
                                                defaultValue={
                                                    app?.postback_method
                                                }
                                                onChange={() => {}}
                                            >
                                                <option value="GET">GET</option>
                                                <option value="POST">
                                                    POST
                                                </option>
                                            </select>
                                        </div>
                                        <small className="text-gray-500 text-xs">
                                            Choose the postback method.
                                        </small>
                                    </div>
                                    <div className="w-full h-auto flex flex-col gap-2">
                                        <div className="w-full h-10 flex flex-col gap-1 rounded-md border border-gray-200 relative">
                                            <span className="text-gray-500 bg-white px-2 py-1 max-w-max text-xs capitalize absolute -top-3 left-2">
                                                Postback URL
                                            </span>
                                            <input
                                                type="text"
                                                className="bg-transparent w-full h-full text-gray-600 outline-none py-2 px-4 box-border absolute top-0 left-0 disabled:cursor-not-allowed"
                                                name="postback_url"
                                                id="postback_url"
                                                defaultValue={app?.postback_url}
                                                placeholder="Postback URL"
                                            />
                                        </div>
                                        <small className="text-gray-500 text-xs">
                                            Your Postback URL
                                        </small>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="w-full h-auto flex flex-col gap-2">
                            <button
                                onClick={() => setCollapse("settings")}
                                className="w-full h-auto flex flex-row items-center justify-between gap-2 border-b border-t border-slate-200 p-5 box-border cursor-pointer"
                            >
                                <span
                                    className={`flex flex-row items-center gap-2 font-bold ${
                                        collapse == "settings"
                                            ? "text-blue-500"
                                            : "text-gray-500"
                                    }`}
                                >
                                    <IoMdSettings size={20} />
                                    Settings
                                </span>
                                <MdOutlineKeyboardArrowDown
                                    size={24}
                                    className={`${
                                        collapse == "settings"
                                            ? "text-blue-500 rotate-180"
                                            : "text-gray-500 rotate-0"
                                    }`}
                                />
                            </button>
                            {collapse == "settings" && (
                                <div className="w-full h-auto p-5 box-border flex flex-col gap-5">
                                    <div className="w-full h-auto flex flex-col gap-2">
                                        <div className="w-full h-10 flex flex-col gap-1 rounded-md border border-gray-200 relative">
                                            <span className="text-gray-500 bg-white px-2 py-1 max-w-max text-xs capitalize absolute -top-3 left-2">
                                                Blacklist Offer
                                            </span>
                                            <input
                                                type="text"
                                                className="bg-transparent w-full h-full text-gray-600 outline-none py-2 px-4 box-border absolute top-0 left-0 disabled:cursor-not-allowed"
                                                name="blacklist_offer"
                                                id="blacklist_offer"
                                                placeholder="Enter Offer ID."
                                            />
                                        </div>
                                        <small className="text-gray-500 text-xs">
                                            Enter the ID of the offer you want
                                            to blacklist.
                                        </small>
                                    </div>
                                    <div className="w-full h-10 flex flex-row items-center justify-between gap-1">
                                        <span className="text-gray-500 bg-white px-2 py-1 max-w-max text-base">
                                            Delete App Forever
                                        </span>
                                        <button className="w-auto h-auto px-2 py-1 box-border bg-red-500 text-white hover:bg-red-600 cursor-pointer rounded flex flex-row justify-center items-center gap-2">
                                            <RiDeleteBin5Line />
                                            Delete App
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="bg-white shadow-sm p-5 box-border w-full h-auto flex justify-center rounded-2xl items-center col-span-2">
                        IFRAME
                    </div>
                </div>
            ) : (
                <div className="w-full h-auto min-h-64 bg-white text-red-400 shadow-sm text-xl capitalize p-5 box-border flex justify-center rounded-2xl items-center">
                    This app does not exist!
                </div>
            )}
        </div>
    );
};

export default OfferwallPage;
