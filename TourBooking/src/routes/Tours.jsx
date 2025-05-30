import AboutImg from "../assets/Tours1.jpg"
import Hero from "../component/Hero"
import Navbar from "../component/Navbar"
import Tour from "../component/Tour.jsx"
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
            <Tour></Tour>
            <Footer/>


        </>
    )
}