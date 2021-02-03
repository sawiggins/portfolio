import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const PortfolioHeader = ({title, description}) => {
  return (
    <>
      <Container>
        <Row className="py-5 mt-5 flex-column">
          <Col md={{span: 10, offset: 1}}>
            <h1 className="text-center">{title}</h1>
            <p className="text-center">{description}</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PortfolioHeader;
