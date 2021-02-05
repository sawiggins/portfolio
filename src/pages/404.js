import * as React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"

import EmptyCoffeeCup from '../images/404.png';

const NotFoundPage = () => {
  return (
    <main className='d-flex align-items-center full-height'>
      <title>Not found</title>
    <Container>
      <Row>
      <Col md={5}>
        <img src={EmptyCoffeeCup} alt="Empty Coffee Cup" />
      </Col>
      <Col md={{span: 5, offset: 1}} className="d-flex flex-column justify-content-center">
        <h1>404.</h1>
        <p>
          Sorry, I cannot find that.
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
