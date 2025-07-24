import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import {
    FaDollarSign,
    FaMousePointer,
    FaExchangeAlt,
    FaWallet,
    FaArrowUp,
    FaArrowDown,
    FaEye,
    FaDownload,
} from "react-icons/fa";
import AppENV from "../../constants/AppENV";
import PagesURL from "../../constants/PagesURL";
import {
    LuBadgeDollarSign,
    LuCompass,
    LuLandmark,
    LuMousePointerClick,
} from "react-icons/lu";

const DashboardPage = () => {
    useEffect(() => {
        document.title = `${AppENV.APP_NAME} - ${PagesURL.DASHBOARD.TITLE}`;
    }, []);

    const metrics = [
        {
            title: "Revenue",
            value: "$2,580.00",
            icon: LuBadgeDollarSign,
        },
        {
            title: "Clicks",
            value: "15,847",
            icon: LuMousePointerClick,
        },
        {
            title: "Conversions",
            value: "2,341",
            icon: LuCompass,
        },
        {
            title: "Cashout",
            value: "$18,420.00",
            icon: LuLandmark,
        },
    ];

    // Chart configurations
    const revenueChartOptions = {
        chart: {
            type: "area",
            height: 350,
            toolbar: { show: false },
            fontFamily: "Inter, sans-serif",
        },
        colors: ["#3B82F6", "#10B981"],
        dataLabels: { enabled: false },
        stroke: {
            curve: "smooth",
            width: 3,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0.1,
            },
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            labels: {
                formatter: (value) => `$${value}k`,
            },
        },
        grid: {
            borderColor: "#f1f5f9",
            strokeDashArray: 5,
        },
        legend: {
            position: "top",
            horizontalAlign: "right",
        },
    };

    const revenueChartSeries = [
        {
            name: "Revenue",
            data: [31, 40, 28, 51, 42, 109, 100, 91, 70, 85, 95, 120],
        },
        {
            name: "Profit",
            data: [11, 32, 45, 32, 34, 52, 41, 60, 45, 55, 65, 80],
        },
    ];

    const conversionChartOptions = {
        chart: {
            type: "donut",
            height: 350,
            fontFamily: "Inter, sans-serif",
        },
        colors: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"],
        dataLabels: {
            enabled: true,
            formatter: (val) => `${val.toFixed(1)}%`,
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "70%",
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            label: "Total",
                            formatter: () => "100%",
                        },
                    },
                },
            },
        },
        legend: {
            position: "bottom",
            horizontalAlign: "center",
        },
        labels: ["Desktop", "Mobile", "Tablet", "Other"],
    };

    const conversionChartSeries = [45.2, 32.8, 15.4, 6.6];

    // Mock data for tables
    const transactions = [
        {
            id: "#TXN001",
            user: "John Doe",
            amount: "$1,250",
            status: "Completed",
            date: "2024-01-15",
            type: "Credit",
        },
        {
            id: "#TXN002",
            user: "Jane Smith",
            amount: "$890",
            status: "Pending",
            date: "2024-01-15",
            type: "Debit",
        },
        {
            id: "#TXN003",
            user: "Mike Johnson",
            amount: "$2,100",
            status: "Completed",
            date: "2024-01-14",
            type: "Credit",
        },
        {
            id: "#TXN004",
            user: "Sarah Wilson",
            amount: "$450",
            status: "Failed",
            date: "2024-01-14",
            type: "Debit",
        },
        {
            id: "#TXN005",
            user: "David Brown",
            amount: "$1,750",
            status: "Completed",
            date: "2024-01-13",
            type: "Credit",
        },
        {
            id: "#TXN006",
            user: "Lisa Davis",
            amount: "$320",
            status: "Completed",
            date: "2024-01-13",
            type: "Debit",
        },
        {
            id: "#TXN007",
            user: "Tom Wilson",
            amount: "$980",
            status: "Pending",
            date: "2024-01-12",
            type: "Credit",
        },
        {
            id: "#TXN008",
            user: "Emma Taylor",
            amount: "$1,500",
            status: "Completed",
            date: "2024-01-12",
            type: "Credit",
        },
        {
            id: "#TXN009",
            user: "Chris Anderson",
            amount: "$670",
            status: "Completed",
            date: "2024-01-11",
            type: "Debit",
        },
        {
            id: "#TXN010",
            user: "Amy Martinez",
            amount: "$2,300",
            status: "Completed",
            date: "2024-01-11",
            type: "Credit",
        },
    ];

    const withdrawals = [
        {
            id: "#WTH001",
            user: "John Doe",
            amount: "$1,000",
            status: "Processed",
            date: "2024-01-15",
            method: "Bank Transfer",
        },
        {
            id: "#WTH002",
            user: "Jane Smith",
            amount: "$750",
            status: "Processing",
            date: "2024-01-15",
            method: "PayPal",
        },
        {
            id: "#WTH003",
            user: "Mike Johnson",
            amount: "$1,800",
            status: "Processed",
            date: "2024-01-14",
            method: "Bank Transfer",
        },
        {
            id: "#WTH004",
            user: "Sarah Wilson",
            amount: "$350",
            status: "Rejected",
            date: "2024-01-14",
            method: "Crypto",
        },
        {
            id: "#WTH005",
            user: "David Brown",
            amount: "$1,200",
            status: "Processed",
            date: "2024-01-13",
            method: "Bank Transfer",
        },
        {
            id: "#WTH006",
            user: "Lisa Davis",
            amount: "$500",
            status: "Processed",
            date: "2024-01-13",
            method: "PayPal",
        },
        {
            id: "#WTH007",
            user: "Tom Wilson",
            amount: "$900",
            status: "Processing",
            date: "2024-01-12",
            method: "Bank Transfer",
        },
        {
            id: "#WTH008",
            user: "Emma Taylor",
            amount: "$1,300",
            status: "Processed",
            date: "2024-01-12",
            method: "Crypto",
        },
        {
            id: "#WTH009",
            user: "Chris Anderson",
            amount: "$450",
            status: "Processed",
            date: "2024-01-11",
            method: "PayPal",
        },
        {
            id: "#WTH010",
            user: "Amy Martinez",
            amount: "$2,000",
            status: "Processed",
            date: "2024-01-11",
            method: "Bank Transfer",
        },
    ];

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case "completed":
            case "processed":
                return "bg-green-100 text-green-500";
            case "pending":
            case "processing":
                return "bg-orange-100 text-orange-500";
            case "failed":
            case "rejected":
                return "bg-red-100 text-red-500";
            default:
                return "bg-gray-100 text-gray-500";
        }
    };

    return (
        <div className="w-full h-auto flex flex-col gap-10">
            <div className="w-full h-auto flex flex-row items-center justify-between">
                <h1 className="text-gray-400 capitalize text-2xl font-bold flex flex-row gap-2">
                    <PagesURL.DASHBOARD.ICON size={32} />
                    {PagesURL.DASHBOARD.TITLE}
                </h1>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {metrics.map((metric, index) => {
                    const IconComponent = metric.icon;
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 animate-fade-in"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="">
                                    <IconComponent
                                        size={32}
                                        className="text-gray-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-600 mb-1">
                                    {metric.value}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {metric.title}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Revenue Chart */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-slide-up col-span-1 lg:col-span-2">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-gray-400">
                            Revenue Overview
                        </h2>
                        <div className="flex items-center space-x-2">
                            <FaEye className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">
                                Last 12 months
                            </span>
                        </div>
                    </div>
                    <Chart
                        options={revenueChartOptions}
                        series={revenueChartSeries}
                        type="area"
                        height={350}
                    />
                </div>

                {/* Conversion Chart */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-slide-up col-span-1">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-gray-400">
                            Traffic Sources
                        </h2>
                        <div className="flex items-center space-x-2">
                            <FaDownload className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">
                                Export
                            </span>
                        </div>
                    </div>
                    <Chart
                        options={conversionChartOptions}
                        series={conversionChartSeries}
                        type="donut"
                        height={350}
                    />
                </div>
            </div>

            {/* Tables Section */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {/* Transactions Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-slide-up">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-gray-400">
                            Recent Transactions
                        </h2>
                        <button className="text-blue-600 hover:text-blue-600 text-xs">
                            View All
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-100">
                                    <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        ID
                                    </th>
                                    <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        User
                                    </th>
                                    <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Amount
                                    </th>
                                    <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {transactions.map((transaction, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <td className="py-3 px-2 text-xs text-gray-500">
                                            {transaction.id}
                                        </td>
                                        <td className="py-3 px-2 text-sm text-gray-700">
                                            {transaction.user}
                                        </td>
                                        <td
                                            className={`py-3 px-2 text-sm font-medium ${
                                                transaction.type === "Credit"
                                                    ? "text-green-500"
                                                    : "text-red-400"
                                            }`}
                                        >
                                            {transaction.type === "Credit"
                                                ? "+"
                                                : "-"}
                                            {transaction.amount}
                                        </td>
                                        <td className="py-3 px-2">
                                            <span
                                                className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                                                    transaction.status
                                                )}`}
                                            >
                                                {transaction.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-2 text-sm text-gray-600">
                                            {transaction.date}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Withdrawals Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 animate-slide-up">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-gray-400">
                            Recent Withdrawals
                        </h2>
                        <button className="text-blue-500 text-xs hover:text-blue-600">
                            View All
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-100">
                                    <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        ID
                                    </th>
                                    <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        User
                                    </th>
                                    <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Amount
                                    </th>
                                    <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Method
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {withdrawals.map((withdrawal, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <td className="py-3 px-2 text-xs text-gray-500">
                                            {withdrawal.id}
                                        </td>
                                        <td className="py-3 px-2 text-sm text-gray-700">
                                            {withdrawal.user}
                                        </td>
                                        <td className="py-3 px-2 text-sm font-medium text-red-400">
                                            -{withdrawal.amount}
                                        </td>
                                        <td className="py-3 px-2">
                                            <span
                                                className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                                                    withdrawal.status
                                                )}`}
                                            >
                                                {withdrawal.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-2 text-sm text-gray-600">
                                            {withdrawal.method}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
