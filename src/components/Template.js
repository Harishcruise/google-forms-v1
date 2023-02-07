import React from 'react'
import Style from './Template.module.css'
import { IconButton } from '@material-ui/core'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import { MoreVert } from '@material-ui/icons'
import uuid from 'react-uuid'
import { useNavigate } from 'react-router-dom'
function Template() {
     const navigate = useNavigate();
     const createForm = () =>{
          const id = uuid();
          navigate('/form/'+id)
     }
  return (
    <div className={Style.templateSection}>
    <div className={Style.templateTop}>
       <div className={Style.templateLeft}>
            <span style={{fontSize:"16px",color:"#202124"}}> start New Form</span>
       </div>
       <div className={Style.templateRight}>
            <div className={Style.galleryBtn}>
                Template gallery
                <UnfoldMoreIcon fontSize='small'/>
            </div>
            <IconButton>
                <MoreVert />
            </IconButton>
       </div>
    </div>
    <div className={Style.templateBody}>
            <div className={Style.card} onClick={createForm}>
                 <img className={Style.cardImage} alt='' src='https://png.pngtree.com/png-vector/20191023/ourmid/pngtree-vector-plus-icon-png-image_1851585.jpg'/>
                 <p className={Style.cardTitle}>Blank</p>
            </div>
    </div>
    </div>
  )
}

export default Template