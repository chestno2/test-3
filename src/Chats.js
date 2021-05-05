import React from 'react'
import Chat from "./Chat"
function Chats() {
    return (
        <div>
            <Chat 
            name = "Kante"
            message = "YO!"
            timestamp="40 seconds ago"
            img = "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1311x543:1313x541)/origin-imgresizer.eurosport.com/2020/09/27/2895628-59620568-2560-1440.jpg"/>
      
      <Chat
            name = "Messi"
            message = "YO How are uou!"
            timestamp=" 23 minutes ago"
            img = "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1311x543:1313x541)/origin-imgresizer.eurosport.com/2020/09/27/2895628-59620568-2560-1440.jpg"/>
      
      <Chat 
            name = "Golo"
            message = "YO!"
            timestamp="40 seconds ago"
            img = "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1311x543:1313x541)/origin-imgresizer.eurosport.com/2020/09/27/2895628-59620568-2560-1440.jpg"/>
        </div>
    )
}

export default Chats
