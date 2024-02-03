import React from 'react'
import { Navbar } from '../Navbar'
import { Getstart } from '../Getstart'
import { Unlock } from '../Unlock'
import { Ourcourses } from '../Ourcourses'
import { Aboutus } from '../Aboutus'
import {Testimonials} from '../Testimonials'
import { Vibrant } from '../Vibrant'
import { Ourpackages } from '../Ourpackages'
import { Ourmentors } from '../Ourmentors'
import { Drawer } from '../Drawer'
import { Faqs } from '../Faqs'
import { Footer } from '../footer';
import { Feed } from '../Dashboard/Feed'
import { Profile } from '../Dashboard/Profile'
import { Video } from '../Video'


export const Landing = () => {

  
  return (
<>

<Drawer/>
<Navbar/>
<Video/>
<Getstart/>
<Unlock/>
<Ourcourses/>
<Aboutus/>
<Testimonials/>
<Vibrant/>
{/* <Ourpackages/> */}
<Ourmentors/>
<Faqs/>
<Footer/>


    </>
  )
}
