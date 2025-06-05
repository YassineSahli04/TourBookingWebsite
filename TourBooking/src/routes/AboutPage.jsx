import Navbar from "../component/Navbar"
import Hero from "../component/Hero"
import Footer from "../component/Footer"
import "../component/AboutUsStyle.css"

export default function About(){
    return(
        <>
            <Navbar/>
            
            <Hero 
            title="Behind The Journey"
            cName="hero-mid"
            heroImg="https://plus.unsplash.com/premium_photo-1675367606669-1e75e533f47e?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            btnClass='hide'
            />
            <div class="about-container">
                <h1>Our Story</h1>
                <p>Founded in 2025 by a team of passionate travelers and local historians, TripTours Tunisia began with a simple goal: to share the authentic soul of Tunisia with visitors from around the world. What started as small, family-led excursions into the Tunisian desert and medinas has grown into a full suite of themed experiences—ranging from archaeological explorations to coastal escapes. Along the way, we’ve partnered with local guides, Bedouin families, and artisans to preserve traditions and support community livelihoods. Today, our roots in every region of Tunisia—from the dunes of Tozeur to the mosaic halls of the Bardo Museum—inform every itinerary we create.</p>
                <h1>Our Mission</h1>
                <p>At TripTours Tunisia, our mission is to create meaningful connections between travelers and Tunisia’s richest cultural, natural, and historical treasures. We believe that the best way to experience a place is through the people who call it home. By designing small-group and private tours guided by experts—whether combing the Roman ruins at Dougga, tasting street-food in Sfax, or camping under the Saharan stars—we foster genuine understanding and respect. We strive to operate ethically and sustainably, ensuring that every guest leaves with an unforgettable story and every community we visit benefits directly.</p>

                <h1>Our Vision</h1>
                <p>We envision a future where every traveler to Tunisia departs not just with photographs, but with a deep appreciation for our country’s diverse landscapes, living traditions, and resilient people. As we expand, we aim to become the leading platform for responsible, themed travel across North Africa—celebrating local culture, supporting grassroots initiatives, and pioneering eco-friendly practices. Whether you seek ancient history, desert adventure, culinary discovery, or seaside relaxation, our vision is to be the trusted bridge between you and the heart of Tunisia.</p>
            </div>



            <Footer/>
        </>
    )
}