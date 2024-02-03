import React, { useEffect, useRef, useState } from "react";
import index from "./index.css";
import { FaPlay } from "react-icons/fa";
import s1 from "../../assets/s11.jpg";
import s2 from "../../assets/s22.jpg";
import s3 from "../../assets/s3.webp";
import vr from "../../assets/vr.png";
import In from "../../assets/in.png";
import logo2 from "../../assets/logo2.png";
import herobg from '../../assets/herobg.jpeg'
import heroo from '../../assets/heroo2.png'

export const Getstart = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
    // Additional logic you want to execute on mouse over
  };

  const handleMouseLeave = () => {
    setHovered(false);
    // Additional logic you want to execute on mouse leave
  };

  useEffect(() => {
    // Add the 'active' class after a slight delay to trigger the animation
    const timeout = setTimeout(() => {
      const flexPC = document.querySelector(".flex-pc");
      if (flexPC) {
        flexPC.classList.add("active");
      }
    }, 10); // Adjust the delay time as needed

    return () => clearTimeout(timeout);
  }, []);
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delayTimer = setTimeout(() => {
            const interval = setInterval(() => {
              const increment = Math.ceil(5000 / 250);
              setCount((prevCount) => {
                const newCount = prevCount + increment;
                return newCount >= 5000 ? 5000 : newCount;
              });
            }, 10);

            return () => clearInterval(interval);
          }, 10);

          return () => clearTimeout(delayTimer);
        }
      });
    }, {
      threshold: 0.5, // Adjust this threshold as needed
    });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);
  const openVideoPopup=()=>{
    document.querySelector('.full-screen').classList.add('show-full');
    document.body.style.overflow = 'hidden';
  }

  return (
    <>
      <div className="hero-section" id='Home'>
        <div ref={countRef} className={`flex-pc fade-in`}>
          <div className="flex-col-1">
            <div className="hero-tagline">
              <div style={{position:'relative'}}>
                
                <span className="tagline">TRADING </span>
                <span className="tiers">TIERS</span>
              </div>
              <span className="enroll-pc">Learn. Trade. LevelUp.</span>
            </div>
            <div className="welcome">
            Welcome to Trading Tiers, where our mission is to empower you to unlock your full trading potential. With a track record of over 5 years in successful trading, we've guided over 200 students to become profitable traders. Join us on a transformative journey to gain the skills and knowledge essential for lasting success in the financial markets. Our top-notch courses provide advanced insights, paving the way to financial independence. Elevate your trading expertise with Trading Tiers and set sail toward a prosperous future. 🚀📈


            </div>

            <div className="btn-getstarted" onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave} onClick={openVideoPopup}>
              <FaPlay className={`rotation-play ${hovered ? 'rotation-play2' : ''}`}   />
              <div>Get Started</div>
            </div>
            <div className="happy-users">
              <div className="users-img">
                <img src={s1} />
                <img src={s2} />
                <img src={s3} />
              </div>
              <div className="users-number">
                <div>+{count}</div>
                <div>Happy Users</div>
              </div>
            </div>
          </div>
          {/* <div className="flex-col-2">
            <div className="images-flex-col-2">
              <img src={vr} />
              <img src={logo2} />
              <img src={In} />
            </div>
          </div> */}
          <div className="flex-col-2-mobile">
            <img src={heroo}/>
          </div>

        </div>
      </div>
    </>
  );
};
