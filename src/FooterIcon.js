import React from 'react'
import "./FooterIcon.css"


function FooterIcon({ImgUrl}) {
  return (
    <div className='footer__icon'>
      {ImgUrl && <ImgUrl className="footer__icons" />}
    </div>
  );
}

export default FooterIcon
