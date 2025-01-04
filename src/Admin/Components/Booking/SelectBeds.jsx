import React, { useState } from "react";
import Beds from "../Beds";
// import "./calendar.css";

function SelectBeds({
    selectedBedsArray,
    setSelectedBedsArray,
    bookingDate,
    setBookingDate,
    setBookingHours,
}) {
    const [openCal, setOpenCal] = useState(false);
    const handleOpenCal = () => {
        setOpenCal(!openCal);
    };
    return (
        <div>
            <div>
                <input type="date" name="Booking Date" onChange={(e)=>{setBookingDate(e.target.value)}} placeholder="Select Date" value={bookingDate?bookingDate:"Select Date"} className="font-[Poppins] outline-none"/>
            </div>
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
            <div className="overflow-x-auto w-full md:w-[28rem] flex items-center justify-start lg:justify-center lg:w-full p-5">
                <div className="flex items-center justify-start">
                    <Beds
                        selectedBedsArray={selectedBedsArray}
                        setSelectedBedsArray={setSelectedBedsArray}
                    />
                </div>
            </div>
            <div>
                <p>Selected Beds: </p>
                {selectedBedsArray.length > 0 && (
                    <>
                        <div className="flex items-center justify-center flex-row gap-2">
                            {selectedBedsArray.map((bedNumbers, key) => {
                                return <div key={key}>{bedNumbers}</div>;
                            })}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default SelectBeds;
