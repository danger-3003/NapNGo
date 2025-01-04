import React, { useState } from "react";

function Bed({selectedBedsArray, setSelectedBedsArray}) {
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
    const handleBedSelect=(bedNumber)=>{
        bookedBedsArray.includes(bedNumber)
            ? null
            : handleCheckBed(bedNumber);
    }
    const handleCheckBed = (bedNumber) => {
        selectedBedsArray.includes(bedNumber)
            ? setSelectedBedsArray(
                  selectedBedsArray.filter((bed) => bed !== bedNumber)
              )
            : setSelectedBedsArray([...selectedBedsArray, bedNumber]);
        console.log(selectedBedsArray);
    };

    return (
        <>
            <div className="flex items-start justify-start">
                <div className="w-full">
                    <div className="flex items-center justify-between flex-row">
                        <div>
                            <div className="w-max flex items-center justify-center flex-col ml-7 mb-7 gap-1">
                                <div className={`${
                                            bookedBedsArray.includes("50")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("50")
                                                ? "bg-green-400 hover:cursor-pointer"
                                                : "hover:cursor-pointer"
                                        } bg-[#c7cdc6] rounded-sm border border-slate-500 flex items-center justify-end w-16 h-12`}  onClick={()=>handleBedSelect("50")}>
                                    50
                                    <div className=" bg-slate-500 w-2 ml-2 mr-0.5 h-10 flex items-center justify-center"><div className={`${
                                            bookedBedsArray.includes("50")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("50")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } bg-[#c7cdc6] h-1 w-full`}></div></div>
                                </div>
                                <div className="flex items-center justify-center flex-row gap-12">
                                    <div className={`${
                                            bookedBedsArray.includes("49")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("49")
                                                ? "bg-green-400 hover:cursor-pointer"
                                                : "hover:cursor-pointer"
                                        } bg-[#c7cdc6] rounded-sm border border-slate-500 w-12 h-16 flex items-center justify-end flex-col`}  onClick={()=>handleBedSelect("49")}>
                                        49
                                        <div className=" bg-slate-500 w-10 mb-0.5 h-2 flex items-center justify-center"><div className={`${
                                            bookedBedsArray.includes("49")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("49")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } bg-[#c7cdc6] h-full w-1`}></div></div>
                                    </div>
                                    <div className={`${
                                            bookedBedsArray.includes("51")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("51")
                                                ? "bg-green-400 hover:cursor-pointer"
                                                : "hover:cursor-pointer"
                                        } bg-[#c7cdc6] rounded-sm border border-slate-500 w-12 h-16 flex items-center justify-end flex-col`}  onClick={()=>handleBedSelect("51")}>
                                        51
                                        <div className=" bg-slate-500 w-10 mb-0.5 h-2 flex items-center justify-center"><div className={`${
                                            bookedBedsArray.includes("51")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("51")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } bg-[#c7cdc6] h-full w-1`}></div></div>                                
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-max flex items-center justify-center flex-col mr-7 mb-7 gap-1">
                                <div className="flex items-center justify-center flex-row gap-1">
                                    <div className={`${
                                            bookedBedsArray.includes("53")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("53")
                                                ? "bg-green-400 hover:cursor-pointer"
                                                : "hover:cursor-pointer"
                                        } bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-12 flex items-center justify-end`} onClick={()=>handleBedSelect("53")}>
                                        53
                                        <div className=" bg-slate-500 w-2 ml-2 mr-0.5 h-10 flex items-center justify-center"><div className={`${
                                            bookedBedsArray.includes("53")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("53")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } bg-[#c7cdc6] h-1 w-full`}></div></div>
                                    </div>
                                    <div className={`${
                                            bookedBedsArray.includes("54")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("54")
                                                ? "bg-green-400 hover:cursor-pointer"
                                                : "hover:cursor-pointer"
                                        } bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-12 flex items-center justify-end`} onClick={()=>handleBedSelect("54")}>
                                        54
                                        <div className=" bg-slate-500 w-2 ml-2 mr-0.5 h-10 flex items-center justify-center"><div className={`${
                                            bookedBedsArray.includes("54")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("54")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } bg-[#c7cdc6] h-1 w-full`}></div></div>
                                    </div>
                                </div>
                                <div className="flex items-end justify-center flex-row gap-12">
                                    <div className={`${
                                            bookedBedsArray.includes("52")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("52")
                                                ? "bg-green-400 hover:cursor-pointer"
                                                : "hover:cursor-pointer"
                                        } bg-[#c7cdc6] rounded-sm border border-slate-500 w-12 h-16 flex items-center justify-end flex-col`} onClick={()=>handleBedSelect("52")}>
                                        52
                                        <div className=" bg-slate-500 w-10 mb-0.5 h-2 flex items-center justify-center"><div className={`${
                                            bookedBedsArray.includes("52")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("52")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } bg-[#c7cdc6] h-full w-1`}></div></div>
                                    </div>
                                    <div className={`${
                                            bookedBedsArray.includes("55")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("55")
                                                ? "bg-green-400 hover:cursor-pointer"
                                                : "hover:cursor-pointer"
                                        } bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-12 flex items-center justify-end`} onClick={()=>handleBedSelect("55")}>
                                        55
                                        <div className=" bg-slate-500 w-2 ml-2 mr-0.5 h-10 flex items-center justify-center"><div className={`${
                                            bookedBedsArray.includes("55")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("55")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } bg-[#c7cdc6] h-1 w-full`}></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-row gap-1">
                        <div className="flex items-center justify-center flex-row gap-12">
                            <div className="flex items-center justify-center flex-col gap-2">
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("1U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("1U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("1U");
                                        }}
                                    >
                                        1U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("1L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("1L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("1L");
                                        }}
                                    >
                                        1L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("2U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("2U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("2U");
                                        }}
                                    >
                                        2U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("2L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("2L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("2L");
                                        }}
                                    >
                                        2L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("3U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("3U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("3U");
                                        }}
                                    >
                                        3U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("3L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("3L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("3L");
                                        }}
                                    >
                                        3L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("4U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("4U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("4U");
                                        }}
                                    >
                                        4U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("4L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("4L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("4L");
                                        }}
                                    >
                                        4L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("5U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("5U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("5U");
                                        }}
                                    >
                                        5U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("5L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("5L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("5L");
                                        }}
                                    >
                                        5L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 mt-5 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("6U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("6U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("6U");
                                        }}
                                    >
                                        6U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("6L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("6L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("6L");
                                        }}
                                    >
                                        6L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("7U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("7U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("7U");
                                        }}
                                    >
                                        7U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("7L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("7L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("7L");
                                        }}
                                    >
                                        7L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("8U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("8U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("8U");
                                        }}
                                    >
                                        8U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("8L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("8L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("8L");
                                        }}
                                    >
                                        8L
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center flex-col gap-2">
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("9U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("9U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("9U");
                                        }}
                                    >
                                        9U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("9L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("9L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("9L");
                                        }}
                                    >
                                        9L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("10U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("10U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("10U");
                                        }}
                                    >
                                        10U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("10L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("10L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("10L");
                                        }}
                                    >
                                        10L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("11U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("11U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("11U");
                                        }}
                                    >
                                        11U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("11L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("11L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("11L");
                                        }}
                                    >
                                        11L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("12U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("12U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("12U");
                                        }}
                                    >
                                        12U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("12L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("12L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("12L");
                                        }}
                                    >
                                        12L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("13U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("13U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("13U");
                                        }}
                                    >
                                        13U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("13L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("13L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("13L");
                                        }}
                                    >
                                        13L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 mt-5 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("14U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("14U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("14U");
                                        }}
                                    >
                                        14U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("14L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("14L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("14L");
                                        }}
                                    >
                                        14L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("15U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("15U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("15U");
                                        }}
                                    >
                                        15U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("15L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("15L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("15L");
                                        }}
                                    >
                                        15L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("16U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("16U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("16U");
                                        }}
                                    >
                                        16U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("16L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("16L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("16L");
                                        }}
                                    >
                                        16L
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center flex-row gap-12">
                            <div className="flex items-center justify-center flex-col gap-2">
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("17U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("17U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("17U");
                                        }}
                                    >
                                        17U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("17L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("17L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("17L");
                                        }}
                                    >
                                        17L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("18U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("18U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("18U");
                                        }}
                                    >
                                        18U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("18L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("18L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("18L");
                                        }}
                                    >
                                        18L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("19U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("19U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("19U");
                                        }}
                                    >
                                        19U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("19L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("19L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("19L");
                                        }}
                                    >
                                        19L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("20U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("20U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("20U");
                                        }}
                                    >
                                        20U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("20L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("20L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("20L");
                                        }}
                                    >
                                        20L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("21U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("21U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("21U");
                                        }}
                                    >
                                        21U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("21L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("21L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("21L");
                                        }}
                                    >
                                        21L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 mt-5 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("22U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("22U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("22U");
                                        }}
                                    >
                                        22U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("22L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("22L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("22L");
                                        }}
                                    >
                                        22L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("23U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("23U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("23U");
                                        }}
                                    >
                                        23U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("23L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("23L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("23L");
                                        }}
                                    >
                                        23L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("24U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("24U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("24U");
                                        }}
                                    >
                                        24U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("24L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("24L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("24L");
                                        }}
                                    >
                                        24L
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center flex-col gap-2">
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("25U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("25U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("25U");
                                        }}
                                    >
                                        25U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("25L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("25L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("25L");
                                        }}
                                    >
                                        25L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("26U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("26U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("26U");
                                        }}
                                    >
                                        26U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("26L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("26L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("26L");
                                        }}
                                    >
                                        26L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("27U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("27U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("27U");
                                        }}
                                    >
                                        27U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("27L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("27L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("27L");
                                        }}
                                    >
                                        27L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("28U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("28U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("28U");
                                        }}
                                    >
                                        28U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("28L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("28L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("28L");
                                        }}
                                    >
                                        28L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("29U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("29U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("29U");
                                        }}
                                    >
                                        29U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("29L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("29L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("29L");
                                        }}
                                    >
                                        29L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 mt-5 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("30U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("30U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("30U");
                                        }}
                                    >
                                        30U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("30L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("30L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("30L");
                                        }}
                                    >
                                        30L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("31U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("31U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("31U");
                                        }}
                                    >
                                        31U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("31L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("31L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("31L");
                                        }}
                                    >
                                        31L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("32U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("32U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("32U");
                                        }}
                                    >
                                        32U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("32L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("32L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("32L");
                                        }}
                                    >
                                        32L
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center flex-row gap-12">
                            <div className="flex items-center justify-center flex-col gap-2">
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("33U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("33U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("33U");
                                        }}
                                    >
                                        33U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("33L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("33L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("33L");
                                        }}
                                    >
                                        33L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("34U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("34U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("34U");
                                        }}
                                    >
                                        34U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("34L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("34L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("34L");
                                        }}
                                    >
                                        34L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("35U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("35U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("35U");
                                        }}
                                    >
                                        35U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("35L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("35L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("35L");
                                        }}
                                    >
                                        35L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("36U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("36U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("36U");
                                        }}
                                    >
                                        36U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("36L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("36L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("36L");
                                        }}
                                    >
                                        36L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("37U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("37U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("37U");
                                        }}
                                    >
                                        37U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("37L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("37L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("37L");
                                        }}
                                    >
                                        37L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 mt-5 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("38U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("38U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("38U");
                                        }}
                                    >
                                        38U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("38L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("38L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("38L");
                                        }}
                                    >
                                        38L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("39U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("39U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("39U");
                                        }}
                                    >
                                        39U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("39L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("39L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("39L");
                                        }}
                                    >
                                        39L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("40U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("40U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("40U");
                                        }}
                                    >
                                        40U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("40L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("40L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("40L");
                                        }}
                                    >
                                        40L
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center flex-col gap-2">
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("41U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("41U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("41U");
                                        }}
                                    >
                                        41U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("41L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("41L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("41L");
                                        }}
                                    >
                                        41L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("42U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("42U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("42U");
                                        }}
                                    >
                                        42U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("42L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("42L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("42L");
                                        }}
                                    >
                                        42L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("43U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("43U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("43U");
                                        }}
                                    >
                                        43U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("43L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("43L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("43L");
                                        }}
                                    >
                                        43L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("44U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("44U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("44U");
                                        }}
                                    >
                                        44U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("44L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("44L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("44L");
                                        }}
                                    >
                                        44L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("45U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("45U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("45U");
                                        }}
                                    >
                                        45U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("45L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("45L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("45L");
                                        }}
                                    >
                                        45L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 mt-5 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("46U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("46U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("46U");
                                        }}
                                    >
                                        46U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("46L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("46L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("46L");
                                        }}
                                    >
                                        46L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("47U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("47U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("47U");
                                        }}
                                    >
                                        47U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("47L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("47L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("47L");
                                        }}
                                    >
                                        47L
                                    </div>
                                </div>
                                <div className="bg-[#c7cdc6] rounded-sm border border-slate-500 w-16 h-7 flex items-center justify-center">
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("48U")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("48U")
                                                ? "bg-green-400 cursor-pointer"
                                                : "cursor-pointer"
                                        } w-[50%] border-r-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("48U");
                                        }}
                                    >
                                        48U
                                    </div>
                                    <div
                                        className={`${
                                            bookedBedsArray.includes("48L")
                                                ? "bg-red-500 cursor-not-allowed"
                                                : selectedBedsArray.includes("48L")
                                                ? "bg-green-400 cursor-pointer"
                                                : "bg-slate-400 cursor-pointer"
                                        } w-[50%] border-l-[0.5px] border-slate-500 h-full text-sm flex items-center justify-center`}
                                        onClick={() => {
                                            handleBedSelect("48L");
                                        }}
                                    >
                                        48L
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Bed;