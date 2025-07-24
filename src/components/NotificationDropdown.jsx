import React, { useEffect, useRef, useState } from "react";
import {
    MdNotificationsActive,
    MdOutlineNotificationsNone,
} from "react-icons/md";
import { useSelector } from "react-redux";

const NotificationDropdown = () => {
    const notifications = useSelector(
        (state) => state.auth.notifications || []
    );
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative ml-4" ref={dropdownRef}>
            <button
                className="relative focus:outline-none cursor-pointer group"
                onClick={() => setOpen((prev) => !prev)}
                aria-label="Notifications"
            >
                <span className="relative flex items-center justify-center">
                    {notifications.length > 0 ? (
                        <MdNotificationsActive
                            size={30}
                            className="text-gray-600 group-hover:text-gray-800"
                        />
                    ) : (
                        <MdOutlineNotificationsNone
                            size={30}
                            className="text-gray-400 group-hover:text-gray-600"
                        />
                    )}
                    {notifications.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5 shadow border-2 border-white">
                            {notifications.length}
                        </span>
                    )}
                </span>
            </button>

            {open && (
                <div className="absolute right-0 mt-3 w-96 bg-white border overflow-hidden border-neutral-200 rounded-xl shadow-2xl z-40">
                    <div className="flex items-center justify-between p-4 border-b">
                        <span className="font-semibold text-neutral-800 text-lg flex items-center gap-2">
                            <MdNotificationsActive className="text-gray-600 text-2xl" />
                            Notifications
                        </span>
                        <button
                            className="text-xs text-gray-500 hover:underline focus:outline-none"
                            onClick={() => setOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                    <ul className="max-h-80 overflow-y-auto divide-y divide-neutral-100">
                        {notifications.length === 0 ? (
                            <li className="p-6 text-neutral-400 text-center flex flex-col items-center gap-2">
                                <MdOutlineNotificationsNone className="text-4xl text-gray-200 mb-2" />
                                No notifications
                            </li>
                        ) : (
                            notifications.map((n, idx) => (
                                <li
                                    key={idx}
                                    className="px-6 py-4 hover:bg-neutral-50 flex gap-3 items-start"
                                >
                                    <div className="flex-shrink-0 mt-1">
                                        <MdNotificationsActive className="text-gray-400 text-xl" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-medium text-neutral-800">
                                            {n.title}
                                        </div>
                                        <div className="text-sm text-neutral-600 mt-1">
                                            {n.body}
                                        </div>
                                        <div className="text-xs text-neutral-400 mt-2">
                                            {n.created_at}
                                        </div>
                                    </div>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NotificationDropdown;
