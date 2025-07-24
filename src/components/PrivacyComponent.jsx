import React from "react";
import { FaLock } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";

const PrivacyComponent = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <div className="flex items-center gap-3 mb-6">
                <MdOutlinePrivacyTip size={32} className="text-blue-500" />
                <h1 className="text-3xl font-bold text-gray-800">
                    Privacy Policy
                </h1>
            </div>
            <p className="mb-6 text-gray-600">
                Your privacy is important to us. This Privacy Policy explains
                how we collect, use, and protect your personal information when
                you use our affiliate marketing platform ("the Site").
            </p>

            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2 flex items-center gap-2">
                <FaLock /> Information We Collect
            </h2>
            <ul className="list-disc pl-8 text-gray-600 mb-4">
                <li>
                    <strong>Account Data:</strong> When you register, we collect
                    your name, email address, and other necessary contact
                    details.
                </li>
                <li>
                    <strong>Website Data:</strong> Information about your
                    websites or apps you add to our platform.
                </li>
                <li>
                    <strong>Usage Data:</strong> Analytics regarding your use of
                    our services and features.
                </li>
                <li>
                    <strong>Financial Data:</strong> Payment details for
                    payouts, where applicable.
                </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
                How We Use Your Information
            </h2>
            <ul className="list-disc pl-8 text-gray-600 mb-4">
                <li>To provide, operate, and maintain our platform.</li>
                <li>To process your offers, websites, and payouts.</li>
                <li>To communicate updates, offers, or support information.</li>
                <li>To comply with legal obligations and prevent fraud.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
                Data Sharing
            </h2>
            <p className="text-gray-600 mb-4">
                We do not sell your personal information. We may share data with
                trusted advertiser companies for tracking and offer delivery,
                and with service providers essential to the platform’s operation
                (e.g., payment processors).
            </p>

            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
                Cookies & Tracking
            </h2>
            <p className="text-gray-600 mb-4">
                Our site uses cookies to enhance your experience and for
                analytics. You can disable cookies in your browser settings, but
                some features may not function properly.
            </p>

            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
                Your Rights
            </h2>
            <ul className="list-disc pl-8 text-gray-600 mb-4">
                <li>
                    Access, update, or delete your personal data at any time.
                </li>
                <li>
                    Contact us for any privacy-related questions or requests.
                </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
                Policy Updates
            </h2>
            <p className="text-gray-600 mb-4">
                We may update this policy from time to time. Changes will be
                posted on this page.
            </p>

            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
                Contact
            </h2>
            <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
                <span className="underline text-blue-500">
                    support@yourdomain.com
                </span>
                .
            </p>
        </div>
    );
};

export default PrivacyComponent;
