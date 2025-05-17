import React, { useState } from "react";
import { Link } from 'react-router-dom';

function NavbarFooter(props) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isMouseOver, setMouseOver] = useState(false);
    const [isMouseOverD, setMouseOverD] = useState(false);
    const [isDropdownHovered, setDropdownHovered] = useState(false);

    const LIData = [
        { Name: "Home", Link: "/" },
        { Name: "About Us", Link: "/AboutUS" },
        { Name: "Services", Link: "/Services" },
        { Name: "Doctors", Link: "/Doctors" },
        { Name: "Contact Us", Link: "/ContactUS" },
    ];

    return (
        <div className="container-fluid d-flex justify-content-between align-items-center" style={{ backgroundColor: "rgb(65 82 83 / 50%)" }}>
            <ul className="navbar-nav d-flex flex-row gap-2 mb-0">
                {LIData.map((item, index) => (
                    <li
                        key={index}
                        className="nav-item"
                        onMouseOver={() => setHoveredIndex(index)}
                        onMouseOut={() => setHoveredIndex(null)}
                    >
                        <Link
                            to={item.Link}
                            style={{
                                color: "white",
                                textDecoration: hoveredIndex === index ? "underline" : "none",
                                textDecorationColor: hoveredIndex === index ? "#32C1CE" : "none",
                                textUnderlineOffset: "5px",
                                textDecorationThickness: "5px",
                            }}
                        >
                            {item.Name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Dropdown that appears on hover */}
            <div
                className="dropdown"
                style={{ position: 'relative', color: 'white' }}
                onMouseEnter={() => setDropdownHovered(true)}
                onMouseLeave={() => setDropdownHovered(false)}
            >
                <button
                    onMouseOver={() => setMouseOverD(true)}
                    onMouseOut={() => setMouseOverD(false)}
                    style={{
                        color: "white",
                        textDecoration: isMouseOverD ? "underline" : "none",
                        textDecorationColor: isMouseOverD ? "#32C1CE" : "none",
                        textUnderlineOffset: "5px",
                        textDecorationThickness: "5px",
                    }} className="btn dropdown-toggle" type="button" >
                    My Account
                </button>
                <ul
                    className="dropdown-menu"
                    style={{
                        display: isDropdownHovered ? 'block' : 'none',
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        zIndex: 1000
                    }}
                >
                    <li><Link className="dropdown-item" to="/Login">Login</Link></li>
                    <li><Link className="dropdown-item" to="/Register">Register</Link></li>
                    <li><Link className="dropdown-item" to="/Forget Password">Forget Password</Link></li>
                </ul>
            </div>

            {/* Appointment button */}
            <div className="col col-md-auto d-block d-sm-block d-md-block d-lg-block d-xl-block">
                <Link
                    to="/Login"
                    className="btn btn-primary btn-pill pt-2 pb-2"
                    onMouseOver={() => setMouseOver(true)}
                    onMouseOut={() => setMouseOver(false)}
                    style={{
                        backgroundColor: isMouseOver ? "#0069d9" : "#32C1CE",
                        borderColor: isMouseOver ? "#0069d9" : "#32C1CE",
                        color: isMouseOver ? "#fff" : "white",
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512" style={{ padding: "2px" }} className="mr-2" >
                        <path fill="White" d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272zM224 248c13.3 0 24 10.7 24 24l0 56 56 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-56 0 0 56c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-56-56 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l56 0 0-56c0-13.3 10.7-24 24-24z" />
                    </svg>
                    Make An Appointment
                </Link>
            </div>
        </div>
    );
}

export default NavbarFooter;
