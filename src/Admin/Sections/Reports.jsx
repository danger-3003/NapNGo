import React, { useRef, useEffect, useState } from "react";
import IndividualReport from "../Components/IndividualReport";
import Pagination from "../Components/Pagination";

function History() {
    const date = new Date();
    const newDate = date.toLocaleString("en-GB").split(",");
    const [record, setRecord] = useState({ visible: false, data: null });
    const bookingData = [
        {
            date: newDate[0],
            name: "User_001",
            email: "user_001@gmail.com",
            mobile: "1234567890",
            payment: "UPI",
            duration: "1",
            status: "Booked",
            amount: "1000",
            bedNumbers: ["1U", "1L"],
            purpose: "lorem f sa g agragv SREIWTO wqwsx",
        },
        {
            date: newDate[0],
            name: "User_002",
            email: "user_002@gmail.com",
            mobile: "1234567890",
            payment: "Card",
            duration: "2",
            status: "Vacated",
            amount: "2000",
            bedNumbers: ["2U", "2L"],
            purpose: "lorem f sa g agragv SREIWTO wqwsx",
        },
        {
            date: newDate[0],
            name: "User_002",
            email: "user_002@gmail.com",
            mobile: "1234567890",
            payment: "Card",
            duration: "2",
            status: "Vacated",
            amount: "2000",
            bedNumbers: ["2U", "2L"],
            purpose: "lorem f sa g agragv SREIWTO wqwsx",
        },
        {
            date: newDate[0],
            name: "User_002",
            email: "user_002@gmail.com",
            mobile: "1234567890",
            payment: "Card",
            duration: "2",
            status: "Vacated",
            amount: "2000",
            bedNumbers: ["2U", "2L"],
            purpose: "lorem f sa g agragv SREIWTO wqwsx",
        },
        {
            date: newDate[0],
            name: "User_002",
            email: "user_002@gmail.com",
            mobile: "1234567890",
            payment: "Card",
            duration: "2",
            status: "Vacated",
            amount: "2000",
            bedNumbers: ["2U", "2L"],
            purpose: "lorem f sa g agragv SREIWTO wqwsx",
        },
        {
            date: newDate[0],
            name: "User_002",
            email: "user_002@gmail.com",
            mobile: "1234567890",
            payment: "Card",
            duration: "2",
            status: "Vacated",
            amount: "2000",
            bedNumbers: ["2U", "2L"],
            purpose: "lorem f sa g agragv SREIWTO wqwsx",
        },
        {
            date: newDate[0],
            name: "User_002",
            email: "user_002@gmail.com",
            mobile: "1234567890",
            payment: "Card",
            duration: "2",
            status: "Vacated",
            amount: "2000",
            bedNumbers: ["2U", "2L"],
            purpose: "lorem f sa g agragv SREIWTO wqwsx",
        },
        {
            date: newDate[0],
            name: "User_002",
            email: "user_002@gmail.com",
            mobile: "1234567890",
            payment: "Card",
            duration: "2",
            status: "Vacated",
            amount: "2000",
            bedNumbers: ["2U", "2L"],
            purpose: "lorem f sa g agragv SREIWTO wqwsx",
        },
        {
            date: newDate[0],
            name: "User_002",
            email: "user_002@gmail.com",
            mobile: "1234567890",
            payment: "Card",
            duration: "2",
            status: "Vacated",
            amount: "2000",
            bedNumbers: ["2U", "2L"],
            purpose: "lorem f sa g agragv SREIWTO wqwsx",
        },
        {
            date: newDate[0],
            name: "User_002",
            email: "user_002@gmail.com",
            mobile: "1234567890",
            payment: "Card",
            duration: "2",
            status: "Vacated",
            amount: "2000",
            bedNumbers: ["2U", "2L"],
            purpose: "lorem f sa g agragv SREIWTO wqwsx",
        },
        {
            date: newDate[0],
            name: "User_002",
            email: "user_002@gmail.com",
            mobile: "1234567890",
            payment: "Card",
            duration: "2",
            status: "Vacated",
            amount: "2000",
            bedNumbers: ["2U", "2L"],
            purpose: "lorem f sa g agragv SREIWTO wqwsx",
        },
    ];

    return (
        <div className="bg-slate-300 font-[poppins] min-h-screen w-full py-20 px-5 md:pl-52">
            <div className="flex items-center justify-start">
                <div className="flex items-center justify-center flex-col bg-bg rounded-lg p-5 mx-0 md:ml-5 w-full xl:w-[67rem]">
                    <div className="flex items-center justify-start w-full pb-5">
                        <p className="font-semibold text-xl text-primary">
                            You Booking History
                        </p>
                    </div>
                    <Pagination itemsPerPage={6} records={bookingData} setRecord={setRecord}/>
                    <div className="pt-5 flex w-full items-start justify-center flex-col">
                        <p className="text-primary font-semibold">Note :</p>
                        <div className="flex items-start justify-start sm:justify-start ml-10 flex-wrap gap-5 sm:gap-10 w-[90%]">
                            <div className="flex items-start justify-center flex-col">
                                <p className="text-secondary font-semibold">
                                    Payment -{" "}
                                </p>
                                <ul className="list-disc">
                                    <li className="text-sm">UPI</li>
                                    <li className="text-sm">Cash</li>
                                    <li className="text-sm">Card</li>
                                </ul>
                            </div>
                            <div className="flex items-start justify-center flex-col">
                                <p className="text-secondary font-semibold">
                                    Status -{" "}
                                </p>
                                <ul className="list-disc">
                                    <li className="text-sm text-green-600">
                                        Vacated
                                    </li>
                                    <li className="text-sm text-red-500">
                                        Booked
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {record.visible && (
                    <IndividualReport
                        data={record.data}
                        setRecord={setRecord}
                    />
                )}
            </div>
        </div>
    );
}

export default History;
