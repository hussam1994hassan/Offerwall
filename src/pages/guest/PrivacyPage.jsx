import { FaLock } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import AppENV from "../../constants/AppENV";
import PagesURL from "../../constants/PagesURL";
import { useEffect } from "react";
import PrivacyComponent from "../../components/PrivacyComponent";

const PrivacyPage = () => {
    // Page Title
    useEffect(() => {
        document.title = `${AppENV.APP_NAME} - ${PagesURL.PRIVACY.TITLE}`;
    }, []);

    return <PrivacyComponent />;
};

export default PrivacyPage;
