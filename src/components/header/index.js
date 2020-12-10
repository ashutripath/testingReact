import React from 'react'

import Logo from "../../assets/logo.svg"
import "./styles.scss"

const Header = () => {
	return (
		<header data-test="headerComponent">
		  <div className="wrap">
			  <div className="logo">
			    <img src={Logo} alt="Logo" data-test="logoIMG"/>
			  </div>
		  </div>
		</header>
	)
}

export default Header