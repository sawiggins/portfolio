import * as React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

const NotFoundPage = ({ data }) => {
  return (
    <main className='d-flex align-items-center full-height'>
      <title>Not found</title>
    <Container>
      <Row>
      <Col md={5}>
        <Img fluid={data.EmptyCoffeeCup.childImageSharp.fluid} fadeIn={false} alt="Church" />
      </Col>
      <Col md={{span: 5, offset: 1}} className="d-flex flex-column justify-content-center">
        <h1>404.</h1>
        <p>
          Sorry, getting a refill to fuel more design and development.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
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
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
