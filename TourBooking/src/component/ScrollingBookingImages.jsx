import { useRef, useEffect } from 'react';
export default function ScrollingBookingImages(){
    const imgs =[
                "https://i.pinimg.com/736x/66/c3/61/66c3614d55d718bea36c2fca8743a8d5.jpg",
        "https://i.pinimg.com/1200x/25/d2/91/25d291db3a0b061a89d0c78eb66556aa.jpg", 
        "https://i.pinimg.com/1200x/bc/ad/1f/bcad1f4b4a174c9727b013f78e2351d5.jpg",
        "https://i.pinimg.com/1200x/30/0f/60/300f603f2b12e65b82e86bf3c229258f.jpg",
        "https://i.pinimg.com/1200x/39/3a/2b/393a2b7b212891f8597d89e0fc9fcf25.jpg"
    ]
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
        <div className="booking-images-scroll-container" ref={containerRef}>
            {[...imgs, ...imgs].map((src, idx) => (
            <img
                key={idx}
                src={src}
                className="booking-images-scroll-item booking-images-large"
            />
            ))}
        </div>
    )
}