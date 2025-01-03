import React,{useRef, useEffect, useState} from 'react'
import Beds from '../Components/Beds';

function BookNow() {
    
    const [selectedBedsArray, setSelectedBedsArray] = useState([]);
    return (
        <>
            <div className="min-h-screen bg-slate-300 px-5 md:pl-52 py-20 w-full">
            <div className='flex items-center justify-start'>
                <div className='flex items-center justify-center flex-col relative bg-bg rounded-lg w-full p-5 md:ml-5 xl:w-[67rem]'>
                    <h1 className="text-4xl text-primary mb-10 font-bold text-center">
                        Book Now
                    </h1>
                    <div className='relative w-full flex items-center md:justify-center flex-wrap sm:flex-row gap-2'>
                        <div className='flex items-center justify-start flex-row gap-2'>
                            <div className='w-5 h-5 bg-[#c7cdc6] rounded-sm'></div>
                            <div>Upper</div>
                        </div>
                        <div className='flex items-center justify-start flex-row gap-2'>
                            <div className='w-5 h-5 bg-slate-400 rounded-sm'></div>
                            <div>Lower</div>
                        </div>
                        <div className='flex items-center justify-start flex-row gap-2'>
                            <div className='bg-red-500 w-5 h-5 rounded-sm'></div>
                            <div>Booked</div>
                        </div>
                        <div className='flex items-center justify-start flex-row gap-2'>
                            <div className='bg-green-400 h-5 w-5 rounded-sm'></div>
                            <div>Selected</div>
                        </div>
                    </div>
                    <div className='overflow-x-auto w-full md:w-[28rem] flex items-center justify-start sm:justify-center lg:w-full p-5'>
                        <div className='flex items-center justify-start'>
                            <Beds selectedBedsArray={selectedBedsArray} setSelectedBedsArray={setSelectedBedsArray}/>
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
            </div>
            </div>
        </>
    );
}

export default BookNow;
