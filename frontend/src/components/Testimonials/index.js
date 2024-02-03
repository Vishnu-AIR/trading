import React, { useRef, useState } from "react";
import index from "./index.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaStar } from "react-icons/fa";
import { ImQuotesRight } from "react-icons/im";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const images = [
  "https://www.youtube.com/embed/WIM5sjd55dw",
  "https://www.youtube.com/embed/BXvbxzzkfaY",
  "https://www.youtube.com/embed/qVcHlaFZf6A",
];

const rev=[
  "Enrolling in the Trading Tiers Course was a game-changer for me. The in-depth knowledge and practical strategies I gained have transformed my approach to trading. Vanshika's emphasis on trading with strategy, not emotions, has been invaluable. I highly recommend it!",
  "As someone new to trading, I was initially overwhelmed. The Trading Tiers Course provided a structured and comprehensive learning path. The mentorship and community support made a significant difference. Now, I feel confident navigating the markets.",
  "Having been in the markets for years, I was impressed by the advanced technical strategies covered in the course. The focus on fundamentals added a new dimension to my trading. Trading Tiers is not just for beginners; it's a resource for continuous improvement.",
  "Ishanbir's insight into the crypto market convinced me to take the plunge, and I'm glad I did. The course provided a solid foundation for understanding and investing in cryptocurrencies. It's an excellent resource for anyone looking to explore this exciting market.",
  "I enrolled in the Trading Tiers Course to achieve financial independence. Ishanbir's teachings and the emphasis on breaking free from the 9-to-5 grind resonated with me. The course has been instrumental in my journey towards financial freedom.",
  "Patience is a virtue, and the Trading Tiers Course taught me just that. Vanshika’s journey of evolving from an impatient trader to a strategic one resonated with me. The course instilled discipline, and I've seen a positive impact on my trading results.",
  "The self-paced nature of the Trading Tiers Course allowed me to balance my job and learning. The online platform is user-friendly, and the variety of resources provided made the learning experience both engaging and flexible.",
  "What sets Trading Tiers apart is not just the content but the community. The forums and live webinars create an environment where students can share experiences and learn from each other. It's like having a trading family."



]
export const Testimonials = () => { const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollAmount = 300; // Adjust this value to change scroll amount

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollPosition - scrollAmount);
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollPosition + scrollAmount);
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };


  return (
  
    <>
      <div className="testimonials">
        <div className="testimonials-flexbox">
          {/* <div className="testimonials-left">
            <Carousel useKeyboardArrows={true}>
              {images.map((URL, index) => (
    <div className="slide">
      <iframe
        width="400px"
        height="600px"
        src={images[index]}
        title="Shoot Vertical Video with Mirrorless Camera"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  ))}
            </Carousel>
          </div> */}
          <div className="testimonials-right">
            <div className="right-test-head">
              <div className="rating-testimonial">
                <div style={{color:'gray',fontSize:'36px'}}><span style={{color:'white'}}>5</span>/5</div>
                <div className="rating-stars"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                <div style={{color:'gray'}}>Student Rating</div>
              </div>
              <div className="heading-testimonial">
                <div className="rh-1">Testimonials</div>
                <div><span className="rh-2">HERE'S WHAT</span> OUR </div>
                <div><span className="rh-2">CURRENT</span> STUDENTS</div>
                <div><span className="rh-2">HAVE TO</span> SAY...</div>
              </div>
            </div>
            <div style={{position:'relative'}}>
            <div className="scroll-buttons">
              {/* Scroll navigation buttons */}
              <button className="scroll-button-1" onClick={scrollLeft}>
                <FaArrowLeft />
              </button>
              <button className="scroll-button-2" onClick={scrollRight}>
                <FaArrowRight />
              </button>
            </div>
            <div className="review-scrollable" ref={scrollContainerRef}>
              {rev.map((review, index) => (
                <div key={index} className="scrollables">
                  {/* Testimonial content */}
                  <ImQuotesRight style={{ fontSize: "24px", color: "green" }} />
                  <div className="review-content">{review}</div>
                </div>
              ))}
              
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};
