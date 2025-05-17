import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import InputField from "./InputField";
import axios from 'axios';

function Form(props) {
    const [isMouseOver, setMouseOver] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Validate form data
        if (!formData.email || !formData.password) {
            setError('Email and password are required');
            setLoading(false);
            return;
        }

        if (props.Register) {
            if (!formData.firstName || !formData.lastName || !formData.mobile) {
                setError('All fields are required for registration');
                setLoading(false);
                return;
            }
            if (formData.password !== formData.confirmPassword) {
                setError('Passwords do not match');
                setLoading(false);
                return;
            }
        }

        try {
            let response;
            if (props.Register) {
                // Direct API call for registration
                response = await axios.post('http://localhost:5078/api/auth/register', formData);
            } else {
                // Direct API call for login
                response = await axios.post('http://localhost:5078/api/auth/login', formData);
            }

            // Store token and user data in localStorage
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('userType', response.data.user.userType);

            // Redirect to dashboard
            navigate('/dashboard');
        } catch (error) {
            setError(error.response?.data?.message || 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="layer-stretch">
                <div className="layer-wrapper">
                    <form className="form-container" onSubmit={handleSubmit}>
                        {error && (
                            <div className="alert alert-danger" style={{
                                backgroundColor: '#fee2e2',
                                color: '#991b1b',
                                padding: '10px',
                                borderRadius: '4px',
                                marginBottom: '15px'
                            }}>
                                {error}
                            </div>
                        )}
                        <input type="hidden" name="_token" value="1734020bd20093e5b7d014fbb3b2b7f8ebbf6b6cd466465ce50c515eb7bf84cbbf507a82e1d4ef6a8e78e7c0473bd52f492c19d6184feb6bc682cd536f872dcf" />
                        {
                            props.Register ? <>
                                <InputField
                                    Type="text"
                                    Name="firstName"
                                    InputId="first-name"
                                    Label="First Name"
                                    InputPlaceholder=""
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <InputField
                                    Type="text"
                                    Name="lastName"
                                    InputId="last-name"
                                    Label="Last Name"
                                    InputPlaceholder=""
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </> : null
                        }
                        <InputField
                            Type="email"
                            Name="email"
                            InputId="login-email"
                            Label="Email Address"
                            InputPlaceholder="example@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {
                            props.Register ? <InputField
                                Type="text"
                                Name="mobile"
                                InputId="register-mobile"
                                Label="Mobile Number"
                                InputPlaceholder=""
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                            />
                                : null
                        }
                        <div className="password-wrapper" style={{ position: "relative" }}>
                            <InputField
                                Type="password"
                                Name="password"
                                InputId="login-password"
                                LabelFor="login-password"
                                Label="Password"
                                InputPlaceholder="******"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            {
                                props.Register ? <InputField
                                    Type="password"
                                    Name="confirmPassword"
                                    InputId="confirm-password"
                                    LabelFor="confirm-password"
                                    Label="Confirm Password"
                                    InputPlaceholder=""
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                /> : null
                            }
                            {
                                props.Register ? null : <a
                                    href="###"
                                    className="forgot-pass"
                                    style={{
                                        position: "absolute",
                                        bottom: "-1.5rem",
                                        right: "10px",
                                        fontSize: "12px",
                                        color: "#32C1CE",
                                        textDecoration: "none",
                                    }}
                                >
                                    Forgot Password?
                                </a>
                            }
                        </div>

                        <div className="form-submit text-center">
                            <button
                                onMouseOver={() => setMouseOver(true)}
                                onMouseOut={() => setMouseOver(false)}
                                style={{
                                    backgroundColor: isMouseOver ? "#0069d9" : "#32C1CE",
                                    borderColor: isMouseOver ? "#0069d9" : "#32C1CE",
                                    color: "#fff",
                                    padding: "10px 20px",
                                    borderRadius: "5px",
                                    cursor: loading ? "not-allowed" : "pointer",
                                    fontSize: "16px",
                                    border: "none",
                                    opacity: loading ? 0.7 : 1,
                                }}
                                type="submit"
                                name="login"
                                id="login-submit"
                                className="btn btn-primary"
                                disabled={loading}
                            >
                                {loading ? "Processing..." : (props.Register ? "Create Account" : "Login")}
                            </button>
                        </div>
                        <div className="login-link text-center">
                            <span className="paragraph-small">{props.Register ? "Already have an account?" : "Don't have an account?"}</span>
                            <Link to={props.Register ? "/Login" : "/Register"}>{props.Register ? "Login" : "Register as New User"}</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Form;