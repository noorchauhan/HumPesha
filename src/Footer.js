import React from 'react'
import FooterIcon from './FooterIcon'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className="footer__left">
        Copyright © Smit Jiwani. All rights reserved.
      </div>
      <div className="footer__right">
        <FooterIcon
         ImgUrl = {FacebookOutlinedIcon}
         />
        <FooterIcon ImgUrl={InstagramIcon}/>
        <FooterIcon ImgUrl={LinkedInIcon}/>
      </div>
    </div>
  )
}

export default Footer
