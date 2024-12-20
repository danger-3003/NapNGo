import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function FAQ() {
    const location = useLocation();
    const faqSection = useRef(null);
    const [option, setOption] = useState(null);

    useEffect(() => {
        if (location.hash === "#FAQ") {
            faqSection.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <div
            ref={faqSection}
            className="bg-bg pt-16 pb-10 flex items-center justify-center flex-col"
        >
            <h1 className="font-bold text-3xl md:text-4xl text-primary">FAQ's</h1>
            <div className="w-[90vw] lg:w-[60rem] mt-5">
                <div
                    className="bg-accent py-1 md:py-2 px-5 my-4 rounded-md"
                    style={{ boxShadow: "0px 0px 5px rgba(0,0,0,0.2)" }}
                >
                    <label
                        htmlFor="Question One"
                        className="flex gap-2 sm:gap-0 justify-between items-center"
                    >
                        <p
                            className={`${
                                option === "QuestionOne"
                                    ? "text-primary"
                                    : "text-secondary"
                            } duration-500 text-lg md:text-xl font-medium my-2`}
                        >
                            What are your booking slots?
                        </p>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={`text-primary ${
                                option === "QuestionOne"
                                    ? "rotate-180"
                                    : "rotate-0"
                            } duration-500`}
                        />
                    </label>
                    <input
                        type="radio"
                        className="hidden"
                        name="question"
                        id="Question One"
                        onClick={() => {
                            option === "QuestionOne"
                                ? setOption(null)
                                : setOption("QuestionOne");
                        }}
                    />
                    <div
                        className={`${
                            option === "QuestionOne" ? "py-1 md:py-2 px-3 md:px-5" : "px-3 md:px-5"
                        } overflow-hidden text-secondary transition-all duration-500 rounded-md text-sm md:text-lg`}
                    >
                        <p
                            className={`${
                                option === "QuestionOne"
                                    ? "h-max py-2"
                                    : "h-0"
                            } overflow-hidden transition-all duration-500`}
                        >We offer 8-hour, 12-hour, and 24-hour stays.</p>
                    </div>
                </div>
                <div
                    className="bg-accent py-1 md:py-2 px-5 my-4 rounded-md"
                    style={{ boxShadow: "0px 0px 5px rgba(0,0,0,0.2)" }}
                >
                    <label
                        htmlFor="Question Two"
                        className="flex gap-2 sm:gap-0 justify-between items-center"
                    >
                        <p
                            className={`${
                                option === "QuestionTwo"
                                    ? "text-primary"
                                    : "text-secondary"
                            } duration-500 text-lg md:text-xl font-medium my-2`}
                        >
                            Can I book online?
                        </p>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={`text-primary ${
                                option === "QuestionTwo"
                                    ? "rotate-180"
                                    : "rotate-0"
                            } duration-500`}
                        />
                    </label>
                    <input
                        type="radio"
                        className="hidden"
                        name="question"
                        id="Question Two"
                        onClick={() => {
                            option === "QuestionTwo"
                                ? setOption(null)
                                : setOption("QuestionTwo");
                        }}
                    />
                    <div
                        className={`${
                            option === "QuestionTwo" ? "py-1 md:py-2 px-3 md:px-5" : "px-3 md:px-5"
                        } h-max overflow-hidden text-secondary transition-all duration-500 rounded-md text-sm md:text-lg`}
                    >
                        <p
                            className={`${
                                option === "QuestionTwo"
                                    ? "h-max py-2"
                                    : "h-0"
                            } overflow-hidden transition-all duration-500`}
                        >
                            Yes! Our “Book Now” feature allows you to book your
                            bed and pay securely online.
                        </p>
                    </div>
                </div>
                <div
                    className="bg-accent py-1 md:py-2 px-5 my-4 rounded-md"
                    style={{ boxShadow: "0px 0px 5px rgba(0,0,0,0.2)" }}
                >
                    <label
                        htmlFor="Question Three"
                        className="flex gap-2 sm:gap-0 justify-between items-center"
                    >
                        <p
                            className={`${
                                option === "QuestionThree"
                                    ? "text-primary"
                                    : "text-secondary"
                            } duration-500 text-lg md:text-xl font-medium my-2`}
                        >
                            Is there a cancellation policy?
                        </p>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={`text-primary ${
                                option === "QuestionThree"
                                    ? "rotate-180"
                                    : "rotate-0"
                            } duration-500`}
                        />
                    </label>
                    <input
                        type="radio"
                        className="hidden"
                        name="question"
                        id="Question Three"
                        onClick={() => {
                            option === "QuestionThree"
                                ? setOption(null)
                                : setOption("QuestionThree");
                        }}
                    />
                    <div
                        className={`${
                            option === "QuestionThree"
                                ? "py-1 md:py-2 px-3 md:px-5"
                                : "px-3 md:px-5"
                        } overflow-hidden text-secondary transition-all duration-500 rounded-md text-sm md:text-lg`}
                    >
                        <p
                            className={`${
                                option === "QuestionThree"
                                    ? "h-max py-2"
                                    : "h-0"
                            } overflow-hidden transition-all duration-500`}
                        >
                            Yes, please review our cancellation terms during
                            booking.
                        </p>
                    </div>
                </div>
                <div
                    className="bg-accent py-1 md:py-2 px-5 my-4 rounded-md"
                    style={{ boxShadow: "0px 0px 5px rgba(0,0,0,0.2)" }}
                >
                    <label
                        htmlFor="Question Four"
                        className="flex gap-2 sm:gap-0 justify-between items-center"
                    >
                        <p
                            className={`${
                                option === "QuestionFour"
                                    ? "text-primary"
                                    : "text-secondary"
                            } duration-500 text-lg md:text-xl font-medium my-2`}
                        >
                            Do you offer food?
                        </p>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={`text-primary ${
                                option === "QuestionFour"
                                    ? "rotate-180"
                                    : "rotate-0"
                            } duration-500`}
                        />
                    </label>
                    <input
                        type="radio"
                        className="hidden"
                        name="question"
                        id="Question Four"
                        onClick={() => {
                            option === "QuestionFour"
                                ? setOption(null)
                                : setOption("QuestionFour");
                        }}
                    />
                    <div
                        className={`${
                            option === "QuestionFour" ? "py-1 md:py-2 px-3 md:px-5" : "px-3 md:px-5"
                        } overflow-hidden text-secondary transition-all duration-500 rounded-md text-sm md:text-lg`}
                    >
                        <p 
                            className={`${
                                option === "QuestionFour"
                                    ? "h-max py-2"
                                    : "h-0"
                            } overflow-hidden transition-all duration-500`}
                        >
                            Yes, our canteen serves delicious meals and snacks
                            during your stay.
                        </p>
                    </div>
                </div>
                <div
                    className="bg-accent py-1 md:py-2 px-5 my-4 rounded-md"
                    style={{ boxShadow: "0px 0px 5px rgba(0,0,0,0.2)" }}
                >
                    <label
                        htmlFor="Question Five"
                        className="flex gap-2 sm:gap-0 justify-between items-center"
                    >
                        <p
                            className={`${
                                option === "QuestionFive"
                                    ? "text-primary"
                                    : "text-secondary"
                            } duration-500 text-lg md:text-xl font-medium my-2`}
                        >
                            Can I extend my booking?
                        </p>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className={`text-primary ${
                                option === "QuestionFive"
                                    ? "rotate-180"
                                    : "rotate-0"
                            } duration-500`}
                        />
                    </label>
                    <input
                        type="radio"
                        className="hidden"
                        name="question"
                        id="Question Five"
                        onClick={() => {
                            option === "QuestionFive"
                                ? setOption(null)
                                : setOption("QuestionFive");
                        }}
                    />
                    <div
                        className={`${
                            option === "QuestionFive" ? "py-1 md:py-2 px-3 md:px-5" : "px-3 md:px-5"
                        } overflow-hidden text-secondary transition-all duration-500 rounded-md text-sm md:text-lg`}
                    >
                        <p
                            className={`${
                                option === "QuestionFive"
                                    ? "h-max py-2"
                                    : "h-0"
                            } overflow-hidden transition-all duration-500`}
                        >Absolutely. Extensions depend on availability.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FAQ;
