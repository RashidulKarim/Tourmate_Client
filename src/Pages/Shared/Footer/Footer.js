import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <div className='col-lg-4 col-md-12'>
                        <div className='text-lg-start text-center pb-3 pb-lg-1'>
                            <h3 className='orange'>TourMate</h3>
                            <p className='text-secondary'>Tourmate is a leading brand in bangladesh tourism sector. We Provide best tour package at cheap price. We always cares our customers</p>
                            <h4 className='text-white  md:text-center'>Follow Us:</h4>
                            <span className='text-danger fs-3 px-2'><FontAwesomeIcon icon={faFacebook} /></span>
                            <span className='text-danger fs-3 px-2'><FontAwesomeIcon icon={faInstagram} /></span>
                            <span className='text-danger fs-3 px-2'><FontAwesomeIcon icon={faTwitter} /></span>
                            <span className='text-danger fs-3 px-2'><FontAwesomeIcon icon={faYoutube} /></span>
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-12'>
                        <Row>
                            <div className='col-lg-5 col-md-6 mt-lg-0 mt-4 text-lg-start text-center'>
                                <h4 className='mb-3 ms-2 text-warning'>Contact US</h4>
                                <div className='d-flex justify-content-lg-start justify-content-center mb-2'>
                                    <div className='mx-2'>
                                        <span><FontAwesomeIcon icon={faPhoneAlt} /></span>
                                    </div>
                                   <div>
                                   <span>01915555256, </span>
                                    <span>01303020662</span>
                                   </div>
                                </div>
                                <div className='d-flex justify-content-lg-start justify-content-center mb-2'>
                                    <div className='m-2'>
                                        <span><FontAwesomeIcon icon={faEnvelope} /></span>
                                    </div>
                                   <div>
                                   <span className='d-block'>Rashidul.karim7@gmail.com</span>
                                    <span>support@example.com</span>
                                   </div>
                                </div>
                                <div className='d-flex justify-content-lg-start justify-content-center mb-2'>
                                    <div className='m-2'>
                                        <span><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                                    </div>
                                   <div>
                                   <span className='d-block'>668, East Dholairpar</span>
                                    <span>Dhaka, Bangladesh</span>
                                   </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-lg-start text-center mt-lg-0 mt-4">
                                <h4 className='mb-3 text-warning'>Support</h4>
                                <p>Contact Us</p>
                                <p>About Us</p>
                                <p>Our Blogs</p>
                                <p>Packages</p>
                            </div>
                            <div className="col-lg-4 col-md-12 mt-lg-0 mt-4 text-lg-start text-center">
                                <h4 className='mb-3 text-warning'>We Accepts:</h4>
                                <h5 className='d-lg-block d-inline-block mx-3'>Visa</h5>
                                <h5 className='d-lg-block d-inline-block mx-3'>MasterCard</h5>
                                <h5 className='d-lg-block d-inline-block mx-3'>Skrill</h5>
                                <h5 className='d-lg-block d-inline-block mx-3'>Stripe</h5>
                                <h5 className='d-lg-block d-inline-block mx-3'>Discover</h5>
                            </div>
                        </Row>
                    </div>
                </Row>
                <Row className='text-center mt-4 mb-2 text-primary'>
                        <p>&copy; All Right Reserved By Rashidul Karim.</p>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;