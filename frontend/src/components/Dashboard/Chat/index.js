import React, { useContext, useEffect, useRef, useState } from "react";
import index from "./index.css";
import { Bottombar } from "../Top";
import { Bottom } from "../Bottom";
import { Sidenav } from "../Sidenav";
import user from "../../../assets/user.jpeg";
import { PiArrowCircleRightFill } from "react-icons/pi";



const Typing = () => (

  <div className="typing">
    <div className="typing__dot"></div>
    <div className="typing__dot"></div>
    <div className="typing__dot"></div>
  </div>
);

export const Chat = ({ id, name }) => {
  const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
  const [ws, setWs] = useState(null);
  const [onlinePeople, setOnlinePeople] = useState({});
  const [offlinePeople, setOfflinePeople] = useState({});
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedfriend, setselectedfriend] = useState(null);
  const [newMessageText, setNewMessageText] = useState("");
  const [messages, setMessages] = useState([]);
  const [friends, setfriends] = useState(null);
  const [friendschat, setfriendschat] = useState(null);
  const [message, setMessage] = useState("");
  const [isFriendTyping, setIsFriendTyping] = useState(false);




  const open=()=>{
    let a = document.querySelector('.chat-list')
    if(a.classList[1]){
      a.classList.remove('reset')
    }
    else{
      a.classList.add('reset')
    }
  }
  const containsLink = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return urlRegex.test(text);
  };
  
  // Function to extract the link from a message
  const extractLink = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const match = text.match(urlRegex);
    return match ? match[0] : '';
  };
  useEffect(() => {
    const users = async () => {
      try {
        const response = await fetch(
          apiEndpoint+"users/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setfriends(data.data);
          // console.log(data)
        } else {
          console.log("Nothing");
          // console.log("Nothing");

          // Handle errors here (e.g., show an error message)
        }
      } catch (error) {
        console.log("nothing");
        // console.log("nothing");
      }
    };
    users();
  });
  useEffect(() => {
    const userschat = async () => {
      try {
        const response = await fetch(
          apiEndpoint+"message/" +
             id  +
            "/"+selectedUserId,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setfriendschat(data.data);
          console.log(data);
        } else {
          console.log("Nothing");
          // console.log(data);
        } 
      } catch (error) {
        console.log("nothing");
        // console.log("nothing");
      }
    };
    userschat();
  },[selectedUserId,message,friendschat]);




  const divUnderMessages = useRef();



  const chatEndRef = useRef(null);

  // Scroll to the bottom of chat on component update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [friendschat]);

  // Add more chat users as needed

  const handleInputChange = (event) => {
    setMessage(event.target.value);
    sendTypingNotification(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
      sendTypingNotification(false);
    }
  };
  

 

  useEffect(() => {
    connectToWs();
  }, [selectedUserId]);

  function connectToWs() {
    const ws = new WebSocket("wss://tt-t01-v01.onrender.com");
    setWs(ws);
    // ws.addEventListener('message', handleMessage);
    ws.addEventListener("close", () => {
      setTimeout(() => {
        console.log("Disconnected. Trying to reconnect.");
        connectToWs();
      }, 1000);
    });
  }

  function showOnlinePeople(peopleArray) {
    const people = {};
    peopleArray.forEach(({ userId, username }) => {
      people[userId] = username;
    });
    setOnlinePeople(people);
  }

  function handleMessage(ev) {
    const messageData = JSON.parse(ev.data);
    console.log({ ev, messageData });
    // console.log({ ev, messageData });
    if ("online" in messageData) {
      showOnlinePeople(messageData.online);
    } else if ("text" in messageData) {
      if (messageData.sender === selectedUserId) {
        setMessages((prev) => [...prev, { ...messageData }]);
      }
    }
  }
  function sendMessage(ev, file = null) {
    console.log('message bhejrha hu .. . . .. . . . . . .')
    
    // console.log('message bhejrha hu .. . . .. . . . . . .')
    if (ev) ev.preventDefault();
    ws.send(
      JSON.stringify({
        sender:id,
        recipient: selectedUserId,
        text: message,

        file,
      })
    );
    if (file) {
      // axios.get('/messages/'+selectedUserId).then(res => {
      //   setMessages(res.data);
      // });
    } else {
      setNewMessageText("");
      setMessages((prev) => [
        ...prev,
        {
          text: newMessageText,
          sender: id,
          recipient: selectedUserId,
          _id: Date.now(),
        },
      ]);
    }
    setMessage("")
  }

  const onlinePeopleExclOurUser = { ...onlinePeople };
  delete onlinePeopleExclOurUser[id];
  console.log(onlinePeopleExclOurUser);
  // console.log(onlinePeopleExclOurUser);

  
  useEffect(() => {
    if (ws) {
      
      const handleFriendTyping = (ev) => {
        const typingData = JSON.parse(ev.data);
       
        if (typingData.typing && typingData.sender === selectedUserId) {
          setIsFriendTyping(true);
         
        } else {
          setIsFriendTyping(false);
        }
      };
  
      ws.addEventListener("message", handleFriendTyping);
  
      return () => {
        ws.removeEventListener("message", handleFriendTyping);
      };
    }
  }, [selectedUserId, ws]);

  const sendTypingNotification = (isTyping) => {
    ws.send(
      JSON.stringify({
        sender: id,
        recipient: selectedUserId,
        typing: isTyping,
      })
    );
  };

  // Initialize with an empty object

  return (
    <>
      <Bottombar />
      <Bottom />
      <div className="chat-main">
        <Sidenav />
        <div className="chat-land">
          <div className="chat-box">
            <div className="user-details">
              {selectedfriend ? <img src={user} /> : ""}
              {selectedfriend ? (
                <div className="user-name">{selectedfriend}</div>
              ) : (
                <div className="user-name">Select a User to Chat With from Switch </div>
              )}
            </div>
            <div className="message-section">
      {friendschat?.map((chatdata) => {
        // Convert updatedOn to a Date object and get formatted date and time
        const updatedDate = new Date(chatdata.updatedOn);
        const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
        const timeOptions = { hour: 'numeric', minute: 'numeric' };
        const formattedDate = updatedDate.toLocaleDateString(undefined, dateOptions);
        const formattedTime = updatedDate.toLocaleTimeString(undefined, timeOptions);

        // Determine if the message sender matches the selectedUser
        const isReceivedMessage = chatdata.sender[0] === selectedUserId;

        // Assign a className based on the condition
        const messageClassName = isReceivedMessage ? 'receive' : 'sender';

        return (<>
        <div key={chatdata._id} className={messageClassName}>
      <div className="message-details">
        {containsLink(chatdata.text) ? (
          <>
        
          <a style={{width:'80%'}} href={extractLink(chatdata.text)} target="_blank" rel="noopener noreferrer">
            {chatdata.text }
          

          </a>
          <iframe src={extractLink(chatdata.text)} height='400px'/>
        </>        ) : (
          <div className="message-text">{chatdata.text}
            </div>
            
        )}
        <div className="message-time">
          <span>Date: {formattedDate}</span>
          <span>Time: {formattedTime}</span>
        </div>
      </div>
      {isFriendTyping && <Typing />}
    </div>
    
          </>
        );
      })}
      <div ref={chatEndRef} />
    </div>
            {selectedUserId && <div className="message-sender">
              <div className="typer">
               
                <input
                  type="text"
                  placeholder="Enter Your Message Here......"
                  value={message}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                />
                <div onClick={sendMessage}>Send</div>
                {/* Or use PiArrowCircleRightFill icon */}
              </div>
             
              <PiArrowCircleRightFill
                style={{ fontSize: "48px", color: "rgba(38, 215, 218, 1)" }}
                onClick={sendMessage}
              />
            </div>}
          </div>
          <div className="chat-list">
            <h2>Chats</h2>
            <div className="filters">
              <div>Communities</div>
              <div>Inbox</div>
            </div>
            <div>
              <input className="chat-filter-selector" type="text" />
            </div>
            <div className="partition-chat"></div>
            <div className="user-list">
              {friends?.map((friend) => (friend._id!=id &&
                <div
                  className="user-1"
                  onClick={() => {
                    setselectedfriend(friend.name);
                    setSelectedUserId(friend._id);
                    console.log(friend._id)
                    open();
                    setselectedfriend(friend.name);
                    setSelectedUserId(friend._id);
                    // console.log(friend._id)
                  }}
                >
                  <img src={friend?.imgUrl ? friend.imgUrl : user} />
                  <div className="user-fr-details">
                    <div>{friend.name}</div>
                    <div>{friend.lastMessage}</div>
                  </div>
                  <div>{friend.lastMessageTime}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
