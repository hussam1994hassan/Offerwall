import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
    AiOutlineBarChart,
    AiOutlineAppstore,
    AiOutlineUnlock,
} from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import PagesURL from "../constants/PagesURL";
import { MdKeyboardArrowDown } from "react-icons/md";
import LogoApp from "./LogoApp";

const getSidebarLinks = () => {
    return [
        {
            section: "Menu",
            links: [
                {
                    label: PagesURL.DASHBOARD.TITLE,
                    icon: PagesURL.DASHBOARD.ICON,
                    href: PagesURL.DASHBOARD.URL,
                },
                {
                    label: PagesURL.APPS.TITLE,
                    icon: PagesURL.APPS.ICON,
                    href: PagesURL.APPS.URL,
                },
                {
                    label: PagesURL.OFFERS.TITLE,
                    icon: PagesURL.OFFERS.ICON,
                    href: PagesURL.OFFERS.URL,
                },
                {
                    label: PagesURL.SETTINGS.TITLE,
                    icon: PagesURL.SETTINGS.ICON,
                    href: PagesURL.SETTINGS.URL,
                },
                {
                    label: PagesURL.PAYMENTS.TITLE,
                    icon: PagesURL.PAYMENTS.ICON,
                    href: PagesURL.PAYMENTS.URL,
                },
            ],
        },
        {
            section: "Others",
            links: [
                {
                    label: PagesURL.REPORTS.TITLE,
                    icon: PagesURL.REPORTS.ICON,
                    href: PagesURL.REPORTS.URL,
                },
                {
                    label: PagesURL.POSTBACK.TITLE,
                    icon: PagesURL.POSTBACK.ICON,
                    href: PagesURL.POSTBACK.URL,
                },
                {
                    label: PagesURL.DOCS.TITLE,
                    icon: PagesURL.DOCS.ICON,
                    href: PagesURL.DOCS.URL,
                },
            ],
        },
    ];
};

// Main Navbar Component
const ASideMenu = ({ getLinks = getSidebarLinks }) => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const [openDropdowns, setOpenDropdowns] = useState({});
    const linksData = getLinks();

    const handleDropdown = (label) => {
        setOpenDropdowns((prev) => ({
            ...prev,
            [label]: !prev[label],
        }));
    };

    // Helper to check if current path matches link or link children
    const isActive = (href, children) => {
        if (href !== "#" && location.pathname === href) return true;
        if (children) {
            return children.some((child) => location.pathname === child.href);
        }
        return false;
    };

    // Helper for dropdown open state
    const isDropdownOpen = (label) =>
        openDropdowns[label] ||
        (openDropdowns[label] === undefined &&
            isActive(
                "#",
                linksData
                    .flatMap((sec) => sec.links)
                    .find((l) => l.label === label)?.children
            ));

    return (
        <>
            <aside
                aria-label="Sidebar"
                className={`
                    xl:sticky fixed top-0 left-0 z-50 bg-gray-800 h-screen min-h-[100vh] w-64 flex flex-col
                    ${open ? "translate-x-0" : "-translate-x-full"}
                    md:translate-x-0 md:static md:shadow-none md:w-64
                    shadow-lg
                `}
            >
                <div className="flex items-center h-20 justify-between p-4 md:p-6 border-b border-gray-700">
                    <LogoApp />
                    <button
                        className="md:hidden p-2 rounded hover:bg-gray-700 text-gray-200"
                        onClick={() => setOpen(false)}
                        aria-label="Close Sidebar"
                    >
                        <CgClose size={24} />
                    </button>
                </div>
                <div className="flex flex-col overflow-y-auto duration-300 no-scrollbar p-5 box-border">
                    <nav className="mb-6">
                        {linksData.map((section, idx) => (
                            <div key={idx} className="mb-8">
                                <h2 className="mb-4 text-xs uppercase flex leading-[20px] text-gray-400 justify-start">
                                    {section.section}
                                </h2>
                                <ul className="flex flex-col gap-4">
                                    {section.links.map((link) => {
                                        const Icon = link.icon;
                                        const active = isActive(
                                            link.href,
                                            link.children
                                        );
                                        const isDropdown = !!link.children;

                                        return (
                                            <li key={link.label}>
                                                {isDropdown ? (
                                                    <>
                                                        <button
                                                            className={`group cursor-pointer flex items-center justify-between gap-3 w-full px-3 py-2 rounded-lg duration-200 ${
                                                                active
                                                                    ? "bg-indigo-500 text-white"
                                                                    : "hover:bg-gray-100 text-gray-200 hover:text-gray-700"
                                                            }`}
                                                            onClick={() =>
                                                                handleDropdown(
                                                                    link.label
                                                                )
                                                            }
                                                        >
                                                            <div className="flex gap-3 items-center justify-start">
                                                                <span className="text-xl">
                                                                    {Icon && (
                                                                        <Icon />
                                                                    )}
                                                                </span>
                                                                <span className="flex-1 text-sm font-medium mr-auto">
                                                                    {link.label}
                                                                </span>
                                                            </div>
                                                            <MdKeyboardArrowDown
                                                                className={`ml-auto w-5 h-5 duration-200 ${
                                                                    isDropdownOpen(
                                                                        link.label
                                                                    )
                                                                        ? "rotate-180"
                                                                        : ""
                                                                }`}
                                                            />
                                                        </button>
                                                        <div
                                                            className={`overflow-hidden duration-300 ${
                                                                isDropdownOpen(
                                                                    link.label
                                                                )
                                                                    ? "max-h-96 opacity-100"
                                                                    : "max-h-0 opacity-0"
                                                            }`}
                                                        >
                                                            <ul className="mt-2 space-y-1 box-border ml-6">
                                                                {link.children.map(
                                                                    (child) => (
                                                                        <li
                                                                            key={
                                                                                child.href
                                                                            }
                                                                        >
                                                                            <Link
                                                                                className={`block px-4 py-2 rounded-md text-sm ${
                                                                                    location.pathname ===
                                                                                    child.href
                                                                                        ? "text-indigo-400"
                                                                                        : "hover:text-indigo-500 text-gray-300"
                                                                                }`}
                                                                                to={
                                                                                    child.href
                                                                                }
                                                                                data-discover="true"
                                                                            >
                                                                                {
                                                                                    child.label
                                                                                }
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <Link
                                                        className={`group flex items-center gap-3 px-3 py-2 rounded-lg duration-200 ${
                                                            active
                                                                ? "bg-indigo-500 text-white"
                                                                : "hover:bg-gray-100 text-gray-200 hover:text-gray-700"
                                                        }`}
                                                        to={link.href}
                                                        data-discover="true"
                                                    >
                                                        <span className="text-xl">
                                                            {Icon && <Icon />}
                                                        </span>
                                                        <span className="flex-1 text-sm font-medium mr-auto">
                                                            {link.label}
                                                        </span>
                                                    </Link>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </div>
            </aside>
            {/* Mobile open button */}
            <button
                className="fixed z-20 top-4 left-4 md:hidden p-2 bg-transparent text-gray-600 rounded hover:bg-gray-700"
                onClick={() => setOpen(true)}
                aria-label="Open Sidebar"
            >
                <FiMenu size={24} />
            </button>
        </>
    );
};

export default ASideMenu;
