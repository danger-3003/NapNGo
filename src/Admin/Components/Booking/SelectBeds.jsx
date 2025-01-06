import React, { useState } from "react";
import Beds from "../Beds";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function SelectBeds({
    selectedBedsArray,
    setSelectedBedsArray,
    bookingDate,
    bookingHours,
    setBookingDate,
    setBookingHours,
    completed,
    setCompleted,
    setScreen
}) {
    const [preview, setPreview] = useState(false);

    const handlePreview = () => {
        setPreview(!preview);
    };
    const handleConditions = () => {
        if (
            selectedBedsArray.length === 0 ||
            bookingDate === "" ||
            bookingHours === ""
        ) {
            return false;
        } else {
            return true;
        }
    };
    // console.log(bookingDate, bookingHours,selectedBedsArray);
    return (
        <div>
            {/* select date and hours field */}
            <div className="flex items-start flex-wrap justify-between mb-10">
                <div>
                    <input
                        type="date"
                        name="Booking Date"
                        required
                        onChange={(e) => {
                            setBookingDate(e.target.value);
                        }}
                        placeholder="Select Date"
                        value={bookingDate || "Select Date"}
                        className="font-[Poppins] outline-none border border-black border-dashed py-1 px-2 w-40 rounded"
                    />
                    {!bookingDate && (
                        <p className="text-red-500">Please select date</p>
                    )}
                </div>
                <div>
                    <select
                        name="Hours"
                        onChange={(e) => {
                            setBookingHours(e.target.value);
                        }}
                        className="outline-none border border-black border-dashed rounded w-40 py-1 font-[Poppins]"
                    >
                        <option value="8hrs" className="w-20">
                            8hrs
                        </option>
                        <option value="12hrs" className="w-20">
                            12hrs
                        </option>
                        <option value="24hrs" className="w-20">
                            24hrs
                        </option>
                    </select>
                </div>
            </div>
            {/* Identification for User/ Admin */}
            <div className="relative w-full flex items-center md:justify-center flex-wrap sm:flex-row gap-2 mb-5">
                <div className="flex items-center justify-start flex-row gap-2">
                    <div className="w-5 h-5 bg-[#c7cdc6] rounded-sm"></div>
                    <div>Upper</div>
                </div>
                <div className="flex items-center justify-start flex-row gap-2">
                    <div className="w-5 h-5 bg-slate-400 rounded-sm"></div>
                    <div>Lower</div>
                </div>
                <div className="flex items-center justify-start flex-row gap-2">
                    <div className="bg-red-500 w-5 h-5 rounded-sm"></div>
                    <div>Booked</div>
                </div>
                <div className="flex items-center justify-start flex-row gap-2">
                    <div className="bg-green-400 h-5 w-5 rounded-sm"></div>
                    <div>Selected</div>
                </div>
            </div>
            {/* Beds Selection */}
            <div className="flex items-center justify-center">
                <div
                    className={`overflow-x-auto w-full md:w-[30rem] lg:w-max rounded-md border border-dashed border-slate-600 flex items-center justify-start lg:justify-center p-5`}
                >
                    <div className="flex items-center justify-center">
                        <Beds
                            selectedBedsArray={selectedBedsArray}
                            setSelectedBedsArray={setSelectedBedsArray}
                        />
                    </div>
                </div>
            </div>
            {/* Continue Button */}
            <div className="flex items-center justify-center mt-10">
                <button
                    type="submit"
                    disabled={!handleConditions() ? true : false}
                    className={`${
                        !handleConditions()
                            ? "bg-gray-300 text-gray-600 hover:cursor-not-allowed"
                            : "bg-green-400 text-secondary"
                    } rounded-full px-4 py-1 shadow-secondary/20 shadow-md duration-500`}
                    onClick={handlePreview}
                >
                    Continue
                </button>
            </div>
            {/* Preview Section */}
            {preview && (
                <div className="fixed top-0 bg-black/50 flex items-center justify-center h-screen w-screen left-0 z-20 font-[poppins]">
                    <div className="bg-accent relative rounded-xl flex items-center justify-center flex-col w-[90vw] sm:w-72 md:w-96 shadow-lg shadow-black/20">
                        <div
                            className="absolute top-0 right-0 bg-accent hover:cursor-pointer h-5 w-5 flex items-center justify-center rounded-full shadow-md shadow-black/30"
                            onClick={handlePreview}
                        >
                            <FontAwesomeIcon
                                icon={faPlus}
                                className="rotate-45"
                            />
                        </div>
                        <div className="bg-primary w-full h-20 rounded-t-xl flex items-center justify-center">
                            <p className="font-semibold text-2xl text-accent">
                                Selected Beds
                            </p>
                        </div>
                        <div className=" px-2 py-5 sm:p-5 text-slate-700">
                            <p className="text-xl mb-5 text-center">
                                Confirm your beds...
                            </p>
                            <p className="text-center">
                                Time Duration:{" "}
                                <span className="text-black font-semibold">
                                    {bookingHours}
                                </span>
                            </p>
                            {selectedBedsArray.length > 0 && (
                                <>
                                    <div className="flex items-center justify-center flex-row gap-1 text-black font-medium">
                                        {selectedBedsArray.map(
                                            (bedNumbers, key) => {
                                                return (
                                                    <div key={key}>
                                                        {bedNumbers}
                                                        {selectedBedsArray.length <
                                                        1
                                                            ? null
                                                            : key ===
                                                              selectedBedsArray.length -
                                                                  1
                                                            ? null
                                                            : ","}
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                        <button
                            className="mb-5 w-min bg-green-400 text-secondary rounded-full px-4 py-1 shadow-secondary/20 shadow-md"
                            onClick={() => {
                                !completed.includes("selectBeds") && setCompleted([...completed, "selectBeds"]);
                                setScreen("bookingForm");
                            }}
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SelectBeds;
