import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

import ProfileImage from "../../assets/User/Profile.jpg";

function Profile() {
    const handleEditProfile = () => {
        console.log("Edit Profile");
    };

    return (
        <div className="bg-slate-300 font-[poppins] min-h-screen w-full py-20 px-5 md:pl-52">
            <div className="flex items-center justify-start">
                <div className="bg-bg w-full flex items-start justify-center flex-col mx-0 md:ml-5 p-5 rounded-lg xl:w-[67rem]">
                    <h1 className="font-semibold text-lg text-primary">
                        My Profile
                    </h1>
                    <div className="relative rounded-lg border mt-5 mb-2.5 border-slate-300 px-2 sm:px-5 md:px-10 py-5 w-full flex items-start sm:items-center justify-between flex-row">
                        <div className="flex items-center justify-center sm:justify-start gap-5 mt-5 sm:mt-0 flex-wrap sm:flex-nowrap sm:flex-row">
                            <div>
                                <img
                                    src={ProfileImage}
                                    alt="Demo Image"
                                    className="rounded-full h-20 w-20"
                                />
                            </div>
                            <div className="flex items-center sm:items-start justify-center flex-col">
                                <p className="font-semibold text-center text-lg">
                                    {"<User Name>"}
                                </p>
                                <p className="text-center">{"<User Email>"}</p>
                            </div>
                        </div>
                        <div
                            className="absolute sm:relative bg-bg right-2 top-2 sm:top-0 sm:right-0 flex items-center justify-center gap-3 flex-row text-slate-500 rounded-full border px-3 py-0.5 border-slate-300 cursor-pointer"
                            onClick={handleEditProfile}
                        >
                            Edit
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                className="text-sm"
                            />
                        </div>
                    </div>
                    <div className="border rounded-lg border-slate-300 p-5 py-8 sm:py-5 my-2.5 w-full">
                        <h1 className="text-center sm:text-left font-semibold text-primary text-lg">
                            Personal Information
                        </h1>
                        <div className="flex items-center justify-start flex-row">
                            <div className="w-60">
                                <div className="my-2 sm:my-4">
                                    <p className="text-slate-600 mb-1">Name:</p>
                                    <p className="text-[0.9rem]">
                                        {"<User Name>"}
                                    </p>
                                </div>
                                <div className="my-2 sm:my-4">
                                    <p className="text-slate-600 mb-1">
                                        Email:
                                    </p>
                                    <p className="text-[0.9rem]">
                                        {"<User Email>"}
                                    </p>
                                </div>
                                <div className="mt-2 sm:mt-4">
                                    <p className="text-slate-600 mb-1">
                                        Mobile:
                                    </p>
                                    <p className="text-[0.9rem]">
                                        {"+91 12345 67890"}
                                    </p>
                                </div>
                            </div>
                            {/* <div className='w-60'>
                <div className='my-2 sm:my-4'>
                  <p className='text-slate-600 mb-1'>Name:</p>
                  <p className='text-[0.9rem]'>{"<User Name>"}</p>
                </div>
                <div className='my-2 sm:my-4'>
                  <p className='text-slate-600 mb-1'>Email:</p>
                  <p className='text-[0.9rem]'>{"<User Email>"}</p>
                </div>
              </div> */}
                        </div>
                    </div>
                    {/* <div className="border relative rounded-lg border-slate-300 p-5 py-8 sm:py-5 my-2.5 w-full">
                        <h1 className="text-center sm:text-left font-semibold text-primary text-lg">
                            Address
                        </h1>
                        <div
                            className="absolute bg-bg right-2 top-2 sm:right-5 sm:top-5 flex items-center justify-center gap-3 flex-row text-slate-500 rounded-full border w-max px-3 py-0.5 border-slate-300 cursor-pointer"
                            onClick={handleEditProfile}
                        >
                            Edit
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                className="text-sm"
                            />
                        </div>
                        <div className="flex items-start justify-center flex-col">
                            <div className=" flex items-center justify-start flex-wrap">
                                <div className="my-2 sm:my-4 w-52 sm:w-60">
                                    <p className="text-slate-600 mb-1">
                                        Country
                                    </p>
                                    <p className="text-[0.9rem]">
                                        {"<User Country>"}
                                    </p>
                                </div>
                                <div className="my-2 sm:my-4 w-52 sm:w-60">
                                    <p className="text-slate-600 mb-1">State</p>
                                    <p className="text-[0.9rem]">
                                        {"<User State>"}
                                    </p>
                                </div>
                            </div>
                            <div className=" flex items-center justify-start flex-wrap">
                                <div className="my-2 sm:my-4 w-52 sm:w-60">
                                    <p className="text-slate-600 mb-1">City</p>
                                    <p className="text-[0.9rem]">
                                        {"<User City>"}
                                    </p>
                                </div>
                                <div className="mt-2 sm:mt-4 w-52 sm:w-60">
                                    <p className="text-slate-600 mb-1">
                                        Pincode
                                    </p>
                                    <p className="text-[0.9rem]">
                                        {"<User Pincode>"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Profile;
