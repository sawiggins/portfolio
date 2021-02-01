import React from 'react'
import { Container, Row } from 'react-bootstrap'

const PortfolioHeader = ({title, description}) => {
  return (
    <>
      <Container>
        <Row className="py-5 my-5 flex-column">
          <h1 className="text-center">{title}</h1>
          <p className="text-center">{description}</p>
        </Row>
      </Container>
    </>
  )
}

export default PortfolioHeader;