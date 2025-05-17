import React from 'react';
import Header from '../Components/header';
import Footer from '../Components/Footer';

const servicesData = [
    {
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        icon: '🩺',
        title: 'Cardiovascular centre',
        desc: "When you're facing heart or vascular issues, the last thing you should do is have to search for your care. Our Cardiovascular and Surgery Hospital have a heart team of top specialists and world-class technology in one location. Our new 142,000-square-foot facility features the ...",
        link: '#',
    },
    {
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd23?auto=format&fit=crop&w=400&q=80',
        icon: '👶',
        title: 'Childbirth Center',
        desc: 'We believe that childbirth is a natural event, not a medical procedure and believe in women and families being at the heart of their own birth experience. Our childbirth team is here to support and encourage our patients to enjoy their journey. To do this we ...',
        link: '#',
    },
    {
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
        icon: '💙',
        title: 'Cardiology',
        desc: 'Cardiology deals with disorders of the heart, as well as some parts of the circulatory system. Our hospital offers a full range of diagnostic and interventional cardiology services, including care of children and paediatric cardiologists ...',
        link: '#',
    },
    {
        image: 'https://images.unsplash.com/photo-1512070679279-c2f999098c01?auto=format&fit=crop&w=400&q=80',
        icon: '🧴',
        title: 'Skin Care',
        desc: 'The flawless, blemish and acne-free skin that you always dreamt of is no longer a dream, but a reality. Our advanced skin care team and technology help you achieve the best skin for you. ...',
        link: '#',
    },
    {
        image: 'https://images.unsplash.com/photo-1511174511562-5f97f4f4c1b3?auto=format&fit=crop&w=400&q=80',
        icon: '🔬',
        title: 'Laboratory Services',
        desc: 'A laboratory is a facility that provides controlled conditions in which scientific or technological research, experiments, and measurement may be performed. Laboratory services are essential for diagnosis and treatment ...',
        link: '#',
    },
    {
        image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=400&q=80',
        icon: '🌟',
        title: 'Mammography',
        desc: 'Mammography is a medical imaging technique that uses a low-dose x-ray system to see inside the breasts. It is used as a diagnostic and screening tool. ...',
        link: '#',
    },
    {
        image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=400&q=80',
        icon: '💊',
        title: 'Dermatologist',
        desc: 'Dermatology is the practice of medicine dealing with the skin, nails, hair and its diseases. It is a specialty with both medical and surgical aspects. ...',
        link: '#',
    },
    {
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
        icon: '💉',
        title: 'Anaesthesiology',
        desc: 'Anaesthesiology is the practice of medicine that deals with the relief of pain and total care of surgical patients before, during and after surgery. ...',
        link: '#',
    },
    {
        image: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?auto=format&fit=crop&w=400&q=80',
        icon: '👶',
        title: 'Paediatrics',
        desc: 'Paediatric gastroenterology has grown greatly in the past 20 years. Many diseases are now recognized as being due to genetic factors, and specific paediatric standards are available ...',
        link: '#',
    },
];



const styles = {
    whySection: {
        background: '#19b6c9',
        padding: '3rem 0 2.5rem 0',
        color: '#fff',
        marginBottom: '2rem',
    },
    whyHeading: {
        textAlign: 'center',
        fontSize: '2.2rem',
        fontWeight: 600,
        marginBottom: '2.5rem',
        background: '#12707a',
        display: 'inline-block',
        padding: '0.5rem 2.5rem',
        borderRadius: '5px',
        borderBottom: '3px solid #fff',
        boxShadow: '0 2px 0 #12707a',
    },
    whyGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    whyCard: {
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid #b2e6ee',
        borderRadius: '6px',
        padding: '2rem 1rem 1.5rem 1rem',
        textAlign: 'center',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '220px',
    },
    whyIcon: {
        fontSize: '2.5rem',
        marginBottom: '1.2rem',
        color: '#fff',
        border: '1.5px solid #b2e6ee',
        borderRadius: '8px',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255,255,255,0.08)',
    },
    whyTitle: {
        fontWeight: 600,
        fontSize: '1.1rem',
        margin: '0.7rem 0 0.5rem 0',
    },
    whyDesc: {
        color: '#e0f7fa',
        fontSize: '1rem',
        lineHeight: 1.5,
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '2rem auto',
    },
    card: {
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #e0e0e0',
        minHeight: '480px',
    },
    image: {
        width: '100%',
        height: '160px',
        objectFit: 'cover',
    },
    iconCircle: {
        background: '#19b6c9',
        color: '#fff',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        margin: '-30px auto 10px auto',
        boxShadow: '0 2px 8px rgba(25,182,201,0.15)',
        border: '4px solid #fff',
        position: 'relative',
        top: '-30px',
    },
    cardContent: {
        padding: '0 1.5rem 1.5rem 1.5rem',
        textAlign: 'center',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    title: {
        fontWeight: 600,
        fontSize: '1.15rem',
        color: '#12707a',
        margin: '0.5rem 0 0.5rem 0',
    },
    desc: {
        color: '#555',
        fontSize: '1rem',
        marginBottom: '1rem',
    },
    link: {
        color: '#19b6c9',
        textDecoration: 'underline',
        fontWeight: 500,
        fontSize: '1rem',
        marginTop: 'auto',
        cursor: 'pointer',
    },
    '@media (maxWidth: 900px)': {
        grid: {
            gridTemplateColumns: '1fr',
        },
    },
};

const Services = () => {
    return (
        <div style={{ background: '#f6fafd', minHeight: '100vh' }}>
            <Header />

            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem 1rem 2rem 1rem' }}>
                <h1 style={{ textAlign: 'center', color: '#12707a', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Services</h1>
                <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: 1.7, textAlign: 'center' }}>
                    Here you can describe the services your organization offers. <br /><br />
                    You might list medical consultations, appointment scheduling, patient data management, telemedicine, and more. <br /><br />
                    Add more details or sections as needed!
                </p>
            </div>
            {/* Services Grid */}
            <div style={styles.grid}>
                {servicesData.map((service, idx) => (
                    <div style={styles.card} key={idx}>
                        <img src={service.image} alt={service.title} style={styles.image} />
                        <div style={styles.iconCircle}>{service.icon}</div>
                        <div style={styles.cardContent}>
                            <div style={styles.title}>{service.title}</div>
                            <div style={styles.desc}>{service.desc}</div>
                            <a href={service.link} style={styles.link}>Read More</a>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Services; 