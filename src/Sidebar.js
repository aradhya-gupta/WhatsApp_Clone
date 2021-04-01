import React from 'react'
import {Avatar, IconButton} from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat'
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import MoreVertIcon from "@material-ui/icons/MoreVert" 
import {SearchOutlined} from "@material-ui/icons"
import './Sidebar.css'
import SidebarChat from './SidebarChat'
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            {/* searchbar */}
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>
            {/* sidebar chats section */}
            <div className="sidebar__chats">
                <SidebarChat addNewChat={true}/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}
 