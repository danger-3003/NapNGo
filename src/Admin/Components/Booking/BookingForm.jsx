import React, {useRef, useState} from "react";

function BookingForm({ bookingDate, bookingHours, completed, setCompleted, setScreen }) {
    
    const handleContinue = () => {
        setScreen("payment");
        !completed.includes("bookingForm") && setCompleted([...completed,"bookingForm"]);
    }
    return (
        <div>
            Booking Form
            <p>{bookingDate}</p>
            <p>{bookingHours}</p>
            <div>
                <form>
                    <div>
                        <p>Name</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Age</p>
                        <input type="text"/>
                    </div>
                    <div>
                        <p>Email</p>
                        <input type="email" />
                    </div>
                    <div>
                        <p>Mobile Number</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Address</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Purpose of Visit</p>
                    </div>
                    <div>
                        <p>Photo</p>
                        <button>Upload</button>
                    </div>
                    <div>
                        <p>Aadhar</p>
                        <input type="file" name="Aadhar Front" onChange={(e)=>{console.log(e.target.value)}}/>
                    </div>
                    <div>
                        <p>Payment Method:</p>
                        <button>UPI</button>
                        <button>Cash</button>
                        <button>Card</button>
                    </div>
                </form>
            </div>
            <div onClick={handleContinue}>
                Click me
            </div>
        </div>
    );
}

export default BookingForm;
