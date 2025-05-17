import React, { useState } from 'react';
import Header from '../Components/header';
import Footer from '../Components/Footer';

const styles = {
    page: {
        minHeight: '100vh',
        background: '#f6fafd',
        display: 'flex',
        flexDirection: 'column',
    },
    centerWrap: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        background: '#fff',
        borderRadius: '18px',
        boxShadow: '0 4px 32px rgba(0,0,0,0.07)',
        padding: '2.5rem 2.5rem 2.5rem 2.5rem',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center',
    },
    title: {
        fontSize: '2.3rem',
        fontWeight: 700,
        marginBottom: '1.2rem',
        color: '#222',
    },
    desc: {
        fontSize: '1.15rem',
        color: '#444',
        marginBottom: '2.2rem',
        lineHeight: 1.5,
    },
    label: {
        display: 'block',
        textAlign: 'left',
        fontWeight: 600,
        fontSize: '1.1rem',
        marginBottom: '0.5rem',
        color: '#222',
    },
    input: {
        width: '100%',
        padding: '0.9rem 1rem',
        border: '1.5px solid #e0e0e0',
        borderRadius: '8px',
        fontSize: '1.1rem',
        marginBottom: '2rem',
        outline: 'none',
        color: '#222',
        background: '#fafbfc',
        boxSizing: 'border-box',
    },
    button: {
        width: '100%',
        background: 'linear-gradient(90deg, #2563eb 0%, #2563eb 100%)',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        fontSize: '1.2rem',
        fontWeight: 500,
        padding: '1rem 0',
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(37,99,235,0.08)',
        transition: 'background 0.2s',
    },
};

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle reset logic here
        alert('Reset link sent to ' + email);
    };
    return (
        <div style={styles.page}>
            <Header />
            <div style={styles.centerWrap}>
                <form style={styles.card} onSubmit={handleSubmit}>
                    <div style={styles.title}>Forgot Password</div>
                    <div style={styles.desc}>
                        Enter your email address and we'll send you a link to reset your password.
                    </div>
                    <label style={styles.label} htmlFor="email">Email address</label>
                    <input
                        style={styles.input}
                        type="email"
                        id="email"
                        placeholder="example@example.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <button style={styles.button} type="submit">Send Reset Link</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default ForgetPassword; 