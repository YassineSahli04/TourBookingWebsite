import Navbar from "../component/Navbar"
import Hero from "../component/Hero"
import AboutImg from "../assets/About1.jpg"
import Footer from "../component/Footer"

export default function About(){
    return(
        <>
            <Navbar/>
            
            <Hero 
            title="Behind The Journey"
            cName="hero-mid"
            heroImg="https://images.unsplash.com/photo-1479778633766-1272efd64a29?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            btnClass='hide'
            />

            <Footer/>
        </>
    )
}