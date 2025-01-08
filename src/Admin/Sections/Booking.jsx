import React, { useRef, useEffect, useState } from "react";
import SelectBeds from "../Components/Booking/SelectBeds";
import BookingForm from "../Components/Booking/BookingForm";
import Receipt from "../Components/Booking/Receipt";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBed,
    faFileAlt,
    faCreditCard,
    faReceipt,
} from "@fortawesome/free-solid-svg-icons";

function BookNow() {
    const date = new Date();
    // const after24hrs = new Date(date.getTime()+24*60*60*1000);
    const [bookedBedsArray, setBookedBedsArray] = useState([
        "2U",
        "1L",
        "10L",
        "6U",
        "8L",
        "22U",
        "23L",
        "24U",
        "24L",
        "51",
        "52",
        "55",
    ]);
    const [selectedBedsArray, setSelectedBedsArray] = useState([]);
    const [bookingDate, setBookingDate] = useState(date.toLocaleString());
    const [screen, setScreen] = useState("selectBeds");
    const [completed, setCompleted] = useState([]);
    const [userData, setUserData] = useState({
        name: "",
        age: "",
        email: "",
        mobile: "",
        address: "",
        purpose: "",
        photo: "",
        aadhar: "",
        payment: "",
        amount:"",
    });

    console.log(screen);

    const handleScreen = (screen) => {
        setScreen(screen);
    };

    return (
        <>
            <div className="min-h-screen bg-slate-300 px-5 md:pl-52 py-20 w-full">
                <div className="flex items-center justify-start">
                    <div className="flex items-center justify-center flex-col relative bg-bg rounded-lg w-full p-5 md:ml-5 xl:w-[67rem]">
                        <h1 className="text-2xl text-primary mb-10 font-semibold text-center">
                            Step-by-Step Booking
                        </h1>
                        <div className="w-full">
                            <div className="flex items-center justify-center">
                                <div className="w-full md:w-[90%] lg:w-[80%] h-20 flex items-center justify-center mb-10">
                                    <div className="flex justify-around items-center flex-row w-full font-[poppins]">
                                        <label
                                            htmlFor="SelectedBeds"
                                            className="flex items-center justify-center flex-col hover:cursor-pointer"
                                            onClick={() => {
                                                setCompleted([]);
                                            }}
                                        >
                                            <div
                                                className="bg-zinc-300 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 duration-500"
                                                style={{
                                                    boxShadow:
                                                        "0 0 10px 0 rgba(0,0,0,0.3)",
                                                }}
                                            >
                                                <div
                                                    className={`${
                                                        screen === "selectBeds"
                                                            ? "bg-red-500 text-accent"
                                                            : "text-secondary"
                                                    } ${
                                                        completed.includes(
                                                            "selectBeds"
                                                        )
                                                            ? "bg-green-500 text-accent"
                                                            : null
                                                    } transition-all duration-500 w-8 h-8 rounded-full flex items-center justify-center`}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faBed}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                className={`overflow-hidden hidden sm:block`}
                                            >
                                                <p
                                                    className={`${
                                                        screen === "selectBeds"
                                                            ? "h-6"
                                                            : "h-0"
                                                    } transition-all text-sm w-20 text-center mt-1 duration-500`}
                                                >
                                                    Select&nbsp;Beds
                                                </p>
                                            </div>
                                        </label>
                                        <div className="w-full h-1 bg-zinc-300 relative rounded-full">
                                            <div
                                                className={`${
                                                    completed.includes(
                                                        "selectBeds"
                                                    )
                                                        ? screen ===
                                                          "selectBeds"
                                                            ? "w-0"
                                                            : "w-full"
                                                        : "w-0"
                                                } transition-all duration-1000 ease-in-out bg-green-400 h-full rounded-full`}
                                            ></div>
                                        </div>
                                        <label
                                            htmlFor="BookingForm"
                                            className="flex items-center justify-center flex-col hover:cursor-pointer"
                                        >
                                            <div
                                                className="bg-zinc-300 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 duration-500"
                                                style={{
                                                    boxShadow:
                                                        "0 0 10px 0 rgba(0,0,0,0.3)",
                                                }}
                                            >
                                                <div
                                                    className={`${
                                                        screen === "bookingForm"
                                                            ? "bg-red-500 text-accent"
                                                            : "text-secondary"
                                                    } ${
                                                        completed.includes(
                                                            "bookingForm"
                                                        )
                                                            ? "bg-green-500 text-accent"
                                                            : null
                                                    } transition-all duration-500 w-8 h-8 rounded-full flex items-center justify-center`}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faFileAlt}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                className={`overflow-hidden hidden sm:block`}
                                            >
                                                <p
                                                    className={`${
                                                        screen === "bookingForm"
                                                            ? "h-6"
                                                            : "h-0"
                                                    } transition-all text-sm w-20 text-center mt-1 duration-500`}
                                                >
                                                    Booking
                                                </p>
                                            </div>
                                        </label>
                                        <div className="w-full h-1 bg-zinc-300 relative rounded-full">
                                            <div
                                                className={`${
                                                    completed.includes(
                                                        "bookingForm"
                                                    )
                                                        ? screen ===
                                                          "bookingForm"
                                                            ? "w-0"
                                                            : "w-full"
                                                        : "w-0"
                                                } transition-all duration-1000 ease-in-out bg-green-400 h-full rounded-full`}
                                            ></div>
                                        </div>
                                        <label
                                            htmlFor="Receipt"
                                            className="flex items-center justify-center flex-col hover:cursor-pointer"
                                        >
                                            <div
                                                className="bg-zinc-300 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 duration-500"
                                                style={{
                                                    boxShadow:
                                                        "0 0 10px 0 rgba(0,0,0,0.3)",
                                                }}
                                            >
                                                <div
                                                    className={`${
                                                        screen === "receipt"
                                                            ? "bg-red-500 text-accent"
                                                            : "text-secondary"
                                                    } ${
                                                        completed.includes(
                                                            "receipt"
                                                        )
                                                            ? "bg-green-500 text-accent"
                                                            : null
                                                    } transition-all duration-500 w-8 h-8 rounded-full flex items-center justify-center`}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faReceipt}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                className={`overflow-hidden hidden sm:block`}
                                            >
                                                <p
                                                    className={`${
                                                        screen === "receipt"
                                                            ? "h-6"
                                                            : "h-0"
                                                    } transition-all text-sm w-20 text-center mt-1 duration-500`}
                                                >
                                                    Receipt
                                                </p>
                                            </div>
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            name="screen"
                                            id="SelectedBeds"
                                            className="hidden"
                                            onClick={() => {
                                                handleScreen("selectBeds");
                                            }}
                                        />
                                        <input
                                            type="radio"
                                            disabled={
                                                completed.includes("selectBeds")
                                                    ? false
                                                    : true
                                            }
                                            name="screen"
                                            id="BookingForm"
                                            className="hidden"
                                            onClick={() => {
                                                handleScreen("bookingForm");
                                            }}
                                        />
                                        <input
                                            type="radio"
                                            disabled={
                                                completed.includes(
                                                    "bookingForm"
                                                )
                                                    ? false
                                                    : true
                                            }
                                            name="screen"
                                            id="Payment"
                                            className="hidden"
                                            onClick={() => {
                                                handleScreen("payment");
                                            }}
                                        />
                                        <input
                                            type="radio"
                                            disabled={
                                                completed.includes("payment")
                                                    ? false
                                                    : true
                                            }
                                            name="screen"
                                            id="Receipt"
                                            className="hidden"
                                            onClick={() => {
                                                handleScreen("receipt");
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                {screen === "selectBeds" && (
                                    <SelectBeds
                                        bookingDate={bookingDate}
                                        completed={completed}
                                        bookedBedsArray={bookedBedsArray}
                                        selectedBedsArray={selectedBedsArray}
                                        setSelectedBedsArray={
                                            setSelectedBedsArray
                                        }
                                        setCompleted={setCompleted}
                                        setScreen={setScreen}
                                    />
                                )}
                                {screen === "bookingForm" && (
                                    <BookingForm
                                        bookingDate={bookingDate}
                                        completed={completed}
                                        userData={userData}
                                        setUserData={setUserData}
                                        setCompleted={setCompleted}
                                        setScreen={setScreen}
                                    />
                                )}
                                {/* {screen === "payment" && <Payment />} */}
                                {screen === "receipt" && 
                                    <Receipt 
                                        bookingDate={bookingDate}
                                        completed={completed}
                                        userData={userData}
                                        selectedBedsArray={selectedBedsArray}
                                    />
                                }
                            </div>
                            {/* <Receipt /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookNow;
