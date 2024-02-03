import React from 'react'
import index from './index.css'
import vr from '../../assets/vr.png'
import In from '../../assets/in.png'
import om from '../../assets/omm.png'


export const Ourmentors = () => {
  return (
    <>
     <img className='om' src={om} id='Mentors2'/>
    <div className='our-mentors' id='Mentors'>
        <div className='our-mentors-head'>
            <span className='head-text'>Our Mentors </span>
        </div>
       
        <div className='mentors-flexbox'>
            <div className='mentor-1'>
               
                <div className='mentor-1-about'>
                <img src={vr}/>
                    <div className='mentor-details'>
                    <div className='mentor-1-name'>
                    <span style={{color:'white',fontWeight:'bold'}}>Vanshika</span> Rastogi
                    </div>
                    <div className='mentor-about'>
                    Meet Vanshika Rastogi, your trading guide! With over 5 years of hands-on experience in market trading, I've turned my passion into a lifelong career. My expertise? Price action, risk management, and psychology—the keys to trading success. I believe in treating trading like a business to balance emotions from highs and lows. My commitment? Guiding every student to financial freedom through smart trading decisions. Join me, and let's master the art of trading, unlocking secrets for sustained success!

                    </div>
                    </div>
                </div>
                <div className='triangle-1'></div>
            </div>
            
           
            <div className='mentor-2'>
               
                <div className='mentor-2-about'>
               
                    <div className='mentor-details'>
                    <div className='mentor-2-name'>
                    <span style={{color:'white',fontWeight:'bold'}}>Ishanbir</span> Narula
                    </div>
                    <div className='mentor-about'>
                   In my 8 years of navigating trading and investing, I started just like you—impatient and lacking impulse control. But with time, I specialized in strategic trading, steering clear of emotions. My approach involves advanced technical strategies and trading on fundamentals, all cultivated through patience and dedication. I'm an early-age investor and a strong believer in the potential of cryptocurrencies. My mission? Empower all students to achieve financial independence, breaking free from the traditional 9-to-5 grind. Join me on this journey of mastering the markets and building a future of financial freedom together.

                    </div>
                    </div>
                    <img src={In}/>
                </div>
                 <div className='triangle-2'></div>
            </div>
           
        </div>

    </div>
    </>
  )
}
