import React from 'react'
import Style from './MainBody.module.css'
import { Storage,ArrowDropDown,FolderOpen, MoreVert } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
function MainBody() {
  return (
    <div className={Style.mainBody}>
        <div className={Style.mainBodyTop}>
            <div className={Style.mainBodyTopLeft} style={{fontSize:"16px",fontWeight:"500"}}>
              Recent Forms
            </div>
            <div className={Style.mainBodyTopRight}>
            <div className={Style.mainBodyTopCenter} style={{fontSize:"14px",marginRight:"125px"}}>
            Owned by anyone <ArrowDropDown/>
            </div>
            <IconButton>
                <Storage style={{fontSize:"16px",color:"black"}} />
            </IconButton>
            <IconButton>
                <FolderOpen style={{fontSize:"16px",color:"black"}}/>
            </IconButton>
            </div>
        </div>
        <div className={Style.mainBodyDocs}>
            <div className={Style.docCard}>
                <img alt='' src="https://i0.wp.com/davidlozzi.com/wp-content/uploads/2018/11/microsoft-forms-formatted-question.png?fit=1400%2C1341&ssl=1" className={Style.docImage}/>
                <div className={Style.docCardContent}>
                      <h5></h5>
                      <div className={Style.docContent} style={{fontSize:"12px",color:"grey"}}>
                        <div className={Style.contentLeft}>
                           <Storage style={{color:"white",fontSize:"12px",backgroundColor:"#6e2594",padding:"3px",marginRight:"3px",borderRadius:"2px"}} />
                           Opened 6 Jan 2021
                        </div>
                        <MoreVert style={{fontSize:"16px",color:"grey"}} />
                      </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainBody