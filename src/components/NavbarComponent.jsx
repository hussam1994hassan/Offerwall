import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import {
    MdChromeReaderMode,
    MdCode,
    MdFormatSize,
    MdHelpOutline,
    MdLogin,
    MdOutlineColorLens,
    MdOutlinePerson,
    MdSpaceDashboard,
} from "react-icons/md";
import { Link } from "react-router-dom";

const navSections = [
    {
        label: "Navigation",
        links: [
            {
                label: "Dashboard",
                to: "/free/dashboard/default",
                icon: <MdSpaceDashboard size={22} />,
                external: false,
            },
        ],
    },
    {
        label: "Authentication",
        links: [
            {
                label: "Login",
                to: "/free/login",
                icon: <MdLogin size={22} />,
                external: true,
            },
            {
                label: "Register",
                to: "/free/register",
                icon: <MdOutlinePerson size={22} />,
                external: true,
            },
        ],
    },
    {
        label: "Utilities",
        links: [
            {
                label: "Typography",
                to: "/free/typography",
                icon: <MdFormatSize size={22} />,
                external: false,
            },
            {
                label: "Color",
                to: "/free/color",
                icon: <MdOutlineColorLens size={22} />,
                external: false,
            },
            {
                label: "Shadow",
                to: "/free/shadow",
                icon: <MdCode size={22} />,
                external: false,
            },
        ],
    },
    {
        label: "Support",
        links: [
            {
                label: "Sample Page",
                to: "/free/sample-page",
                icon: <MdChromeReaderMode size={22} />,
                external: false,
            },
            {
                label: "Documentation",
                to: "https://codedthemes.gitbook.io/mantis/",
                icon: <MdHelpOutline size={22} />,
                external: true,
            },
        ],
    },
];

const NavbarComponent = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav
                aria-label="Sidebar"
                className={`
                    xl:sticky fixed top-0 left-0 z-50 bg-gray-800 h-screen w-64 flex flex-col
                    ${open ? "translate-x-0" : "-translate-x-full"}
                    md:translate-x-0 md:static md:shadow-none md:w-64
                    shadow-lg
                `}
                style={{ minHeight: "100vh" }}
            >
                {/* Logo and close button */}
                <div className="flex items-center justify-between p-4 md:justify-center md:p-6 border-b border-gray-700">
                    <Link
                        to={`#`}
                        className="block text-gray-200 font-bold text-lg md:text-2xl"
                    >
                        {/* SVG Logo (kept as img for simplicity, replace with actual svg if required) */}
                        LOGO
                    </Link>
                    <button
                        className="md:hidden p-2 rounded hover:bg-gray-700 text-gray-200"
                        onClick={() => setOpen(false)}
                        aria-label="Close Sidebar"
                    >
                        <CgClose size={24} />
                    </button>
                </div>
                {/* Nav Sections */}
                <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
                    <div className="mt-5"></div>
                    {navSections.map((section) => (
                        <div key={section.label} className="mb-4">
                            <h6 className="px-6 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                                {section.label}
                            </h6>
                            <ul>
                                {section.links.map((link) => (
                                    <li
                                        key={link.label}
                                        className="w-full h-auto px-5 box-border"
                                    >
                                        {link.external ? (
                                            <Link
                                                to={link.to}
                                                className="flex items-center gap-3 px-2 py-2 rounded-md text-gray-200 hover:bg-gray-700 font-medium"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span>{link.icon}</span>
                                                <span>{link.label}</span>
                                            </Link>
                                        ) : (
                                            <Link
                                                to={link.to}
                                                className="flex items-center gap-3 px-2 py-2 rounded-md text-gray-200 hover:bg-gray-700 font-medium"
                                            >
                                                <span>{link.icon}</span>
                                                <span>{link.label}</span>
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </nav>
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

export default NavbarComponent;
