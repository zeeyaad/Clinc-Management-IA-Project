import React, { useState } from 'react';
import Header from '../Components/header';
import Footer from '../Components/Footer';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
            name: '',
            mobile: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    const styles = {
        page: {
            background: '#f6fafd',
            minHeight: '100vh',
            paddingBottom: '40px'
        },
        contactContainer: {
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '2rem 1rem',
        },
        heading: {
            textAlign: 'center',
            margin: '2rem auto 1.5rem auto',
            color: '#12707a',
            fontSize: '2.5rem',
            fontFamily: 'inherit',
            background: 'linear-gradient(180deg, #eafdff 80%, transparent 100%)',
            width: 'fit-content',
            borderBottom: '3px solid #19b6c9',
            borderRadius: '6px 6px 0 0',
            padding: '0.5rem 2rem 0.5rem 2rem',
            boxShadow: '0 2px 0 #19b6c9'
        },
        infoGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
            margin: '2rem 0',
        },
        infoCard: {
            background: '#f6fafd',
            border: '2px solid #ccc',
            borderRadius: '4px',
            padding: '2.5rem 1rem 2rem 1rem',
            textAlign: 'center',
            color: '#444',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '300px',
        },
        infoIcon: {
            fontSize: '3rem',
            marginBottom: '1.2rem',
            color: '#aaa',
            background: '#d1d3d4',
            borderRadius: '8px',
            width: '70px',
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        infoTitle: {
            fontSize: '1.2rem',
            fontWeight: 600,
            letterSpacing: '1px',
            margin: '1rem 0 0.5rem 0',
        },
        infoDivider: {
            width: '50px',
            height: '2px',
            background: '#888',
            margin: '0.3rem auto 1rem auto',
            opacity: 0.3,
        },
        infoText: {
            color: '#888',
            fontSize: '1.1rem',
            marginBottom: '0.5rem',
        },
        formContainer: {
            margin: '0 auto',
            background: 'transparent',
            borderRadius: '8px',
            boxShadow: 'none',
            padding: 0,
            maxWidth: '100%'
        },
        form: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1.2fr',
            gridTemplateRows: '1fr 1fr',
            gap: '2rem',
            background: 'transparent',
            alignItems: 'start',
            marginBottom: '2rem'
        },
        input: {
            width: '100%',
            padding: '1.2rem',
            border: '1.5px solid #e2e2e2',
            borderRadius: '6px',
            fontSize: '1.1rem',
            background: '#fff',
            marginBottom: 0,
            boxSizing: 'border-box',
            fontFamily: 'inherit',
            color: '#333',
        },
        textarea: {
            width: '100%',
            padding: '1.2rem',
            border: '1.5px solid #e2e2e2',
            borderRadius: '6px',
            fontSize: '1.1rem',
            background: '#fff',
            minHeight: '200px',
            resize: 'vertical',
            fontFamily: 'inherit',
            color: '#333',
            gridColumn: '3 / 4',
            gridRow: '1 / 3',
        },
        buttonRow: {
            gridColumn: '1 / span 3',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1rem',
        },
        submitButton: {
            background: 'transparent',
            color: '#19b6c9',
            border: '2px solid #19b6c9',
            borderRadius: '6px',
            padding: '0.7rem 2.5rem',
            fontSize: '1.2rem',
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontFamily: 'inherit',
        },
        submitButtonHover: {
            background: '#19b6c9',
            color: '#fff',
        },
        '@media (maxWidth: 900px)': {
            form: {
                gridTemplateColumns: '1fr',
                gap: '1rem',
            },
            buttonRow: {
                gridColumn: '1 / span 1',
            }
        }
    };

    // Button hover state
    const [isHover, setIsHover] = useState(false);

    return (
        <div style={styles.page}>
            <Header />
            <div style={styles.contactContainer}>

                {/* Contact Info Cards Section */}
                <div style={styles.infoGrid}>
                    <div style={styles.infoCard}>
                        <div style={styles.infoIcon}>
                            <span role="img" aria-label="appointment">📅</span>
                        </div>
                        <div style={styles.infoTitle}>APPOINTMENT</div>
                        <div style={styles.infoDivider}></div>
                        <div style={styles.infoText}>+ 01 1122 333 333</div>
                        <div style={styles.infoText}>your appointment email address</div>
                    </div>
                    <div style={styles.infoCard}>
                        <div style={styles.infoIcon}>
                            <span role="img" aria-label="call">📞</span>
                        </div>
                        <div style={styles.infoTitle}>CALL US</div>
                        <div style={styles.infoDivider}></div>
                        <div style={styles.infoText}>+ 01 1122 333 333</div>
                        <div style={styles.infoText}>+ 01 1122 333 333</div>
                    </div>
                    <div style={styles.infoCard}>
                        <div style={styles.infoIcon}>
                            <span role="img" aria-label="email">✉️</span>
                        </div>
                        <div style={styles.infoTitle}>EMAIL US</div>
                        <div style={styles.infoDivider}></div>
                        <div style={styles.infoText}>Email Address 1</div>
                        <div style={styles.infoText}>Email Address 2</div>
                    </div>
                    <div style={styles.infoCard}>
                        <div style={styles.infoIcon}>
                            <span role="img" aria-label="location">📍</span>
                        </div>
                        <div style={styles.infoTitle}>LOCATION</div>
                        <div style={styles.infoDivider}></div>
                        <div style={styles.infoText}>Street name, City, Country</div>
                    </div>
                </div>
                {/* End Contact Info Cards Section */}
                <h3 style={styles.heading}>Make a Request</h3>
                <div style={styles.formContainer}>
                    <form onSubmit={handleSubmit} style={styles.form}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{ ...styles.input, gridColumn: '1 / 2', gridRow: '1 / 2' }}
                        />
                        <input
                            type="text"
                            name="mobile"
                            placeholder="Mobile Number"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            style={{ ...styles.input, gridColumn: '2 / 3', gridRow: '1 / 2' }}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{ ...styles.input, gridColumn: '1 / 2', gridRow: '2 / 3' }}
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            style={{ ...styles.input, gridColumn: '2 / 3', gridRow: '2 / 3' }}
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            style={styles.textarea}
                        />
                        <div style={styles.buttonRow}>
                            <button
                                type="submit"
                                style={isHover ? { ...styles.submitButton, ...styles.submitButtonHover } : styles.submitButton}
                                onMouseEnter={() => setIsHover(true)}
                                onMouseLeave={() => setIsHover(false)}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactUs;