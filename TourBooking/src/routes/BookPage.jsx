import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useState } from "react";
import BookingLanding from "../component/BookingLanding";
import BookingConfirmation from "../component/BookingConfirmation";
import BookingForm from "../component/BookingForm";
import Hero from "../component/Hero";

import AboutImg from "../assets/About1.jpg"

export default function Book(){
    const [step, setStep] = useState(1);
    const [landingData, setLandingData] = useState(null);
    const [formData, setFormData] = useState(null);

    const handleLandingNext = (data) => {
        setLandingData(data);
        setStep(2);
    };

    const handleFormNext = (data) => {
        setFormData(data);
        setStep(3);
    };

    const handleBackToLanding = () => {
        setStep(1);
        setLandingData(null);
    };

    const handleBackToForm = () => {
        setStep(2);
        setFormData(null);
    };

    return(
        <>
            <Navbar/>
                        
            <Hero 
            title="Behind The Journey"
            cName="hero"
            heroImg={AboutImg}
            btnClass='hide'
            />
            <main className="book-page">
                {step === 1 && <BookingLanding onNext={handleLandingNext} />}

                {step === 2 && (
                <BookingForm
                    landingData={landingData}
                    onBack={handleBackToLanding}
                    onNext={handleFormNext}
                />
                )}

                {step === 3 && (
                <BookingConfirmation
                    bookingData={{ ...landingData, ...formData }}
                    onBack={handleBackToForm}
                />
                )}
            </main>

            <Footer/>



        </>
    )
}