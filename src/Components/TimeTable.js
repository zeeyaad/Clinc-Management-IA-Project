import React from "react";
import { Link } from 'react-router-dom';

const TimeTable = ({ data, isVisible, refProp }) => {
    const wrapperStyle = {
        backgroundColor: "#f2f2f2",
        padding: "50px 20px",
        textAlign: "center",
        borderRadius: "10px",
    };

    const titleStyle = {
        fontSize: "22px",
        color: "#00bcd4",
        borderBottom: "2px solid #00bcd4",
        display: "inline-block",
        paddingBottom: "5px",
        marginBottom: "30px",
    };

    const blockStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        margin: "10px auto",
        padding: "15px 25px",
        borderRadius: "5px",
        maxWidth: "700px",
        borderBottom: "1px dashed #ccc",
    };

    const textStyle = {
        display: "flex",
        alignItems: "center",
        margin: 0,
        fontSize: "16px",
        color: "#333",
        flex: 1,
    };

    const iconStyle = {
        marginRight: "10px",
        color: "#888",
    };

    const buttonStyle = {
        backgroundColor: "#00bcd4",
        color: "#fff",
        border: "none",
        padding: "8px 15px",
        borderRadius: "3px",
        fontSize: "12px",
        whiteSpace: "nowrap",
        cursor: "pointer",
        textDecoration: "none",
    };

    return (
        <div
            id="tt"
            ref={refProp}
            className={`animated-wrapper ${isVisible ? "fadeIn" : ""}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.8s ease-in-out",
            }}
        >
            <div className="layer-stretch">
                <div style={wrapperStyle}>
                    <div className="layer-ttl">
                        <h3
                            className={`animated ${isVisible ? "animated-down fadeInDown" : ""}`}
                            style={titleStyle}
                        >
                            Time Table
                        </h3>
                    </div>
                    <div className="layer-container">
                        {data.map(({ Day, Time }, index) => (
                            <div
                                key={index}
                                className={`tt-block animated ${isVisible ? "animated-up fadeInUp" : ""}`}
                                style={{
                                    ...blockStyle,
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                                    transition: `all 0.6s ease-out ${index * 0.1}s`,
                                }}
                            >
                                <p style={textStyle}>
                                    <i className="fas fa-calendar-plus" style={iconStyle}></i>
                                    <span>{Day}</span>
                                </p>
                                <p style={textStyle}>
                                    <i className="fas fa-hourglass-half" style={iconStyle}></i>
                                    <span>{Time}</span>
                                </p>
                                <p>
                                    <Link to="/Login" style={buttonStyle}>
                                        Make An Appointment
                                    </Link>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeTable;
