import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'gatsby'

const PortfolioMoreProjects = () => {
  return (
    <Container className="section portfolio__more-projects">
      <Row className='justify-content-center row__more-projects'>
          <div  class="projects-box">
            <Link to='/#porfolio'>
              <h1 className="text-center">View More Projects</h1>
            </Link>
          </div>
      </Row>
    </Container>
  )
}

export default PortfolioMoreProjects;