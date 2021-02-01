import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const PortfolioBrief = ({imgSrc, imgAlt, header, description}) => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <img src={imgSrc} alt={imgAlt} />
        </Col>
        <Col>
          <h2>{title}</h2>
          <p>{description}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default PortfolioBrief;