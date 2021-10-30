import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <Navbar  bg="light" expand="lg">
                <Container>
                <Navbar.Brand>
                        <Link className='text-decoration-none text-black fw-bold' to='/'>
                        <img
                        alt=""
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        />{' '}
                    <span className='fs-3'>Tour<span className='brand-name'>Mate</span></span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav-item px-2"> 
                        <Link to="/home">Home</Link>
                        {
                            user?.email ? <>
                        <Link to="/myOrders">My Orders</Link> 
                        <Link to="/allOrders">Manage All Orders</Link> 
                        <Link to="/addPackage">Add Package</Link> 
                        <Link to="/addReview">Add Review</Link>
                        <Link to='#'>{user.displayName}</Link>
                        <button className='custom-btn'  onClick={logOut}>LogOut</button>
                            </> : <Link to="/login">Login</Link> 
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;