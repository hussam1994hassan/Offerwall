import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/reducers/adminSlice";
import PagesURL from "../../constants/PagesURL";
import AppENV from "../../constants/AppENV";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import UserCard from "../../components/admin/UserCard";

const AUsersPage = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.admin.users);
    const [usersData, setUsersData] = useState(users);

    const { visibleItems, sentinelRef, hasMore } = useInfiniteScroll(
        usersData,
        15
    );

    useEffect(() => {
        document.title = `${AppENV.APP_NAME} - Admin | ${PagesURL.ADMIN_USERS.TITLE}`;
    }, []);

    useEffect(() => {
        dispatch(getUsers());
        setUsersData(users);
    }, [dispatch, users]);

    const handleSelectStatus = (e) => {
        const status = e.target.value == "active" ? true : false;
        const filteredUsers = users.filter((user) => user.status === status);
        setUsersData(filteredUsers);
    };

    return (
        <div className="w-full h-auto flex flex-col gap-10">
            <div className="w-full h-auto flex flex-row items-center justify-between">
                <h1 className="text-gray-400 capitalize text-2xl font-bold flex flex-row gap-2">
                    <PagesURL.ADMIN_USERS.ICON size={32} />
                    {PagesURL.ADMIN_USERS.TITLE}
                </h1>
                <select
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-auto px-4 py-2 box-border"
                    onChange={handleSelectStatus}
                >
                    <option value="active">✅ Active</option>
                    <option value="banned">❌ Banned</option>
                </select>
            </div>
            <div className="bg-white w-full h-auto rounded-2xl shadow flex flex-col">
                <div className="w-full h-auto hidden md:grid grid-cols-12 gap-5 items-center border-b-2 border-gray-100 p-7 box-border">
                    <span className="text-gray-400 text-sm font-medium col-span-3 uppercase">
                        User
                    </span>
                    <span className="text-gray-400 text-sm font-medium col-span-3 uppercase">
                        Email
                    </span>
                    <span className="text-gray-400 text-sm font-medium col-span-2 uppercase">
                        Country
                    </span>
                    <span className="text-gray-400 text-sm font-medium col-span-1 uppercase">
                        Status
                    </span>
                    <span className="text-gray-400 text-sm font-medium col-span-2 uppercase">
                        Balance
                    </span>
                    <span className="text-gray-400 text-sm font-medium col-span-1 uppercase">
                        Action
                    </span>
                </div>
                <div className="w-full h-auto flex flex-col gap-5 mb-4">
                    {visibleItems.map((user, index) => (
                        <UserCard key={index} user={user} />
                    ))}

                    {hasMore && (
                        <div
                            ref={sentinelRef}
                            className="h-1 w-full my-4 pointer-events-none"
                        />
                    )}

                    {!hasMore && (
                        <p className="text-gray-400 my-4 p-5 box-border w-full flex justify-center items-center">
                            ✌️ No More Users.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AUsersPage;
