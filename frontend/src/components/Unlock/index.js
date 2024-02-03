import React from 'react'
import index from './index.css'

export const Unlock = () => {
  return (
    <>
    <div className='Unlock'>
        <div className='unlock-1'>
            <div className='unlock-tagline'>
                <span style={{color:'white'}}>Unlock </span> your<br />
                <span style={{color:'white'}}>Potential</span> with our<br/>
               Courses
            </div>
            <div className='unlock-desc'>
            Discover the secrets of the trading world with our Trading Tiers Course. We’re here to help you <span style={{color:'white',fontWeight:'600'}}>dominate the markets</span> and turn those dollar<span style={{color:'white',fontWeight:'600'}}> dreams into reality.</span> 
            </div>
        </div>
        <div className='unlock-2'>
            <div className='two-flex'>
                <div className='numb-div'>
                    <div className='numb-head'>
                    50+
                    </div>
                    <div className='numb-desc'>
                    Hours of Content
                    </div>
                </div>
                <div className='numb-div'>
                    <div className='numb-head'>
                    5
                    </div>
                    <div className='numb-desc'>
                    Expert Members
                    </div>
                </div>
                
            </div>
            <div className='three-flex'>
                <div className='numb-div'>
                    <div className='numb-head'>
                    300+
                    </div>
                    <div className='numb-desc'>
                    Members
                    </div>
                    
                </div>
                <div className='numb-div'>
                    <div className='numb-head'>
                    90%
                    </div>
                    <div className='numb-desc'>
                    Success Courses
                    </div>
                </div>
                <div className='numb-div'>
                    <div className='numb-head'>
                    24/7
                    </div>
                    <div className='numb-desc'>
                    Mentors
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}
