import React from "react";
import { GrConfigure } from "react-icons/gr";

const UserCard = ({ user }) => {
    return (
        <div
            key={user?.id}
            className="w-full h-auto grid md:grid-cols-12 grid-cols-6 gap-5 p-7 box-border border-b-2 border-gray-200 border-dotted"
        >
            <div className="col-span-3 gap-5">
                <div className="flex flex-row items-center justify-start gap-5">
                    <img
                        src={user?.image}
                        alt={user?.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <span className="text-gray-500 text-base font-medium">
                        {user?.first_name} {user?.last_name}
                    </span>
                </div>
            </div>
            <span className="text-gray-500 text-base font-medium col-span-3">
                {user?.email}
            </span>
            <span className="text-gray-500 text-base font-medium col-span-2">
                {user?.country}
            </span>
            <span className="text-gray-500 text-base font-medium col-span-1">
                {user?.status ? (
                    <span className="text-green-500 bg-green-100 text-xs rounded-2xl px-4 py-1 box-border">
                        Active
                    </span>
                ) : (
                    <span className="text-red-500 bg-red-100 text-xs rounded-2xl px-4 py-1 box-border">
                        Banned
                    </span>
                )}
            </span>
            <span className="text-green-500 text-sm font-medium col-span-2">
                ${user?.balance.toFixed(2)}
            </span>
            <span className="text-base font-medium col-span-1">
                <button
                    onClick={() => console.log("Actions")}
                    className="bg-gray-100 text-gray-600 cursor-pointer hover:bg-gray-200 w-8 h-8 rounded flex flex-row items-center justify-center"
                >
                    <GrConfigure size={16} />
                </button>
            </span>
        </div>
    );
};

export default UserCard;
