import React from "react"
import {  Nav, Navbar } from "react-bootstrap"

import SWLogo from '../images/stephanie-wiggins_logo.png'

const SiteNav = () => {
  return (
    <Navbar>
      <Nav.Link href="/"><img src={SWLogo} alt="Logo" /></Nav.Link>
      <Nav.Link href="/#about" className="link-animate me-3" >About</Nav.Link>
      <Nav.Link href="/#portfolio" className="link-animate me-3">Portfolio</Nav.Link>
      <Nav.Link href="/#contact" className="link-animate"> Connect</Nav.Link>
    </Navbar>
  )
}

export default SiteNav;
