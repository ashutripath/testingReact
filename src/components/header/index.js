import React from 'react'

import Logo from "../../assets/logo.svg"
import "./styles.scss"

const Header = () => {
	return (
		<header>
		  <div className="wrap">
			  <div className="logo">
			    <img src={Logo} alt="Logo"/>
			  </div>
		  </div>
		</header>
	)
}

export default Header