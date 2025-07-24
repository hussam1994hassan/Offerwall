import React from "react";

const ConfigurationComponent = () => {
    return (
        <div className="w-full h-auto flex flex-col gap-5">
            <div className="w-full h-auto pb-5 border-b-2 border-dotted border-slate-300 flex flex-col gap-5">
                <h1 className="text-gray-600 capitalize text-3xl font-extrabold">
                    Configuration
                </h1>
                <small className="text-gray-500 text-base">
                    The A to Z of Currency Settings.
                </small>
            </div>
            <div className="w-full h-auto flex flex-col gap-2">
                <h3 className="text-gray-600 capitalize text-xl font-bold">
                    ✏️ Currency Name
                </h3>
                <ul className="list-disc pl-8 text-gray-500 mb-4">
                    <li>
                        The currency name refers to the virtual currency used
                        within your platform or app.
                    </li>
                    <li>
                        If your app/website has an internal currency for users
                        to earn and spend, like "gems", "coins", or "points",
                        that's your currency name!
                    </li>
                </ul>
            </div>

            <div className="w-full h-auto flex flex-col gap-2">
                <h3 className="text-gray-600 capitalize text-xl font-bold">
                    🔢 Currency Round The
                </h3>
                <ul className="list-disc pl-8 text-gray-500 mb-4">
                    <li>
                        currency round represents how you will round off the
                        currency amount. For example, your internal currency is
                        "points", and users can earn fractions of a point (like
                        0.5 points), then the currency round should be 1.
                    </li>
                    <li>
                        If your users can earn currency such as 0.892 points,
                        the currency round should be set to 3, and so on.
                    </li>
                </ul>
            </div>
            <div className="w-full h-auto flex flex-col gap-2">
                <h3 className="text-gray-600 capitalize text-xl font-bold">
                    💰 Exchange Rate
                </h3>
                <ul className="list-disc pl-8 text-gray-500 mb-4">
                    <li>
                        The exchange rate is the ratio at which your internal
                        currency can be exchanged for real-world value (in this
                        case USD). It will determine how much users can earn
                        from offers in terms of your internal currency.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ConfigurationComponent;
