import React, { useEffect, useState } from "react";
import AppENV from "../../constants/AppENV";
import PagesURL from "../../constants/PagesURL";
import { useSelector } from "react-redux";
import { FaApple, FaDesktop } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";
import OfferCard from "../../components/OfferCard";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

const OffersPage = () => {
    const offers = useSelector((state) => state.auth.offers);
    const [offersData, setOffersData] = useState(offers);

    useEffect(() => {
        setOffersData(offers);
        document.title = `${AppENV.APP_NAME} - ${PagesURL.OFFERS.TITLE}`;
    }, [offers]);

    const { visibleItems, sentinelRef, hasMore } = useInfiniteScroll(
        offersData,
        15
    );

    const handleSearch = (e) => {
        const query = e.target.value.trim().toLowerCase();

        const filteredOffers = offers.filter((offer) => {
            return offer.name.toLowerCase().includes(query);
        });

        setOffersData(filteredOffers);
    };

    return (
        <div className="w-full h-auto flex flex-col gap-10">
            <div className="w-full h-auto flex flex-row items-center justify-between">
                <h1 className="text-gray-400 capitalize text-2xl font-bold flex flex-row gap-2">
                    <PagesURL.OFFERS.ICON size={32} />
                    {PagesURL.OFFERS.TITLE}
                </h1>
                <div className="w-auto h-auto flex flex-row items-center gap-2 bg-white rounded p-2 box-border border-[1px] border-gray-200">
                    <span className="text-gray-400 text-xs">Search</span>
                    <input
                        onKeyUp={(e) => handleSearch(e)}
                        type="text"
                        name="search"
                        id="search"
                        className="bg-transparent outline-none"
                    />
                </div>
            </div>
            <div className="bg-white w-full h-auto rounded-2xl shadow flex flex-col">
                <div className="w-full h-auto hidden md:grid grid-cols-12 gap-5 items-center border-b-2 border-gray-100 p-7 box-border">
                    <span className="text-gray-400 text-sm font-medium uppercase col-span-4">
                        Offer
                    </span>
                    <span className="text-gray-400 text-sm font-medium uppercase col-span-2">
                        Payout
                    </span>
                    <span className="text-gray-400 text-sm font-medium uppercase col-span-2">
                        Revenue
                    </span>
                    <span className="text-gray-400 text-sm font-medium uppercase col-span-2">
                        Country
                    </span>
                    <span className="text-gray-400 text-sm font-medium uppercase col-span-2">
                        Platform
                    </span>
                </div>
                <div className="w-full h-auto flex flex-col gap-5 mb-4">
                    {visibleItems.map((offer, index) => (
                        <OfferCard key={index} offer={offer} />
                    ))}

                    {hasMore && (
                        <div
                            ref={sentinelRef}
                            className="h-1 w-full my-4 pointer-events-none"
                        />
                    )}

                    {!hasMore && (
                        <p className="text-gray-400 my-4 p-5 box-border w-full flex justify-center items-center">
                            🚀 No More Offers.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OffersPage;
