import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const WebEvolution = () => {
    const [version, setVersion] = useState("web1");
    const navigate = useNavigate();

    const switchVersion = () => {
        setVersion((prev) =>
            prev === "web1" ? "web2" : prev === "web2" ? "web3" : "web1"
        );
    };

    const handleLogout = () => {
        localStorage.removeItem("loggedInUser"); // Remove user from local storage
        navigate("/login"); // Redirect to login page
    };

    return (
        <div className="flex flex-col items-center min-h-screen p-6 transition-all">
            {/* Header */}
            <motion.h1
                key={version}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-6 text-center"
            >
                {version === "web1" && "Welcome to Web 1.0"}
                {version === "web2" && "Welcome to Web 2.0"}
                {version === "web3" && "Welcome to Web 3.0"}
            </motion.h1>

            {/* Content */}
            <motion.div
                key={version}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`w-full max-w-3xl p-6 rounded-lg shadow-lg ${version === "web1"
                        ? "bg-gray-100 border border-gray-300"
                        : version === "web2"
                            ? "bg-white shadow-md"
                            : "bg-black text-white border border-gray-600"
                    }`}
            >
                {version === "web1" && (
                    <div className="text-gray-800 text-lg">
                        <h2 className="text-2xl font-semibold">Web 1.0: The Static Era</h2>
                        <p>
                            Simple HTML pages, static content, and basic styling. No dynamic
                            interactions, just pure information.
                        </p>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/56/Web_1.0.png"
                            alt="Web 1.0"
                            className="mt-4 border border-gray-500"
                        />
                    </div>
                )}

                {version === "web2" && (
                    <div className="text-gray-900">
                        <h2 className="text-2xl font-semibold">Web 2.0: The Social Era</h2>
                        <p>
                            Interactive websites, social media, user-generated content, and
                            dynamic UI. Welcome to the world of Web 2.0!
                        </p>
                        <div className="mt-4 flex gap-2">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded">
                                Like 👍
                            </button>
                            <button className="px-4 py-2 bg-green-500 text-white rounded">
                                Share 🔄
                            </button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded">
                                Comment 💬
                            </button>
                        </div>
                    </div>
                )}

                {version === "web3" && (
                    <div>
                        <h2 className="text-2xl font-semibold">Web 3.0: The Decentralized Era</h2>
                        <p>
                            Blockchain-powered, decentralized applications, and AI-driven
                            experiences. The future of the web!
                        </p>
                        <div className="mt-4 flex gap-2">
                            <button className="px-4 py-2 bg-purple-500 text-white rounded">
                                Connect Wallet 🔗
                            </button>
                            <button className="px-4 py-2 bg-yellow-500 text-black rounded">
                                Mint NFT 🎨
                            </button>
                        </div>
                    </div>
                )}
            </motion.div>

            {/* Toggle Button */}
            <button
                onClick={switchVersion}
                className="mt-6 px-6 py-3 text-lg font-semibold text-white rounded-full shadow-md transition-all duration-300 hover:scale-105"
                style={{
                    backgroundColor:
                        version === "web1" ? "#808080" : version === "web2" ? "#007BFF" : "#9B51E0",
                }}
            >
                Switch to {version === "web1" ? "Web 2.0" : version === "web2" ? "Web 3.0" : "Web 1.0"}
            </button>

            {/* Logout Button */}
            <button
                onClick={handleLogout}
                className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-red-500 rounded-full shadow-md transition-all duration-300 hover:bg-red-700"
            >
                Logout 🚪
            </button>
        </div>
    );
};

export default WebEvolution;
