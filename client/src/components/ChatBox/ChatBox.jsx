import React, { useEffect, useState } from 'react'
import { getMessages } from '../../api/MessageRequest';
import { getUser } from '../../api/UserRequests';
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";

const ChatBox = ({ chat, currentUser }) => {

    const [userData, setUserData] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    const handleChange = (newMessage)=> {
      setNewMessage(newMessage)
    }

    // fetching data for header
    useEffect(() => {
        const userId = chat?.members?.find((id) => id !== currentUser);
        const getUserData = async () => {
        try {
            const { data } = await getUser(userId);
            setUserData(data);
        } catch (error) {
            console.log(error);
        }
        };

        if (chat !== null) getUserData();
    }, [chat, currentUser]);


    // fetch messages
    useEffect(() => {
        const fetchMessages = async () => {
        try {
            const { data } = await getMessages(chat._id);
            setMessages(data);
        } catch (error) {
            console.log(error);
        }
    };

    if (chat !== null) fetchMessages();
  }, [chat]);


  return (
    <>
      <div className="ChatBox-container">
      {chat ? (
        <>
            {/* chat-header */}
            <div className="chat-header">
                <div className="follower">
                    <div>
                        <img
                            src={
                            userData?.profilePicture
                                ? process.env.REACT_APP_PUBLIC_FOLDER +
                                userData.profilePicture
                                : process.env.REACT_APP_PUBLIC_FOLDER +
                                "defaultProfile.png"
                            }
                            alt="Profile"
                            className="followerImage"
                            style={{ width: "50px", height: "50px" }}
                        />
                        <div className="name" style={{ fontSize: "0.9rem" }}>
                            <span>
                            {userData?.firstname} {userData?.lastname}
                            </span>
                        </div>
                    </div>
                </div>
                <hr
                    style={{
                        width: "95%",
                        border: "0.1px solid #ececec",
                        marginTop: "20px",
                    }}
                />
            </div>
            {/* chat-body */}
            <div className="chat-body" >
                {messages.map((message) => (
                    <>
                    <div
                        className={
                        message.senderId === currentUser
                            ? "message own"
                            : "message"
                        }
                    >
                        <span>{message.text}</span>{" "}
                        <span>{format(message.createdAt)}</span>
                    </div>
                    </>
                ))}
            </div>
            {/* chat-sender */}
            <div className="chat-sender">
                <div>+</div>
                <InputEmoji
                    value={newMessage}
                    onChange={handleChange}
                />
                <div className="send-button button" >Send</div>
            </div>
        </>
      ):(
        <span className="chatbox-empty-message">
          Tap on a chat to start conversation...
        </span>
      )}
      </div>
    </>
  )
}

export default ChatBox
