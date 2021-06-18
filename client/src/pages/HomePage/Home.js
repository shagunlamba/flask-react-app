import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import classes from './Home.module.css';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import SocialImage from '../../Assets/images/SocialImage.jpg';

const Home = () => {


    return (
        <Fragment>
        <div className={classes.Home}>
            {/* Navbar */}
            {/* One image */}
            {/* About us */}
            {/* Our mission */}
            {/*  */}
            <img src={SocialImage} alt="" style={{}}/>
                    
        </div>
        <Footer />
        </Fragment>
    )
}

export default Home;