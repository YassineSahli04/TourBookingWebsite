import DefaultImage from "../assets/LacSunset(7,5).jpg"
import Hero from "../component/Hero.jsx"
import Navbar from "../component/Navbar.jsx"
import Footer from "../component/Footer.jsx"
import TourDetail from "../component/TourDetail.jsx"
import { useParams } from 'react-router-dom';
import { ToursData } from "../component/ToursData.js"


export default function TourDetailPage(props){
    const {id} = useParams();
    console.log(id)
    const tour = ToursData.find((tour) => tour.id === id);

    return(
        <>
            <Navbar/>
            <Hero 
            title=""
            cName="hero-mid"
            heroImg={!tour ? DefaultImage:tour.detailsHeaderImage}
            btnClass='hide'
            />
            <div>
            { !tour ? (
                <p>Tour not found.</p>
                ) : (
                <TourDetail tour={tour} />
                )
            }
            </div>             
            <Footer/>
        </>
    )
}