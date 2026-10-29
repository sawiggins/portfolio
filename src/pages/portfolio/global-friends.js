import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import PortfolioNav from "../../components/portfolio-nav"
import PortfolioHeader from "../../components/portfolio-header"
import PortfolioMoreProjects from "../../components/portfolio-more-projects"
import Footer from "../../components/footer"
const Picture = ({src, alt}) => <img src={src} alt={alt} style={{width:"100%", height:"auto"}} />
export default function Project()
{ return <>
        <PortfolioNav/>
        <PortfolioHeader title={"Global Friends"} description={"A welcoming website for an organization connecting the international community in Memphis."}/>
        <Container>
            <Row className="align-items-center">
                <Col md={6}><Picture src={"/projects/global-friends-header.png"} alt={"International flags with colorful geometric accents"}/></Col>
                <Col md={6}><h2>The Brief.</h2><h5 className="mb-4">{"website design & maintenance \u2022 integrations"}</h5><p>I designed and launched the <a href="https://www.globalfriendsmemphis.com" target="_blank" rel="noopener noreferrer">Global Friends website</a> on a third-party platform that the nonprofit’s leader could maintain herself.</p><p>We expanded the brand’s color palette and refined the logo to give the website a cohesive visual foundation. We also worked together to organize the content around the needs of different audiences. Along with hands-on training, I helped her build a clear mental model for how the site’s content fit together, giving her the tools and understanding to keep it useful as the organization’s needs evolved.</p></Col></Row><Row className="my-5"><Col md={{span:10,offset:1}}><h2>Keeping Giving Connected.</h2><p>After handoff, Global Friends switched donor management providers. We discovered that the new donation form could not be embedded on the website as the previous one had been, even when following the documentation.</p><p>I served as the technical liaison with Iframely to establish a new integration with the donor management platform. This enabled Global Friends to embed its donation form and made the integration available to the donor platform’s other clients going forward.</p></Col></Row><Row className="my-5"><Col><Picture src="/projects/global-friends-collage.png" alt="Friends waving beside integration logos, layered Global Friends brand colors, and Ghana, Bangladesh, and Indonesia flags"/></Col></Row></Container><PortfolioMoreProjects/><Footer/></> }
export const Head = () => <title>Stephanie Wiggins | Global Friends</title>
