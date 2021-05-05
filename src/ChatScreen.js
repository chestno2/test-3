import { Avatar, Button,  Input } from '@material-ui/core';
import React, { useState } from 'react'

function ChatScreen() {
      
    const [input, setinput] = useState([])
    const [messages , setMessages] = useState([
       { name :"Messi",
          message: "Whats up!",
          url:"https://wallpapercave.com/wp/wp1816527.jpg"
       },
       {
           name:"kante",
           message:"yo! how it's going",
           url:"https://wallpapercave.com/wp/wp1816527.jpg"
       },
       {
           message:"How's the day"
       }
    ]);

    const handleClick = (e) =>  {
        e.preventDefault();
        setMessages([...messages,{message:input}]);
        setinput(" ")
    }
    return (
        <div>
            <p className=" text-center">You got matched</p>
            {messages.map(message=>(
                message.name ? (
                <div className=" flex justify-start m-3" >
                    <Avatar alt={message.name} src={message.url} alt = {message.name} />
                    <p className="bg-blue-600 p-2 rounded-xl">{message.message}</p>
                </div>
                ) : (
                    <div className="flex  justify-end" >
                    <p className="bg-gray-200  mt-4  p-2 rounded-xl">{message.message}</p>
                    </div>
            )) )}
            
                <form className="flex p-1  w-full fixed border-t " style ={{bottom:"0"}}>
                    <Input onChange = {(e)=> setinput(e.target.value) } className="flex-1 p-2"  value={input} type="text" placeholder="Write your message"></Input>
                    <Button disabled = {!input} onClick = {handleClick} >Send</Button>
                </form>
            
        </div>
    )
}

export default ChatScreen
