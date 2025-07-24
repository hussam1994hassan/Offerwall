import React from "react";
import AppENV from "../../constants/AppENV";
import { obsidian } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

const PostbackParameterComponent = () => {
    return (
        <div className="w-full h-auto flex flex-col gap-5">
            <div className="w-full h-auto pb-5 border-b-2 border-dotted border-slate-300 flex flex-col gap-5">
                <h1 className="text-gray-600 capitalize text-3xl font-extrabold">
                    Postback Parameter
                </h1>
                <small className="text-gray-500 text-base">
                    This page will guide you through the integration of{" "}
                    {AppENV.APP_NAME} Postback
                </small>
            </div>
            <div className="w-full h-auto flex flex-col gap-2">
                <h3 className="text-gray-600 capitalize text-xl font-bold">
                    What is a Postback?
                </h3>
                <small className="text-gray-500 text-base">
                    A postback allows you to receive notifications on your
                    server every time your account receives a conversion. This
                    is necessary for you to be able to provide your users with
                    rewards. For example, whenever you receive a conversion, you
                    may wish to be notified what the payout, user ID, and point
                    value are. We are also able to send you a postback in the
                    case that a lead may be reversed.
                </small>
            </div>
            <div className="w-full h-auto flex flex-col gap-2">
                <h3 className="text-gray-600 capitalize text-xl font-bold">
                    GET Method
                </h3>
                <SyntaxHighlighter
                    language="html"
                    style={obsidian}
                    wrapLines={true}
                    wrapLongLines={true}
                >{`http://yoururl.com/postback/?user={subId}&transaction={transId}&reward={reward}&payout={payout}&name={offerName}`}</SyntaxHighlighter>
                <small className="text-gray-500 text-base">
                    We will replace all of the macros, such as {`{subId}`}, with
                    the actual value (such as "user21".) On your server, you
                    will read the "user" GET variable to retrieve this macro's
                    value.
                </small>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-neutral-200">
                        <thead className="text-xs text-neutral-300 uppercase bg-neutral-800">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Parameter
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Example
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">{`{subId}`}</td>
                                <td className="px-6 py-4">
                                    Unique user identifier, passed by publisher.
                                </td>
                                <td className="px-6 py-4">
                                    {AppENV.APP_NAME.toLowerCase()}1
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">{`{sub1}`}</td>
                                <td className="px-6 py-4">
                                    Additional subId that can be passed in the
                                    tracking link
                                </td>
                                <td className="px-6 py-4">
                                    {AppENV.APP_NAME.toLowerCase()}
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">{`{sub2}`}</td>
                                <td className="px-6 py-4">
                                    Additional subId that can be passed in the
                                    tracking link
                                </td>
                                <td className="px-6 py-4">
                                    {AppENV.APP_NAME.toLowerCase()}1
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">{`{transId}`}</td>
                                <td className="px-6 py-4">
                                    Use this to prevent double conversions.
                                </td>
                                <td className="px-6 py-4">REV-351</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">{`{offerName}`}</td>
                                <td className="px-6 py-4">
                                    Name of the completed offer.
                                </td>
                                <td className="px-6 py-4">
                                    {AppENV.APP_NAME} - Sign up and Earn
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">{`{offerId}`}</td>
                                <td className="px-6 py-4">
                                    Id of the completed offer.
                                </td>
                                <td className="px-6 py-4">1354</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">{`{event_id}`}</td>
                                <td className="px-6 py-4">
                                    Id of the completed offer event (empty if
                                    base event).
                                </td>
                                <td className="px-6 py-4">bhf38ysj18</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">{`{event_name}`}</td>
                                <td className="px-6 py-4">
                                    Name of the completed offer event (empty if
                                    base event).
                                </td>
                                <td className="px-6 py-4">Reach lvl 1</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">{`{reward}`}</td>
                                <td className="px-6 py-4">
                                    User reward in app currency
                                </td>
                                <td className="px-6 py-4">25.0</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">{`{reward_name}`}</td>
                                <td className="px-6 py-4">
                                    The name of your in app currency.
                                </td>
                                <td className="px-6 py-4">Coins</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">{`{payout}`}</td>
                                <td className="px-6 py-4">
                                    Complete payment in USD, paid to the
                                    publisher.
                                </td>
                                <td className="px-6 py-4">0.10</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">{`{userIp}`}</td>
                                <td className="px-6 py-4">
                                    The user's IP address who completed the
                                    action.
                                </td>
                                <td className="px-6 py-4">192.168.1.1</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">{`{country}`}</td>
                                <td className="px-6 py-4">
                                    The user's country code
                                </td>
                                <td className="px-6 py-4">US</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">{`{status}`}</td>
                                <td className="px-6 py-4">
                                    Determines whether to add or subtract the
                                    amount of the reward. "1" is when the
                                    virtual currency should be added to the user
                                    and "2" when it should be subtracted.
                                </td>
                                <td className="px-6 py-4">
                                    1 (valid) / 2 (chargeback)
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">{`{debug}`}</td>
                                <td className="px-6 py-4">
                                    Check if it’s a test or a live postback
                                    call.
                                </td>
                                <td className="px-6 py-4">
                                    1 (test) / 0 (live)
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">{`{signature}`}</td>
                                <td className="px-6 py-4">
                                    MD5 hash that can be used to verify that the
                                    call has been made from our servers.
                                </td>
                                <td className="px-6 py-4">
                                    17b4e2a70d6efe9796dd4c5507a9f9ab
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-full h-auto flex flex-col gap-2">
                <h3 className="text-gray-600 capitalize text-xl font-bold">
                    POST Method
                </h3>
                <SyntaxHighlighter
                    language="html"
                    style={obsidian}
                    wrapLines={true}
                    wrapLongLines={true}
                >
                    {`http://yoururl.com/postback/${AppENV.APP_NAME.toLowerCase()}`}
                </SyntaxHighlighter>
                <small className="text-gray-500 text-base">
                    On your server, you will read the POST body variable to
                    retrieve macro's value.
                </small>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-neutral-200">
                        <thead className="text-xs text-neutral-300 uppercase bg-neutral-800">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Parameter
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Example
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">subId</td>
                                <td className="px-6 py-4">
                                    Unique user identifier, passed by publisher.
                                </td>
                                <td className="px-6 py-4">
                                    {AppENV.APP_NAME.toLowerCase()}1
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">sub1</td>
                                <td className="px-6 py-4">
                                    Additional subId that can be passed in the
                                    tracking link
                                </td>
                                <td className="px-6 py-4">
                                    {AppENV.APP_NAME.toLowerCase()}
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">sub2</td>
                                <td className="px-6 py-4">
                                    Additional subId that can be passed in the
                                    tracking link
                                </td>
                                <td className="px-6 py-4">
                                    {AppENV.APP_NAME.toLowerCase()}1
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">transId</td>
                                <td className="px-6 py-4">
                                    Use this to prevent double conversions.
                                </td>
                                <td className="px-6 py-4">REV-351</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">offerName</td>
                                <td className="px-6 py-4">
                                    Name of the completed offer.
                                </td>
                                <td className="px-6 py-4">
                                    {AppENV.APP_NAME} - Sign up and Earn
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">offerId</td>
                                <td className="px-6 py-4">
                                    Id of the completed offer.
                                </td>
                                <td className="px-6 py-4">1354</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">event_id</td>
                                <td className="px-6 py-4">
                                    Id of the completed offer event (empty if
                                    base event).
                                </td>
                                <td className="px-6 py-4">bhf38ysj18</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">event_name</td>
                                <td className="px-6 py-4">
                                    Name of the completed offer event (empty if
                                    base event).
                                </td>
                                <td className="px-6 py-4">Reach lvl 1</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">reward</td>
                                <td className="px-6 py-4">
                                    User reward in app currency
                                </td>
                                <td className="px-6 py-4">25.0</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">reward_name</td>
                                <td className="px-6 py-4">
                                    The name of your in app currency.
                                </td>
                                <td className="px-6 py-4">Coins</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">payout</td>
                                <td className="px-6 py-4">
                                    Complete payment in USD, paid to the
                                    publisher.
                                </td>
                                <td className="px-6 py-4">0.10</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">userIp</td>
                                <td className="px-6 py-4">
                                    The user's IP address who completed the
                                    action.
                                </td>
                                <td className="px-6 py-4">192.168.1.1</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">country</td>
                                <td className="px-6 py-4">
                                    The user's country code
                                </td>
                                <td className="px-6 py-4">US</td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">status</td>
                                <td className="px-6 py-4">
                                    Determines whether to add or subtract the
                                    amount of the reward. "1" is when the
                                    virtual currency should be added to the user
                                    and "2" when it should be subtracted.
                                </td>
                                <td className="px-6 py-4">
                                    1 (valid) / 2 (chargeback)
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">debug</td>
                                <td className="px-6 py-4">
                                    Check if it’s a test or a live postback
                                    call.
                                </td>
                                <td className="px-6 py-4">
                                    1 (test) / 0 (live)
                                </td>
                            </tr>
                            <tr className="bg-neutral-900 border-b border-neutral-600">
                                <td className="px-6 py-4">signature</td>
                                <td className="px-6 py-4">
                                    MD5 hash that can be used to verify that the
                                    call has been made from our servers.
                                </td>
                                <td className="px-6 py-4">
                                    17b4e2a70d6efe9796dd4c5507a9f9ab
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-auto max-w-max h-auto p-5 box-border bg-orange-100 text-orange-500 border-l-4 border-orange-500">
                🚧
                {`{reward}`} and {`{payout}`} parameters are always absolute
                values, you will need to check status parameter to see if you
                need to add or subtract that amount from your users.
            </div>
        </div>
    );
};

export default PostbackParameterComponent;
