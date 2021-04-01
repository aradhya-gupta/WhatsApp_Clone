import React, {useEffect, useState} from 'react'
import './SidebarChat.css'
import {Avatar} from "@material-ui/core"

export default function SidebarChat({addNewChat}) {
    const [seed, setSeed]  = useState(""); 

    useEffect(() => {
        setSeed(Math.floor(Math.random()*4000));
    }, [])

    const createChat = ()=>{
        const roomname = prompt("Please enter room name."); 

        if(roomname){
            //do database stuff here
        }
    }

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>Last message.....</p>
            </div>
        </div>
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new chat!</h2>
        </div>
    )
}
