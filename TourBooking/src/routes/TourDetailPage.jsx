import AboutImg from "../assets/Anantara1.webp"
import Hero from "../component/Hero.jsx"
import Navbar from "../component/Navbar.jsx"
import Footer from "../component/Footer.jsx"
import TourDetail from "../component/TourDetail.jsx"
import SaharaHotel1 from "../assets/SaharaHotel1.webp"

export default function TourDetails(){
    const exampleTour = {
            id: "antantara-tozeur",
            title: "Experience the Sahara in Luxury at Anantara Tozeur",
            description: "On the edge of the desert in Tozeur, Anantara blends five-star comfort with Saharan charm. Surround yourself with dunes and palm groves while enjoying world-class amenities, desert adventures, and authentic cultural experiences.",
            images: [
                "https://images.unsplash.com/flagged/photo-1557899775-24a0957d3895?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/flagged/photo-1557899775-24a0957d3895?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/flagged/photo-1557899775-24a0957d3895?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/flagged/photo-1557899775-24a0957d3895?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ],
            includes: [
                "Transportation in a 4x4 vehicle",
                "Sunset camel ride",
                "Traditional Saharan dinner",
                "Overnight desert camp stay",
                "Guided sandboarding session"
            ]
        };
    return(
        <>
            <Navbar/>
            <Hero 
            title=""
            cName="hero-mid"
            heroImg={AboutImg}
            btnClass='hide'
            />
            <TourDetail
                tour={exampleTour}

            />
            <Footer/>


        </>
    )
}