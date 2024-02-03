import React from 'react'
import { Sidenav } from '../Sidenav'
import index from './index.css'
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";
import { Bottombar } from '../Top';
import { Bottom } from '../Bottom';
import { Userpost } from '../Userpost';

export const Feed = ({data}) => {
  return (
    
    <>
    <Bottombar/>
    <Bottom/>
    <div className='feed'>
    <Sidenav/>
    <div className='feed-land'>
        <div className='feed-scroll'>
            <div className='feed-header'>
                <div className='f-head'>
                    <div className='feed-text'>Feed</div>
                    <div className='filter-feed'>Today 
                    {/* <MdOutlineArrowDropDownCircle/> */}
                    </div>
                </div>
            </div>
            <div className='flex-two-panels'>
                <div className='posts'>
                  <div className='no'> That's It No More Posts To Show</div>
                  <Userpost data={data}/> 
                </div>
                <div className='rightbar'>
                    <div className='upcoming'>
                        <div className='upcoming-head'>
                            <div className='u-work'>Upcoming Sessions </div>
                            <div className='see-all'>see all</div>
                        </div>
                        <div className='scheduled-upcoming'>
                            <FaClockRotateLeft style={{fontSize:'72px'}}/>
                            <div>Your scheduled sessions will appear here. Add them to your calendar and join when the Button appears.</div>

                        </div>
                    </div>
                    <div className='popular'>
                        <div className='popular-head'>Popular Services</div>
                        <div className='list-full'>
                            <div className='service'></div>
                            <div className='service'></div>
                            <div className='service'></div>
                             <div className='service'></div>
                            <div className='service'></div>
                            <div className='service'></div>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
    </div>
   </>
  )
}
