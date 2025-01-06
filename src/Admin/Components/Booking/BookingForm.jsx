import React from "react";

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

            <div onClick={handleContinue}>
                Click me
            </div>
        </div>
    );
}

export default BookingForm;
