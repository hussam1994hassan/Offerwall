import { createBrowserRouter } from "react-router";
import PagesURL from "./constants/PagesURL";
import IndexPage from "./pages/guest/IndexPage";
import DashboardPage from "./pages/auth/DashboardPage";
import LoginPage from "./pages/guest/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import GuestLayout from "./layouts/GuestLayout";
import AuthLayout from "./layouts/AuthLayout";
import SettingsPage from "./pages/auth/SettingsPage";
import TermsPage from "./pages/guest/TermsPage";
import PrivacyPage from "./pages/guest/PrivacyPage";
import AppsPage from "./pages/auth/AppsPage";
import OffersPage from "./pages/auth/OffersPage";
import PaymentsPage from "./pages/auth/PaymentsPage";
import ReportsPage from "./pages/auth/ReportsPage";
import PostbackPage from "./pages/auth/PostbackPage";
import DocsPage from "./pages/auth/DocsPage";
import ErrorPage from "./pages/ErrorPage";
import AdminLayout from "./layouts/AdminLayout";
import ADashboardPage from "./pages/admin/ADashboardPage";
import OfferwallPage from "./pages/auth/OfferwallPage";
import AUsersPage from "./pages/admin/AUsersPage";
import OfferFrame from "./pages/DemoPage";
import DemoPage from "./pages/DemoPage";

const router = createBrowserRouter([
    {
        path: PagesURL.ROOT.URL,
        element: <GuestLayout />,
        children: [
            {
                path: PagesURL.ROOT.URL,
                element: <IndexPage />,
            },
            {
                path: PagesURL.LOGIN.URL,
                element: <LoginPage />,
            },
            {
                path: PagesURL.REGISTER.URL,
                element: <RegisterPage />,
            },
            {
                path: PagesURL.TERMS.URL,
                element: <TermsPage />,
            },
            {
                path: PagesURL.PRIVACY.URL,
                element: <PrivacyPage />,
            },
        ],
    },
    {
        path: PagesURL.ROOT.URL,
        element: <AuthLayout />,
        children: [
            {
                path: PagesURL.DASHBOARD.URL,
                element: <DashboardPage />,
            },
            {
                path: PagesURL.APPS.URL,
                element: <AppsPage />,
            },
            {
                path: `${PagesURL.OFFERWALL.URL}/:id`,
                element: <OfferwallPage />,
            },
            {
                path: PagesURL.OFFERS.URL,
                element: <OffersPage />,
            },
            {
                path: PagesURL.SETTINGS.URL,
                element: <SettingsPage />,
            },
            {
                path: PagesURL.PAYMENTS.URL,
                element: <PaymentsPage />,
            },
            {
                path: PagesURL.REPORTS.URL,
                element: <ReportsPage />,
            },
            {
                path: PagesURL.POSTBACK.URL,
                element: <PostbackPage />,
            },
        ],
    },
    {
        path: PagesURL.ADMIN.URL,
        element: <AdminLayout />,
        children: [
            {
                path: PagesURL.ADMIN.URL,
                element: <ADashboardPage />,
            },
            {
                path: PagesURL.ADMIN_USERS.URL,
                element: <AUsersPage />,
            },
        ],
    },
    {
        path: PagesURL.DEMO.URL,
        element: <DemoPage />,
    },
    {
        path: PagesURL.DOCS.URL,
        element: <DocsPage />,
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
]);

export default router;
