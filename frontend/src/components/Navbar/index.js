import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import index from './index.css'
import logo from '../../assets/logo.png';



export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // Perform actions after the component mounts or when location changes
    const path = location.pathname;
    // Your logic to set 'selected' based on 'path'
    // For example, you can compare 'path' to determine the selected element

    // Example: Check if 'path' includes a certain string and set 'selected' accordingly
    if (path.includes('/home')) {
      setSelected('Home');
    } else if (path.includes('/about')) {
      setSelected('About');
    }
    // ... other conditions based on your URL structure

  }, [location]);
  
  useEffect(() => {
    // Perform actions after the component mounts
    const element = document.querySelector('.option1');
    element.classList.add('selected')
    setSelected(element);
    
  }, []); 
  const changecolor=(event,x)=>{
    if(event.target.classList[0]!='contact-pc'){
    document.getElementById(x).scrollIntoView({ behavior: 'smooth' })}
    selected.classList.remove('selected')
    if(event.target.classList[0]!='contact-pc'){
    event.target.classList.add('selected');
  }
  if(event.target.classList[0]=='contact-pc'){
    navigate('/login')
    window.location.reload()
  }
    
    setSelected(event.target)



  
  }
  const opendrawer=()=>{
    document.querySelector('.Drawer').style.transform='translateY(0px)';
    // console.log(0);
    ['c1', 'c2', 'c3', 'c4', 'c5'].forEach(className => {
      document.querySelector(`.${className}`).classList.add('animated');
  });
  }
  return (
   <>
    <div className='Navbar'>
      <div className='Nav-container'>
        <img className='logo' src={logo}/>
       <div className='nav-options'>
        <div onClick={(event) => changecolor(event, 'Home')} className='option1'><div>Home</div></div>
<div onClick={(event) => changecolor(event, 'About')} className='option2'><div>About</div></div>
<div onClick={(event) => changecolor(event, 'Courses')} className='option3'>Courses</div>
<div onClick={(event) => changecolor(event, 'Mentors')} className='option4'>Mentors</div>
<div onClick={(event) => changecolor(event, null)} className='contact-pc'>Login</div>
        </div>
        <div className='Hamburger' onClick={opendrawer}>
          <div className='l1'></div>
          <div className='l2'></div>
          <div className='l3'></div>
        </div>
      </div>
        
    </div>
   </>
  )
}
