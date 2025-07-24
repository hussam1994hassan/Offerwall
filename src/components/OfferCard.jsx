import { AiFillAndroid } from "react-icons/ai";
import { FaApple, FaDesktop } from "react-icons/fa";

// src/components/OfferCard.jsx
const OfferCard = ({ offer }) => {
    return (
        <div
            key={offer.id}
            className="w-full h-auto grid md:grid-cols-12 grid-cols-5 gap-5 p-7 box-border border-b-2 border-gray-200 border-dotted"
        >
            <div className="col-span-4 gap-5">
                <div className="flex flex-row items-center justify-start gap-5">
                    <img
                        src={offer.image}
                        alt={offer.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <span className="text-gray-500 text-base font-medium col-span-2">
                        {offer.name}
                    </span>
                </div>
            </div>
            <span className="text-gray-500 text-sm font-medium col-span-2">
                ${offer.payout.toFixed(2)}
            </span>
            <span className="text-gray-500 text-sm font-medium col-span-2">
                ${offer.revenue.toFixed(2)}
            </span>
            <span className="max-w-max flex flex-row items-center gap-1 col-span-2">
                {offer.countries.map((country, index) => {
                    return (
                        index < 4 && (
                            <img
                                key={index}
                                className="w-5 h-5 rounded-full"
                                src={`https://hatscripts.github.io/circle-flags/flags/${country.toLowerCase()}.svg`}
                                alt={country}
                            />
                        )
                    );
                })}
            </span>
            <span className="max-w-max flex flex-row items-center gap-1 col-span-2">
                {offer.platforms.map((platform, index) => {
                    return (
                        <span key={index} className="text-gray-400">
                            {platform == "Android" ? (
                                <AiFillAndroid />
                            ) : platform == "IOS" ? (
                                <FaApple />
                            ) : (
                                <FaDesktop />
                            )}
                        </span>
                    );
                })}
            </span>
        </div>
    );
};

export default OfferCard;
