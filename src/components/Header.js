import React from 'react'
import Style from './Header.module.css'
import form from '../assets/forms.png'
import { IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import AppsIcon from '@material-ui/icons/Apps'
import Avatar from '@material-ui/core/Avatar'
import Drawers from './Drawers'
function Header() {
  return (
    <div className={Style.header}>
        <div className={Style.headerInfo}>
        {/* <IconButton>
            <MenuIcon />
        </IconButton> */}
        <Drawers />
        <img width={40} height={40} alt='' src={form}/>
        <div className={Style.info}>
            Forms
        </div>
        </div>
        <div className={Style.headerSearch}>
        <IconButton>
             <SearchIcon />
        </IconButton>
             <input type='text' name='search' placeholder='Search'/>
        </div>
        <div className={Style.headerRight}>
            <IconButton>
             <AppsIcon />
            </IconButton>
            <IconButton>
                <Avatar src="https://www.cleveland.com/resizer/dY2Wf8hZKncZsdiiOA7NdJhKI9E=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/FM3QYFTNP5AUFAEVCPLVB73MSY.jpg" />
            </IconButton>
        </div>
    </div>
  )
}

export default Header