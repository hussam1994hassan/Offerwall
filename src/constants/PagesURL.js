import { AiFillBank } from "react-icons/ai";
import { IoLogInOutline } from "react-icons/io5";
import { FaTerminal, FaUsers } from "react-icons/fa";
import { GiStrikingDiamonds } from "react-icons/gi";
import {
    HiCog6Tooth,
    HiCursorArrowRipple,
    HiMiniSquares2X2,
} from "react-icons/hi2";
import { HiFire, HiOutlineChip } from "react-icons/hi";
import { MdOutlineErrorOutline, MdOutlinePayments } from "react-icons/md";
import { IoIosHelpBuoy } from "react-icons/io";
import { LuArrowLeftRight, LuCrown } from "react-icons/lu";
import { GrConfigure } from "react-icons/gr";
import { FiTarget } from "react-icons/fi";

const PagesURL = {
    ROOT: {
        TITLE: "Earn Money Online",
        URL: "/",
        ICON: AiFillBank,
    },
    LOGIN: {
        TITLE: "Login",
        URL: "/login",
        ICON: IoLogInOutline,
    },
    REGISTER: {
        TITLE: "Register",
        URL: "/register",
        ICON: IoLogInOutline,
    },
    TERMS: {
        TITLE: "Terms and Conditions",
        URL: "/terms",
        ICON: FaTerminal,
    },
    PRIVACY: {
        TITLE: "Privacy Policy",
        URL: "/privacy",
        ICON: GiStrikingDiamonds,
    },
    DASHBOARD: {
        TITLE: "Dashboard",
        URL: "/dashboard",
        ICON: HiMiniSquares2X2,
    },
    OFFERS: {
        TITLE: "Offers",
        URL: "/offers",
        ICON: HiFire,
    },
    PAYMENTS: {
        TITLE: "Payments",
        URL: "/payments",
        ICON: MdOutlinePayments,
    },
    SETTINGS: {
        TITLE: "Settings",
        URL: "/settings",
        ICON: HiCog6Tooth,
    },
    APPS: {
        TITLE: "Apps",
        URL: "/apps",
        ICON: HiCursorArrowRipple,
    },
    OFFERWALL: {
        TITLE: "Offerwall",
        URL: "/offerwall",
        ICON: GrConfigure,
    },
    DEMO: {
        TITLE: "Offerwall",
        URL: "/demo",
        ICON: FiTarget,
    },
    REPORTS: {
        TITLE: "Reports",
        URL: "/reports",
        ICON: HiOutlineChip,
    },
    POSTBACK: {
        TITLE: "Postback",
        URL: "/postback",
        ICON: LuArrowLeftRight,
    },
    DOCS: {
        TITLE: "Documentation",
        URL: "/docs",
        ICON: IoIosHelpBuoy,
    },
    ADMIN: {
        TITLE: "Dashboard",
        URL: "/admin",
        ICON: LuCrown,
    },
    ADMIN_USERS: {
        TITLE: "Users",
        URL: "/admin/users",
        ICON: FaUsers,
    },
    NOT_FOUND: {
        TITLE: "404 Not Found",
        URL: "/404",
        ICON: MdOutlineErrorOutline,
    },
};

export default PagesURL;
