import React, { useRef, useEffect } from "react";

function History() {
    const status="vacated";
    const date = new Date();

    return (
        <div className="bg-slate-300 font-[poppins] min-h-screen w-full py-20 px-5 md:pl-52">
            <div className='flex items-center justify-start'>
                <div className="flex items-center justify-center flex-col bg-bg rounded-lg p-5 mx-0 md:ml-5 w-full xl:w-[67rem]">
                    <div className="flex items-center justify-start w-full pb-5">
                        <p className="font-semibold text-xl text-primary">You Booking History</p>
                    </div>
                    <div
                        className="overflow-x-auto w-full p-5 pb-3 py-5 bg-bg border border-slate-300 rounded-lg"
                        // style={{boxShadow:"0px 0px 20px rgba(0,0,0,0.3)"}}
                    >
                        <table className={`${window.innerWidth>540?"w-full":"w-[30rem]"} sm:w-full h-max border-none`}>
                            <thead className="border-none">
                                <tr className="border-none">
                                    <td className="text-start pb-3">
                                        <div className="border-b border-secondary pb-3 text-secondary font-semibold">
                                            Date
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
                                            Status
                                        </div>
                                    </td>
                                    <td className="text-start pb-3">
                                        <div className="border-b border-secondary pb-3 text-secondary font-semibold">
                                            Amount
                                        </div>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="">
                                    <td className="text-start py-2">{date.toLocaleDateString()}</td>
                                    <td className="text-start py-2">Online</td>
                                    <td className="text-start py-2">8hrs</td>
                                    <td className={`text-start py-2 ${status && "text-green-500"}`}>Vacated</td>
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
                                </tr>
                                <tr className="">
                                    <td className="text-start py-2">{date.toLocaleDateString()}</td>
                                    <td className="text-start py-2">Online</td>
                                    <td className="text-start py-2">8hrs</td>
                                    <td className={`text-start py-2 ${status && "text-green-500"}`}>Vacated</td>
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
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="pt-5 flex w-full items-start justify-center flex-col">
                        <p className="text-primary font-semibold">Note :</p>
                        <div className="flex items-start justify-start sm:justify-start ml-10 flex-wrap gap-5 sm:gap-10 w-[90%]">
                            <div className="flex items-start justify-center flex-col">
                                <p className="text-secondary font-semibold">Payment - </p>
                                <ul className="list-disc">
                                    <li className="text-sm">Online</li>
                                    <li className="text-sm">Offline</li>
                                </ul>
                            </div>
                            <div className="flex items-start justify-center flex-col">
                                <p className="text-secondary font-semibold">Duration - </p>
                                <ul className="list-disc">
                                    <li className="text-sm">8hrs</li>
                                    <li className="text-sm">12hrs</li>
                                    <li className="text-sm">24hrs</li>
                                </ul>
                            </div>
                            <div className="flex items-start justify-center flex-col">
                                <p className="text-secondary font-semibold">Status - </p>
                                <ul className="list-disc">
                                    <li className="text-sm text-green-600">Vacated</li>
                                    <li className="text-sm text-red-500">CheckOut</li>
                                    <li className="text-sm">CheckIn</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;
