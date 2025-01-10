import React, { useRef, useEffect, useState } from "react";
import IndividualReport from "../Components/IndividualReport";

function History() {
    const date = new Date();
    const newDate = date.toLocaleString("en-GB").split(",");
    const [record, setRecord] = useState({visible:false,data:null});
    const bookingData=[
        {
            date:newDate[0],
            name:"User_001",
            email:"user_001@gmail.com",
            mobile:"1234567890",
            payment:"UPI",
            duration:"1",
            status:"Booked",
            amount:"1000",
            bedNumbers:["1U","1L"],
            purpose:"lorem f sa g agragv SREIWTO wqwsx",
        },
        {
            date:newDate[0],
            name:"User_002",
            email:"user_002@gmail.com",
            mobile:"1234567890",
            payment:"Card",
            duration:"2",
            status:"Vacated",
            amount:"2000",
            bedNumbers:["2U","2L"],
            purpose:"lorem f sa g agragv SREIWTO wqwsx",
        }
    ]

    const handleIndividual =(data)=>{
        setRecord({visible:true,data:data});
    }

    return (
        <div className="bg-slate-300 font-[poppins] min-h-screen w-full py-20 px-5 md:pl-52">
            <div className='flex items-center justify-start'>
                <div className="flex items-center justify-center flex-col bg-bg rounded-lg p-5 mx-0 md:ml-5 w-full xl:w-[67rem]">
                    <div className="flex items-center justify-start w-full pb-5">
                        <p className="font-semibold text-xl text-primary">You Booking History</p>
                    </div>
                    <div
                        className="overflow-x-scroll lg:overflow-x-auto w-full p-5 pb-3 py-5 bg-bg border border-slate-300 rounded-lg"
                        // style={{boxShadow:"0px 0px 20px rgba(0,0,0,0.3)"}}
                    >
                        <table className={`${window.innerWidth>540?"w-full":"w-[30rem]"} w-[45rem] lg:w-full h-max border-none`}>
                            <thead className="border-none">
                                <tr className="border-none">
                                    <td className="text-start pb-3">
                                        <div className="border-b border-secondary pb-3 text-secondary font-semibold">
                                            Date
                                        </div>
                                    </td>
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
                                {
                                    bookingData.map((item,key)=>{
                                        return(
                                            <tr key={key} className="cursor-pointer hover:bg-slate-200 rounded-lg" onClick={()=>{handleIndividual(item)}}>
                                                <td className="text-start py-2">{item.date}</td>
                                                <td className="text-start py-2">{item.name}</td>
                                                <td className="text-start py-2">{item.payment}</td>
                                                <td className="text-start py-2">{item.duration} {item.duration>1?"Days":"Day"}</td>
                                                <td className={`text-start py-2 ${item.status==="Vacated"?"text-green-500":item.status==="Booked"?"text-red-500":null}`}>{item.status}</td>
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
                                                    {item.amount}
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="pt-5 flex w-full items-start justify-center flex-col">
                        <p className="text-primary font-semibold">Note :</p>
                        <div className="flex items-start justify-start sm:justify-start ml-10 flex-wrap gap-5 sm:gap-10 w-[90%]">
                            <div className="flex items-start justify-center flex-col">
                                <p className="text-secondary font-semibold">Payment - </p>
                                <ul className="list-disc">
                                    <li className="text-sm">UPI</li>
                                    <li className="text-sm">Cash</li>
                                    <li className="text-sm">Card</li>
                                </ul>
                            </div>
                            <div className="flex items-start justify-center flex-col">
                                <p className="text-secondary font-semibold">Status - </p>
                                <ul className="list-disc">
                                    <li className="text-sm text-green-600">Vacated</li>
                                    <li className="text-sm text-red-500">Booked</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    record.visible &&
                    <IndividualReport data={record.data} setRecord={setRecord}/>
                }
            </div>
        </div>
    );
}

export default History;
