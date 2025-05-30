import "./TourStyle.css"
import TourData from "./TourData"
import SaharaHotel1 from "../assets/SaharaHotel1.webp"

export default function Tour(){
    return(
        <div className="tour">
            <h1>Available Trips</h1>
            <p>Unforgettable journeys through Tunisia’s most stunning destinations</p>
            <div className="tourcard">
                <TourData
                    image={SaharaHotel1}
                    heading="Anantara Sahara Tozeur"
                    text="On the edge of the desert in Tozeur, Anantara blends five-star comfort with Saharan charm. Surrounded by dunes and palm groves, it offers camel rides, 4x4 excursions, stargazing, and spa treatments — all with breathtaking desert views."  
                />
                <TourData
                    image={SaharaHotel1}
                    heading="Anantara Sahara Tozeur"
                    text="Nestled on the edge of the desert in the heart of Tozeur, Anantara is a five-star oasis that blends elegance with authentic Saharan charm. Surrounded by palm groves and golden dunes, the hotel offers world-class amenities and a serene escape into nature. Guests can enjoy camel rides at sunset, 4x4 desert excursions, star-gazing experiences, and rejuvenating spa treatments — all while overlooking breathtaking desert landscapes. Whether you're seeking adventure or relaxation, Anantara Tozeur turns your stay in the Sahara into a luxurious journey."
                />
                <TourData
                    image={SaharaHotel1}
                    heading="Anantara Sahara Tozeur"
                    text="Nestled on the edge of the desert in the heart of Tozeur, Anantara is a five-star oasis that blends elegance with authentic Saharan charm. Surrounded by palm groves and golden dunes, the hotel offers world-class amenities and a serene escape into nature. Guests can enjoy camel rides at sunset, 4x4 desert excursions, star-gazing experiences, and rejuvenating spa treatments — all while overlooking breathtaking desert landscapes. Whether you're seeking adventure or relaxation, Anantara Tozeur turns your stay in the Sahara into a luxurious journey."
                />                                
            </div>
        </div>
    )

}