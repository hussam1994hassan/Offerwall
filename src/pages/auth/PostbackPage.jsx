import React, { useEffect } from "react";
import PagesURL from "../../constants/PagesURL";
import AppENV from "../../constants/AppENV";

const PostbackPage = () => {
    useEffect(() => {
        document.title = `${AppENV.APP_NAME} - ${PagesURL.POSTBACK.TITLE}`;
    }, []);

    return (
        <div className="w-full h-auto flex flex-col gap-10">
            <div className="w-full h-auto flex flex-col gap-10">
                <div className="w-full h-auto flex flex-row items-center justify-between">
                    <h1 className="text-gray-400 capitalize text-2xl font-bold flex flex-row gap-2">
                        <PagesURL.POSTBACK.ICON size={32} />
                        {PagesURL.POSTBACK.TITLE}
                    </h1>
                </div>
            </div>
            <div>...</div>
        </div>
    );
};

export default PostbackPage;
