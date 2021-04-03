import React, { useContext, useEffect, useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { AttachFile, SearchOutlined, InsertEmoticon } from "@material-ui/icons"
import MicIcon from "@material-ui/icons/Mic"
import { useParams } from "react-router-dom"
import db from './firebase';
import {AppContext} from './App'
import firebase from "firebase"
import './Chat.css';

function Chat() {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const context = useContext(AppContext); 
    const user =  context.user.get.user; 
    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))

            db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(doc => doc.data()))
            ))
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5030));
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .add({
            message: input, 
            name: user.displayName, 
            timestamp: firebase.firestore.FieldValue.serverTimestamp(), 
            userId: user.email
        })
        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />

                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map(m=>(
                    <p id={m.id} className={`chat__message ${m.userId === user.email && `chat__receiver`}`}><span className="chat__name">{m.name}</span>
                    {m.message}
                    <span className="chat__timestamp">{new Date(m.timestamp?.toDate()).toUTCString()}</span></p>
                ))}
            </div>

            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
