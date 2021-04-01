import React, { useEffect, useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from "@material-ui/icons/MoreVert" 
import {AttachFile, SearchOutlined} from "@material-ui/icons"
import './Chat.css';

function Chat() {
    const [seed, setSeed] = useState(''); 

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5030));
    }, []);

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">

            </div>

            <div className="chat__footer">

            </div>
        </div>
    )
}

export default Chat
