import React, { useEffect, useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import PagesURL from "../../constants/PagesURL";
import AppENV from "../../constants/AppENV";
import PopupDialog from "../../components/PopupDialog";
import toast from "react-hot-toast";
import TermsComponent from "../../components/TermsComponent";
import PrivacyComponent from "../../components/PrivacyComponent";

const RegisterPage = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogType, setDialogType] = useState("terms"); // "terms" or "privacy"

    // Page Title
    useEffect(() => {
        document.title = `${AppENV.APP_NAME} - ${PagesURL.REGISTER.TITLE}`;
    }, []);

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [fullname, setFullName] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate login
        setTimeout(() => {
            setLoading(false);
            if (email === "admin@example.com" && password === "password") {
                toast.success("Login successful!");
            } else {
                toast.error("Invalid credentials");
            }
        }, 1200);
    };

    return (
        <>
            <PopupDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                title={
                    dialogType === "terms"
                        ? "Terms & Conditions"
                        : "Privacy Policy"
                }
            >
                {dialogType === "terms" ? (
                    <TermsComponent />
                ) : (
                    <PrivacyComponent />
                )}
            </PopupDialog>

            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
            >
                <h2 className="text-3xl font-bold text-neutral-800 mb-2 text-center">
                    Sign In
                </h2>
                <small className="text-neutral-500 text-sm mb-8 block text-center">
                    Hi, Create your account to get started 🔥
                </small>
                <div className="mb-6">
                    <span className="block text-neutral-500 mb-2 text-sm">
                        Full Name
                    </span>
                    <div className="flex items-center rounded-md px-3 py-2 box-border border-[1px] border-neutral-200">
                        <FaUser className="text-neutral-500 mr-2" />
                        <input
                            className="w-full bg-white text-neutral-800 focus:outline-none"
                            id="fullname"
                            type="text"
                            autoComplete="off"
                            placeholder="John Doe"
                            value={fullname}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            autoFocus
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <span className="block text-neutral-500 mb-2 text-sm">
                        Email
                    </span>
                    <div className="flex items-center rounded-md px-3 py-2 box-border border-[1px] border-neutral-200">
                        <FaUser className="text-neutral-500 mr-2" />
                        <input
                            className="w-full bg-white text-neutral-800 focus:outline-none"
                            id="email"
                            type="email"
                            autoComplete="off"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <span className="block text-neutral-500 mb-2 text-sm">
                        Password
                    </span>
                    <div className="flex items-center rounded-md px-3 py-2 box-border border-[1px] border-neutral-200">
                        <FaLock className="text-neutral-500 mr-2" />
                        <input
                            className="w-full bg-white text-neutral-800 focus:outline-none"
                            id="password"
                            type="password"
                            autoComplete="off"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="mb-4 text-center text-xs text-gray-500 flex flex-col gap-1">
                    <span>
                        By signing up, you agree to our{" "}
                        <button
                            type="button"
                            className="underline text-blue-600 hover:text-blue-800"
                            onClick={() => {
                                setDialogType("terms");
                                setDialogOpen(true);
                            }}
                        >
                            Terms &amp; Conditions
                        </button>{" "}
                        and{" "}
                        <button
                            type="button"
                            className="underline text-blue-600 hover:text-blue-800"
                            onClick={() => {
                                setDialogType("privacy");
                                setDialogOpen(true);
                            }}
                        >
                            Privacy Policy
                        </button>
                        .
                    </span>
                </div>
                <button
                    type="submit"
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer font-semibold rounded-lg duration-200 flex items-center justify-center"
                    disabled={loading}
                >
                    {loading ? (
                        <svg
                            className="animate-spin h-5 w-5 mr-2 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8z"
                            ></path>
                        </svg>
                    ) : null}
                    {loading ? "Signing up..." : "Sign Up"}
                </button>
            </form>
        </>
    );
};

export default RegisterPage;
