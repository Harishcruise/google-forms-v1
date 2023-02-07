import React, { useState } from 'react'
import MenuIcon from "@material-ui/icons/Menu"
import { IconButton } from '@material-ui/core'
import Style from './Drawers.module.css'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItems from '@material-ui/core/ListItem'
function Drawers() {
  const [state,setState] = useState({
    left:false
  })
  const toogleDrawer = (anchor, open) => (event) =>{
    setState({...state,[anchor]:open})
  }
  return (
    <div>
        <React.Fragment>
        <IconButton onClick={toogleDrawer('left',true)}>
            <MenuIcon />
        </IconButton> 
        <Drawer open={state['left']} onClose={toogleDrawer('left',false)} anchor={'left'}>
        <List>
        <ListItems>
            SideBar
        </ListItems>
        </List>
        </Drawer>
        </React.Fragment>
    </div>
    
  )
}

export default Drawers