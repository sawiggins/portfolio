import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import SiteNav from '../components/nav.js'

import ImgStephanieDecorated from '../images/swiggins-decorated.png'
import Trees from '../images/trees.png'
import GetInTouch from '../images/get-in-touch.png'
import SJCPlatform from '../images/sjc_platform.png'
import MercerNewsletters from '../images/mercer_newsletters.png'
import HomerSign from '../images/homer_yard-sign-home.png'
import MSCAWebsite from '../images/msca_website-homepage.png'
import MercyHillBanner from '../images/mercy-hill_banner-homepage.png'
import Resume from '../downloads/Stephanie-Wiggins_Resume.pdf'

library.add(
  fab,
  faLinkedin,
  faGithub
);

const IndexPage = () => {
  return (
    <main>
      <title>Stephanie Wiggins</title>

      <SiteNav />

      <Container fluid>
        <Container className="section">
          <Row className='mt-5'>
            <Col xs={{span: 12, order: 2}} md={{span: 6, order: 1}} className="hero-text">
              <h1>
                Hi, I'm 
                <br />
                Stephanie Wiggins.
              </h1>
              <h5 className="mt-3">designer &nbsp;&nbsp; &#38;&#38; &nbsp;&nbsp; developer &nbsp;&nbsp; &#38;&#38; &nbsp;&nbsp; marketer</h5>
            </Col>
            <Col xs={{span: 12, order: 1}} md={{span: 6, order: 2}}>
              <img src={ImgStephanieDecorated} alt="Stephanie Wiggins" />
            </Col>
          </Row>
        </Container>

        <a name="about" />
        <Container className="section about-me">
          <Row >
            <Col md={6} className="d-flex flex-column justify-content-center">
              <img src={Trees} alt="trees" />
            </Col>
            <Col md={6}>
              <h2>Analytical yet Creative.</h2>
              <p>
                With graphic design, marketing, and web development skills, I weave my expertise 
                triad with a project’s initiatives to create a user-centric, cohesive experience. 
                I aim to create projects both that are beautiful and that people enjoy using. 
              </p>
              <p>
                With a round set of skills and experiences, I enjoy walking the user's journey, whether
                helping them discover valuable content in your article they found at the top of Google to 
                navigating them through your complex app. Afterwards, I cull data and analyze to understand
                how an article or app is performing and how to enhance the next user's experience. 
              </p>
              <Button href={Resume}>Download My Resume</Button>
            </Col>
          </Row>
        </Container>

        <a name="portfolio" />
        <Container className="section">
          <Row>
            <h2>Projects.</h2>
          </Row>
          <Row className="my-5 portfolio_card-lg">
            <Col md={6}>
              <img src={SJCPlatform} alt="St. Jude Cloud Genomics Platform Homepage" />
            </Col>
            <Col>
              <h3>St. Jude Cloud</h3>
              <p>
                I am a UI/UX designer and developer for the St. Jude Cloud site, <a href="https://stjude.cloud" target="_blank" rel="noopener noreferrer" className="link-animate">stjude.cloud</a>. 
                Specifically, I focus on the <a href="https://platform.stjude.cloud" target="_blank" rel="noopener noreferrer" className="link-animate">Genomics Platform</a> app, a ReactJS/Ruby on Rails site 
                that shares raw genomics data and analysis tools with scientists globally.
              </p>
              <Button as={Link} to='portfolio/stjude-cloud'>Learn More</Button>
            </Col>
          </Row>
          <Row className="my-5 portfolio_card-lg">
            <Col xs={{span: 12, order: 2}} md={{span: 6, order: 1}}>
              <h3>Mercer Capital</h3>
              <p>
                I was a senior graphic designer and marketing associate for <a href="https://mercercapital.com" target="_blank" rel="noopener noreferrer" className="link-animate">Mercer Capital</a>, 
                a business valuation and financial advisory firm. I designed for both digital and print mediums 
                and supported marketing efforts across the firm. These initiatives spanned the content 
                marketing process – from initial research and content creation to distribution and 
                post-production analysis.
              </p>
              <Button as={Link} to='portfolio/mercer-capital'>Learn More</Button>
            </Col>
            <Col xs={{span: 12, order: 1}} md={{span: 6, order: 2}}>
              <img src={MercerNewsletters} alt="Mercer Capital Newsletter Project" />
            </Col>
          </Row>
          <Row className="section">
            <Col md={4} className="portfolio_card-sm">
              <img src={HomerSign} alt="Homer Real Estate Sign" />
              <h3>Homer Real Estate</h3>
              <Button as={Link} to='portfolio/homer-real-estate'>Learn More</Button>
            </Col>
            <Col md={4} className="portfolio_card-sm">
              <img src={MSCAWebsite} alt="MSCA Website" />
              <h3>Mid-South Culinary Alliance</h3>
              <Button as={Link} to='portfolio/mid-south-culinary-alliance'>Learn More</Button>
            </Col>
            <Col md={4} className="portfolio_card-sm">
              <img src={MercyHillBanner} alt="Mercy Hill Banner" />
              <h3>Mercy Hill Church</h3>
              <Button as={Link} to='portfolio/mercy-hill-church'>Learn More</Button>
            </Col>
          </Row>
        </Container>

        
        <Container className="section">
        <a name="contact" />
          <Row>
            <Col md={6}>
              <img src={GetInTouch} alt="contact me cup of coffee" />
            </Col>
            <Col md={5} lg={4} className="get-in-touch">
              <div className="d-flex flex-column align-items-start">
              <h2>Get in Touch.</h2>
              <Button className="btn_email" href="mailto:stephawiggins@gmail.com">
              Email Me
            </Button>
            </div>
            <div className="mt-3">
            <Button
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/wigginsstephanie/"
                title="LinkedIn"
                alt="LinkedIn"
                className="btn_brand mr-2 py-3"
              >
                <FontAwesomeIcon
                  icon={["fab", "linkedin-in"]}
                />
              </Button>
              <Button 
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/sawiggins"
                title="GitHub"
                alt="GitHub"
                className="btn_brand py-3"
              >
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                />
              </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </main>
  )
}

export default IndexPage
