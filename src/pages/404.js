import * as React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const NotFoundPage = ({ data }) => {
  return (
    <main className='d-flex align-items-center full-height'>
    <Container>
      <Row>
      <Col md={5}>
        <GatsbyImage image={getImage(data.EmptyCoffeeCup)} alt="Empty coffee cup" />
      </Col>
      <Col md={{span: 5, offset: 1}} className="d-flex flex-column justify-content-center">
        <h1>404.</h1>
        <p>
          Sorry, getting a refill to fuel more design and development.
          <br />
          <br />
          <Link to="/" className="link-animate">Go home</Link>.
        </p>
      </Col>
      </Row>
    </Container>
    </main>
  )
}

export default NotFoundPage

export const query = graphql`
  query {
    EmptyCoffeeCup: file(relativePath: { eq: "404.png" }) {
      childImageSharp {
        gatsbyImageData(width: 700, placeholder: NONE, layout: CONSTRAINED)
      }
    }
  }
`

export const Head = () => (
  <>
    <html lang="en" />
    <title>Not found</title>
    <meta name="description" content="This page could not be found. Explore Stephanie Wiggins’s portfolio of web development, UX/UI design, and branding projects." />
  </>
)
