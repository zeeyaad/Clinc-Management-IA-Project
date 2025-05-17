import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
    const Data = [
        {
            Link: "https://www.facebook.com",
            Icon: "fab fa-facebook"
        },
        {
            Link: "https://www.twitter.com",
            Icon: "fab fa-twitter"
        },
        {
            Link: "https://www.google.com",
            Icon: "fab fa-google"
        },
        {
            Link: "https://www.instagram.com",
            Icon: "fab fa-instagram"
        },
        {
            Link: "https://www.youtube.com",
            Icon: "fab fa-youtube"
        },
        {
            Link: "https://www.linkedin.com",
            Icon: "fab fa-linkedin"
        },
        {
            Link: "https://www.flicker.com",
            Icon: "fab fa-flickr"
        }
    ];
    const Data0 = [
        {
            Icon: "far fa-map",
            Content: "Address Line 11, Address Line 2, City, Country, 0123456"
        },
        {
            Icon: "fas fa-mobile-alt",
            Content: "1234567890"
        },
        {
            Icon: "far fa-envelope-open",
            Content: "support@pepdev.com"
        },
    ];
    const Data1 = [
        {
            LLink: "/ContactUS",
            Content: "Contact Us"
        },
        {
            LLink: "/AboutUs",
            Content: "About Us"
        },
        {
            LLink: "/Doctors",
            Content: "Doctor"
        },
        {
            LLink: "/",
            Content: "Home"
        },
        {
            LLink: "/Services",
            Content: "Services"
        },
    ];
    return (
        <>
            <footer id="footer">
                <div className="layer-stretch">
                    <div className="row layer-wrapper">
                        <div className="col-md-4 footer-block">
                            <div className="footer-ttl">
                                <p>Basic Info</p>
                            </div>
                            <div className="footer-container footer-a">
                                <div className="tbl">
                                    {Data0.map(({ Icon, Content }, Index) =>
                                        <div className="tbl-row" key={Index}>
                                            <div className="tbl-cell"><i className={Icon}></i></div>
                                            <div className="tbl-cell">
                                                <p className="paragraph-medium paragraph-white">{Content}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 footer-block">
                            <div className="footer-ttl">
                                <p>Quick Links</p>
                            </div>
                            <div className="footer-container footer-b">
                                <div className="tbl">
                                    <div className="tbl-row">
                                        <ul className="tbl-cell">
                                            {Data1.map(({ LLink, Content }, Index) =>
                                                <li key={Index}>
                                                    <Link to={LLink}>
                                                        {Content}
                                                    </Link>
                                                </li>
                                            )}
                                        </ul>
                                        <ul className="tbl-cell">
                                            <li><Link to="/Login">Login</Link></li>
                                            <li><Link to="/Register">Register</Link></li>
                                            <li><Link to="/Forget Password">Forgot Password</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Section */}
                        <div className="col-md-4 footer-block">
                            <div className="footer-ttl">
                                <p>Newsletter</p>
                            </div>
                            <div className="footer-container footer-c">
                                <div className="footer-subscribe">
                                    <form>
                                        <div style={{ position: 'relative', marginBottom: '15px' }}>
                                            <input
                                                type="email"
                                                name="email"
                                                id="subscribe-email"
                                                required
                                                style={{
                                                    width: '100%',
                                                    padding: '20px 10px 10px 10px',
                                                    border: 'none',
                                                    borderRadius: '8px',
                                                    backgroundColor: 'white',
                                                    fontSize: '16px',
                                                    color: '#000',
                                                    outline: 'none',
                                                }}
                                            />
                                            <label
                                                htmlFor="subscribe-email"
                                                style={{
                                                    position: 'absolute',
                                                    top: '10px',
                                                    left: '10px',
                                                    color: '#00cfe8',
                                                    fontSize: '14px',
                                                    pointerEvents: 'none',
                                                }}
                                            >
                                                Email Address
                                            </label>
                                        </div>
                                        <div className="footer-subscribe-button" style={{ textAlign: 'left' }}>
                                            <button
                                                type="submit"
                                                style={{
                                                    backgroundColor: '#3ed3d3',
                                                    border: 'none',
                                                    padding: '10px 30px',
                                                    borderRadius: '8px',
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    cursor: 'pointer',
                                                    transition: 'background-color 0.3s',
                                                }}
                                                onMouseOver={e => (e.target.style.backgroundColor = '#2bb3b3')}
                                                onMouseOut={e => (e.target.style.backgroundColor = '#3ed3d3')}
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <ul
                                    style={{
                                        display: 'flex',
                                        gap: '20px',
                                        padding: '0',
                                        marginTop: '20px',
                                        listStyle: 'none',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {Data.map(({ Link, Icon }, index) => (
                                        <li key={index}>
                                            <a
                                                href={Link}
                                                className={Icon}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    fontSize: '20px',
                                                    color: 'white',
                                                    transition: 'color 0.3s',
                                                    textDecoration: 'none',
                                                }}
                                                onMouseOver={e => (e.target.style.color = '#3ed3d3')}
                                                onMouseOut={e => (e.target.style.color = 'white')}
                                            > </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div id="copyright">
                    <div className="layer-stretch">
                        <div className="paragraph-medium paragraph-white">
                            {new Date().getFullYear()} © Pepdev, ALL RIGHTS RESERVED
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
