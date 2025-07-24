import React, { useEffect, useState } from "react";
import AppENV from "../../constants/AppENV";
import PagesURL from "../../constants/PagesURL";
import { useSelector } from "react-redux";
import { TbInvoice } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import PopupDialog from "../../components/PopupDialog";
import { FaCcVisa, FaCheck } from "react-icons/fa";
import { RiPaypalFill, RiBtcFill } from "react-icons/ri";
import { BsAmazon } from "react-icons/bs";
import toast from "react-hot-toast";

const PaymentsPage = () => {
    const payments = useSelector((state) => state.auth.payments);
    const paymentInfo = useSelector((state) => state.auth.paymentInfo);

    const [dialogOpen, setDialogOpen] = useState(false);
    const [paymentDetailsInfo, setPaymentDetailsInfo] = useState({
        method_type: paymentInfo?.method_type,
        biling_to: paymentInfo?.biling_to,
    });

    useEffect(() => {
        document.title = `${AppENV.APP_NAME} - ${PagesURL.PAYMENTS.TITLE}`;
    }, []);

    const selectPaymentDetails = () => setDialogOpen(true);

    const paymentMethods = [
        { id: 1, name: "PayPal", icon: <RiPaypalFill /> },
        { id: 2, name: "Visa", icon: <FaCcVisa /> },
        { id: 3, name: "Crypto", icon: <RiBtcFill /> },
        { id: 4, name: "Amazon", icon: <BsAmazon /> },
    ];

    const handleSubmit = () => {
        setDialogOpen(false);
        toast.success("Payment Details has been Updated!");
        console.log(paymentDetailsInfo);
    };

    return (
        <>
            <PopupDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                title="Select Your Payment Detials"
            >
                <div
                    onSubmit={handleSubmit}
                    className="w-full h-auto flex flex-col gap-5"
                >
                    <small className="text-gray-500 text-sm capitalize">
                        preferred method with secure transaction
                    </small>
                    <h3 className="text-indigo-500 text-xl capitalize font-medium">
                        Select Payment Method
                    </h3>
                    <div className="w-full h-auto flex flex-col gap-2">
                        {paymentMethods.map((method) => (
                            <button
                                key={method.id}
                                onClick={() =>
                                    setPaymentDetailsInfo({
                                        ...paymentDetailsInfo,
                                        method_type: method.name,
                                    })
                                }
                                className={`w-full h-auto p-2 rounded cursor-pointer box-border border-2  ${
                                    paymentDetailsInfo.method_type ===
                                    method.name
                                        ? "bg-indigo-500 text-slate-100 border-indigo-500"
                                        : "bg-slate-100 text-gray-500 border-slate-200"
                                } hover:border-indigo-600 flex flex-row items-center gap-2 justify-between`}
                            >
                                <div className="w-full h-auto flex flex-row items-center justify-between">
                                    <div className="w-auto h-auto flex flex-row items-center justify-center gap-2">
                                        {method.icon}
                                        <span className="text-sm">
                                            {method.name}
                                        </span>
                                    </div>
                                    <FaCheck
                                        className={`${
                                            paymentDetailsInfo.method_type ===
                                            method.name
                                                ? "block"
                                                : "hidden"
                                        }`}
                                    />
                                </div>
                            </button>
                        ))}
                    </div>
                    <h3 className="text-indigo-500 text-xl capitalize font-medium">
                        Biling To
                    </h3>
                    <input
                        type="text"
                        onChange={(e) =>
                            setPaymentDetailsInfo({
                                ...paymentDetailsInfo,
                                biling_to: e.target.value,
                            })
                        }
                        className="bg-white w-full h-10 rounded-md border border-gray-200 py-2 px-4 box-border"
                        name="biling_to"
                        id="biling_to"
                        placeholder="Enter Biling To"
                        defaultValue={paymentInfo?.biling_to}
                    />
                    <button
                        onClick={handleSubmit}
                        className="bg-indigo-600 text-white cursor-pointer hover:bg-indigo-500 w-full h-auto px-3 py-1 rounded"
                    >
                        Update Payment Details
                    </button>
                </div>
            </PopupDialog>
            <div className="w-full h-auto flex flex-col gap-6">
                <div className="w-full h-auto flex flex-row items-center justify-between">
                    <h1 className="text-gray-400 capitalize text-2xl font-bold flex flex-row gap-2">
                        <PagesURL.PAYMENTS.ICON size={32} />
                        {PagesURL.PAYMENTS.TITLE}
                    </h1>
                    <button
                        onClick={selectPaymentDetails}
                        className="bg-indigo-600 text-white cursor-pointer hover:bg-indigo-500 w-auto h-auto px-3 py-1 rounded flex flex-row items-center gap-2 space-x-1 shadow-md"
                    >
                        <MdOutlinePayment /> Select Payment Details
                    </button>
                </div>
                <div className="w-full h-auto min-h-32 grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-5">
                    <div className="bg-white w-full h-auto rounded-2xl shadow flex flex-col gap-2 justify-center items-start p-5 box-border">
                        <span className="text-2xl font-bold text-gray-600">
                            $1,253.00 <sub className="text-gray-400">USD</sub>
                        </span>
                        <small className="text-xs text-gray-400">
                            Main Balance
                        </small>
                    </div>
                    <div className="bg-white w-full h-auto rounded-2xl shadow flex flex-col gap-2 justify-center items-start p-5 box-border">
                        <span className="text-2xl font-bold text-gray-600">
                            $130.00 <sub className="text-gray-400">USD</sub>
                        </span>
                        <small className="text-xs text-gray-400">
                            Pending Payout
                        </small>
                    </div>
                    <div className="bg-white w-full h-auto rounded-2xl shadow flex flex-col gap-2 justify-center items-start p-5 box-border">
                        <span className="text-2xl font-bold text-gray-600">
                            $10,620.00 <sub className="text-gray-400">USD</sub>
                        </span>
                        <small className="text-xs text-gray-400">
                            Paid Out
                        </small>
                    </div>
                    <div className="bg-white w-full h-auto rounded-2xl shadow flex flex-col gap-2 justify-center items-start p-5 box-border">
                        <span className="text-2xl font-bold text-gray-600">
                            NET45
                        </span>
                        <small className="text-xs text-gray-400">
                            Payment Terms
                        </small>
                    </div>
                </div>
                <div className="bg-blue-50 w-full h-auto p-7 box-border border-2 border-blue-400 border-dotted rounded-xl flex flex-row items-start justify-center gap-5">
                    <TbInvoice size={64} className="text-blue-400" />
                    <div>
                        <h1 className="text-2xl font-bold text-gray-600">
                            Invoices
                        </h1>
                        <span className="text-sm text-gray-500">
                            in order to receive payment, please send an invoice
                            to{" "}
                            <span className="text-blue-500">
                                support@site.com
                            </span>{" "}
                            after the 15th of each month once your monthly
                            earnings are confirmed. if you need help or more
                            details on preparing the invoice, feel free to reach
                            out to our support team.
                        </span>
                    </div>
                </div>
                <div className="bg-white w-full h-auto rounded-2xl shadow flex flex-col">
                    <div className="w-full h-auto hidden md:grid grid-cols-12 gap-5 items-center border-b-2 border-gray-100 p-7 box-border">
                        <span className="text-gray-400 text-sm font-medium uppercase col-span-1">
                            ID
                        </span>
                        <span className="text-gray-400 text-sm font-medium uppercase col-span-2">
                            Method Type
                        </span>
                        <span className="text-gray-400 text-sm font-medium uppercase col-span-3">
                            Biling to
                        </span>
                        <span className="text-gray-400 text-sm font-medium uppercase col-span-2">
                            Due Date
                        </span>
                        <span className="text-gray-400 text-sm font-medium uppercase col-span-2">
                            Revenue
                        </span>
                        <span className="text-gray-400 text-sm font-medium uppercase col-span-2">
                            Status
                        </span>
                    </div>
                    <div className="w-full h-auto flex flex-col gap-5 mb-4">
                        {payments.length > 0 ? (
                            payments.map((payment, index) => (
                                <div
                                    key={index}
                                    className="w-full h-auto grid md:grid-cols-12 grid-cols-5 gap-5 p-7 box-border border-b-2 border-gray-200 border-dotted"
                                >
                                    <span className="text-gray-400 text-sm font-medium uppercase col-span-1">
                                        #{payment.id}
                                    </span>
                                    <span className="text-gray-400 text-sm font-medium uppercase col-span-2">
                                        {payment.method_type}
                                    </span>
                                    <span className="text-gray-400 text-sm font-base col-span-3 max-w-max truncate">
                                        {payment.biling_to}
                                    </span>
                                    <span className="text-gray-400 text-sm font-medium uppercase col-span-2">
                                        {payment.date}
                                    </span>
                                    <span className="text-gray-400 text-sm font-medium uppercase col-span-2">
                                        ${payment.revenue.toFixed(2)}
                                    </span>
                                    <div className="col-span-2">
                                        {payment.status == 0 ? (
                                            <small className="bg-orange-100 text-orange-500 max-w-max px-4 py-1 text-xs rounded-xl">
                                                Pending
                                            </small>
                                        ) : payment.status == 1 ? (
                                            <small className="bg-green-100 text-green-500 max-w-max px-4 py-1 text-xs rounded-xl">
                                                Approved
                                            </small>
                                        ) : (
                                            <small className="bg-red-100 text-red-500 max-w-max px-4 py-1 text-xs rounded-xl">
                                                Declined
                                            </small>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <small className="text-gray-300 w-full h-auto min-h-40 flex flex-row items-center justify-center text-4xl font-bold">
                                You have no payments!
                            </small>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentsPage;
