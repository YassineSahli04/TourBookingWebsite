import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "../component/BookingPageStyle.css"
import { useState } from "react";
import BookingLanding from "../component/BookingLanding";
import BookingConfirmation from "../component/BookingConfirmation";
import BookingForm from "../component/BookingForm";
import Hero from "../component/Hero";
import ScrollingBookingImages from "../component/ScrollingBookingImages";

import BookHeaderImg from "../assets/BookHeader.jpg"

export default function Book(){
    const bookingImages = [
        "https://i.pinimg.com/736x/66/c3/61/66c3614d55d718bea36c2fca8743a8d5.jpg",
        "https://i.pinimg.com/1200x/25/d2/91/25d291db3a0b061a89d0c78eb66556aa.jpg", 
        "https://i.pinimg.com/1200x/bc/ad/1f/bcad1f4b4a174c9727b013f78e2351d5.jpg",
        "https://i.pinimg.com/1200x/30/0f/60/300f603f2b12e65b82e86bf3c229258f.jpg",
        "https://i.pinimg.com/1200x/39/3a/2b/393a2b7b212891f8597d89e0fc9fcf25.jpg"

    ]


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
            title="Secure Your Next Journey"
            cName="hero-mid"
            heroImg={BookHeaderImg}
            btnClass='hide'
            />
            <main className="book-page">
                <ScrollingBookingImages/>
                <div className="book-content">
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
                </div>
            </main>

            <Footer/>



        </>
    )
}