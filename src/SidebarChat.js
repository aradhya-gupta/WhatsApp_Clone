import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import { Avatar } from "@material-ui/core"
import db from './firebase'
import { Link } from 'react-router-dom';

export default function SidebarChat({ id, name, addNewChat }) {
    const [seed, setSeed] = useState("");

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
                    <p>Last message.....</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new chat!</h2>
        </div>
    )
}
