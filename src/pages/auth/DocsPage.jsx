import React, { useEffect, useState } from "react";
import AppENV from "../../constants/AppENV";
import PagesURL from "../../constants/PagesURL";
import { Toaster } from "react-hot-toast";
import HeaderComponent from "../../components/HeaderComponent";
import FooterComponent from "../../components/FooterComponent";
import { Link } from "react-router";
import { CgClose } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import GetStartedComponent from "../../components/docs/GetStartedComponent";
import CreateAppComponent from "../../components/docs/CreateAppComponent";
import ConfigurationComponent from "../../components/docs/ConfigurationComponent";
import IntegrationWebComponent from "../../components/docs/IntegrationWebComponent";
import IntegrationAndroidComponent from "../../components/docs/IntegrationAndroidComponent";
import IntegrationIOSComponent from "../../components/docs/IntegrationIOSComponent";
import PostbackParameterComponent from "../../components/docs/PostbackParameterComponent";
import PostbackSecurityComponent from "../../components/docs/PostbackSecurityComponent";
import ApiReportComponent from "../../components/docs/ApiReportComponent";
import ApiOfferComponent from "../../components/docs/ApiOfferComponent";
import LogoApp from "../../components/LogoApp";

const DocsPage = () => {
    useEffect(() => {
        document.title = `${AppENV.APP_NAME} - ${PagesURL.DOCS.TITLE}`;
    }, []);

    const [showComponent, setShowComponent] = useState(GetStartedComponent);
    const [activeComponent, setActiveComponent] = useState("Get Started");

    const getSidebarLinks = () => {
        return [
            {
                section: "Knowledge",
                links: [
                    {
                        label: "Get Started",
                        component: GetStartedComponent,
                    },
                    {
                        label: "Create an App",
                        component: CreateAppComponent,
                    },
                    {
                        label: "Configuration",
                        component: ConfigurationComponent,
                    },
                ],
            },
            {
                section: "Integration",
                links: [
                    {
                        label: "Web",
                        component: IntegrationWebComponent,
                    },
                    {
                        label: "Android",
                        component: IntegrationAndroidComponent,
                    },
                    {
                        label: "IOS",
                        component: IntegrationIOSComponent,
                    },
                ],
            },
            {
                section: "Postback",
                links: [
                    {
                        label: "Postback Parameters",
                        component: PostbackParameterComponent,
                    },
                    {
                        label: "Postback Security",
                        component: PostbackSecurityComponent,
                    },
                ],
            },
            {
                section: "API",
                links: [
                    {
                        label: "Offer API",
                        component: ApiOfferComponent,
                    },
                    {
                        label: "Reporting API",
                        component: ApiReportComponent,
                    },
                ],
            },
        ];
    };

    // Main Navbar Component
    const AsideDocsMenu = ({ getLinks = getSidebarLinks }) => {
        const [open, setOpen] = useState(false);
        const linksData = getLinks();

        return (
            <>
                <aside
                    aria-label="SidebarDocsMenu"
                    className={`
                    xl:sticky fixed top-0 left-0 z-50 bg-gray-950 h-screen min-h-[100vh] w-64 flex flex-col
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
                                            const active =
                                                activeComponent === link.label;
                                            return (
                                                <li key={link.label}>
                                                    <button
                                                        onClick={() => {
                                                            setShowComponent(
                                                                link.component
                                                            );
                                                            setActiveComponent(
                                                                link.label
                                                            );
                                                        }}
                                                        className={`group flex items-start justify-start w-full text-sm cursor-pointer gap-3 px-3 py-2 rounded-lg duration-200 ${
                                                            active
                                                                ? "bg-indigo-500 text-white"
                                                                : "hover:bg-gray-100 text-gray-200 hover:text-gray-700"
                                                        }`}
                                                        data-discover="true"
                                                    >
                                                        {link.label}
                                                    </button>
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

    return (
        <>
            <Toaster reverseOrder={false} />
            <div className="flex">
                <AsideDocsMenu />
                <div className="flex-1 min-h-screen flex flex-col">
                    <HeaderComponent />
                    <div className="bg-neutral-50 h-auto min-h-[calc(100vh-195px)] flex items-start justify-start p-10 box-border">
                        {showComponent}
                    </div>
                    <FooterComponent />
                </div>
            </div>
        </>
    );
};

export default DocsPage;
