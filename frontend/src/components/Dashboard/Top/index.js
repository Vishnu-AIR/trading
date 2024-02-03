import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import index from './index.css'
import logo from '../../../assets/logoalt.png'
import { RiUser4Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';


export const Bottombar = () => {
  const navigate = useNavigate();
  const khatam=()=>{
    localStorage.removeItem('id');
    document.cookie = 'userId=;';
    document.cookie = 'username=;';
    toast.success("Logged Out Successfully")
    setTimeout(()=>{navigate('/login')},5000)
    window.location.reload();
   
  }
  const currentURL = window.location.href;
  let url=currentURL.split('/')[3]
  const open=()=>{
    let a = document.querySelector('.chat-list')
    if(a.classList[1]){
      a.classList.remove('reset')
    }
    else{
      a.classList.add('reset')
    }
  }
  const open2=()=>{
    let a = document.querySelector('.course-right')
    if(a.classList[1]){
      a.classList.remove('reset')
    }
    else{
      a.classList.add('reset')
    }
  }
  return (
    <>
    <ToastContainer/>
    <div className='bottom-bar'>
        <div className='bottom-navigator'>
            <img className='logo-bottom' src={logo}/>
            {url=='chat' && <div style={{color:'white',cursor:'pointer'}} onClick={open}>Switch</div>}
            {url=='course' && <div style={{color:'white',cursor:'pointer'}} onClick={open2}>Switcher</div>}
            <div style={{display:'flex',color:'red',alignItems:'center',gap:'24px'}}>
            <div className='myprof' onClick={()=>{navigate('/profile')}}><RiUser4Fill style={{color:'white',cursor:'pointer',height:'60px',width:'30px'}} /></div>
            <div onClick={khatam} >Logout</div>
            </div>
        </div>
    </div>
    </>
  )
}
