import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

function IndividualReport({ data, setRecord }) {
    const handleExtend = () => {
        console.log("Extend button clicked");
    };
    const handleBack = () => {
        console.log("Back");
        setRecord({ visible: false, data: null });
    };

    return (
        <div className="bg-black/50 fixed top-0 left-0 h-screen w-full flex items-center justify-center flex-col py-10 z-20">
            <div className="overflow-y-auto h-full w-[90%] xl:w-[67rem] rounded-lg flex items-start justify-center">
                <div className="bg-bg w-full flex items-start justify-center flex-col p-5">
                    <div className="relative flex items-center justify-center w-full pb-3 border-b-2 border-dashed border-slate-300">
                        <div className="absolute left-0 text-secondary">
                            <FontAwesomeIcon
                                icon={faChevronCircleLeft}
                                className="text-2xl cursor-pointer"
                                onClick={handleBack}
                            />
                        </div>
                        <h1 className="font-semibold text-lg text-primary">
                            Individual Record
                        </h1>
                    </div>
                    {/* <div className="relative rounded-lg border mt-5 mb-2.5 border-slate-300 px-2 sm:px-5 md:px-10 py-5 w-full flex items-start sm:items-center justify-between flex-row">
                        <div
                            className="absolute sm:relative bg-bg right-2 top-2 sm:top-0 sm:right-0 flex items-center justify-center gap-3 flex-row text-slate-500 rounded-full border px-3 py-0.5 border-slate-300 cursor-pointer"
                            onClick={handleExtend}
                        >
                            Edit
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                className="text-sm"
                            />
                        </div>
                    </div> */}
                    <div className="border relative rounded-lg border-slate-300 p-5 py-8 sm:py-5 my-2.5 w-full">
                        <h1 className="text-center sm:text-left font-semibold text-primary text-lg">
                            Booking Details
                        </h1>
                        <div className="flex items-start justify-center flex-col">
                            <div className=" flex items-center justify-start flex-wrap">
                                <div className="my-2 sm:my-4 w-52 sm:w-60">
                                    <p className="text-slate-600 mb-1">
                                        Bed Numbers
                                    </p>
                                    <p className="text-[0.9rem]">
                                        {data.bedNumbers.map((item, key) => {
                                            return (
                                                <span key={key}>
                                                    {item}
                                                    {data.bedNumbers.length < 1
                                                        ? null
                                                        : key ===
                                                          data.bedNumbers
                                                              .length -
                                                              1
                                                        ? null
                                                        : ", "}
                                                </span>
                                            );
                                        })}
                                    </p>
                                </div>
                                <div className="my-2 sm:my-4 w-52 sm:w-60">
                                    <p className="text-slate-600 mb-1">Booking Date</p>
                                    <p className="text-[0.9rem]">
                                        {data.date}
                                    </p>
                                </div>
                            </div>
                            <div className=" flex items-center justify-start flex-wrap">
                                <div className="my-2 sm:my-4 w-52 sm:w-60">
                                    <p className="text-slate-600 mb-1">Amount</p>
                                    <p className="text-[0.9rem]">
                                        {data.amount}
                                    </p>
                                </div>
                                <div className="mt-2 sm:my-4 w-52 sm:w-60">
                                    <p className="text-slate-600 mb-1">
                                        Payment Method
                                    </p>
                                    <p className="text-[0.9rem]">
                                        {data.paymentMethod}
                                    </p>
                                </div>
                            </div>
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
                                        {data.name}
                                    </p>
                                </div>
                                <div className="my-2 sm:my-4">
                                    <p className="text-slate-600 mb-1">
                                        Email:
                                    </p>
                                    <p className="text-[0.9rem]">
                                        {data.email}
                                    </p>
                                </div>
                                <div className="mt-2 sm:mt-4">
                                    <p className="text-slate-600 mb-1">
                                        Mobile:
                                    </p>
                                    <p className="text-[0.9rem]">
                                        {data.mobile}
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
                    <div className="flex items-center justify-between w-full px-10 py-5">
                        <div className="bg-red-500 text-accent font-medium cursor-pointer shadow-md shadow-black/40 flex items-center justify-center px-5 py-1 rounded-full">
                            <p>CheckOut</p>
                        </div>
                        <div className="bg-green-500 text-secondary font-medium cursor-pointer shadow-md shadow-black/40 flex items-center justify-center px-5 py-1 rounded-full">
                            <p>Extend</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndividualReport;
