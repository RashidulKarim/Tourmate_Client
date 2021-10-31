import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Package = (props) => {
    const {name, price, duration, _id, imgUrl } = props.package

    return (
        <div>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={imgUrl} />
                        <Card.Body>
                        <div className='d-flex justify-content-between'>
                            <h6>${price}/ Per Person</h6>
                            <h6><span className='p-1 text-primary'><FontAwesomeIcon icon={faCalendarAlt} /></span>{duration}</h6>
                        </div>
                        <div>
                            <h3><span className='p-1 text-primary'><FontAwesomeIcon icon={faMapMarkerAlt}/></span><span className='orange'>{name}</span></h3>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p><span className='p-1 orange'><FontAwesomeIcon icon={faStar}/></span>8k+ review</p>
                            <button className='book-btn'><Link  to={`/package/${_id}`}>Book</Link></button>
                        </div>
                        <div>
                      
                        </div>
                        </Card.Body>
                    </Card>
                </Col>
        </div>
    );
};

export default Package;
