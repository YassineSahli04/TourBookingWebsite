import { Link } from "react-router-dom"

export default function TourCard(props){
    return(
        <Link to={`/tour/${props.id}`} className="t-card">

            <div className="t-image">
                <img src={props.image} alt="image" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>

        </Link>


    )

}