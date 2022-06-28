import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { UilSetting } from '@iconscout/react-unicons'

import { userChats } from '../../api/ChatRequests';
import LogoSearch from '../../components/logoSearch/LogoSearch'
import Conversation from '../../components/Conversation/Conversation';
import ChatBox from '../../components/ChatBox/ChatBox';

import { Link } from 'react-router-dom';
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { io } from 'socket.io-client';

import './Chat.css'
import { useRef } from 'react';



const Chat = () => {

    const { user } = useSelector((state) => state.authReducer.authData);

    const [chats, setChats] = useState([]);  
    const [currentChat, setCurrentChat] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [sendMessage, setSendMessage] = useState(null);
    const [receivedMessage, setReceivedMessage] = useState(null);
    const socket = useRef()
    
    // Connect to Socket.io
    useEffect(() => {
        socket.current = io("ws://localhost:8800");
        socket.current.emit("new-user-add", user._id);
        socket.current.on("get-users", (users) => {
        setOnlineUsers(users);
        });
    }, [user]);


    // Send Message to socket server
    useEffect(() => {
        if (sendMessage!==null) {
        socket.current.emit("send-message", sendMessage);}
    }, [sendMessage]);


    // Get the chat in chat section
    useEffect(() => {
        const getChats = async () => {
            try {
                const { data } = await userChats(user._id);
                setChats(data);
            } catch (error) {
                console.log(error);
            }
        };
        getChats();
    }, [user._id]);


    // receive message from socket server
    useEffect(() => {
        socket.current.on("receive-message", (data) => {
            console.log(data)
            setReceivedMessage(data);
        }

        );
    }, []);



    return (
        <div className="Chat">
        {/* Left Side */}
        <div className="Left-side-chat">
            <LogoSearch />
            <div className="Chat-container">
                <h2>Chats</h2>
                <div className="Chat-list">
                    {chats.map((chat) => (
                        <div onClick={() => {
                           setCurrentChat(chat);
                        }}>
                            <Conversation data={chat} currentUser={user._id} />
                        </div>
                    ))}
                </div>
            </div>
            
        </div>

        {/* Right Side */}
        <div className="Right-side-chat">
            <div style={{ width: "20rem", alignSelf: "flex-end" }}>
                <div className="navIcons">
                    <Link to='../home'><img src={Home} alt=""/></Link>
                    <UilSetting/>
                    <img src={Noti} alt="" />
                    <Link to='../chat'>
                        <img src={Comment} alt="" />
                    </Link>           
                </div>
                <ChatBox
                    chat={currentChat}
                    currentUser={user._id}
                    setSendMessage={setSendMessage}
                    receivedMessage={receivedMessage}
                />
            </div>
        </div>
        
        </div>
    )
}

export default Chat
