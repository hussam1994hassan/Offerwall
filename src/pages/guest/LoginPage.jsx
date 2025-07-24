import React, { useEffect } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import PagesURL from "../../constants/PagesURL";
import AppENV from "../../constants/AppENV";
import { useDispatch } from "react-redux";
import { login } from "../../redux/store";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

const LoginPage = () => {
    // Page Title
    useEffect(() => {
        document.title = `${AppENV.APP_NAME} - ${PagesURL.LOGIN.TITLE}`;
    }, []);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const { email, password } = Object.fromEntries(form.entries());

        if (email == "admin@example.com" && password == "Pass@123") {
            dispatch(login({ email, password }));
            navigate(PagesURL.DASHBOARD.URL);
            toast.success("Login successful!");
        } else {
            toast.error("Invalid credentials");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-md shadow-md w-full max-w-md"
        >
            <h2 className="text-3xl font-bold text-neutral-800 mb-2 text-center">
                Sign In
            </h2>
            <small className="text-neutral-500 text-sm mb-8 block text-center">
                Hi, Welcome back 👋
            </small>
            <div className="mb-6">
                <span className="block text-neutral-500 mb-2 text-sm">
                    Email
                </span>
                <div className="flex items-center rounded-md px-3 py-2 box-border border-[1px] border-neutral-200">
                    <FaUser className="text-neutral-500 mr-2" />
                    <input
                        className="w-full bg-white text-neutral-800 focus:outline-none"
                        type="email"
                        name="email"
                        autoComplete="off"
                        placeholder="email@example.com"
                        defaultValue="admin@example.com"
                        required
                        autoFocus
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
                        type="password"
                        name="password"
                        autoComplete="off"
                        placeholder="password"
                        defaultValue="Pass@123"
                        required
                    />
                </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="remember"
                        id="remember"
                        autoComplete="off"
                        className="peer accent-indigo-600 w-5 h-5 rounded border-2 border-neutral-300 focus:ring-2 focus:ring-indigo-400 duration-200"
                    />
                    <span className="ml-2 text-neutral-600 select-none cursor-pointer peer-checked:text-indigo-600 font-medium duration-200">
                        Remember Me
                    </span>
                </div>
                <a href="#" className="text-indigo-400 hover:underline text-sm">
                    Forgot password?
                </a>
            </div>
            <button
                type="submit"
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer font-semibold rounded-lg duration-200 flex items-center justify-center mt-4"
            >
                Sign In
            </button>
            <div className="mt-6 text-center text-neutral-500">
                Not registered yet?{" "}
                <Link
                    to={PagesURL.REGISTER.URL}
                    className="text-indigo-400 hover:underline text-sm"
                >
                    Create an account
                </Link>
            </div>
        </form>
    );
};

export default LoginPage;
