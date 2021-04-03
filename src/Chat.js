import React, { useEffect, useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { AttachFile, SearchOutlined, InsertEmoticon } from "@material-ui/icons"
import  MicIcon from "@material-ui/icons/Mic"
import './Chat.css';

function Chat() {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState(""); 

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5030));
    }, []);

    const sendMessage = (e) =>{
        e.preventDefault(); 
        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
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
                <p className="chat__message"><span className="chat__name">aradhya</span>
                Hey guys
                <span className="chat__timestamp">12:37pm</span></p>

                <p className={`chat__message ${true && "chat__receiver"}`}><span className="chat__name">aradhya</span>
                Hey guys
                <span className="chat__timestamp">12:37pm</span></p>
            </div>

            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticon/>
                </IconButton>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message"/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <IconButton>
                    <MicIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
