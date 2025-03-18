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
        localStorage.removeItem("loggedInUser");
        navigate("/login");
    };

    return (
        <div className="relative flex flex-col items-center min-h-screen p-6 transition-all">
            {/* Logout Button - Top Right */}
            <button
                onClick={handleLogout}
                className="absolute top-4 right-6 px-5 py-2 text-white bg-red-600 rounded-full shadow-lg transition-all hover:bg-red-700 hover:scale-105"
            >
                Logout 🚪
            </button>

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

            {/* Content Box */}
            <motion.div
                key={version}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`w-full max-w-3xl p-6 rounded-xl shadow-2xl transition-all 
                ${version === "web1" ? "bg-gray-100 border border-gray-300"
                        : version === "web2" ? "bg-white shadow-md"
                            : "bg-black text-white border border-gray-600"}`}
            >
                {version === "web1" && (
                    <div className="text-gray-800 text-lg">
                        <h2 className="text-2xl font-semibold">Web 1.0: The Static Era</h2>
                        <p>Simple HTML pages, static content, and basic styling. No dynamic interactions, just pure information.</p>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/56/Web_1.0.png"
                            alt="Web 1.0"
                            className="mt-4 border border-gray-500 rounded-lg shadow-md"
                        />
                    </div>
                )}

                {version === "web2" && (
                    <div className="text-gray-900">
                        <h2 className="text-2xl font-semibold">Web 2.0: The Social Era</h2>
                        <p>Interactive websites, social media, user-generated content, and dynamic UI.</p>
                        <div className="mt-4 flex gap-3">
                            <button className="px-5 py-2 bg-blue-500 text-white rounded-full shadow-md hover:scale-105 transition">Like 👍</button>
                            <button className="px-5 py-2 bg-green-500 text-white rounded-full shadow-md hover:scale-105 transition">Share 🔄</button>
                            <button className="px-5 py-2 bg-red-500 text-white rounded-full shadow-md hover:scale-105 transition">Comment 💬</button>
                        </div>
                    </div>
                )}

                {version === "web3" && (
                    <div>
                        <h2 className="text-2xl font-semibold">Web 3.0: The Decentralized Era</h2>
                        <p>Blockchain-powered, decentralized applications, and AI-driven experiences.</p>
                        <div className="mt-4 flex gap-3">
                            <button className="px-5 py-2 bg-purple-500 text-white rounded-full shadow-md hover:scale-105 transition">Connect Wallet 🔗</button>
                            <button className="px-5 py-2 bg-yellow-500 text-black rounded-full shadow-md hover:scale-105 transition">Mint NFT 🎨</button>
                        </div>
                    </div>
                )}
            </motion.div>

            {/* Toggle Button */}
            <button
                onClick={switchVersion}
                className="mt-6 px-8 py-3 text-lg font-semibold text-white rounded-full shadow-lg transition-all duration-300 
                hover:scale-110 hover:shadow-xl"
                style={{
                    background: version === "web1"
                        ? "linear-gradient(135deg, #808080, #696969)"
                        : version === "web2"
                            ? "linear-gradient(135deg, #007BFF, #0056b3)"
                            : "linear-gradient(135deg, #9B51E0, #6A0DAD)"
                }}
            >
                Switch to {version === "web1" ? "Web 2.0" : version === "web2" ? "Web 3.0" : "Web 1.0"}
            </button>
        </div>
    );
};

export default WebEvolution;
