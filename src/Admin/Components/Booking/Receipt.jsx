import React, { useRef } from "react";
import Logo from "../../../assets/Logo.svg";
import ReactToPrint from "react-to-print";

function Receipt({ selectedBedsArray, userData, completed, bookingDate }) {
    const receiptRef = useRef();
    console.log(receiptRef)
    const calculateEndDate = (startDateString, durationInDays) => {
        const [datePart, timePart] = startDateString.split(", ");
        const [day, month, year] = datePart.split("/");
        const [hours, minutes, seconds] = timePart.split(":");

        const startDate = new Date(year, month - 1, day, hours, minutes, seconds);
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + Number(durationInDays));
        return endDate.toLocaleString("en-GB");
    };

    return (
        <div className="font-[poppins]">
            <p className="text-secondary text-xl mb-5">Receipt</p>

            <ReactToPrint
                trigger={() => (
                    <button className="text-white bg-primary px-4 py-1 rounded-lg mb-5">
                        Print Receipt
                    </button>
                )}
                content={() => receiptRef.current}
                pageStyle="@page { size: A4 portrait; margin: 20mm; } body { margin: 20px; }"
            />

            {/* Ref-wrapped receipt content */}
            <div ref={receiptRef} className="mx-10 bg-white rounded-lg p-5">
                <div className="flex items-center justify-between flex-row border-b border-black pb-3">
                    <img src={Logo} alt="NapNGo" className="h-20 w-20" />
                    <div>Cell: +91 1234567890</div>
                </div>

                <div className="w-full flex items-center justify-center flex-col py-3 border-b border-black">
                    <p className="text-3xl font-extrabold text-primary">NapNGo Dormitories</p>
                    <p className="font-light text-lg">(A/C Deluxe Dormitory)</p>
                    <p className="font-medium text-xl">
                        RTC Complex, Visakhapatnam, Andhra Pradesh, 530000.
                    </p>
                </div>

                <div className="py-5 text-lg border-dashed border-b-2 border-black">
                    <div className="flex items-center justify-between">
                        <p className="text-secondary font-medium">
                            Bed No:{" "}
                            {selectedBedsArray.map((bedNumbers, key) => (
                                <span key={key} className="text-black font-normal">
                                    {bedNumbers}
                                    {key !== selectedBedsArray.length - 1 ? ", " : ""}
                                </span>
                            ))}
                        </p>
                        <p className="text-secondary font-medium">
                            Start Date:{" "}
                            <span className="text-black font-normal">{bookingDate}</span>
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-secondary font-medium">
                            Name: <span className="text-black font-normal">{userData.name}</span>
                        </p>
                        <p className="text-secondary font-medium">
                            End Date:{" "}
                            <span className="text-black font-normal">
                                {calculateEndDate(bookingDate, userData.days)}
                            </span>
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-center py-5 border-dashed border-b-2 border-black">
                    <table className="w-full">
                        <thead>
                            <tr className="font-medium text-lg">
                                <td className="border border-black py-3 px-5">Summary</td>
                                <td className="border border-black py-3 px-5">Beds</td>
                                <td className="border border-black py-3 px-5 w-52">Amount (Rs.)</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-black py-3 px-5">
                                    Booking Details
                                </td>
                                <td className="border border-black py-3 px-5">
                                    {selectedBedsArray.length}
                                </td>
                                <td className="border border-black py-3 px-5">
                                    {userData.amount} /-
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black py-3 px-5" colSpan={2}>
                                    Total
                                </td>
                                <td className="border border-black py-3 px-5">
                                    {userData.amount} /-
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="py-3 flex items-center justify-between border-dashed border-b-2 border-black">
                    <p className="font-medium text-lg">Payment Mode: </p>
                    <p className="font-medium">{userData.payment}</p>
                </div>
            </div>
        </div>
    );
}

export default Receipt;
