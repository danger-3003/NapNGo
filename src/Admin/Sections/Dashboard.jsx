import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBed,
    faUserCheck,
    faSignOut,
    faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
    const [showCheckOut, setShowCheckOut] = useState(false);
    const date = new Date();
    return (
        <div className="bg-slate-300 font-[poppins] min-h-screen w-full py-20 px-5 md:pl-52">
            <div className="flex items-center justify-start">
                <div className="bg-bg w-full flex items-start justify-center flex-col mx-0 md:ml-5 p-5 rounded-lg xl:w-[67rem]">
                    {/* Home Section */}
                    <div className="relative rounded-lg border mt-5 mb-2.5 border-slate-300 px-2 sm:px-5 py-5 w-full flex items-start sm:items-center justify-center flex-col">
                        <div className="flex items-start justify-between w-full">
                            <h1 className="font-semibold text-lg text-primary mb-4">
                                Dashboard
                            </h1>
                        </div>
                        <div className="flex items-center justify-center gap-5 flex-col">
                            <div className="flex items-center justify-center flex-wrap gap-5">
                                <div
                                    className="flex items-center justify-center flex-col relative overflow-hidden bg-slate-200 w-48 sm:w-60 md:w-52 lg:w-60 p-5 rounded-lg my-2"
                                    style={{
                                        boxShadow:
                                            "0px 0px 10px rgba(0,0,0,0.3)",
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={faBed}
                                        className="absolute text-slate-300 text-5xl -right-3 bottom-0"
                                    />
                                    <div className="relative flex items-center justify-center flex-col">
                                        <p className="font-semibold text-base text-center sm:text-lg text-slate-800">
                                            Total Beds
                                        </p>
                                        <p className="mt-3">103</p>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-center flex-col relative overflow-hidden bg-green-400 w-48 sm:w-60 md:w-52 lg:w-60 p-5 rounded-lg my-2"
                                    style={{
                                        boxShadow:
                                            "0px 0px 10px rgba(0,0,0,0.3)",
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={faBed}
                                        className="absolute text-green-300 text-5xl -right-3 bottom-0"
                                    />
                                    <div className="relative flex items-center justify-center flex-col">
                                        <p className="font-semibold text-base text-center sm:text-lg text-green-900">
                                            Available Beds
                                        </p>
                                        <p className="mt-3">from API</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center flex-wrap gap-5">
                                <div
                                    className="flex items-center justify-center flex-col relative overflow-hidden bg-red-400 w-48 sm:w-60 md:w-52 lg:w-60 p-5 rounded-lg my-2"
                                    style={{
                                        boxShadow:
                                            "0px 0px 10px rgba(0,0,0,0.3)",
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={faUserCheck}
                                        className="absolute text-red-300 text-5xl -right-3 bottom-0"
                                    />
                                    <div className="relative flex items-center justify-center flex-col">
                                        <p className="font-semibold text-base text-center sm:text-lg text-red-800">
                                            Occupied Beds
                                        </p>
                                        <p className="mt-3">from API</p>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-center flex-col relative overflow-hidden border border-secondary w-48 sm:w-60 md:w-52 lg:w-60 p-5 rounded-lg my-2"
                                    style={{
                                        boxShadow:
                                            "0px 0px 10px rgba(0,0,0,0.3)",
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={faSignOut}
                                        className="absolute text-gray-300 text-5xl -right-3 bottom-0"
                                    />
                                    <div className="relative flex items-center justify-center flex-col">
                                        <p className="font-semibold text-base text-center sm:text-lg">
                                            Checkout Beds
                                        </p>
                                        <p className="mt-3">from API</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CheckOut Section */}
                    <div className="border rounded-lg border-slate-300 p-5 py-8 sm:py-5 my-2.5 w-full">
                        <div
                            className="flex items-start justify-between w-full"
                            onClick={() => {
                                setShowCheckOut(!showCheckOut);
                            }}
                        >
                            <h1 className="font-semibold text-lg text-primary">
                                Check Out
                            </h1>
                            <div className="group shadow-md shadow-black/30 w-max h-5 rounded-full">
                                <FontAwesomeIcon
                                    icon={faChevronCircleUp}
                                    className={`text-primary ${
                                        showCheckOut ? "rotate-0" : "rotate-180"
                                    } transition-all duration-500`}
                                />
                            </div>
                        </div>
                        {
                            showCheckOut &&
                            <div className="mt-5">
                                <div
                                    className="overflow-x-scroll lg:overflow-x-auto w-full p-5 pb-3 py-5 bg-bg border border-slate-300 rounded-lg"
                                    // style={{boxShadow:"0px 0px 20px rgba(0,0,0,0.3)"}}
                                >
                                    <table
                                        className={`${
                                            window.innerWidth > 540
                                                ? "w-full"
                                                : "w-[30rem]"
                                        } w-[45rem] lg:w-full h-max border-none`}
                                    >
                                        <thead className="border-none">
                                            <tr className="border-none">
                                                <td className="text-start pb-3">
                                                    <div className="border-b border-secondary pb-3 text-secondary font-semibold">
                                                        Date
                                                    </div>
                                                </td>
                                                <td className="text-start pb-3">
                                                    <div className="border-b border-secondary pb-3 text-secondary font-semibold">
                                                        Name
                                                    </div>
                                                </td>
                                                <td className="text-start pb-3">
                                                    <div className="border-b border-secondary pb-3 text-secondary font-semibold">
                                                        Payment
                                                    </div>
                                                </td>
                                                <td className="text-start pb-3">
                                                    <div className="border-b border-secondary pb-3 text-secondary font-semibold">
                                                        Duration
                                                    </div>
                                                </td>
                                                <td className="text-start pb-3">
                                                    <div className="border-b border-secondary pb-3 text-secondary font-semibold">
                                                        Amount
                                                    </div>
                                                </td>
                                                <td className="text-start pb-3">
                                                    <div className="border-b border-secondary pb-3 text-secondary font-semibold">
                                                        Action
                                                    </div>
                                                </td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="">
                                                <td className="text-start py-2">
                                                    {date.toLocaleDateString()}
                                                </td>
                                                <td className="text-start py-2">
                                                    Person Name
                                                </td>
                                                <td className="text-start py-2">
                                                    Cash
                                                </td>
                                                <td className="text-start py-2">
                                                    1 Day
                                                </td>
                                                <td className="text-start py-2 flex items-center justify-start flex-row">
                                                    <svg
                                                        viewBox="0 0 24.00 24.00"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-5 h-5"
                                                    >
                                                        <g id="SVGRepo_bgCarrier"></g>
                                                        <g id="SVGRepo_tracerCarrier"></g>
                                                        <g id="SVGRepo_iconCarrier">
                                                            {" "}
                                                            <path
                                                                d="M6 4H10.5M10.5 4C12.9853 4 15 6.01472 15 8.5C15 10.9853 12.9853 13 10.5 13H6L13 20M10.5 4H18M6 8.5H18"
                                                                stroke="#0e3746"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            ></path>{" "}
                                                        </g>
                                                    </svg>
                                                    200
                                                </td>
                                                <td className="text-start py-2">
                                                    <div className="bg-red-600 w-min px-2 py-0.5 rounded text-sm text-accent cursor-pointer">
                                                        Check&nbsp;Out
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="">
                                                <td className="text-start py-2">
                                                    {date.toLocaleDateString()}
                                                </td>
                                                <td className="text-start py-2">
                                                    Person Name
                                                </td>
                                                <td className="text-start py-2">
                                                    UPI
                                                </td>
                                                <td className="text-start py-2">
                                                    1 Day
                                                </td>
                                                <td className="text-start py-2 flex items-center justify-start flex-row">
                                                    <svg
                                                        viewBox="0 0 24.00 24.00"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-5 h-5"
                                                    >
                                                        <g id="SVGRepo_bgCarrier"></g>
                                                        <g id="SVGRepo_tracerCarrier"></g>
                                                        <g id="SVGRepo_iconCarrier">
                                                            {" "}
                                                            <path
                                                                d="M6 4H10.5M10.5 4C12.9853 4 15 6.01472 15 8.5C15 10.9853 12.9853 13 10.5 13H6L13 20M10.5 4H18M6 8.5H18"
                                                                stroke="#0e3746"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            ></path>{" "}
                                                        </g>
                                                    </svg>
                                                    200
                                                </td>
                                                <td className="text-start py-2">
                                                    <div className="bg-red-600 w-min px-2 py-0.5 rounded text-sm text-accent cursor-pointer">
                                                        Check&nbsp;Out
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        }
                    </div>
                    {/* <div className="border relative rounded-lg border-slate-300 p-5 py-8 sm:py-5 my-2.5 w-full">
                        <h1 className="text-center sm:text-left font-semibold text-primary text-lg">
                            Address
                        </h1>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
