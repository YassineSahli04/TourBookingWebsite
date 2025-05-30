import Navbar from "../component/Navbar"
import Hero from "../component/Hero"
import AboutImg from "../assets/About1.jpg"

export default function About(){
    return(
        <>
            <Navbar/>
            
            <Hero 
            title="Behind The Journey"
            cName="hero-mid"
            heroImg={AboutImg}
            btnClass='hide'
            />
        </>
    )
}