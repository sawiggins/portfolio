import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import SiteNav from '../components/nav.js'
import RotatingIntro from '../components/rotating-intro'

import HomerSign from '../images/homer_yard-sign-home.png'
import MSCAWebsite from '../images/msca_website-homepage.png'
import MercyHillBanner from '../images/mercy-hill_banner-homepage.png'

library.add(
  fab,
  faLinkedin,
  faGithub
);

const IndexPage = ({ data }) => {
  return (
    <main>

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
              <RotatingIntro />
            </Col>
            <Col xs={{span: 12, order: 1}} md={{span: 6, order: 2}}>
              <GatsbyImage image={getImage(data.stephanieFeature)} alt="Stephanie Wiggins" />
            </Col>
          </Row>
        </Container>

        <a name="about" />
        <Container className="section about-me">
          <Row >
            <Col md={6} className="d-flex flex-column justify-content-center">
            <GatsbyImage image={getImage(data.trees)} alt="trees" />
            </Col>
            <Col md={6}>
              <h2>Analytical yet Creative.</h2>
              <p>
                With a background in design and marketing, I bring a product-centric focus to my work as a Rails developer.
                I build features across the stack — translating product needs into technical decisions, from designing how
                the data is structured and building the application logic to polishing the user interface.
              </p>
              <p>
                I'm excited about how AI is changing what's possible in product development, creating new opportunities
                to experiment, iterate quickly, and bring ideas to life.
              </p>
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
              <GatsbyImage image={getImage(data.podiaFeature)} alt="Illustrated application stack showing a Podia course editor above Rails application logic and a PostgreSQL database" />
            </Col>
            <Col md={6}>
              <h3>Podia</h3>
              <p>
                At <a href="https://www.podia.com/" target="_blank" rel="noopener noreferrer" className="link-animate">Podia</a>, I worked on a mature Rails monolith, building new product features and improving
                the systems behind them. My work spanned the app, including a blog platform, course and quiz editors,
                and community features, along with database architecture, complex data migrations, query optimization,
                and performance improvements.
              </p>
              <p>
                Working across Rails, Hotwire (Turbo), PostgreSQL, and React, I combined hands-on development with
                clear communication and project coordination to bring features from concept through implementation,
                while maintaining and improving an application with years of existing customer data.
              </p>
            </Col>
          </Row>
          <Row className="my-5 portfolio_card-lg">
            <Col xs={{span: 12, order: 1}} md={{span: 6, order: 2}}>
            <GatsbyImage image={getImage(data.sjcPlatform)} alt="Homepage from St. Jude Cloud Genomics Platform" />
            </Col>
            <Col xs={{span: 12, order: 2}} md={{span: 6, order: 1}}>
              <h3>St. Jude Cloud</h3>
              <p>
                I was a UI/UX designer and web developer for the St. Jude Cloud website, <a href="https://stjude.cloud" target="_blank" rel="noopener noreferrer" className="link-animate">stjude.cloud</a>.
                Specifically, I focused on the <a href="https://platform.stjude.cloud" target="_blank" rel="noopener noreferrer" className="link-animate">Genomics Platform</a>, a ReactJS/Ruby on Rails application
                that shared raw genomics data and analysis tools with scientists globally.
              </p>
              <Button as={Link} to='portfolio/stjude-cloud'>Learn More</Button>
            </Col>
          </Row>
          <Row className="my-5 portfolio_card-lg">
            <Col xs={{span: 12, order: 2}} md={{span: 6, order: 2}}>
              <h3>Mercer Capital</h3>
              <p>
                I was a senior graphic designer and marketing associate for <a href="https://mercercapital.com" target="_blank" rel="noopener noreferrer" className="link-animate">Mercer Capital</a>, 
                a business valuation and financial advisory firm. I designed for both digital and print mediums 
                and supported marketing efforts across the firm. These initiatives spanned the entire content 
                marketing process – from initial research and content creation to distribution and 
                post-production analysis.
              </p>
              <Button as={Link} to='portfolio/mercer-capital'>Learn More</Button>
            </Col>
            <Col xs={{span: 12, order: 1}} md={{span: 6, order: 1}}>
            <GatsbyImage image={getImage(data.mercerNewsletters)} alt="Mercer Capital Newsletters" />
            </Col>
          </Row>
<Row className="section"><Col md={4} className="portfolio_card-sm"><img src="/projects/railsdevs-desktop.png" alt="RailsDevs website displayed on a desktop computer on a light wood desk"/><h3>RailsDevs</h3><Button as={Link} to="/portfolio/railsdevs">Learn More</Button></Col><Col md={4} className="portfolio_card-sm"><img src="/projects/fcar-laptop.png" alt="Adoption application concept on a laptop beside a dog"/><h3>Fayette County Animal Rescue</h3><Button as={Link} to="/portfolio/fayette-county-animal-rescue">Learn More</Button></Col><Col md={4} className="portfolio_card-sm"><img src="/projects/global-friends-globe.png" alt="Global Friends Memphis website displayed on a laptop beside a globe"/><h3>Global Friends</h3><Button as={Link} to="/portfolio/global-friends">Learn More</Button></Col></Row>
          <Row className="section">
            <Col md={4} className="portfolio_card-sm">
              {/* <GatsbyImage image={getImage(data.homerYardSign)} alt="Homer Real Estate Yard Sign" /> */}
              <img src={HomerSign} alt="Homer Real Estate Yard Sign" /> 
              <h3>Homer Real Estate</h3>
              <Button as={Link} to='portfolio/homer-real-estate'>Learn More</Button>
            </Col>
            <Col md={4} className="portfolio_card-sm">
              {/* <GatsbyImage image={getImage(data.mscaHomepage)} alt="Mid-South Culinary Alliance Homepage" /> */}
              <img src={MSCAWebsite} alt="Mid-South Culinary Alliance Homepage" /> 
              <h3>Mid-South Culinary Alliance</h3>
              <Button as={Link} to='portfolio/mid-south-culinary-alliance'>Learn More</Button>
            </Col>
            <Col md={4} className="portfolio_card-sm">
              {/* <GatsbyImage image={getImage(data.mercyHillBanner)} alt="Mercy Hill Banner" /> */}
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
              <GatsbyImage image={getImage(data.getInTouch)} alt="Cup of Coffee" />
            </Col>
            <Col md={5} lg={4} className="get-in-touch">
              <div className="d-flex flex-column align-items-start">
              <h2>Get in Touch.</h2>
            </div>
            <div className="mt-3">
            <Button
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/wigginsstephanie/"
                title="LinkedIn"
                alt="LinkedIn"
                className="btn_brand me-2 py-3"
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

export const query = graphql`
  query {
    stephanieFeature: file(relativePath: { eq: "swiggins-decorated.png" }) {
      childImageSharp {
        gatsbyImageData(width: 700, placeholder: NONE, layout: CONSTRAINED)
      }
    }
    trees: file(relativePath: { eq: "trees.png" }) {
      childImageSharp {
        gatsbyImageData(width: 700, placeholder: NONE, layout: CONSTRAINED)
      }
    }
    podiaFeature: file(relativePath: { eq: "podia_feature.png" }) {
      childImageSharp {
        gatsbyImageData(width: 700, placeholder: NONE, layout: CONSTRAINED)
      }
    }
    sjcPlatform: file(relativePath: { eq: "sjc_platform.png" }) {
      childImageSharp {
        gatsbyImageData(width: 700, placeholder: NONE, layout: CONSTRAINED)
      }
    }
    mercerNewsletters: file(relativePath: { eq: "mercer_newsletters.png" }) {
      childImageSharp {
        gatsbyImageData(width: 700, placeholder: NONE, layout: CONSTRAINED)
      }
    }
    getInTouch: file(relativePath: { eq: "get-in-touch.png" }) {
      childImageSharp {
        gatsbyImageData(width: 700, placeholder: NONE, layout: CONSTRAINED)
      }
    }
  }
`

export const Head = () => <title>Stephanie Wiggins</title>
