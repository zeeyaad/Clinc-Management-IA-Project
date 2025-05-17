import React from 'react';
import Header from '../Components/header';
import Footer from '../Components/Footer';

const AboutUs = () => {
    return (
        <div style={{ background: '#f6fafd', minHeight: '100vh' }}>
            <Header />
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem 1rem 2rem 1rem' }}>
                <h1 style={{ textAlign: 'center', color: '#12707a', fontSize: '2.5rem', marginBottom: '1.5rem' }}>About Us</h1>
                <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: 1.7, textAlign: 'center' }}>
                    Welcome to our About Us page!<br /><br />
                    We are dedicated to providing the best service for our patients and clients. Our team is passionate about healthcare and technology, and we strive to deliver innovative solutions for appointment and patient data management.<br /><br />
                    <b>Our Mission:</b> To make healthcare management simple, efficient, and accessible for everyone.<br /><br />
                    <b>Our Vision:</b> To be a leader in digital healthcare solutions, empowering both patients and providers.<br /><br />
                    Thank you for choosing us!
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs; 