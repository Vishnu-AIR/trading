import React, { useEffect, useState } from "react";
import index from "./index.css";
import { Sidenav } from "../Sidenav";
import { Bottombar } from "../Top";
import { Bottom } from "../Bottom";
import user from "../../../assets/user.jpeg";
import { FaCamera } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { IoIosArrowDropright } from "react-icons/io";
import { CiWallet } from "react-icons/ci";
import { GoHistory } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { LiaEditSolid } from "react-icons/lia";
import { RxDashboard } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TiTickOutline } from "react-icons/ti";



export const Profile = ({data}) => {
  const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
  const [nameEdit, setNameEdit] = useState(true);
  const [phoneEdit, setphoneEdit] = useState(true);
  const [emailEdit, setemailEdit] = useState(true);
  const [bioEdit, setBioEdit] = useState(true);
  const [nicheEdit, setNicheEdit] = useState(true);
  const [name,setname]=useState(data.name)
  const [email,setemail]=useState(data.email)
  const [phone,setphone]=useState(data.phone)
  const [bio,setbio]=useState(data.bio)
  const [niche,setniche]=useState(data.niche);
  const [formData, setFormData] = useState(new FormData());
  const [imgUrl,setimgUrl] = useState(null)
  const [userPhoto, setUserPhoto] = useState(data.imgUrl); // State to store user's photo
  // console.log(name)
  const handleElementClick = (title) => {
    if (title === 'Personal Details') {
      openpopup();
    } else if (title === 'Update Phone & Email') {
     openpopup2()
    }
    // Add more conditions as needed for other titles
  };
 
  const toggleEdit = (editType,id) => {
    if(document.getElementById(id).classList[1]){
      document.getElementById(id).classList.remove('display-button')
    }
    else{
      document.getElementById(id).classList.add('display-button')
    }
    if (editType === "name") {
      setNameEdit(!nameEdit);
    } else if (editType === "bio") {
      setBioEdit(!bioEdit);
    } else if (editType === "niche") {
      setNicheEdit(!nicheEdit);
    }
    else if (editType === 'phone') {
      setphoneEdit(!phoneEdit);
    } else if (editType === 'email') {
      setemailEdit(!emailEdit);
    }
  };
 

  const handleImageChange = (event) => {
    const formData = new FormData();
    
    const file = event.target.files[0];
    console.log(file)
    if (file) {
      const updatedFormData = new FormData();
      updatedFormData.append('image', file, file.name);
      setFormData(updatedFormData);
      const reader = new FileReader();
  
      reader.onloadend = () => {
        // Set the uploaded image data to state (userPhoto)
        setUserPhoto(reader.result);
      };
  
      reader.readAsDataURL(file);
  
      // Display the "Save" button once an image is chosen
      const saveButton = document.getElementById('saveImageBtn');
      if (saveButton) {
        saveButton.style.display = 'block';
      }
    }
    
    
  };
  const detailsaved=async ()=>{
    try{
      const response = await fetch(apiEndpoint+'users/'+data._id,{
        method: 'PATCH',
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({name,bio,niche,email,phone,imgUrl})
      });
      if (response.ok){
        const data=await response.json();
        console.log(data);
        toast.success( 'Information Updated Successfully!')
      }
      else{
        toast.warning('Try Again')
      }
    }
    catch(error){
      toast.error('Internal Server Error Occured')

    }
  }
  const photo = async (event) => {
    event.preventDefault();
    try {
      // Assuming 'image' is the field name for the profile picture
  
      const response = await fetch(apiEndpoint+'upload/'+data._id, {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setimgUrl('https://tt-t01-v01.onrender.com'+responseData.fileDetails.url)
        localStorage.setItem("image",'https://tt-t01-v01.onrender.com'+responseData.fileDetails.url)
        
        toast.success('Profile Picture Updated Successfully!');
      } else {
        toast.warning('Try Again');
      }
    } catch (error) {
      console.log(error);
      toast.error('Internal Server Error Occurred');
    }
    detailsaved()
    try {
      // Assuming 'image' is the field name for the profile picture
  
      const response = await fetch(apiEndpoint+'upload/'+data._id, {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setimgUrl('https://tt-t01-v01.onrender.com'+responseData.fileDetails.url)
        localStorage.setItem("image",'https://tt-t01-v01.onrender.com'+responseData.fileDetails.url)
        
        toast.success('Profile Picture Updated Successfully!');
      } else {
        toast.warning('Try Again');
      }
    } catch (error) {
      console.log(error);
      toast.error('Internal Server Error Occurred');
    }
    detailsaved()
  };
  
  const profileElements = [
    {
      icon: <CiUser style={{ fontSize: "36px" }} />,
      title: "Personal Details",
      description: "Update your name, bio, niche and more",
    },
    {
      icon: <CiWallet style={{ fontSize: "36px" }} />,
      title: "Payments Details",
      description: "Manage your payment docs and handles",
    },
    {
      icon: <GoHistory style={{ fontSize: "36px" }} />,
      title: "Purchase History",
      description: "Review your Purchases and Downloads",
    },
    {
      icon: <LiaEditSolid style={{ fontSize: "36px" }} />,
      title: "Update Phone & Email",
      description: "Update your Email/Phone Number",
    },
    {
      icon: <RxDashboard style={{ fontSize: "36px" }} />,
      title: "Affiliate Dashboard",
      description: "Manage Your Affiliate Income and Dashboard",
    },

    // Add more objects here for each profile element
  ];
  const openpopup=()=>{
    document.querySelector('.detail-editor').classList.add('startdisplay')
    
}

const openpopup2=()=>{
  document.querySelector('.detail-editor-2').classList.add('startdisplay')
}
const closepopup=()=>{
  document.querySelector('.detail-editor').classList.remove('startdisplay');
  
   
}
const closepopup2=()=>{
  document.querySelector('.detail-editor-2').classList.remove('startdisplay');
  
}
  return (
    <>
    <div className="detail-editor">
      <div className="detail-popup">
       <RxCross2 className="corner-cross" onClick={closepopup}/>
       <div className="name-change">
       <div className="head-change">
        <div>Name</div>
        <div onClick={() => toggleEdit('name','name1')}>
          {nameEdit ? 'Edit' : 'Cancel'}
        </div>
      </div>
        <input className="enter-change" value={name} onChange={(event)=>{setname(event.target.value)}} readOnly={nameEdit ? true : false}/>
        <button id='name1' className="save-this" onClick={detailsaved}>Save</button>
       </div>
       <div className="edit-partition"></div>
       <div className="bio-change">
       <div className="head-change">
        <div>Bio</div>
        <div onClick={() => toggleEdit('bio','bio1')}>
          {bioEdit ? 'Edit' : 'Cancel'}
        </div>
      </div>
        <textarea className="enter-change enter2-change" value={bio} onChange={(event)=>{setbio(event.target.value)}} readOnly={bioEdit ? true : false}/>
        <button id='bio1' className="save-this" onClick={detailsaved}>Save</button>
       </div>
       <div className="edit-partition"></div>
       <div className="niche-change">
       <div className="head-change">
        <div>Niche</div>
        <div onClick={() => toggleEdit('niche','niche1')}>
          {nicheEdit ? 'Edit' : 'Cancel'}
        </div>
      </div>
        <textarea className="enter-change enter2-change" value={niche} onChange={(event)=>{setniche(event.target.value)}} readOnly={nicheEdit ? true : false}/>
        <button id='niche1' className="save-this" onClick={detailsaved}>Save</button>
       </div>
      </div>
     
    </div>
    <div className="detail-editor-2">
      <div className="detail-popup-2">
       <RxCross2 className="corner-cross" onClick={closepopup2}/>
       <div className="phone-change">
       <div className="head-change">
        <div>Phone</div>
        <div onClick={() => toggleEdit('phone','phone1')}>
          {phoneEdit ? 'Edit' : 'Cancel'}
        </div>
      </div>
        <input className="enter-change" type='tel'  pattern="[0-9]{10}" value={phone} onChange={(event)=>{setphone(event.target.value)}} readOnly={phoneEdit ? true : false}/>
        <button id='phone1' className="save-this" onClick={detailsaved}>Save</button>
       </div>
       <div className="edit-partition"></div>
       <div className="email-change">
       <div className="head-change">
        <div>Email</div>
        <div onClick={() => toggleEdit('email','email1')}>
          {emailEdit ? 'Edit' : 'Cancel'}
        </div>
      </div>
        <input className="enter-change" value={email} onChange={(event)=>{setemail(event.target.value)}} readOnly={emailEdit ? true : false}/>
        <button id='email1' className="save-this" onClick={detailsaved}>Save</button>
       </div>
       <div className="edit-partition"></div>
       
      </div>
     
    </div>
      <Bottombar />
      <Bottom />
      <div className="profile-main">
        <Sidenav />
        <div className="profile-land">
          <div className="profile-editor">
            <div className="profile-details">
            <form className="profile-update" onSubmit={photo}>
  {/* Input field for image upload */}
  <label htmlFor="image-upload" className="custom-file-upload">
    <input
      id="image-upload"
      type="file"
      accept="image/*"
      name="image"
      onChange={handleImageChange}
      style={{ display: "none" }}
    />
    <FaCamera className="camera" />
  </label>

  {/* Display the user's image */}
  <img
    src={userPhoto || user}
    className="profile-img"
    alt="User"
  />
  <button type="submit" id='saveImageBtn' style={{ display: "none", border: 'none', background: 'white', color: 'black', borderRadius: '10px' }}>
    Save Image
  </button>
</form>
              <div className="profile-name">
                <div style={{ color: "white" }}>Hello,</div>
                <div style={{ color: "#555" }}>{data?.name}</div>
              </div>
              
              
            </div>
            <div className="editor">
              {profileElements.map((element, index) => (
                <div className="element-1" key={index} onClick={() => handleElementClick(element.title)}>
                  <div className="edit-category">
                    {element.icon}
                    <span>{element.title}</span>
                  </div>
                  <div className="edit-desc">
                    <span>{element.description}</span>
                    <IoIosArrowDropright
                      style={{ fontSize: "32px", cursor: "pointer" }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
      <div>
        
        <ToastContainer />
      </div>
      
    </>
  );
};
