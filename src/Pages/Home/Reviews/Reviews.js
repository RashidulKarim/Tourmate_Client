import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://salty-waters-70938.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data)
        )
    },[])
    return (
        <div className='package-section container mx-auto'>
            <h5 className='top'>Our Traveller Say</h5>
            <h2 className='title mb-5'>What Our Traveller Say<br /> About Us</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                reviews.map(review => <Review review={review} key={review._id}></Review>)
            }
            </Row>
        </div>
    );
};

export default Reviews;