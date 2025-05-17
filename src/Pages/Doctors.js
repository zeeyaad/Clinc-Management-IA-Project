import React from 'react';
import Header from '../Components/header';
import Footer from '../Components/Footer';

const doctorsData = [
    {
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: 'Daniel Barnes',
        specialty: 'Ortho',
        role: 'CEO',
        degree: 'MBBS, MD, MCH',
        awards: 23,
        experience: 26,
        socials: ['facebook', 'twitter', 'google', 'instagram'],
    },
    {
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        name: 'Melissa Bates',
        specialty: 'Gyno',
        role: 'COO',
        degree: 'MBBS, MS, MA',
        awards: 18,
        experience: 20,
        socials: ['facebook', 'twitter', 'google', 'instagram'],
    },
    {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: 'Cheri Aria',
        specialty: 'Skin',
        role: 'Senior Resident',
        degree: 'MBBS, MD',
        awards: 20,
        experience: 16,
        socials: ['facebook', 'twitter', 'google', 'instagram'],
    },
];

const departmentData = [
    {
        icon: '🚺',
        title: 'Gynaecology',
        desc: 'Obstetrics and Gynaecology (often abbreviated to OB/GYN, OBG, OG&G or Obs & Gynae) are the two surgical specialties dealing with the female reproductive organs, and as such are often combined to form a single medical specialty and postgraduate training program.',
    },
    {
        icon: '🌡️',
        title: 'Orthology',
        desc: 'Orthology is the study of the right use of words in language. The word comes from Greek ortho- ("correct") and -logy ("science of"). This science is a place where psychology, philosophy, linguistics, and many other fields of learning come together.',
    },
    {
        icon: '🩺',
        title: 'Dermatologist',
        desc: 'Dermatology is the branch of medicine dealing with the skin, nails, hair and its diseases. It is a specialty with both medical and surgical aspects. A dermatologist treats diseases, in the widest sense, and some domestic problems of the skin, scalp, hair, and nails.',
    },
    {
        icon: '🛏️',
        title: 'Anaesthesia',
        desc: 'As anaesthesiologists we are responsible for the safety and well-being of patients before, during and after surgery. This includes placing patients in a state of controlled unconsciousness called general anaesthesia, the provision of aesthetics where only a portion of the body is made numb, or administering sedation when indicated for the relief of pain or anxiety.',
    },
    {
        icon: '👁️',
        title: 'Ayurvedic',
        desc: 'Another milestone to achieve Holistic Health is the addendum of Ayurvedic Clinic at our clinic. The first school of medicine dating back to the origin of life itself, makes a come back with all its glory in the 21st century. With the west aping the east on eternal truths and knowledge of life, we need to refresh our old science of sages according to modern ages.',
    },
    {
        icon: '🍸',
        title: 'Pathology',
        desc: 'The modern practice of pathology is divided into a number of sub disciplines within the discrete but deeply interconnected aims of biological research and medical practice. Biomedical research into disease incorporates the work of vast variety of life science specialists, whereas, in most parts of the world, to be licensed to practice pathology as medical specialty, one has to complete medical school and secure a license to practice medicine.',
    },
];

const socialIcons = {
    facebook: '🌐',
    twitter: '🐦',
    google: '🔍',
    instagram: '📸',
};

const styles = {
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
        minHeight: '420px',
    },
    image: {
        width: '100%',
        height: '180px',
        objectFit: 'cover',
    },
    nameBar: {
        background: '#19b6c9',
        color: '#fff',
        width: '100%',
        textAlign: 'center',
        fontWeight: 600,
        fontSize: '1.15rem',
        padding: '0.7rem 0',
        letterSpacing: '0.5px',
    },
    specialty: {
        color: '#12707a',
        fontWeight: 500,
        fontSize: '1.1rem',
        margin: '1rem 0 0.5rem 0',
        textAlign: 'center',
    },
    infoRow: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        margin: '0.5rem 0',
    },
    infoCol: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '0.98rem',
        color: '#444',
    },
    icon: {
        fontSize: '1.2rem',
        marginBottom: '0.2rem',
    },
    awardsExpRow: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        margin: '0.5rem 0',
    },
    awardsExpCol: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '0.98rem',
        color: '#444',
    },
    socialRow: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1.2rem',
        margin: '1rem 0 1.2rem 0',
    },
    socialIcon: {
        fontSize: '1.3rem',
        color: '#19b6c9',
        cursor: 'pointer',
        transition: 'color 0.2s',
    },
    departmentSection: {
        background: '#19b6c9',
        padding: '3rem 0 2.5rem 0',
        color: '#fff',
        marginTop: '2.5rem',
    },
    departmentHeading: {
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
    departmentGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    departmentCard: {
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid #b2e6ee',
        borderRadius: '6px',
        padding: '2rem 1rem 1.5rem 1rem',
        textAlign: 'left',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        minHeight: '220px',
    },
    departmentIcon: {
        fontSize: '2.2rem',
        marginBottom: '1.2rem',
        color: '#fff',
        border: '1.5px solid #b2e6ee',
        borderRadius: '8px',
        width: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255,255,255,0.12)',
    },
    departmentTitle: {
        fontWeight: 600,
        fontSize: '1.1rem',
        margin: '0.7rem 0 0.5rem 0',
    },
    departmentDesc: {
        color: '#e0f7fa',
        fontSize: '1rem',
        lineHeight: 1.5,
    },
};

const Doctors = () => {
    return (
        <div style={{ background: '#f6fafd', minHeight: '100vh' }}>
            <Header />
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '3rem 1rem 2rem 1rem' }}>
                <h1 style={{ textAlign: 'center', color: '#12707a', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Doctors</h1>
                <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: 1.7, textAlign: 'center' }}>
                    Meet our team of experienced and dedicated doctors. <br /><br />
                    You can list doctor profiles, specialties, and more here.
                </p>
            </div>
            {/* Doctors Grid */}
            <div style={styles.grid}>
                {doctorsData.map((doc, idx) => (
                    <div style={styles.card} key={idx}>
                        <img src={doc.image} alt={doc.name} style={styles.image} />
                        <div style={styles.nameBar}>{doc.name}</div>
                        <div style={styles.specialty}>{doc.specialty}</div>
                        <div style={styles.infoRow}>
                            <div style={styles.infoCol}><span style={styles.icon}>🛡️</span>{doc.role}</div>
                            <div style={styles.infoCol}><span style={styles.icon}>🎓</span>{doc.degree}</div>
                        </div>
                        <div style={styles.awardsExpRow}>
                            <div style={styles.awardsExpCol}><span style={styles.icon}>🏆</span>Awards: {doc.awards}</div>
                            <div style={styles.awardsExpCol}><span style={styles.icon}>⚙️</span>Experience: {doc.experience} Year</div>
                        </div>
                        <div style={styles.socialRow}>
                            {doc.socials.map((soc, i) => (
                                <span key={i} style={styles.socialIcon}>{socialIcons[soc]}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {/* Our Department Section */}
            <div style={styles.departmentSection}>
                <div style={{ textAlign: 'center' }}>
                    <span style={styles.departmentHeading}>Our Department</span>
                </div>
                <div style={styles.departmentGrid}>
                    {departmentData.map((item, idx) => (
                        <div style={styles.departmentCard} key={idx}>
                            <div style={styles.departmentIcon}>{item.icon}</div>
                            <div style={styles.departmentTitle}>{item.title}</div>
                            <div style={styles.departmentDesc}>{item.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Doctors; 