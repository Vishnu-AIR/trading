import React from 'react'
import index from './index.css'
import { Bottom } from '../Bottom'
import { Bottombar } from '../Top'
import { Sidenav } from '../Sidenav'

export const Course = () => {
  return (
   <>
   <div className='course-page'>
    <Bottom/>
    <Bottombar/>
    
  
    <Sidenav/>
    <div className='course-land'>
        <div className='course-left'>
            <div className='start-learning'>
                <div className='learn-text'>Let's Start Learning, Name</div>
                <div className='search-learn'>
                    <input type='text' placeholder='Ex: Company, People, Skill.....' />
                </div>
            </div>
        </div>
        <div className='course-right'>
            <div>CURRENT COURSE</div>
        </div>
    </div>
    </div>
    
   </>
  )
}
