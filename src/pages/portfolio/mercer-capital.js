import React from "react"
import { Container, Row, Col } from 'react-bootstrap';

import PortfolioNav from '../../components/portfolio-nav.js'
import PortfolioHeader from '../../components/portfolio-header'
import PortfolioMoreProjects from "../../components/portfolio-more-projects";
import Footer from '../../components/footer'

import MercerBrief from '../../images/mercer_feature.png'
import MercerNewsletters from '../../images/mercer_newsletters.png'
import MercerSocial from '../../images/mercer_book-social.jpg'
import MercerInfographic from '../../images/mercer_infographic.png'
import MercerBlog from '../../images/mercer_fbd-blog.png'

const MercerCapital = () => {
  return (
    <>
      <PortfolioNav />
      <PortfolioHeader
        title="Mercer Capital"
        description='Being a business valuation and financial advisory firm outside of a major market afforded me the opportunity to help this content producing machine target their content well.'
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
              Working as a designer and marketing associate for <a href="https://mercercapital.com" target="_blank" rel="noopener noreferrer" className="link-animate">Mercer Capital</a>  meant I spent the majority of time in and around the blizzard of content the firm produced. The firm supported a three weekly blogs, more than a dozen quarterly newsletters, and regular whitepapers. Thus, I became involved in the entire content marketing process. While the aim was to get content from the analysts out the door, efficiency and targeting were key. Thus, I templatized my documents, performed initial keyword research, and analyzed KPIs after the campaign. 
            </p>
            <p>
              Additionally, our firm built out a <a href="https://mercercapital.com" target="_blank" rel="noopener noreferrer" className="link-animate">Salesforce</a> org to track contacts and touches. I worked closely with the third-party developer to translate the needs of internal stakeholders to meaningful fields. After the launch, I regularly trained the staff and built out additional features to capture the needs of the firm. From there, I built reports to transform that data into information. 
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
        <Row>
        <Col md={4}>
            <h6>FEATURED PROJECT</h6>
            <h2>Family Business Director Book &amp; Blo</h2>
          </Col>
          <Col md={8}>
            <p>
              One of the firm's seniors sought to launch a new service line targeting family business owners. 
            </p>
            <p>
              We worked with him to identify existing clients and referral sources, understand the breath of personas, and pinpoint influencers. Equipped with this knowledge, we tested the waters with a series of LinkedIn posts to gage interaction. Given the positive feedback, he repurposed some of the blog posts into a book which we self-published through <a href="https://github.com/prawnpdf/prawn" target="_blank" rel="noopener noreferrer" className="link-animate">Lightning Source</a>. 
            </p>
            <p>
              Given the momentum and bank of content, we launched a blog to more formally and intentionally direct our efforts. Prior to the launch, I performed market research surrounding our competition in the space and keyword analysis to direct content creation efforts. As part of the process, I mocked up posts, created corresponding social images and infographics, and sent emails campaigns.
            </p>
            <p>
              With the blog launch, we used the book as a tangible way to point our audience to the blog in an effort to gain new traffic, new subscribers, and ultimately, new prospects. In order to track our efforts firm-wide, I developed a system in Salesforce to track distribution efforts.
            </p>
          </Col>
        </Row>
        <Row className='my-5'>
          <Col lg={5} className="d-flex flex-column justify-content-between">
            <img src={MercerSocial} alt='Social Graphic for Book' className='mt-2'/>
            <img src={MercerInfographic} alt='Infographic' className='mt-2' />
          </Col>
          <Col lg={7}>
            <img src={MercerBlog} alt='Family Business Director Blog' className='mt-2'/>
          </Col>
        </Row>
      </Container>
      <PortfolioMoreProjects />
      <Footer />
    </>
  )
}

export default MercerCapital;
