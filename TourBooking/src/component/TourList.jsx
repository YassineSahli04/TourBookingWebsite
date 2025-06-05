import "./TourStyle.css"
import TourCard from "./TourCard"
import { ToursData } from "./ToursData"
import { useRef, useEffect } from 'react';


export default function TourList() {
  const scrollContainer = useRef(null);

  useEffect(() => {
    const box = scrollContainer.current;
    let id;
    const step = () => {
      box.scrollLeft += 1;
      if (box.scrollLeft >= box.scrollWidth / 2) {
        box.scrollLeft = 0;
      }
      id = requestAnimationFrame(step);
    };
    id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="tour">
      <h1>Available Tours</h1>
        <div className="scroll-container"  ref={scrollContainer}>
          {[...ToursData, ...ToursData].map((item) => (
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
  );
}
