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
            heroImg={AboutImg}
            btnClass='hide'
            />
            <TourList/>
            <Footer/>


        </>
    )
}