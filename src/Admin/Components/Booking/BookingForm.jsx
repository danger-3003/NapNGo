import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMoneyBill1,
    faCreditCard,
} from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import UPI from "../../../assets/User/UPI-Color.svg";
import WebCam from "../WebCam";
import axios from "axios";
import { compose } from "redux";

function BookingForm({
    selectedBedsArray,
    bookingDate,
    completed,
    userData,
    setUserData,
    setCompleted,
    setScreen,
}) {
    const [openWebCam, setOpenWebCam] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");
    const bookingFormRef = useRef();
    const [bookingData, setBookingData] = useState({
        bedNumbers: "",
        user: {
            name: "",
            email: "",
            mobile: "",
            purpose: "",
            // photo: "",
            paymentMethod: "",
            // startDate: "",
            // endDate: "",
        },
    });
    // console.log(bookingData);

    useEffect(() => {
        if (bookingFormRef.current) {
            bookingFormRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    useEffect(() => {
        if (bookingData.bedNumbers !== "") {
            axios
                .post("https://napngo-api.vercel.app/book/", bookingData)
                .then((res) => {
                    setScreen("receipt")
                    setSuccess(true);
                })
                .catch((err) => {
                    setMessage(err.response.data.message);
                    setError(true);
                });
        }
    }, [bookingData]);

    const calculateEndDate = (startDateString, durationInDays) => {
        const [datePart, timePart] = startDateString.split(", ");
        const [day, month, year] = datePart.split("/");
        const [hours, minutes, seconds] = timePart.split(":");

        const startDate = new Date(
            year,
            month - 1,
            day,
            hours,
            minutes,
            seconds
        );

        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + Number(durationInDays));
        return endDate.toLocaleString("en-GB");
    };

    const handleConfirm = (e) => {
        e.preventDefault();
        if (userData.photo === "") window.alert("No Profile Photo");
        else setConfirm(!confirm);
    };

    const handleContinue = () => {
        !completed.includes("bookingForm") &&
            setCompleted([...completed, "bookingForm"]);

        setBookingData({
            ...bookingData,
            bedNumbers: selectedBedsArray,
            user: {
                // ...bookingData.user,
                name: userData.name,
                email: userData.email,
                mobile: userData.mobile,
                purpose: userData.purpose,
                // photo: userData.photo,
                paymentMethod: userData.payment,
                // startDate: String(bookingDate),
                // endDate: String(calculateEndDate(bookingDate, userData.days)),
            },
        });
    };

    const handleTakePhoto = () => {
        setOpenWebCam(!openWebCam);
        console.log("Taking Photo");
    };

    return (
        <div className="font-[Poppins]" ref={bookingFormRef}>
            <p className="text-secondary font-semibold uppercase mb-5 text-2xl">
                Booking Form
            </p>
            <div>
                <div className="flex items-center justify-start">
                    <p className="text-primary">
                        Date: <span className="text-black">{bookingDate}</span>
                    </p>
                </div>
                <form
                    onSubmit={handleConfirm}
                    className="flex items-start justify-center flex-col"
                >
                    <div className="flex items-center justify-start flex-row flex-wrap lg:gap-10">
                        <div className="mr-3 md:mr-5 lg:mr-10">
                            <p className="text-primary my-3">Name</p>
                            <input
                                required
                                type="text"
                                value={userData.name}
                                placeholder="Enter Customer Name"
                                className="bg-white outline-none w-full sm:max-w-60 lg:w-80 px-3 py-1 text-slate-600 rounded shadow-md shadow-black/20"
                                onChange={(e) => {
                                    setUserData({
                                        ...userData,
                                        name: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="mr-0">
                            <p className="text-primary my-3">Age</p>
                            <input
                                required
                                type="text"
                                value={userData.age}
                                placeholder="Enter Customer Age"
                                className="bg-white outline-none w-full sm:max-w-60 lg:w-80 px-3 py-1 text-slate-600 rounded shadow-md shadow-black/20"
                                onChange={(e) => {
                                    setUserData({
                                        ...userData,
                                        age: e.target.value,
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-start flex-row flex-wrap lg:gap-10">
                        <div className="mr-3 md:mr-5 lg:mr-10">
                            <p className="text-primary my-3">Email</p>
                            <input
                                type="email"
                                value={userData.email}
                                placeholder="Enter Customer Email"
                                className="bg-white outline-none w-full sm:max-w-60 lg:w-80 px-3 py-1 text-slate-600 rounded shadow-md shadow-black/20"
                                onChange={(e) => {
                                    setUserData({
                                        ...userData,
                                        email: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="mr-0">
                            <p className="text-primary my-3">Mobile Number</p>
                            <input
                                required
                                type="text"
                                value={userData.mobile}
                                placeholder="Enter Customer Mobile Number"
                                maxLength={14}
                                minLength={10}
                                className="bg-white outline-none w-full sm:max-w-60 lg:w-80 px-3 py-1 text-slate-600 rounded shadow-md shadow-black/20"
                                onChange={(e) =>
                                    setUserData({
                                        ...userData,
                                        mobile: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-start flex-row flex-wrap lg:gap-10">
                        <div className="mr-3 md:mr-5 lg:mr-10">
                            <p className="text-primary my-3">Address</p>
                            <input
                                required
                                type="text"
                                value={userData.address}
                                placeholder="Enter Customer Address"
                                className="bg-white outline-none w-full sm:max-w-60 lg:w-80 px-3 py-1 text-slate-600 rounded shadow-md shadow-black/20"
                                onChange={(e) =>
                                    setUserData({
                                        ...userData,
                                        address: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="mr-0">
                            <p className="text-primary my-3">
                                Purpose of Visit
                            </p>
                            <input
                                required
                                type="text"
                                value={userData.purpose}
                                placeholder="Eg: 'Tourisim'"
                                className="bg-white outline-none w-full sm:max-w-60 lg:w-80 px-3 py-1 text-slate-600 rounded shadow-md shadow-black/20"
                                onChange={(e) =>
                                    setUserData({
                                        ...userData,
                                        purpose: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-start flex-row lg:gap-10">
                        <div className="mr-3 md:mr-5 lg:mr-10 w-full sm:max-w-60">
                            <p className="text-primary my-3">Photo</p>
                            <p className="text-red-500 text-sm">
                                {userData.photo === "" && "No Photo"}
                            </p>
                            <div
                                className="bg-green-300 rounded px-4 py-1 cursor-pointer"
                                onClick={handleTakePhoto}
                            >
                                Upload
                            </div>
                            {userData.photo && (
                                <img
                                    src={userData.photo}
                                    alt=""
                                    className="h-30 w-full"
                                />
                            )}
                        </div>
                        {openWebCam && (
                            <div className="fixed top-0 left-0 bg-black/50 w-full h-screen z-20 flex items-center justify-center">
                                <WebCam
                                    userData={userData}
                                    setUserData={setUserData}
                                    setOpenWebCam={setOpenWebCam}
                                    openWebCam={openWebCam}
                                />
                            </div>
                        )}
                        <div className="mr-0 w-full sm:max-w-60">
                            <p className="text-primary my-3">Aadhar</p>
                            <input
                                required
                                type="file"
                                name="Aadhar Front"
                                accept="image/*"
                                className="w-40 md:w-60 flex items-start flex-col"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onload = (event) => {
                                            const base64Image =
                                                event.target.result;
                                            // const base64BitData =
                                            //     base64Image.split(",")[1];
                                            setUserData({
                                                ...userData,
                                                aadhar: base64Image,
                                            });
                                        };
                                        reader.readAsDataURL(file.slice(1));
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className="text-primary">
                            Payment Method:{" "}
                            <span className="text-secondary">
                                {userData.payment}
                            </span>
                        </p>
                        <div className="flex items-center justify-start gap-5 flex-wrap my-3">
                            <div
                                className="w-20 h-10 p-2 bg-white rounded-lg cursor-pointer"
                                style={{
                                    boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                                }}
                                onClick={() => {
                                    setUserData({
                                        ...userData,
                                        payment: "UPI",
                                    });
                                }}
                            >
                                <img src={UPI} alt="UPI Color" />
                            </div>
                            <div
                                className="w-20 h-10 p-2 flex items-center justify-center flex-col cursor-pointer rounded-lg bg-white"
                                style={{
                                    boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                                }}
                                onClick={() => {
                                    setUserData({
                                        ...userData,
                                        payment: "Cash",
                                    });
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faMoneyBill1}
                                    className="text-xl text-secondary"
                                />
                                <p className="text-[0.7rem]">Cash</p>
                            </div>
                            <div
                                className="w-20 h-10 p-2 flex items-center justify-center flex-col cursor-pointer rounded-lg bg-white"
                                style={{
                                    boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                                }}
                                onClick={() => {
                                    setUserData({
                                        ...userData,
                                        payment: "Card",
                                    });
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faCreditCard}
                                    className="text-xl text-secondary"
                                />
                                <p className="text-[0.7rem]">Card</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-start flex-row flex-wrap lg:gap-10">
                        <div className="mr-3 md:mr-5 lg:mr-10">
                            <p className="text-primary my-3">No. of Days.</p>
                            <input
                                required
                                type="number"
                                value={userData.days}
                                placeholder="Enter number of Days"
                                className="bg-white outline-none w-full sm:max-w-60 lg:w-80 px-3 py-1 text-slate-600 rounded shadow-md shadow-black/20"
                                onChange={(e) =>
                                    setUserData({
                                        ...userData,
                                        days: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="mr-0">
                            <p className="text-primary my-3">Total Amount</p>
                            <input
                                required
                                type="text"
                                value={userData.amount}
                                placeholder="Total Amount"
                                className="bg-white outline-none w-full sm:max-w-60 lg:w-80 px-3 py-1 text-slate-600 rounded shadow-md shadow-black/20"
                                onChange={(e) =>
                                    setUserData({
                                        ...userData,
                                        amount: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="mt-10 mb-5">
                        <button
                            type="submit"
                            className="w-min bg-green-400 text-secondary rounded-full px-5 py-1 shadow-secondary/20 shadow-md"
                        >
                            Book
                        </button>
                    </div>
                </form>
            </div>
            {confirm && (
                <div className="fixed bg-black/50 h-screen w-screen flex items-center justify-center left-0 top-0 z-30">
                    <div className="bg-accent relative rounded-xl flex items-center justify-center flex-col w-[90vw] sm:w-72 md:w-96 shadow-lg shadow-black/20">
                        <div
                            className="absolute top-0 right-0 bg-accent hover:cursor-pointer h-5 w-5 flex items-center justify-center rounded-full shadow-md shadow-black/30"
                            onClick={handleConfirm}
                        >
                            <FontAwesomeIcon
                                icon={faPlus}
                                className="rotate-45"
                            />
                        </div>
                        <div className="bg-primary w-full h-20 rounded-t-xl flex items-center justify-center">
                            <p className="font-semibold text-2xl text-accent">
                                Confirm Booking
                            </p>
                        </div>
                        <div className=" px-2 py-5 sm:p-5 text-slate-700">
                            <p className="text-lg text-center">
                                Beds:{" "}
                                {selectedBedsArray.map((bedNumbers, key) => {
                                    return (
                                        // <>
                                        <span
                                            key={key}
                                            className="text-black font-normal"
                                        >
                                            {bedNumbers}
                                            {selectedBedsArray.length < 1
                                                ? null
                                                : key ===
                                                  selectedBedsArray.length - 1
                                                ? null
                                                : ", "}
                                        </span>
                                        // </>
                                    );
                                })}
                            </p>
                            <p className="text-lg text-center">
                                Payment Mode:{" "}
                                <span className="text-black">
                                    {userData.payment}
                                </span>
                            </p>
                            <p className="text-lg text-center">
                                Total Amount:{" "}
                                <span className="text-black">
                                    {userData.amount}
                                </span>
                            </p>
                        </div>
                        <p>{message}</p>
                        <button
                            className={`mb-5 w-min ${success?"bg-green-500 text-accent rounded-sm":error?"bg-red-500 rounded-sm text-accent":"bg-green-500 rounded-full text-secondary"} px-4 py-1 shadow-secondary/20 shadow-md`}
                            onClick={handleContinue}
                        >
                            {success?"Done":error?"Error":"Confirm"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BookingForm;
