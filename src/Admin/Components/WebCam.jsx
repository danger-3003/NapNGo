import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function WebcamCapture({
    userData,
    setUserData,
    setOpenWebCam,
    openWebCam,
}) {
    const webcamRef = useRef(null);

    const capturePhoto = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setUserData({ ...userData, photo: imageSrc });
    };

    const retakePhoto = () => {
        setUserData({ ...userData, photo: "" });
    }

    const confirmPhoto =()=>{
        setOpenWebCam(!openWebCam);
    }

    console.log(userData);

    return (
        <div className="flex items-center justify-center flex-col p-5 w-[90%] sm:w-[30rem] bg-accent rounded-xl relative">
            <div
                className="bg-primary flex items-center justify-center w-6 h-6 rounded-full shadow-lg shadow-black/30 cursor-pointer absolute top-0 right-0"
                onClick={() => {
                    setOpenWebCam(!openWebCam);
                    setUserData({ ...userData, photo: "" });
                }}
            >
                <FontAwesomeIcon
                    icon={faPlus}
                    className="text-lg text-accent rotate-45"
                />
            </div>
            {!userData.photo ? (
                <Webcam
                    ref={webcamRef}
                    audio={false}
                    // mirrored={true}
                    screenshotFormat="image/jpeg"
                    className="w-52 sm:w-80"
                />
            ) : (
                <img src={userData.photo} alt="Captured" />
            )}
            <div>
                {!userData.photo ? (
                    <div className="cursor-pointer px-3 py-1 bg-green-400 mt-5 rounded text-green-950" onClick={capturePhoto}>
                        Take Photo
                    </div>
                ) : (
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                        <div
                            className="cursor-pointer px-3 py-1 bg-red-400 mt-5 rounded text-red-950"
                            onClick={retakePhoto}
                        >
                            Retake Photo
                        </div>
                        <div className="cursor-pointer px-3 py-1 bg-green-400 mt-5 rounded text-green-950" onClick={confirmPhoto}>
                            Confirm
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
