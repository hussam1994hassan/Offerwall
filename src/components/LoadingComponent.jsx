import React from "react";

const LoadingComponent = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-neutral-50 bg-opacity-90 z-50">
            <div className="flex flex-col items-center">
                <span className="text-6xl text-indigo-500 animate-spin mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                    </svg>
                </span>
                <span className="text-indigo-600 text-lg font-semibold animate-pulse">
                    Loading...
                </span>
            </div>
        </div>
    );
};

export default LoadingComponent;
