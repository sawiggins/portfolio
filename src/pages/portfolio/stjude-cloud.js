import React from "react"
import { Container, Row, Col } from 'react-bootstrap';
import { graphql } from "gatsby"
import Img from "gatsby-image"

import PortfolioNav from '../../components/portfolio-nav.js'
import PortfolioHeader from '../../components/portfolio-header'
import PortfolioMoreProjects from "../../components/portfolio-more-projects";
import Footer from '../../components/footer'

const StJudeCloud = ({ data }) => {
  return (
    <>
      <title>Stephanie Wiggins | St. Jude Cloud</title>
      <PortfolioNav />
      <PortfolioHeader
        title="St. Jude Cloud"
        description='St. Jude Cloud empowers researchers across the world to advance cures for pediatric cancer and other pediatric catastrophic diseases.'
      />
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <Img fluid={data.SJCBrief.childImageSharp.fluid} fadeIn={false} alt="cells" />
          </Col>
          <Col md={6}>
            <h2 className="mb-2">The Brief.</h2>
            <h5 className="mb-4">UX/UI design&nbsp;&nbsp;•&nbsp;&nbsp; web development</h5>
            <p>
              Brought on to the project's web development team as the first to double as a UX/UI designer,  I seek to bring a level of polish and ease to a complex ecosystem that inherently begets complex user interfaces. Specifically, I focus on the site's <a href="https://platform.stjude.cloud" target="_blank" rel="noopener noreferrer" className="link-animate">Genomics Platform</a> app which shares genomics data and analysis workflows with researchers. 
            </p>
            <p>
              Along the way, I worked with a network of internal and external professionals to launch a restructured version of the website and spearheaded development of the new, top-level Gatsby site. Given the project's rapid growth and need for solidified branding, I worked with another designer to create a design system for Sketch and revamp the <a href="https://design.stjude.cloud" target="_blank" rel="noopener noreferrer" className="link-animate">online theme repo</a>. By completing this project, we empowered stakeholders and developers to harvest brand assets and use the theme’s components on their own websites.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className='my-5'>
          <Col lg={{span:10, offset: 1}}>
            <Img fluid={data.SJCPlatform.childImageSharp.fluid} fadeIn={false} alt="St. Jude Cloud Genomics Platform Homepage"/>
          </Col>
        </Row>
        <Row className="">
          <Col md={4}>
            <h6>FEATURED PROJECT</h6>
            <h2>Data Access Agreement Wizard</h2>
          </Col>
          <Col md={8}>
            <p>
              In order to access genomics data on the site, a user must complete a data access request detailing who will have access to the data and how they will use the data. Initially, this was a clunky process requiring the user to print, sign, and scan a PDF, before  having every other person who would also have access to the data repeat the same steps. 
            </p>
            <p>
              To streamline the user's experience, we created a wizard to collect the user's and additional applicants' information which we connected to DocuSign® to collect signatures. The vision was for the user to be presented with a clean interface and bite-sized pieces to fill out. As there were several paths through the interface based on the user's input, we conducted user testing to  ensure a smooth process in each scenario. 
            </p>
            <p>
              Unfortunately, in some cases, we could not collect the signatures via DocuSign, so I used the <a href="https://github.com/prawnpdf/prawn" target="_blank" rel="noopener noreferrer" className="link-animate">Prawn PDF</a> gem to generate a pre-populated PDF to alleviate the effort imposed on the user. 
            </p>
          </Col>
        </Row>
        <Row className='my-5'>
          <Col lg={8} className='mt-2'>
            <Img fluid={data.SJCWizard.childImageSharp.fluid} fadeIn={false} alt="St. Jude Cloud EDAA Wizard"/>
          </Col>
          <Col lg={4} className='mt-2'>
            <Img fluid={data.SJCUXWizard.childImageSharp.fluid} fadeIn={false} alt="St. Jude Cloud UX Flow"/>
          </Col>
        </Row>
      </Container>
      <PortfolioMoreProjects />
      <Footer />
    </>
  )
}

export default StJudeCloud;

export const query = graphql`
  query {
    SJCBrief: file(relativePath: { eq: "sjc_brief.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    SJCPlatform: file(relativePath: { eq: "sjc_platform.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    SJCWizard: file(relativePath: { eq: "sjc_edaa-wizard.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    SJCUXWizard: file(relativePath: { eq: "sjc_ux-wizard.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
