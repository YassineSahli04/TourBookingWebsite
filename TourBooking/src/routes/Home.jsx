import Navbar from "../component/Navbar"
import Hero from "../component/Hero"
export default function Home(){
    const props = {
        title:''
    }
    return(
        <>
            <Navbar/>
            
            <Hero 
            title="Your Journey Your Story"
            text="Choose Your Favorite Destination."
            cName="hero"
            heroImg="https://images.unsplash.com/flagged/photo-1557899775-24a0957d3895?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            btnText="Travel Plan"
            btnClass="show"
            url="/"
            />
        </>
    )
}