import "./TourStyle.css"
import TourCard from "./TourCard"
import { ToursData } from "./ToursData"

export default function TourList(){
    return(
        <div className="tour">
            <h1>Available Trips</h1>
            <p>Unforgettable journeys through Tunisia’s most stunning destinations</p>
            <div className="tourcard">
                {ToursData.map((item) =>(
                <TourCard
                    key={item.id}
                    id={item.id}
                    image={item.cardImage}
                    heading={item.heading}
                    text={item.shortDescription}  
                />
                ))}                           
            </div>
        </div>
    )

}