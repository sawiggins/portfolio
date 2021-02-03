import React from "react"
import { Container, Row, Col } from 'react-bootstrap';

import SiteNav from '../../components/nav.js'

import PortfolioHeader from '../../components/portfolio-header'
import PortfolioMoreProjects from "../../components/portfolio-more-projects";
import Footer from '../../components/footer'

import MercerBrief from '../../images/mercer_brief.png'
import MercerNewsletters from '../../images/mercer_newsletters.png'
import MercerSocial from '../../images/mercer_book-social.jpg'
import MercerInfographic from '../../images/mercer_infographic.png'
import MercerBlog from '../../images/mercer_fbd-blog.png'

const MercerCapital = () => {
  return (
    <>
      <SiteNav />
      <PortfolioHeader
        title="Mercer Capital"
        description=''
      />
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={MercerBrief} alt='Dollar Signs' />
          </Col>
          <Col md={6}>
            <h2 className="mb-2">The Brief.</h2>
            <h5 className="mb-4">design&nbsp;&nbsp;•&nbsp;&nbsp;content marketing&nbsp;&nbsp;•&nbsp;&nbsp;salesforce</h5>
            <p>
             text here
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className='my-5'>
          <Col lg={{span:10, offset: 1}}>
            <img src={MercerNewsletters} alt='Mercer Capital newlsetters for content marketing' />
          </Col>
        </Row>
        <Row className="flex-column align-items-center">
          <h6>FEATURED PROJECT</h6>
          <h2>Family Business Director Book &amp; Blog</h2>
          <p>
            Text here
          </p>
        </Row>
        <Row className='my-5'>
          <Col lg={5} className="d-flex flex-column justify-content-between">
            <img src={MercerSocial} alt='Social Graphic for Book' />
            <img src={MercerInfographic} alt='Infographic' />
          </Col>
          <Col lg={7}>
            <img src={MercerBlog} alt='Family Business Director Blog' />
          </Col>
        </Row>
      </Container>
      <PortfolioMoreProjects />
      <Footer />
    </>
  )
}

export default MercerCapital;
