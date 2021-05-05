import { Avatar } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const Chat = ({name ,message ,timestamp,img}) => {
    return (
        <Link to = {`/chat/${name}`}>
        <div className="">
            <div className="flex justify-start mt-10 ml-5 ">
            <Avatar alt = {name} src = {img} />
            <h2 className=" font-bold text-2xl md:pl-2 pl-2" >{name}</h2>
            </div>
        <div>
            
            <p className=" md:ml-20 ml-20 opacity-75">{message}</p>
        </div>
            <p className="flex justify-end md:pr-6  opacity-60">{timestamp}</p>
           
        </div>
    </Link>

    )
}

export default Chat
