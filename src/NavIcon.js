import React from 'react'
import "./NavIcon.css"

function NavIcon({Icon, title, onClick}) {
  return (
    <div className="nav__click" onClick={onClick}>
        {Icon && <Icon className="nav__icon" />}
        <h3 className="nav__title">{title}</h3>
    </div>
  )
}

export default NavIcon