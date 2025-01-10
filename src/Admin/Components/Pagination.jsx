import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const TableDisplay = ({items, setRecord}) => {
    
    const handleIndividual = (data) => {
        setRecord({ visible: true, data: data });
    };
    return (
        <div
            className="overflow-x-scroll lg:overflow-x-auto w-full p-5 pb-3 py-5 bg-bg border border-slate-300 rounded-lg"
            // style={{boxShadow:"0px 0px 20px rgba(0,0,0,0.3)"}}
        >
            <table
                className={`${
                    window.innerWidth > 540 ? "w-full" : "w-[30rem]"
                } w-[45rem] lg:w-full h-max border-none`}
            >
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
                    {items.map((item, key) => {
                        return (
                            <tr
                                key={key}
                                className="cursor-pointer hover:bg-slate-200 rounded-lg"
                                onClick={() => {
                                    handleIndividual(item);
                                }}
                            >
                                <td className="text-start py-2">{item.date}</td>
                                <td className="text-start py-2">{item.name}</td>
                                <td className="text-start py-2">
                                    {item.payment}
                                </td>
                                <td className="text-start py-2">
                                    {item.duration}{" "}
                                    {item.duration > 1 ? "Days" : "Day"}
                                </td>
                                <td
                                    className={`text-start py-2 ${
                                        item.status === "Vacated"
                                            ? "text-green-500"
                                            : item.status === "Booked"
                                            ? "text-red-500"
                                            : null
                                    }`}
                                >
                                    {item.status}
                                </td>
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
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default function PaginatedItems({ itemsPerPage, records, setRecord }) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = records.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(records.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % records.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <TableDisplay items={currentItems} setRecord={setRecord}/>
            <div className="flex items-center justify-center mt-5">
                <ReactPaginate
                    className="flex flex-row items-center justify-center gap-3"
                    breakLabel="..."
                    nextLabel={
                        <div className="h-7 w-7 bg-primary rounded-full flex items-center justify-center">
                            <FontAwesomeIcon icon={faChevronRight} className="text-accent"/>
                        </div>
                    }
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={4}
                    pageCount={pageCount}
                    pageLinkClassName="h-5 w-5 rounded-full text-sm flex items-center justify-center"
                    activeClassName="rounded-full bg-secondary text-accent"
                    previousLabel={
                        <div className="h-7 w-7 bg-primary rounded-full flex items-center justify-center">
                            <FontAwesomeIcon icon={faChevronLeft} className="text-accent"/>
                        </div>
                    }
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    );
}
