import React from "react";
import AppENV from "../../constants/AppENV";
import { obsidian } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

const PostbackSecurityComponent = () => {
    const syntaxCode = `<?php
   $secret = ""; // Get your secret key from ${AppENV.APP_NAME}

   $subId = isset($_GET['subId']) ? $_GET['subId'] : null;
   $transId = isset($_GET['transId']) ? $_GET['transId'] : null;
   $reward = isset($_GET['reward']) ? $_GET['reward'] : null;
   $signature = isset($_GET['signature']) ? $_GET['signature'] : null;

   // Validate Signature
   if(md5($subId . $transId . $reward . $secret) != $signature)
   {
       echo "ERROR: Signature doesn't match";
       return;
   }

   // Further processing can be done here
   echo "Signature is valid. Process the postback.";
?>`;

    return (
        <div className="w-full h-auto flex flex-col gap-5">
            <div className="w-full h-auto pb-5 border-b-2 border-dotted border-slate-300 flex flex-col gap-5">
                <h1 className="text-gray-600 capitalize text-3xl font-extrabold">
                    Postback Security
                </h1>
                <small className="text-gray-500 text-base">
                    This page will guide you through the integration security in
                    your postback
                </small>
            </div>
            <div className="w-full h-auto flex flex-col gap-2">
                <small className="text-gray-500 text-base">
                    To make postbacks safe, you should verify the signature
                    received in the postback. This is an important feature for
                    you to make sure that the postback, which you use as a base
                    to reward your users, is coming from {AppENV.APP_NAME} and
                    is not fake. By checking the hash, you can be sure that the
                    postback was sent by us and that it is legit. The signature
                    parameter should match the MD5 of the subId transactionId
                    reward secretkey.
                </small>
                <h3 className="text-gray-600 capitalize text-xl font-bold">
                    The formula to be checked is as follows:
                </h3>
                <SyntaxHighlighter
                    language="php"
                    style={obsidian}
                    wrapLines={true}
                    wrapLongLines={true}
                >
                    {syntaxCode}
                </SyntaxHighlighter>
            </div>
            <small className="text-gray-500 text-base">
                Our servers wait for a response for a maximum time of 60 seconds
                before the timeout. In this case, postback will be marked as
                failed. Please, check if the transaction ID sent to you was
                already entered in your database, this will prevent giving twice
                the same amount of virtual currency to the user.
            </small>
            <div className="w-full h-auto flex flex-col gap-2">
                <h3 className="text-gray-600 capitalize text-xl font-bold">
                    Whitelist our IP
                </h3>
                <small className="text-gray-500 text-base">
                    We will be sending postbacks from any of the following IP
                    addresses. Please make sure they are whitelisted if needed
                    to be on your server.
                </small>
                <div className="w-auto max-w-max h-auto p-5 box-border bg-green-100 text-green-500 border-l-4 border-green-500">
                    {" "}
                    ✅ 127.0.0.1
                </div>
                <small className="text-gray-500 text-base">
                    Our servers will expect your website to respond with "ok".
                    If your postback doesn't return "ok" as a response, the
                    postback will be marked as failed (even if the postback was
                    successfully called) and you will be able to resend it
                    manually from our website.
                </small>
            </div>
        </div>
    );
};

export default PostbackSecurityComponent;
