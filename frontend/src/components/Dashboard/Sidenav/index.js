import React, { useEffect, useState } from 'react'
import index from './index.css'
import logo from '../../../assets/logoalt.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CgFeed } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdOutlineCallToAction } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export const Sidenav = () => {
  const [select, setSelect] = useState(null);
  const navigate = useNavigate();
  const khatam=()=>{
    localStorage.removeItem('id');
    document.cookie = 'userId=;';
    document.cookie = 'username=;';
    toast.success("Logged Out Successfully")
    setTimeout(()=>{navigate('/login')},5000)
    window.location.reload();
   
  }
  useEffect(() => {
    const currentURL = window.location.href;
    let url = currentURL.split('/')[3];
    let element = null;

    if (url === 'home') {
      element = document.querySelector('.op1');
    } else if (url === 'profile') {
      element = document.querySelector('.op2');
    } else if (url === 'course') {
      element = document.querySelector('.op3');
    } else if (url === 'chat') {
      element = document.querySelector('.op4');
    }
   

    const elementsToRemoveClass = document.querySelectorAll('.options-dash');

    elementsToRemoveClass.forEach((el) => {
      el.classList.remove('opened');
    });

    if (element) {
      element.classList.add('opened');
      setSelect(element);
    }
  }, []);

  const redirect = (event) => {
    if (select) {
      select.classList.remove('opened');
    }

    const clickedElement = event.currentTarget;
    clickedElement.classList.add('opened');

    setSelect(clickedElement);

    const value = clickedElement.getAttribute('data-value');
    navigate('/' + value);
  };

  return (
    <><ToastContainer/>
      <div className='sidenav'>
        <img className='sidenav-logo' src={logo} alt='logo' />
        <div className='navigation'>
          <div className='options-dash op1' data-value='home' onClick={redirect}>
            <CgFeed className='icon-dash' />
            Feed
          </div>
          <div className='options-dash op2' data-value='profile' onClick={redirect}>
            <CgProfile className='icon-dash' />
            Profile
          </div>
          <div className='options-dash op3' data-value='course' onClick={redirect}>
            <MdOutlineCallToAction className='icon-dash' />
            Course
          </div>
          <div className='options-dash op4' data-value='chat' onClick={redirect}>
            <IoChatbubbleEllipsesOutline className='icon-dash' />
            Chat
          </div>
        </div>
        <div style={{fontSize:'16px',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',padding:'8px',cursor:'pointer',backgroundColor:'rgb(69, 69, 69,0.2)',color:'red'}} onClick={khatam}>Logout</div>
      </div>
    </>
  );
};
