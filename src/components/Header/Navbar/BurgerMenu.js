import React from "react"

const BurgerMenu = props => {
  return (
    <div className="burger-menu" onClick={props.toggleNavbar}>
      <div className={props.navbarOpen ? "open" : ""}>
        <span className="bg-navBar-colorBurguer">&nbsp;</span>
        <span className="bg-navBar-colorBurguer">&nbsp;</span>
        <span className="bg-navBar-colorBurguer">&nbsp;</span>
      </div>
    </div>
  )
}

export default BurgerMenu
