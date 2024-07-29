import React from 'react'

import './footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className="footer">
       <Container>
        <Row>
          <Col lg='5' className='mb-4' md='6'>
          <div className="logo">
            
             <div>
              <h1 className='text-white'>
                <span>⚕</span>
                GraceCareFinder</h1>
             </div>
            </div>

            <p className="footer__text mt-4 ">
            Find hospitals and pharmacies <br />close to you effortlessly.</p>
          </Col>

         
           <Col lg='3' md='3' className='mb-4'>
           <div className="footer_quick-links">
            <h4 className="quick__links-title">
              Useful Links
            </h4>
            <ListGroup className='mb-3'>
              <ListGroupItem className='ps-0 border-0'>
                <Link to='/hospital'>Hospital List</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/signup'>Sign Up</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='/login'>Log In</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to='#'>Privacy Policy</Link>
              </ListGroupItem>
            </ListGroup>
           </div>
           </Col>

           <Col lg='4' md='4' className='mb-4'>
           <div className="footer_quick-links">
            <h4 className="quick__links-title">
              Contact
            </h4>
            <ListGroup className='footer__contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-map-pin-2-line"></i></span>
                <p>12 Montagory Road, Yaba, Lagos, Nigeria</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span><i class="ri-phone-line"></i></span>
                <p>+234 808 786 7909</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span><i class="ri-mail-line"></i></span>
                <p>contact@gracecarefinder.com</p>
              </ListGroupItem>

            </ListGroup>
           </div>
           </Col>

           <Col lg='12'>
           <p className="footer__copyright">
            Copyright {year } developed by Akinyeke Daniel. All rights reserved. 
           </p>
           </Col>  
        </Row>
       </Container>
    </footer>
  )
};

export default Footer