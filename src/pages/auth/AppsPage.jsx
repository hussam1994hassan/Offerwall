import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PagesURL from "../../constants/PagesURL";
import AppENV from "../../constants/AppENV";
import PopupDialog from "../../components/PopupDialog";
import { FiPlus } from "react-icons/fi";
import { GrConfigure } from "react-icons/gr";
import { TbDeviceMobileCheck } from "react-icons/tb";
import { GiEarthAmerica } from "react-icons/gi";
import toast from "react-hot-toast";
import { MdAndroid, MdGames, MdMobileFriendly } from "react-icons/md";
import { FaEarthAmericas } from "react-icons/fa6";
import { LuPackageOpen } from "react-icons/lu";
import { IoCheckbox } from "react-icons/io5";
import { Link, useNavigate } from "react-router";

const AppsPage = () => {
    const apps = useSelector((state) => state.auth.apps);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [appInfo, setAppInfo] = useState({
        app_name: "",
        app_type: "",
        app_url: "",
        app_category: "",
        integeration_type: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        document.title = `${AppENV.APP_NAME} - ${PagesURL.APPS.TITLE}`;
    });

    const createNewApp = () => setDialogOpen(true);

    const nextStep = () => {
        if (step < 2) {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    const handleSubmit = () => {
        console.log(appInfo);
        setStep(0);
        setDialogOpen(false);
        toast.success("App created!");
    };

    return (
        <>
            <PopupDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                title=""
            >
                <div className="w-full h-auto flex flex-col gap-5">
                    <div className="w-full h-auto flex flex-row gap-5 items-start justify-between">
                        <div className="flex-1 flex flex-col gap-7">
                            <div className="flex flex-row gap-4 items-center justify-start">
                                <span
                                    className={`${
                                        step === 0
                                            ? "bg-blue-500 text-blue-50"
                                            : "bg-blue-50 text-blue-500"
                                    } w-10 h-10 p-2 box-border rounded-xl flex justify-center font-bold items-center`}
                                >
                                    1
                                </span>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-gray-500 text-xl font-bold">
                                        Details
                                    </h3>
                                    <small className="text-gray-400 text-xs">
                                        Name your offerwall
                                    </small>
                                </div>
                            </div>
                            <div className="flex flex-row gap-4 items-center justify-start">
                                <span
                                    className={`${
                                        step === 1
                                            ? "bg-blue-500 text-blue-50"
                                            : "bg-blue-50 text-blue-500"
                                    } w-10 h-10 p-2 box-border rounded-xl flex justify-center font-bold items-center`}
                                >
                                    2
                                </span>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-gray-500 text-xl font-bold">
                                        URL & Category
                                    </h3>
                                    <small className="text-gray-400 text-xs">
                                        Add a URL and select a category
                                    </small>
                                </div>
                            </div>
                            <div className="flex flex-row gap-4 items-center justify-start">
                                <span
                                    className={`${
                                        step === 2
                                            ? "bg-blue-500 text-blue-50"
                                            : "bg-blue-50 text-blue-500"
                                    } w-10 h-10 p-2 box-border rounded-xl flex justify-center font-bold items-center`}
                                >
                                    3
                                </span>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-gray-500 text-xl font-bold">
                                        IntegrationType
                                    </h3>
                                    <small className="text-gray-400 text-xs">
                                        select an integration type
                                    </small>
                                </div>
                            </div>
                        </div>
                        {/* All Steps */}
                        <div className="flex-1">
                            {/* Step One */}
                            <div
                                className={`w-full h-auto flex flex-col gap-5 ${
                                    step !== 0 && "hidden"
                                }`}
                            >
                                <div className="w-full h-auto flex flex-col gap-2">
                                    <span className="text-gray-500 text-base font-bold">
                                        App Name{" "}
                                        <i className="text-red-500">*</i>
                                    </span>
                                    <input
                                        type="text"
                                        name="app_name"
                                        autoComplete="off"
                                        onChange={(e) =>
                                            setAppInfo({
                                                ...appInfo,
                                                app_name: e.target.value,
                                            })
                                        }
                                        className="bg-white w-full h-10 rounded-md border border-gray-200 py-2 px-4 box-border"
                                        placeholder="Enter App Name"
                                    />
                                </div>
                                <div className="w-full h-auto flex flex-col gap-2">
                                    <span className="text-gray-500 text-base font-bold">
                                        Mobile App or Website?{" "}
                                        <i className="text-red-500">*</i>
                                    </span>
                                    <div className="w-full h-auto flex flex-row items-center gap-2 justify-between">
                                        <button
                                            onClick={() =>
                                                setAppInfo({
                                                    ...appInfo,
                                                    app_type: "mobile",
                                                })
                                            }
                                            className="w-full h-auto flex flex-row items-center justify-between gap-2 cursor-pointer bg-slate-50 p-2 box-border rounded-xl"
                                        >
                                            <div className="w-auto h-auto flex flex-row items-center justify-start gap-2">
                                                <span className="bg-purple-100 text-purple-400 p-2 box-border rounded-xl">
                                                    <TbDeviceMobileCheck />
                                                </span>
                                                <span className="text-gray-500 text-sm">
                                                    Mobile App
                                                </span>
                                            </div>
                                            <IoCheckbox
                                                className={`${
                                                    appInfo.app_type ===
                                                    "mobile"
                                                        ? "text-purple-500"
                                                        : "text-gray-300"
                                                }`}
                                            />
                                        </button>
                                    </div>
                                    <div className="w-full h-auto flex flex-row items-center gap-2 justify-between">
                                        <button
                                            onClick={() =>
                                                setAppInfo({
                                                    ...appInfo,
                                                    app_type: "website",
                                                })
                                            }
                                            className="w-full h-auto flex flex-row items-center justify-between gap-2 cursor-pointer bg-slate-50 p-2 box-border rounded-xl"
                                        >
                                            <div className="w-auto h-auto flex flex-row items-center justify-start gap-2">
                                                <span className="bg-blue-100 text-blue-400 p-2 box-border rounded-xl">
                                                    <GiEarthAmerica />
                                                </span>
                                                <span className="text-gray-500 text-sm">
                                                    Website
                                                </span>
                                            </div>
                                            <IoCheckbox
                                                className={`${
                                                    appInfo.app_type ===
                                                    "website"
                                                        ? "text-blue-500"
                                                        : "text-gray-300"
                                                }`}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Step Two */}
                            <div
                                className={`w-full h-auto flex flex-col gap-5 ${
                                    step !== 1 && "hidden"
                                }`}
                            >
                                <div className="w-full h-auto flex flex-col gap-2">
                                    <span className="text-gray-500 text-base font-bold">
                                        URL <i className="text-red-500">*</i>
                                    </span>
                                    <input
                                        type="text"
                                        name="app_url"
                                        autoComplete="off"
                                        onChange={(e) =>
                                            setAppInfo({
                                                ...appInfo,
                                                app_url: e.target.value,
                                            })
                                        }
                                        className="bg-white w-full h-10 rounded-md border border-gray-200 py-2 px-4 box-border"
                                        placeholder="Enter URL"
                                    />
                                </div>
                                <div className="w-full h-auto flex flex-col gap-2">
                                    <span className="text-gray-500 text-base font-bold">
                                        Select Category{" "}
                                        <i className="text-red-500">*</i>
                                    </span>
                                    <div className="w-full h-auto flex flex-row items-center gap-2 justify-between">
                                        <button
                                            onClick={() =>
                                                setAppInfo({
                                                    ...appInfo,
                                                    app_category: "game",
                                                })
                                            }
                                            className="w-full h-auto flex flex-row items-center justify-between gap-2 cursor-pointer bg-slate-50 p-2 box-border rounded-xl"
                                        >
                                            <div className="w-auto h-auto flex flex-row items-center justify-start gap-2">
                                                <span className="bg-green-100 text-green-400 p-2 box-border rounded-xl">
                                                    <MdAndroid />
                                                </span>
                                                <span className="text-gray-500 text-sm">
                                                    Game
                                                </span>
                                            </div>
                                            <IoCheckbox
                                                className={`${
                                                    appInfo.app_category ===
                                                    "game"
                                                        ? "text-green-500"
                                                        : "text-gray-300"
                                                }`}
                                            />
                                        </button>
                                    </div>
                                    <div className="w-full h-auto flex flex-row items-center gap-2 justify-between">
                                        <button
                                            onClick={() =>
                                                setAppInfo({
                                                    ...appInfo,
                                                    app_category: "app",
                                                })
                                            }
                                            className="w-full h-auto flex flex-row items-center justify-between gap-2 cursor-pointer bg-slate-50 p-2 box-border rounded-xl"
                                        >
                                            <div className="w-auto h-auto flex flex-row items-center justify-start gap-2">
                                                <span className="bg-indigo-100 text-indigo-400 p-2 box-border rounded-xl">
                                                    <MdMobileFriendly />
                                                </span>
                                                <span className="text-gray-500 text-sm">
                                                    MobileApp
                                                </span>
                                            </div>
                                            <IoCheckbox
                                                className={`${
                                                    appInfo.app_category ===
                                                    "app"
                                                        ? "text-indigo-500"
                                                        : "text-gray-300"
                                                }`}
                                            />
                                        </button>
                                    </div>
                                    <div className="w-full h-auto flex flex-row items-center gap-2 justify-between">
                                        <button
                                            onClick={() =>
                                                setAppInfo({
                                                    ...appInfo,
                                                    app_category: "gpt",
                                                })
                                            }
                                            className="w-full h-auto flex flex-row items-center justify-between gap-2 cursor-pointer bg-slate-50 p-2 box-border rounded-xl"
                                        >
                                            <div className="w-auto h-auto flex flex-row items-center justify-start gap-2">
                                                <span className="bg-orange-100 text-orange-400 p-2 box-border rounded-xl">
                                                    <MdGames />
                                                </span>
                                                <span className="text-gray-500 text-sm">
                                                    Get Paid
                                                </span>
                                            </div>
                                            <IoCheckbox
                                                className={`${
                                                    appInfo.app_category ===
                                                    "gpt"
                                                        ? "text-orange-500"
                                                        : "text-gray-300"
                                                }`}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Step Three */}
                            <div
                                className={`w-full h-auto flex flex-col gap-2 ${
                                    step !== 2 && "hidden"
                                }`}
                            >
                                <span className="text-gray-500 text-base font-bold">
                                    Integration Type{" "}
                                    <i className="text-red-500">*</i>
                                </span>
                                <div className="w-full h-auto flex flex-row items-center gap-2 justify-between">
                                    <button
                                        onClick={() =>
                                            setAppInfo({
                                                ...appInfo,
                                                integeration_type: "api",
                                            })
                                        }
                                        className="w-full h-auto flex flex-row items-center justify-between gap-2 cursor-pointer bg-slate-50 p-2 box-border rounded-xl"
                                    >
                                        <div className="w-auto h-auto flex flex-row items-center justify-start gap-2">
                                            <span className="bg-red-100 text-red-400 p-2 box-border rounded-xl">
                                                <LuPackageOpen />
                                            </span>
                                            <span className="text-gray-500 text-sm">
                                                Api
                                            </span>
                                        </div>
                                        <IoCheckbox
                                            className={`${
                                                appInfo.integeration_type ===
                                                "api"
                                                    ? "text-red-500"
                                                    : "text-gray-300"
                                            }`}
                                        />
                                    </button>
                                </div>
                                <div className="w-full h-auto flex flex-row items-center gap-2 justify-between">
                                    <button
                                        onClick={() =>
                                            setAppInfo({
                                                ...appInfo,
                                                integeration_type: "web",
                                            })
                                        }
                                        className="w-full h-auto flex flex-row items-center justify-between gap-2 cursor-pointer bg-slate-50 p-2 box-border rounded-xl"
                                    >
                                        <div className="w-auto h-auto flex flex-row items-center justify-start gap-2">
                                            <span className="bg-blue-100 text-indigo-400 p-2 box-border rounded-xl">
                                                <FaEarthAmericas />
                                            </span>
                                            <span className="text-gray-500 text-sm">
                                                Web
                                            </span>
                                        </div>
                                        <IoCheckbox
                                            className={`${
                                                appInfo.integeration_type ===
                                                "web"
                                                    ? "text-indigo-500"
                                                    : "text-gray-300"
                                            }`}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Last Steps */}
                    </div>
                    <div className="w-full h-auto flex flex-row gap-5 items-center justify-between mt-10">
                        {step > 0 ? (
                            <button
                                onClick={prevStep}
                                className="bg-indigo-500 hover:bg-indigo-400 cursor-pointer text-white px-5 py-2 rounded-xl"
                            >
                                Prev
                            </button>
                        ) : (
                            <div></div>
                        )}
                        {step < 2 ? (
                            <button
                                onClick={nextStep}
                                className="bg-indigo-500 hover:bg-indigo-400 cursor-pointer text-white px-5 py-2 rounded-xl"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                className="bg-indigo-500 hover:bg-indigo-400 cursor-pointer text-white px-5 py-2 rounded-xl"
                            >
                                Submit
                            </button>
                        )}
                    </div>
                </div>
            </PopupDialog>
            <div className="w-full h-auto flex flex-col gap-10">
                <div className="w-full h-auto flex flex-row items-center justify-between">
                    <h1 className="text-gray-400 capitalize text-2xl font-bold flex flex-row gap-2">
                        <PagesURL.APPS.ICON size={32} />
                        {PagesURL.APPS.TITLE}
                    </h1>
                    <button
                        onClick={createNewApp}
                        className="bg-indigo-600 text-white cursor-pointer hover:bg-indigo-500 w-auto h-auto px-3 py-1 rounded flex flex-row items-center gap-2 space-x-1 shadow-md"
                    >
                        <FiPlus /> Create an App
                    </button>
                </div>
                <div className="bg-white w-full h-auto rounded-2xl shadow flex flex-col">
                    <div className="w-full h-auto hidden md:grid grid-cols-12 gap-5 items-center border-b-2 border-gray-100 p-7 box-border">
                        <span className="text-gray-400 text-sm font-medium uppercase col-span-5">
                            App
                        </span>
                        <span className="text-gray-400 text-sm font-medium uppercase col-span-2">
                            Date
                        </span>
                        <span className="text-gray-400 text-sm font-medium uppercase col-span-2">
                            Quality
                        </span>
                        <span className="text-gray-400 text-sm font-medium uppercase col-span-2">
                            Status
                        </span>
                        <span className="text-gray-400 text-sm font-medium uppercase col-span-1">
                            Action
                        </span>
                    </div>
                    <div className="w-full h-auto flex flex-col gap-5 mb-4">
                        {apps.length > 0 ? (
                            apps.map((app, index) => (
                                <div
                                    key={index}
                                    className="w-full h-auto grid md:grid-cols-12 grid-cols-5 gap-5 p-7 box-border border-b-2 border-gray-200 border-dotted"
                                >
                                    <div className="col-span-5 gap-5">
                                        <div className="flex flex-row items-center justify-start gap-5">
                                            <img
                                                src={app.image}
                                                alt={app.name}
                                                className="w-10 h-10 rounded-full"
                                            />
                                            <span className="text-gray-500 text-base font-medium col-span-2">
                                                {app.name}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="text-gray-500 text-xs font-medium col-span-2">
                                        {app.date}
                                    </span>
                                    <span className="text-gray-500 text-base font-medium col-span-2">
                                        100%
                                    </span>
                                    <span className="text-gray-500 text-base font-medium col-span-2">
                                        {app.status ? (
                                            <span className="text-green-500 bg-green-100 text-xs rounded-2xl px-4 py-1 box-border">
                                                Approved
                                            </span>
                                        ) : (
                                            <span className="text-red-500 bg-red-100 text-xs rounded-2xl px-4 py-1 box-border">
                                                Rejected
                                            </span>
                                        )}
                                    </span>
                                    <span className="text-base font-medium col-span-1">
                                        <button
                                            onClick={() =>
                                                navigate(
                                                    `${PagesURL.OFFERWALL.URL}/${app.id}`
                                                )
                                            }
                                            className="bg-gray-100 text-gray-600 cursor-pointer hover:bg-gray-200 w-8 h-8 rounded flex flex-row items-center justify-center"
                                        >
                                            <GrConfigure size={16} />
                                        </button>
                                    </span>
                                </div>
                            ))
                        ) : (
                            <small className="text-gray-300 w-full h-auto min-h-40 flex flex-row items-center justify-center text-4xl font-bold">
                                You have no apps!
                            </small>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppsPage;
