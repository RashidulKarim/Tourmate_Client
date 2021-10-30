import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Review = (props) => {
    const {name, comment, imgUrl } = props.review
    return (
        <div>
            <Col className='review-card'>
                    <Card style={{border:'none'}}>
                        <div className='reviewer-img'>
                           <img src={imgUrl} alt="" />
                        </div>
                        <div>
                            <h4>{name}</h4>
                            <p className='text-justify'>{comment}</p>
                        </div>
                           
                    </Card>
                </Col>
        </div>
    );
};

export default Review;