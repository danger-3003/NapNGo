import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";

function History({ user }) {
    const location = useLocation();
    const historySection = useRef();

    console.log(location);
    useEffect(() => {
        if (location.hash === "#history" && historySection.current) {
            historySection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <div
            ref={historySection}
            className="bg-white w-full md:pl-52 py-16 font-[Poppins]"
        >
            <div className="flex items-center justify-center flex-col px-5 sm:px-10 md:px-0 md:w-full lg:w-[51rem] xl:w-[67rem]">
                <div className="flex items-center justify-start w-full md:w-[95%] lg:w-[90%] pb-5">
                    <p className="font-semibold text-2xl md:text-3xl text-primary">You Booking History</p>
                </div>
                <div
                    className="overflow-x-auto w-full sm:w-[95%] lg:w-[90%] p-5 pb-3 bg-accent rounded-lg"
                    style={{boxShadow:"0px 0px 20px rgba(0,0,0,0.3)"}}
                >
                    <table className="w-[30rem] sm:w-full h-max border-none">
                        <thead className="border-none">
                            <tr className="border-none">
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
                                <td className="text-start py-2">{user}</td>
                                <td className="text-start py-2">Online</td>
                                <td className="text-start py-2">8hrs</td>
                                <td className="text-start py-2">Vacated</td>
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
                                <td className="text-start py-2">{user}</td>
                                <td className="text-start py-2">Online</td>
                                <td className="text-start py-2">8hrs</td>
                                <td className="text-start py-2">Vacated</td>
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
                <div className="w-[95%] lg:w-[90%] pt-5 flex items-start justify-center flex-col">
                    <p className="text-primary font-semibold">Note :</p>
                    <div className="flex items-start justify-start sm:justify-end flex-wrap gap-5 sm:gap-10 w-[90%]">
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
    );
}

export default History;
