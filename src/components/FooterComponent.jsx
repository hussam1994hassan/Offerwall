import React from "react";

const FooterComponent = () => {
    return (
        <footer className="bg-gray-400 text-neutral-800 py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="text-xl font-bold text-white">
                        MyCompany
                    </span>
                    <p className="text-sm text-neutral-800 mt-1">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-white">
                        Home
                    </a>
                    <a href="#" className="hover:text-white">
                        About
                    </a>
                    <a href="#" className="hover:text-white">
                        Contact
                    </a>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="text-neutral-800 hover:text-white">
                        <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5"
                        >
                            <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.09 4.07 7.38 1.64 4.77c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.85 1.95 3.63a4.28 4.28 0 0 1-1.94-.54v.05c0 2.11 1.5 3.87 3.49 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.12 2.9 3.99 2.93A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.7 8.7 0 0 0 24 4.59a8.44 8.44 0 0 1-2.54.7z" />
                        </svg>
                    </a>
                    <a href="#" className="text-neutral-800 hover:text-white">
                        <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5"
                        >
                            <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.07 8.24 8.93v-6.32h-2.48v-2.61h2.48V9.41c0-2.45 1.49-3.8 3.68-3.8 1.07 0 2.19.19 2.19.19v2.41h-1.24c-1.22 0-1.6.76-1.6 1.54v1.85h2.72l-.44 2.61h-2.28v6.32c4.64-.86 8.24-4.52 8.24-8.93 0-5.5-4.46-9.96-9.96-9.96z" />
                        </svg>
                    </a>
                    <a href="#" className="text-neutral-800 hover:text-white">
                        <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5"
                        >
                            <path d="M21.54 7.2c-.13-.49-.52-.88-1.01-1.01C19.13 5.8 12 5.8 12 5.8s-7.13 0-8.53.39c-.49.13-.88.52-1.01 1.01C2 8.6 2 12 2 12s0 3.4.46 4.8c.13.49.52.88 1.01 1.01C4.87 18.2 12 18.2 12 18.2s7.13 0 8.53-.39c.49-.13.88-.52 1.01-1.01.46-1.4.46-4.8.46-4.8s0-3.4-.46-4.8zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
