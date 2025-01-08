import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMoneyBill1,
    faCreditCard,
} from "@fortawesome/free-regular-svg-icons";
import UPI from "../../../assets/User/UPI-Color.svg";
import WebCam from "../WebCam";

function BookingForm({
    bookingDate,
    completed,
    userData,
    setUserData,
    setCompleted,
    setScreen,
}) {
    const [openWebCam, setOpenWebCam]=useState(false);

    const handleContinue = (e) => {
        e.preventDefault();
        if(userData.photo === "")
        {
            window.alert("No Profile Photo")
        }
        else{
            setScreen("payment");
            !completed.includes("bookingForm") &&
                setCompleted([...completed, "bookingForm"]);
            console.log(userData);
        }
    };
    const handleTakePhoto=()=>{
        setOpenWebCam(!openWebCam);
        console.log("Taking Photo");
    }

    return (
        <div className="font-[Poppins]">
            <p className="text-secondary font-semibold uppercase mb-5 text-2xl">Booking Form</p>
            <div>
                <div className="flex items-center justify-start">
                    <p className="text-primary">
                        Date: <span className="text-black">{bookingDate}</span>
                    </p>
                </div>
                <form onSubmit={handleContinue} className="flex items-start justify-center flex-col">
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
                                onChange={(e)=>{setUserData({...userData,age:e.target.value})}}
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
                                onChange={(e)=>{setUserData({...userData,email:e.target.value})}}
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
                                onChange={(e)=>setUserData({...userData,mobile:e.target.value})}
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
                                onChange={(e)=>setUserData({...userData,address:e.target.value})}
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
                                onChange={(e)=>setUserData({...userData,purpose:e.target.value})}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-start flex-row lg:gap-10">
                        <div className="mr-3 md:mr-5 lg:mr-10 w-full sm:max-w-60">
                            <p className="text-primary my-3">Photo</p>
                            <p className="text-red-500 text-sm">{userData.photo==="" && "No Photo"}</p>
                            <div className="bg-green-300 rounded px-4 py-1 cursor-pointer" onClick={handleTakePhoto}>Upload</div>
                            {
                                userData.photo && <img src={userData.photo} alt="" className="h-30 w-full"/>
                            }
                        </div>
                        {
                            openWebCam &&
                            <div className="fixed top-0 left-0 bg-black/40 w-full h-screen z-20 flex items-center justify-center">
                                <WebCam userData={userData} setUserData={setUserData} setOpenWebCam={setOpenWebCam} openWebCam={openWebCam}/>
                            </div>
                        }
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
                                            setUserData({...userData,aadhar:base64Image});
                                        };
                                        reader.readAsDataURL(file.slice(1));
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className="text-primary">Payment Method</p>
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
                    <div>
                        <p className="text-primary my-3">Total Amount</p>
                        <input
                            required
                            type="text"
                            placeholder="Enter Total Amount"
                            value={userData.amount}
                            className="bg-white outline-none w-full sm:max-w-60 lg:w-80 px-3 py-1 text-slate-600 rounded shadow-md shadow-black/20"
                            onChange={(e)=>setUserData({...userData,amount:e.target.value})}
                        />
                    </div>
                    <div className="mt-10 mb-5">
                        <button type="submit" className="w-min bg-green-400 text-secondary rounded-full px-5 py-1 shadow-secondary/20 shadow-md">Book</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BookingForm;
