import React from "react";
import Home from "./Sections/Home";
import FAQ from "./Sections/FAQ";
import WhyUs from "./Sections/WhyUs";
import Contact from "./Sections/Contact";

function App() {
    return(
        <div className="font-[Poppins]">
            <Home />
            <WhyUs />
            <FAQ />
            <Contact />
        </div>
    );
}

export default App;
