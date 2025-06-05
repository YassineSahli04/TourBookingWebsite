import AboutImg from "../assets/Tours1.jpg"
import Hero from "../component/Hero.jsx"
import Navbar from "../component/Navbar.jsx"
import TourList from "../component/TourList.jsx"
import Footer from "../component/Footer.jsx"

export default function Tours(){
    return(
        <>
            <Navbar/>
            <Hero 
            title="Start Your Journey"
            cName="hero-mid"
            heroImg="https://images.unsplash.com/photo-1567985086779-804cf552d5f4?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            btnClass='hide'
            />
            <TourList/>
            <Footer/>


        </>
    )
}