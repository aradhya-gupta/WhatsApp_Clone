import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import { Avatar } from "@material-ui/core"
import db from './firebase'
import { Link } from 'react-router-dom';

export default function SidebarChat({ id, name, addNewChat }) {
    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (id) {
            db.collection('rooms')
                .doc(id)
                .collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot(snapshot => 
                   setMessages(snapshot.docs.map(doc => (
                    doc.data())
            )))
        }
    }, [id])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 4000));
    }, [])

    const createChat = () => {
        const roomname = prompt("Please enter room name.");
        if (roomname) {
            db.collection('rooms').add({
                name: roomname,
            });
        }
    }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new chat!</h2>
        </div>
    )
}
