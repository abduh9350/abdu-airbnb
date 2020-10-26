import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Avatar, IconButton } from "@material-ui/core";
function Header() {
    return (
        <div className='header'>
            <img 
                className='header_icon'
                src='https://static.dezeen.com/uploads/2014/07/Airbnb-rebrand-by-DesignStudio_dezeen_468_8-300x300.jpg'
                alt=''
            />
            <div className="header_center">
                <input type='text' />
                <SearchIcon />
            </div>
            <div className="header_right">
                <p>Become a host</p>
                <IconButton>
                    <LanguageIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />  
                </IconButton>
                <IconButton>
                    <Avatar />
                </IconButton>
                    
                
                
                
                
            </div>
        </div>
    )
}

export default Header
