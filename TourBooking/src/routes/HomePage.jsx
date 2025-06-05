import Navbar from "../component/Navbar"
import Hero from "../component/Hero"
import Destination from "../component/Destination"
import HomeImg from '../assets/HomePage.jpg'
import Footer from "../component/Footer"
export default function Home(){

    return(
        <>
            <Navbar/>
            
            <Hero 
            title="Your Journey Your Story"
            text="Choose Your Favorite Destination."
            cName="hero"
            heroImg={HomeImg}
            btnText="Tour Plan"
            btnClass="show"
            url="/tours"
            />
            <Destination/>
            <Footer/>
        </>
    )
}