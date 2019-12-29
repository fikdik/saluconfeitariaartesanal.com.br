import React from "react"

const BurgerMenu = props => {
  return (
    <div className="burger-menu" onClick={props.toggleNavbar}>
      <div className={props.navbarOpen ? "open" : ""}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </div>
  )
}

export default BurgerMenu
