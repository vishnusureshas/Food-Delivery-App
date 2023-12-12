import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Burger from '../../assets/hero/hero-2.png'
import {Link} from 'react-router-dom'

function Section1() {
  return (
    <section className="hero_section">
        <Container>
            <Row>
              <Col lg={7} className='mb-5 mb-lg-0 '>
                 <div className="position-relative">
                    <img src={Burger} alt="Hero" className='img-fluid' />
                    <div className="price_badge">
                      <div className="badge_text">
                        <h4 className='h4_xs'>Only</h4>
                        <h4 className='h3_lg'>$6.99</h4>
                      </div>
                    </div>
                 </div>
              </Col>
              <Col lg={5}>
                 <div className="hero_text text-center">
                   <h1 className='text-white'>New Burger</h1>
                   <h2 className='text-white'>With Onion</h2>
                   <p className='text-white pt-2 pb-4'>
                       A burger is a patty of ground beef grilled and placed between two halves of a bun.
                       Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor.
                       Burgers are considered an American food but are popular around the world.
                   </p>
                   <Link to='/' className='btn order_now'>
                     Order Now
                   </Link>
                 </div>
              </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section1
