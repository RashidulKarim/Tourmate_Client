import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Package from '../Package/Package';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(()=>{
        fetch('https://salty-waters-70938.herokuapp.com/packages')
        .then(res => res.json())
        .then(data => setPackages(data)
        )
    },[])
    return (
        <div className='package-section container mx-auto'>
            <h5 className='top'>Choose Your Package</h5>
            <h2 className='title mb-5'>Select Your Best Package <br /> For Your Travel</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                packages.length ? packages.map(pg => <Package package={pg} key={pg._id}></Package>) : <span className='mx-auto'>
                <Spinner animation="border" variant="primary" />
                <Spinner animation="border" variant="secondary" />
                <Spinner animation="border" variant="success" />
                <Spinner animation="border" variant="danger" />
                <Spinner animation="border" variant="warning" />
                <Spinner animation="border" variant="info" />
                    </span>
            }
            </Row>
 
        </div>
    );
};

export default Packages;