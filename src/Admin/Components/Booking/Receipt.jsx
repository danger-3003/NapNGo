import React from "react";
import Logo from "../../../assets/Logo.svg";

function Receipt({ selectedBedsArray, userData, completed, bookingDate }) {
    console.log(true);
    return (
        <div className="font-[poppins]">
            <p className="text-secondary">Receipt</p>
            <div className="mx-10 bg-white rounded-lg p-5">
                <div className="flex items-center justify-between flex-row border-b border-black pb-3">
                    <img src={Logo} alt="NapNGo" className="h-20 w-20" />
                    <div>Cell:+91 1234567890</div>
                </div>
                <div className="w-full flex items-center justify-center flex-col py-3 border-b border-black">
                    <p className="text-3xl font-extrabold text-primary">
                        NapNGo Dormitories
                    </p>
                    <p className="font-light text-lg">(A/C Deluxe Dormitory)</p>
                    <p className="font-medium text-xl">
                        RTC Complex, Visakhapatnam, Andhra Pradesh, 530000.
                    </p>
                </div>
                <div className="py-3 text-lg border-dashed border-b-2 border-black">
                    {/* <p>Bill No.: {}</p> */}
                    <div className="flex items-center justify-between">
                        <p className="text-secondary font-medium">
                            Bed No:{" "}
                            {selectedBedsArray.map((bedNumbers, key) => {
                                return (
                                    <>
                                        <span className="text-black font-normal">
                                            {bedNumbers}
                                            {selectedBedsArray.length < 1
                                                ? null
                                                : key === selectedBedsArray.length - 1
                                                ? null
                                                : ", "}
                                        </span>
                                    </>
                                );
                            })}
                        </p>
                        <p className="text-secondary font-medium">Date: <span className="text-black font-normal">{bookingDate}</span></p>
                    </div>
                    <div>
                        <p className="text-secondary font-medium">Name: <span className="text-black font-normal">{userData.name}</span></p>
                    </div>
                </div>
                <div className="flex items-center justify-center py-3 border-dashed border-b-2 border-black">
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
                                <td className="border border-black py-3 px-5">Lorem ipsum dolor sit amet.</td>
                                <td className="border border-black py-3 px-5">{selectedBedsArray.length}</td>
                                <td className="border border-black py-3 px-5">{userData.amount} /-</td>
                            </tr>
                            <tr>
                                <td className="border border-black py-3 px-5" colSpan={2}>Total</td>
                                <td className="border border-black py-3 px-5">{userData.amount} /-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Receipt;
