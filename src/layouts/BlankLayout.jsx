import React from "react";

const BlankLayout = () => {
    return (
        <>
            <Toaster reverseOrder={false} />
            <div className="flex">
                <div className="bg-neutral-50 h-auto min-h-[calc(100vh-195px)] flex items-start justify-start p-10 box-border">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default BlankLayout;
