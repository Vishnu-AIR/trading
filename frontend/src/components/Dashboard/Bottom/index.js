import React, { useEffect, useState } from 'react';
import './index.css'; // Assuming index.css contains your styles
import { useNavigate } from 'react-router-dom';
import { CgFeed } from 'react-icons/cg';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { MdOutlineCallToAction } from 'react-icons/md';

export const Bottom = () => {
  const navigate = useNavigate();
  const [selector,setSelector]=useState(null);
  useEffect(() => {
    const currentURL = window.location.href;
    let url=currentURL.split('/')[3]
    let element=null;
    if(url=='home'){
       element = document.querySelector('.o1');
    }
    else if(url=='course'){
       element = document.querySelector('.o2');
    }
    else if(url=='chat'){
       element = document.querySelector('.o3');
    }
    else if(url=='profile'){
      element = document.querySelector('.myprof');
    }
    
    if(url!='profile'){
    element.classList.add('current');
    setSelector(element);}
    else{
      element.classList.add('current')
      setSelector(element)
    }
  }, []);

  const redirect2 = (event) => {

   selector.classList.remove('current')
    
    event.target.classList.add('current');
  
    
    setSelector(event.target)
    const value2 = event.target.getAttribute('data-value'); // Fetch custom data-value
    navigate('/' + value2);
  };

  return (
    
    <div className='bottom-2'>
      <div className='redirection'>
        <div  className='col-hover o1' data-value='home' onClick={redirect2}>
          <CgFeed style={{zIndex:'-1'}} />
          <div style={{zIndex:'-1'}}>Feed</div>
        </div>
        <div  className='col-hover o2' data-value='course' onClick={redirect2}>
          <MdOutlineCallToAction style={{zIndex:'-1'}} />
          <div style={{zIndex:'-1'}}>Course</div>
        </div>
        <div  className='col-hover o3' data-value='chat' onClick={redirect2}>
          <IoChatbubbleEllipsesOutline style={{zIndex:'-1'}} />
          <div style={{zIndex:'-1'}}>Chat</div>
        </div>
       
      </div>
      
    </div>
    
    
  );
};
