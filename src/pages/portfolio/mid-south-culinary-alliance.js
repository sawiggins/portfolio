import React from "react"
import { Container, Row, Col } from 'react-bootstrap';

import PortfolioHeader from '../../components/portfolio-header'
import PortfolioMoreProjects from "../../components/portfolio-more-projects";
import Footer from '../../components/footer'

import MSCABrief from '../../images/msca_brief.png'
import MSCAAssets from '../../images/msca_assets.png'
import MSCALogo from '../../images/msca_logo-tall.png'
import MSCAPhoto from '../../images/msca_group.png'
import MSCAStylescape from '../../images/msca_stylescape.png'
import MSCAWebsite from '../../images/msca_website.png'


const MSCA = () => {
  return (
    <>
      <PortfolioHeader
        title="Mid-South Culinary Alliance"
        description='Mid-South Culinary Alliance is a non-profit that aim to provide a healthy community and create learning opportunities for at-risk youth.'
      />
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={MSCABrief} alt='Food' />
          </Col>
          <Col md={6}>
            <h2 className="mb-2">The Brief.</h2>
            <h5 className="mb-4">branding&nbsp;&nbsp;•&nbsp;&nbsp;logo&nbsp;&nbsp;•&nbsp;&nbsp;website</h5>
            <p>
            In February 2020, I volunteered with AIGA’s Design in order to provide a styleguide, logo, and mock-ups to be used later that month at <a href="https://www.givecampmemphis.org/" target="_blank" rel="noopener noreferrer">GiveCamp Memphis</a>. At GiveCamp the team completed building out a website, a Saleforce org, and learning management system to help the client launch a non-profit serving local at-risk youth. 
            </p>
            <p>
            The goal of the brand was to capture energy that would appeal to youth looking to enter the program and sophistication to appeal to donors looking to partner with the orgnaization. The cornerstone of the project that tied the pieces together is the logo that captures the lead chef mentoring two student chefs as represented by the three chef hats. 
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
      <Row className='my-5'>
          <Col>
            <img src={MSCAStylescape} alt='MSCA Style Guide' />
          </Col>
        </Row>
        <Row className='my-5'>
          <Col lg={{span: 4, offset: 2}}>
            <img src={MSCALogo} alt='MSCA Logo' />
          </Col>
          <Col lg={4} className="d-flex flex-column justify-content-between">
            <img src={MSCAAssets} alt='Texture and Icons' />
            <img src={MSCAPhoto} alt='MSCA Students and Chef' />
          </Col>
        </Row>
        <Row className='my-5'>
          <Col>
            <img src={MSCAWebsite} alt='MSCA Website' />
          </Col>
        </Row>
      </Container>

      <PortfolioMoreProjects />
      <Footer />
    </>
  )
}

export default MSCA;
