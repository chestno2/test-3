import React from 'react'
import "./icons.css"
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';
const Icon = () => {
    return (
        <div className="swipe flex justify-evenly ">
            <IconButton className=" shadow-2xl " >
            <ReplayIcon className="text-yellow-500 " />
            </IconButton>
            <IconButton   className=" shadow-2xl">
            <CloseIcon className="text-red-500" />
            </IconButton>
            <IconButton  className=" shadow-2xl">
            <StarIcon className="text-blue-600" />
            </IconButton>
            <IconButton  className=" shadow-2xl">
            <FlashOnIcon className="text-green-700" />
            </IconButton>
            <IconButton  className=" shadow-2xl" >
            <FavoriteIcon className="text-purple-700" />
            </IconButton>
        </div>
    )
}

export default Icon
