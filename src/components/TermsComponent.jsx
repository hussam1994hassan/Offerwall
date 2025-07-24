import React from "react";
import { FaGavel } from "react-icons/fa";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";

const TermsComponent = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <div className="flex items-center gap-3 mb-6">
                <MdOutlineAssignmentTurnedIn
                    size={32}
                    className="text-green-500"
                />
                <h1 className="text-3xl font-bold text-gray-800">
                    Terms &amp; Conditions
                </h1>
            </div>
            <p className="mb-6 text-gray-600">
                Welcome to our affiliate marketing platform ("the Site"). By
                registering and using our services, you agree to comply with
                these Terms and Conditions. Please read them carefully.
            </p>
            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2 flex items-center gap-2">
                <FaGavel /> Eligibility
            </h2>
            <p className="text-gray-600 mb-4">
                You must be at least 18 years old and capable of forming legally
                binding contracts in your jurisdiction to use our services.
            </p>

            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
                Account Responsibilities
            </h2>
            <ul className="list-disc pl-8 text-gray-600 mb-4">
                <li>
                    Provide accurate and complete information during
                    registration.
                </li>
                <li>Keep your login credentials confidential and secure.</li>
                <li>
                    You are responsible for all activities under your account.
                </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
                Offers & Payouts
            </h2>
            <ul className="list-disc pl-8 text-gray-600 mb-4">
                <li>
                    Offers are subject to availability and terms set by
                    advertiser companies.
                </li>
                <li>
                    Payouts are made after offer validation, following our
                    payment schedule.
                </li>
                <li>
                    Fraudulent activities (fake signups, incentivized traffic,
                    etc.) are strictly prohibited and will result in account
                    suspension and forfeiture of earnings.
                </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
                Prohibited Activities
            </h2>
            <ul className="list-disc pl-8 text-gray-600 mb-4">
                <li>No spamming, misleading, or illegal activities.</li>
                <li>No use of bots or automated systems to complete offers.</li>
                <li>No manipulation of tracking or reporting.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
                Termination
            </h2>
            <p className="text-gray-600 mb-4">
                We reserve the right to suspend or terminate your account at any
                time for violating these terms or engaging in fraudulent or
                abusive behavior.
            </p>

            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
                Limitation of Liability
            </h2>
            <p className="text-gray-600 mb-4">
                Our platform provides offers as an intermediary and is not
                liable for any issues arising from advertiser companies or the
                offers themselves.
            </p>

            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
                Changes to Terms
            </h2>
            <p className="text-gray-600 mb-4">
                We may update these Terms &amp; Conditions at any time.
                Continued use of our services means you accept the latest terms.
            </p>

            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
                Contact
            </h2>
            <p className="text-gray-600">
                For any questions about these Terms &amp; Conditions, contact us
                at{" "}
                <span className="underline text-green-500">
                    support@yourdomain.com
                </span>
                .
            </p>
        </div>
    );
};

export default TermsComponent;
