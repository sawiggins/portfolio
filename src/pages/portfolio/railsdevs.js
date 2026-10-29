import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import PortfolioNav from "../../components/portfolio-nav"
import PortfolioHeader from "../../components/portfolio-header"
import PortfolioMoreProjects from "../../components/portfolio-more-projects"
import Footer from "../../components/footer"
const Picture = ({src, alt}) => <img src={src} alt={alt} style={{width:"100%", height:"auto"}} />
export default function Project() { return <><PortfolioNav/><PortfolioHeader title={"RailsDevs"} description={"Connecting Rails developers with their next gig."}/><Container><Row className="align-items-center"><Col md={6}><Picture src={"/projects/railsdevs-header.png"} alt={"RailsDevs"}/></Col><Col md={6}><h2>The Brief.</h2><h5 className="mb-4">{"branding \u2022 website"}</h5><p>The RailsDevs founder reached out to refresh the design of his app. He wanted to bring more life to a growing platform that connects Rails developers with hiring companies.</p><p>I redesigned the landing pages and main app page, and created additional pages tailored to different members of the audience. A bright palette, geometric shapes, and people-focused imagery gave the experience a cohesive visual direction.</p></Col></Row><Row className="my-5"><Col><Picture src="/projects/railsdevs-bits.png" alt="RailsDevs visual direction: bright colors, geometric shapes, and developer portraits"/></Col></Row><Row className="my-5"><Col><Picture src="/projects/railsdevs-pages.png" alt="RailsDevs landing page, hiring page, and developer profile designs"/></Col></Row></Container><PortfolioMoreProjects/><Footer/></> }
export const Head = () => <title>Stephanie Wiggins | RailsDevs</title>
