import React from "react"
import {  Nav, Navbar } from "react-bootstrap"

import { Link } from "gatsby"

import SWLogo from '../images/stephanie-wiggins_logo.png'

const PortfolioNav = () => {
  return (
    <Navbar>
      <Nav.Link as={Link} to="/"><img src={SWLogo} alt="Logo"/><span className="ms-3 link-animate">Stephanie Wiggins</span></Nav.Link>
    </Navbar>
  )
}

export default PortfolioNav;
