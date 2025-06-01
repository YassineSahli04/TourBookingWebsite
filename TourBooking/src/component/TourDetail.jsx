import './TourDetailStyle.css';
import { useRef, useEffect } from 'react';



export default function TourDetail({tour}){
   const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let requestId;

    const step = () => {
      container.scrollLeft += 1;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      requestId = requestAnimationFrame(step);
    };

    requestId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <div className="tour-detail">
      <h2 className="tour-title-full">{tour.title}</h2>

      <div className="tour-images scroll-container" ref={containerRef}>
        {[...tour.images, ...tour.images].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`${tour.title} view ${idx + 1}`}
            className="scroll-item large"
          />
        ))}
      </div>

      <div className="tour-content">
        <div className="tour-description-box">
          <h3>Description</h3>
          <p className="tour-description">{tour.description}</p>
        </div>
        <div className="tour-includes-box">
          <h3>What's Included</h3>
          <ul className="tour-includes-list">
            {tour.includes.map((inc, idx) => (
              <li key={idx} className="include-item">{`${idx +1} - ${inc}`}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}