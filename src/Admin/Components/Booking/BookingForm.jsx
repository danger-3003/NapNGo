import React from "react";

function BookingForm({ setBookingDate }) {
    const date = new Date();

    const handleDate = () => {
        setBookingDate(date.toLocaleDateString());
    }
    return (
        <div>
            Booking Form
            <div onClick={handleDate}>
                Click me
            </div>
        </div>
    );
}

export default BookingForm;
