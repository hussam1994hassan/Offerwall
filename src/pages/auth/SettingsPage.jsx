import React, { useEffect } from "react";
import AppENV from "../../constants/AppENV";
import PagesURL from "../../constants/PagesURL";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { IoLockClosed } from "react-icons/io5";

import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const SettingsPage = () => {
    const user = useSelector((state) => state.auth.user);

    useEffect(() => {
        document.title = `${AppENV.APP_NAME} - ${PagesURL.SETTINGS.TITLE}`;
    }, []);

    const handleSubmitInfo = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const {
            first_name,
            last_name,
            email,
            phone,
            full_address,
            zip_code,
            country,
            city,
        } = Object.fromEntries(form.entries());

        console.log({
            first_name,
            last_name,
            email,
            phone,
            full_address,
            zip_code,
            country,
            city,
        });

        toast.success("Profile updated!");
    };

    const handleSubmitPassword = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const { current_password, new_password, confirm_password } =
            Object.fromEntries(form.entries());

        console.log({ current_password, new_password, confirm_password });

        toast.success("Password updated!");
    };

    return (
        <div className="w-full h-auto flex flex-col gap-10">
            <div className="w-full h-auto flex flex-row items-center justify-between">
                <h1 className="text-gray-400 capitalize text-2xl font-bold flex flex-row gap-2">
                    <PagesURL.SETTINGS.ICON size={32} />
                    {PagesURL.SETTINGS.TITLE}
                </h1>
            </div>
            <div className="bg-white w-full h-auto rounded-2xl shadow flex flex-col">
                <div className="w-full h-auto flex flex-row items-center justify-start border-b-2 border-gray-100 p-7 box-border">
                    <span className="text-gray-400 text-sm font-medium uppercase flex flex-row items-center gap-2">
                        <RiAccountPinCircleFill size={24} />
                        Account Info
                    </span>
                </div>
                <form
                    onSubmit={handleSubmitInfo}
                    className="w-full max-w-3xl h-auto flex flex-col gap-7 mb-4 p-7 box-border"
                >
                    <div className="w-full h-auto flex flex-row items-center justify-between gap-5">
                        <div className="w-full h-auto flex flex-col gap-1">
                            <div className="w-full h-10 flex flex-col gap-1 rounded-md border border-gray-200 relative">
                                <span className="text-gray-500 bg-white px-2 py-1 max-w-max text-xs capitalize absolute -top-3 left-2">
                                    First Name
                                </span>
                                <input
                                    type="text"
                                    className="bg-transparent w-full h-full text-gray-600 outline-none py-2 px-4 box-border absolute top-0 left-0"
                                    name="first_name"
                                    id="first_name"
                                    defaultValue={user?.first_name}
                                    placeholder="First Name"
                                />
                            </div>
                            <small className="text-gray-400 text-xs">
                                Your legel first name
                            </small>
                        </div>
                        <div className="w-full h-auto flex flex-col gap-1">
                            <div className="w-full h-10 flex flex-col gap-1 rounded-md border border-gray-200 relative">
                                <span className="text-gray-500 bg-white px-2 py-1 max-w-max text-xs capitalize absolute -top-3 left-2">
                                    Last Name
                                </span>
                                <input
                                    type="text"
                                    className="bg-transparent w-full h-full text-gray-600 outline-none py-2 px-4 box-border absolute top-0 left-0"
                                    name="last_name"
                                    id="last_name"
                                    defaultValue={user?.last_name}
                                    placeholder="Last Name"
                                />
                            </div>
                            <small className="text-gray-400 text-xs">
                                Your legel last name
                            </small>
                        </div>
                    </div>
                    <div className="w-full h-auto flex flex-row items-center justify-between gap-5">
                        <div className="w-full h-auto flex flex-col gap-1">
                            <div className="w-full h-10 flex flex-col gap-1 rounded-md border border-gray-200 relative">
                                <span className="text-gray-500 bg-white px-2 py-1 max-w-max text-xs capitalize absolute -top-3 left-2">
                                    Email Address
                                </span>
                                <input
                                    type="text"
                                    className="bg-transparent w-full h-full text-gray-600 outline-none py-2 px-4 box-border absolute top-0 left-0"
                                    name="email"
                                    id="email"
                                    defaultValue={user?.email}
                                    placeholder="Email Address"
                                />
                            </div>
                            <small className="text-gray-400 text-xs">
                                Your Email Address
                            </small>
                        </div>
                        <div className="w-full h-auto flex flex-col gap-1">
                            <div className="w-full h-10 flex flex-col gap-1 rounded-md border border-gray-200 relative">
                                <span className="text-gray-500 bg-white px-2 py-1 max-w-max text-xs capitalize absolute -top-3 left-2">
                                    Phone Number
                                </span>
                                <input
                                    type="text"
                                    className="bg-transparent w-full h-full text-gray-600 outline-none py-2 px-4 box-border absolute top-0 left-0"
                                    name="phone"
                                    id="phone"
                                    defaultValue={user?.phone}
                                    placeholder="Phone Number"
                                />
                            </div>
                            <small className="text-gray-400 text-xs">
                                Your Phone number
                            </small>
                        </div>
                    </div>
                    <div className="w-full h-auto flex flex-row items-center justify-between gap-5">
                        <div className="w-full h-auto flex flex-col gap-1">
                            <div className="w-full h-10 flex flex-col gap-1 rounded-md border border-gray-200 relative">
                                <span className="text-gray-500 bg-white px-2 py-1 max-w-max text-xs capitalize absolute -top-3 left-2">
                                    Full Address
                                </span>
                                <input
                                    type="text"
                                    className="bg-transparent w-full h-full text-gray-600 outline-none py-2 px-4 box-border absolute top-0 left-0"
                                    name="full_address"
                                    id="full_address"
                                    defaultValue={user?.full_address}
                                    placeholder="Full Address"
                                />
                            </div>
                            <small className="text-gray-400 text-xs">
                                Your current address
                            </small>
                        </div>
                        <div className="w-full h-auto flex flex-col gap-1">
                            <div className="w-full h-10 flex flex-col gap-1 rounded-md border border-gray-200 relative">
                                <span className="text-gray-500 bg-white px-2 py-1 max-w-max text-xs capitalize absolute -top-3 left-2">
                                    Zip Code
                                </span>
                                <input
                                    type="text"
                                    className="bg-transparent w-full h-full text-gray-600 outline-none py-2 px-4 box-border absolute top-0 left-0"
                                    name="zip_code"
                                    id="zip_code"
                                    defaultValue={user?.zip_code}
                                    placeholder="Zip Code"
                                />
                            </div>
                            <small className="text-gray-400 text-xs">
                                Your Address Zip Code
                            </small>
                        </div>
                    </div>
                    <div className="w-full h-auto flex flex-row items-center justify-between gap-5">
                        <div className="w-full h-auto flex flex-col gap-1">
                            <div className="w-full h-10 flex flex-col gap-1 rounded-md border border-gray-200 relative">
                                <span className="text-gray-500 bg-white px-2 py-1 max-w-max text-xs capitalize absolute -top-3 left-2">
                                    Country
                                </span>
                                <input
                                    type="text"
                                    className="bg-transparent w-full h-full text-gray-600 outline-none py-2 px-4 box-border absolute top-0 left-0"
                                    name="country"
                                    id="country"
                                    defaultValue={user?.country}
                                    placeholder="Country"
                                />
                            </div>
                            <small className="text-gray-400 text-xs">
                                Your Address Country
                            </small>
                        </div>
                        <div className="w-full h-auto flex flex-col gap-1">
                            <div className="w-full h-10 flex flex-col gap-1 rounded-md border border-gray-200 relative">
                                <span className="text-gray-500 bg-white px-2 py-1 max-w-max text-xs capitalize absolute -top-3 left-2">
                                    City
                                </span>
                                <input
                                    type="text"
                                    className="bg-transparent w-full h-full text-gray-600 outline-none py-2 px-4 box-border absolute top-0 left-0"
                                    name="city"
                                    id="city"
                                    defaultValue={user?.city}
                                    placeholder="City"
                                />
                            </div>
                            <small className="text-gray-400 text-xs">
                                Your Address City
                            </small>
                        </div>
                    </div>
                    <button className="max-w-max h-auto px-4 py-2 box-border cursor-pointer bg-indigo-500 hover:bg-indigo-600 text-white rounded-md">
                        Save Change Info
                    </button>
                </form>
            </div>
            <form
                onSubmit={handleSubmitPassword}
                className="bg-white w-full h-auto rounded-2xl shadow flex flex-col"
            >
                <div className="w-full h-auto flex flex-row items-center justify-start border-b-2 border-gray-100 p-7 box-border">
                    <span className="text-gray-400 text-sm font-medium uppercase flex flex-row items-center gap-2">
                        <IoLockClosed size={24} />
                        My Password
                    </span>
                </div>
                <div className="w-full max-w-3xl h-auto flex flex-col gap-7 mb-4 p-7 box-border">
                    <div className="w-full h-auto flex flex-col items-center justify-between gap-7">
                        <div className="w-full h-10 flex flex-col gap-1 rounded-md border border-gray-200 relative">
                            <span className="text-gray-500 bg-white px-2 py-1 max-w-max text-xs capitalize absolute -top-3 left-2">
                                Enter Current Password
                            </span>
                            <input
                                type="password"
                                className="bg-transparent w-full h-full text-gray-600 outline-none py-2 px-4 box-border absolute top-0 left-0"
                                name="current_password"
                                id="current_password"
                                placeholder="***************"
                            />
                        </div>
                        <div className="w-full h-10 flex flex-col gap-1 rounded-md border border-gray-200 relative">
                            <span className="text-gray-500 bg-white px-2 py-1 max-w-max text-xs capitalize absolute -top-3 left-2">
                                Enter New Password
                            </span>
                            <input
                                type="password"
                                className="bg-transparent w-full h-full text-gray-600 outline-none py-2 px-4 box-border absolute top-0 left-0"
                                name="new_password"
                                id="new_password"
                                placeholder="***************"
                            />
                        </div>
                        <div className="w-full h-10 flex flex-col gap-1 rounded-md border border-gray-200 relative">
                            <span className="text-gray-500 bg-white px-2 py-1 max-w-max text-xs capitalize absolute -top-3 left-2">
                                Confirm New Password
                            </span>
                            <input
                                type="password"
                                className="bg-transparent w-full h-full text-gray-600 outline-none py-2 px-4 box-border absolute top-0 left-0"
                                name="confirm_password"
                                id="confirm_password"
                                placeholder="***************"
                            />
                        </div>
                    </div>
                    <button className="max-w-max h-auto px-4 py-2 box-border cursor-pointer bg-indigo-500 hover:bg-indigo-600 text-white rounded-md">
                        Save Change Password
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SettingsPage;
