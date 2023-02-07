import React from 'react'
import {FiStar, FiSettings} from 'react-icons/fi'
import {AiOutlineEye} from 'react-icons/ai'
import { IconButton } from '@material-ui/core'
import {IoMdFolderOpen} from 'react-icons/io'
import { ColorLens,MoreVert,  } from '@material-ui/icons'
import {Button , Avatar} from '@material-ui/core'
import forms from '../assets/forms.png'
import Style from './FormHeader.module.css' 
function FormHeader() {
  return (
    <div className={Style.formHeader}>
       <div className={Style.formHeaderLeft}>
          <img alt='' src={forms} height={40} width={40}/> 
          <input type="text" placeholder='Untitled form' className={Style.formName} />
          <IoMdFolderOpen className={Style.formHeaderIcon} style={{marginRight:"10px"}} > </IoMdFolderOpen>
          <FiStar className={Style.formHeaderIcon} style={{marginRight:"10px"}} />
          <span style={{fontSize:"12px",fontWeight:"600"}}>All changes saved</span>
       </div>
       <div className={Style.formHeaderRight}>
          <IconButton>
               <ColorLens size="small" className={Style.formHeaderIcon} />
          </IconButton>
          <IconButton>
               <AiOutlineEye className={Style.formHeaderIcon} />
          </IconButton>
          <IconButton>
               <FiSettings className={Style.formHeaderIcon} />
          </IconButton>

          <Button variant='contained'  color='primary' href='#contained-buttons' >Send</Button>

          <IconButton>
               <MoreVert className={Style.formHeaderIcon} />
          </IconButton>
          <IconButton>
               <Avatar style={{height:"30px",width:"30px"}} src="https://www.cleveland.com/resizer/dY2Wf8hZKncZsdiiOA7NdJhKI9E=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/FM3QYFTNP5AUFAEVCPLVB73MSY.jpg" />
          </IconButton>
       </div>
    </div>
  )
}

export default FormHeader