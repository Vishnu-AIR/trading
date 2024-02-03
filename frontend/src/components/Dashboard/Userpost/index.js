import React, { useEffect, useState } from "react";
import "./index.css"; // Import your CSS file here
import user from "../../../assets/user2.avif";
import { FcAddImage } from "react-icons/fc";
import { FaPhotoVideo } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { GrEmoji } from "react-icons/gr";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RxCross2 } from "react-icons/rx";
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;


export const Userpost = ({data}) => {
    console.log(data)
    const [userId,setId]= useState(data._id)
    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);
    const [recentlyUploadedType, setRecentlyUploadedType] = useState(null);
    const [formData, setFormData] = useState(new FormData());
    const [userPhoto, setUserPhoto] = useState("");
    const [ImageUrl,setimgUrl] = useState(null);
    const [Caption,setCaption] = useState(null)
    const [allpost,setallpost] = useState(null)
    const [name,setName] = useState(data.name)
    const [email,setEmail] = useState(data.email)
    const[img,setimg] = useState(data.imgUrl)

    const handleImageChange = (event) => {
        const selectedImages = Array.from(event.target.files);
      setImages([...images, ...selectedImages]);
      setRecentlyUploadedType('photo'); // Set the type to 'photo' for images
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
  
    useEffect(() => {
        const getPosts = async () => {
          try {
            const response = await fetch(apiEndpoint+'post/get', {
              method: 'GET',
            });
    
            if (response.ok) {
              const data = await response.json();
              console.log('Fetched posts:', data.data);
              setallpost(data.data)
              // Handle the fetched data
            } else {
              console.error('Failed to fetch posts');
              // Handle error fetching posts
            }
          }
        catch(error){
            console.log('ERROR',error)
        }}
        getPosts()
    },[])
    const handleVideoChange = (event) => {
      const selectedVideos = Array.from(event.target.files);
      setVideos([...videos, ...selectedVideos]);
      setRecentlyUploadedType('video');
      const formData = new FormData();
    
        const file = event.target.files[0];
        console.log(file)
        if (file) {
          const updatedFormData = new FormData();
          updatedFormData.append("image", file, file.name);
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
       // Set the type to 'video' for videos
    };
  

  const handleRemoveImage = (indexToRemove) => {
    setImages(images.filter((_, index) => index !== indexToRemove));
  };

  const handleRemoveVideo = (indexToRemove) => {
    setVideos(videos.filter((_, index) => index !== indexToRemove));
  };

  const handlePost = () => {
    // Handle posting the content along with the selected images and videos
    console.log("Selected Images:", images);
    console.log("Selected Videos:", videos);
    if(Caption!=null){
    onpost()}
    else{
        toast.warning('Caption Required')
    }
  };

  const onpost=async()=>{
    try{
        const response = await fetch(apiEndpoint+'post/create',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({userId,Caption,ImageUrl , name , email , img})


    })
    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
    
     
      
      toast.success('Posted Successfully!');
      window.location.reload()
    } else {
      toast.warning('Try Again');
    }
    
    
    }
    catch(error){
        console.log("Error",error)
    }
  }
  const [userData, setUserData] = useState({});

 
  const photo = async () => {
   
    try {
      // Assuming 'image' is the field name for the profile picture
      const now = new Date();
      const response = await fetch(apiEndpoint+'upload/'+data._id+now, {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setimgUrl('https://tt-t01-v01.onrender.com'+responseData.fileDetails.url)
       
        
        {recentlyUploadedType=='video' ?toast.success('Video Added'):toast.success('Photo Added')}
      } else {
        toast.warning('Try Again');
      }
    } catch (error) {
      console.log(error);
      toast.error('Internal Server Error Occurred');
    }
}
const convertToIST = (utcDateString) => {
    const options = {
      timeZone: 'Asia/Kolkata', // Set the timezone to IST
      weekday: 'long', // Display the full name of the day
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };

    // Create a new Date object with the UTC date string
    const utcDate = new Date(utcDateString);

    // Convert the UTC date to IST
    const istDateString = utcDate.toLocaleString('en-US', options);
    return istDateString;
  };
  const isImageOrVideo = (url) => {
    if (!url) return null;
    const extension = url.split('.').pop().toLowerCase();
    return extension == 'jpg' || extension == 'png' || extension == 'gif'
      ? 'image'
      : extension == 'mp4' || extension =='mov'
      ? 'video'
      : null;
  };
  return (
    <>{data?.isAdmin &&
      <div className="new-post">
        <div className="text">
          <img src={user} className="this-user" alt="User" />
          <textarea
          onChange={(event)=>{setCaption(event.target.value)}}
            placeholder="Enter Something...."
            className="user-post-input"
          ></textarea>
        </div>
        <div className="new-post-part"></div>
        <div className="selected-images">
          {images.map((image, index) => (
            <div style={{display:'flex',flexDirection:'column',gap:'6px'}}>
            <div key={`image-${index}`} className="media-container">
              <img
                src={URL.createObjectURL(image)}
                alt={`Selected image ${index}`}
              />
              
              <RxCross2
                style={{
                  position: "absolute",
                  right: "-12px",
                  top: "-12px",
                  background: "black",
                  cursor: "pointer",
                  borderRadius: "50%",
                  padding: "2px",
                  fontSize: "18px",
                }}
                className="remove-media"
                onClick={() => handleRemoveImage(index)}
              />
             
            </div>
             <button onClick={photo}>Save Image</button>
             </div>
          ))}
        </div>
        <div className="selected-videos">
          {videos.map((video, index) => (
              <div style={{display:'flex',flexDirection:'column',gap:'6px'}}>
            <div key={`video-${index}`} className="media-container">
              <video controls>
                <source src={URL.createObjectURL(video)} />
              </video>
              <RxCross2
                style={{
                  position: "absolute",
                  right: "-12px",
                  top: "-12px",
                  background: "black",
                  cursor: "pointer",
                  borderRadius: "50%",
                  padding: "2px",
                  fontSize: "18px",
                }}
                className="remove-media"
                onClick={() => handleRemoveVideo(index)}
              />
            </div>
        
             <button onClick={photo}>Save Video</button>
             </div>
           
          ))}
        </div>
        <div className="files">
          <div className="icons">
            <label htmlFor="image-upload" className="icon-label">
              <FcAddImage className="input-types" />
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
                multiple
              />
            </label>
            <label htmlFor="video-upload" className="icon-label">
              <FaPhotoVideo className="input-types" />
              <input
                type="file"
                id="video-upload"
                accept="video/*"
                onChange={handleVideoChange}
                style={{ display: "none" }}
                multiple
              />
            </label>
            <IoLocation className="input-types" />
            <GrEmoji className="input-types" />
          </div>
          <button className="post-btn" onClick={handlePost}>
            Post
          </button>
        </div>
      </div>}
      {allpost && Object.keys(allpost).map((postId) => (
  <div key={postId} className="previous-posts">
    <div className="user-info">
      <img src={ user} className="prev-img" alt="User" />
      <div className="poster-details">
        <div className="poster-name">{allpost[postId].name}</div>
        <div className="poster-id">{allpost[postId].email}</div>
        <div className="time-posted">
              {convertToIST(allpost[postId].createdOn)}
            </div>
      </div>
    </div>
    
    <div className="poster-content">
        {allpost[postId].Caption}
    </div>
    {allpost[postId] && isImageOrVideo(allpost[postId].ImageUrl) === 'image' ? (
                <img src={allpost[postId].ImageUrl} className="posted-image" />
              ) : isImageOrVideo(allpost[postId].ImageUrl) === 'video' ? (
                <video src={allpost[postId].ImageUrl} className="posted-video" controls />
              ) : null}
  </div>
))}
      <ToastContainer/>
     
    </>
  );
};
