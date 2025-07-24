import React, { useEffect } from "react";
import PagesURL from "../../constants/PagesURL";
import AppENV from "../../constants/AppENV";

const IndexPage = () => {
    // Page Title
    useEffect(() => {
        document.title = `${AppENV.APP_NAME} - ${PagesURL.ROOT.TITLE}`;
    }, []);

    return <div>IndexPage</div>;
};

export default IndexPage;
