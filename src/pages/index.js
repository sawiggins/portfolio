import React from "react"
import { Button, Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap"
import { Link } from "gatsby"

import Icon from '../images/icon.png'
import ImgStephanie from '../images/thumbnail_stephanie-wiggins-full.png'
import ImgStephanieDecorated from '../images/swiggins-decorated.png'
import Trees from '../images/trees.png'
import GetInTouch from '../images/get-in-touch.png'

const IndexPage = () => {
  return (
    <main>
      <title>Stephanie Wiggins' Portfolio</title>

      <Navbar>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        <Nav.Link href="#contact">Connect</Nav.Link>
      </Navbar>

      <Container fluid>
        <Container className="section">
          <Row className='mt-5'>
            <Col md={6} className="hero-text">
              <h1>
                Hi, I'm 
                <br />
                Stephanie Wiggins.
              </h1>
              <h5 className="mt-3">designer &nbsp;&nbsp; &#38;&#38; &nbsp;&nbsp; developer &nbsp;&nbsp; &#38;&#38; &nbsp;&nbsp; marketer</h5>
            </Col>
            <Col md={6}>
              <img src={ImgStephanieDecorated} alt="Stephanie Wiggins" />
            </Col>
          </Row>
        </Container>

        <a name="about" />
        <Container className="section">
          <Row >
            <Col md={6}>
              <img src={Trees} alt="" />
            </Col>
            <Col md={6}>
              <h2>Analytics yet Creative.</h2>
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
              <Button>Download My Resume</Button>
            </Col>
          </Row>
        </Container>

        <a name="portfolio" />
        <Container className="section">
          <Row>
            <h2>Projects.</h2>
          </Row>
          <Row className="my-5">
            <Col md={6}>
              <img src={Icon} alt="" />
            </Col>
            <Col>
              <h3>St. Jude Cloud</h3>
              <p>
                I am a UI/UX designer and developer for the St. Jude Cloud site, <a href="stjude.cloud">stjude.cloud</a>. 
                Specifically, I focus on the Genomics Platform app, a ReactJS/Ruby on Rails site 
                that shares raw genomics data and analysis tools with scientists globally.
              </p>
              <Button as={Link} to='portfolio/stjude-cloud'>Learn More</Button>
            </Col>
          </Row>
          <Row className="my-5">
            <Col>
              <h3>Mercer Capital</h3>
              <p>
                I was a senior graphic designer and marketing associate responsible for brand design 
                in both digital and print mediums and supported marketing functions across the firm.
                These marketing efforts spanned the content marketing process from initial research 
                and content creation to distribution and post-production analysis.
              </p>
              <Button as={Link} to='portfolio/mercer-capital'>Learn More</Button>
            </Col>
            <Col md={6}>
              <img src={Icon} alt="" />
            </Col>
          </Row>
          <Row className="section">
            <Col md={4}>
              <img src={Icon} alt="" />
              <h3>Homer<br />Real Estate</h3>
              <Button as={Link} to='portfolio/homer-real-estate'>Learn More</Button>
            </Col>
            <Col md={4}>
              <img src={Icon} alt="" />
              <h3>Mid-South Culinary Alliance</h3>
              <Button as={Link} to='portfolio/mid-south-culinary-alliance'>Learn More</Button>
            </Col>
            <Col md={4}>
              <img src={Icon} alt="" />
              <h3>Mercy Hill <br /> Church</h3>
              <Button as={Link} to='portfolio/mercy-hill-church'>Learn More</Button>
            </Col>
          </Row>
        </Container>

        <a name="contact" />
        <Container className="section">
          <Row>
            <Col md={6}>
              <img src={GetInTouch} alt="contact me cup of coffee" />
            </Col>
            <Col>
              <h2>Get in Touch.</h2>
              <Button>Learn More</Button>
              <span>social</span> <span>social</span>
            </Col>
          </Row>
        </Container>
      </Container>
    </main>
  )
}

export default IndexPage
