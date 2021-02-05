import React from "react"
import { Container, Row, Col } from 'react-bootstrap';

import PortfolioNav from '../../components/portfolio-nav.js'
import PortfolioHeader from '../../components/portfolio-header'
import PortfolioMoreProjects from "../../components/portfolio-more-projects";
import Footer from '../../components/footer'

import SJCBrief from '../../images/sjc_brief.png'
import SJCPlatform from '../../images/sjc_platform.png'
import SJCWizard from '../../images/sjc_edaa-wizard.png'
import SJCUXWizard from '../../images/sjc_ux-wizard.png'

const StJudeCloud = () => {
  return (
    <>
      <PortfolioNav />
      <PortfolioHeader
        title="St. Jude Cloud"
        description='St. Jude Cloud empowers researchers across the world to advance cures for pediatric cancer and other pediatric catastrophic diseases.'
      />
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={SJCBrief} alt='Cells' />
          </Col>
          <Col md={6}>
            <h2 className="mb-2">The Brief.</h2>
            <h5 className="mb-4">UX/UI design&nbsp;&nbsp;•&nbsp;&nbsp;development</h5>
            <p>
             Brought on as the project's first designer and pivoting into development myself, I seek to bring a level of polish and ease to a complex ecosystem. Specifically, I focus on the site's <a href="https://platform.stjude.cloud" target="_blank" rel="noopener noreferrer" className="link-animate">Genomics Platform</a> app which shares genomics data and analysis workflows with researchers. 
            </p>
            <p>
              Along the way, I worked with a network of internal and external professionals to launch the site’s restructure and spearheaded developing the new, top-level Gatsby site. Given the project's rapid growth and solidified branding, I worked with another designer to create a design system for Sketch and revamp the <a href="https://design.stjude.cloud" target="_blank" rel="noopener noreferrer" className="link-animate">online theme repo</a>. By completing this project, we empowered stakeholders and developers to harvest brand assets and use the theme’s components on their sites.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className='my-5'>
          <Col lg={{span:10, offset: 1}}>
            <img src={SJCPlatform} alt='Genomics Platform Homepage' />
          </Col>
        </Row>
        <Row className="">
          <Col md={4}>
            <h6>FEATURED PROJECT</h6>
            <h2>Data Access Agreement Wizard</h2>
          </Col>
          <Col md={8}>
            <p>
              In order to access genomics data on the site, a user must complete a data access request detailing who will have access to the data and how they will use the data. Initially, this was a clunky process requiring the user to print, sign, and scan a PDF before repeating the process for everyone who would have access to the data. 
            </p>
            <p>
              To streamline the user's experience, we created a wizard to collect the user's and additional applicants' information which we connected to DocuSign® to collect signatures. The vision was for the user to be presented with a clean interface and bite-sized pieces to fill out. There were a couple of forks in the journey based on the user's information; thus, we user tested the scenarios to ensure a smooth process. 
            </p>
            <p>
              Unforuntately, in some cases, we could not collect the signatures via DocuSign, so I used the <a href="https://github.com/prawnpdf/prawn" target="_blank" rel="noopener noreferrer" className="link-animate">Prawn PDF</a> gem to generate a pre-populated PDF to aleviate the effort imposed on the user. 
            </p>
          </Col>
        </Row>
        <Row className='my-5'>
          <Col lg={8} className='mt-2'>
            <img src={SJCWizard} alt='EDAA Mockup' />
          </Col>
          <Col lg={4} className='mt-2'>
            <img src={SJCUXWizard} alt='UX Flow' />
          </Col>
        </Row>
      </Container>
      <PortfolioMoreProjects />
      <Footer />
    </>
  )
}

export default StJudeCloud;
