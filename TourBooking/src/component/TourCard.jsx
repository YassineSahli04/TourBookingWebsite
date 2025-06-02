import { Link } from "react-router-dom"
import "./TourStyle.css"

export default function TourCard(props) {
  return (
    <Link to={`/tour/${props.id}`} className="t-card scroll-item-card large-card">
      <div className="t-image">
        <img src={props.image} alt={props.heading} />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </Link>
  );
}
