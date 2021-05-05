import React from 'react'
import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person';
import {  IconButton } from '@material-ui/core';
import { Link,useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
function Header({backButton}) {
    const history = useHistory();
    return (
        <div className=" flex justify-between mt-2 ">
          
            {backButton ?(
                <IconButton onClick = {()=>history.replace(backButton)} >
                 <ArrowBackIosIcon />
                 </IconButton>):( 
                 <IconButton>
            <PersonIcon className=" object-contain w-14 h-8 " />
            </IconButton>
            )}
          
               <Link to="/">
                   <img className=" object-contain w-1/3 h-1/3" style = {{objectFit:'contain',width:"70px",height:"40px" }} 
                src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png"
                alt = "Tinder_Logo" />
            </Link>

            <Link to ="/chat">
               <IconButton>
               <ForumIcon className=" object-contain w-14 mr-2 h-7" />
              </IconButton>
             </Link>
                    
        </div>
    )
}

export default Header
