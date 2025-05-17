import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/header";
import TimeTable from "../Components/TimeTable";
import Footer from "../Components/Footer";
import Emergency from "../Components/Emergency"

function Main() {


    function useInView(options) {
        const ref = useRef();
        const [isIntersecting, setIsIntersecting] = useState(false);

        useEffect(() => {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    observer.disconnect(); // Remove this line if you want animation to re-trigger
                }
            }, options);

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => observer.disconnect();
        }, [options]);

        return [ref, isIntersecting];
    }

    const [ttRef, isTtVisible] = useInView({ threshold: 0.2 });

    const timeTableData = [
        { Day: "SUN", Time: "10 AM - 5 PM" },
        { Day: "MON", Time: "10 AM - 5 PM" },
        { Day: "TUE", Time: "10 AM - 5 PM" },
        { Day: "WED", Time: "10 AM - 5 PM" },
        { Day: "THU", Time: "10 AM - 5 PM" },
        { Day: "FRI", Time: "10 AM - 5 PM" },
        { Day: "SAT", Time: "HOLIDAY" },
    ];

    const features = [
        {
            icon: "fas fa-phone-volume",
            title: "Emergency Departments",
            desc: "The emergency departments of our clinic operate 24 hours a day, although staffing levels may be varied in an attempt to reflect patient volume.",
        },
        {
            icon: "far fa-calendar-alt",
            title: "24 hour Service",
            desc: "24-7 (usually spoken \"twenty-four seven\") is facility that is available any time and, usually, every day in our clinic health care center. we look after you every time.",
        },
        {
            icon: "fas fa-cloud-meatball",
            title: "Advanced Technology",
            desc: "Medical technology, encompasses a wide range of healthcare products and is used to diagnose, monitor or treat diseases or medical conditions affecting humans.",
        },
        {
            icon: "fas fa-ambulance",
            title: "Ambulance",
            desc: "An ambulance is a vehicle for transportation of sick or injured people to, from or between places of treatment for an illness or injury.",
        },
        {
            icon: "fas fa-stethoscope",
            title: "Primary health care",
            desc: "Healthcare centres, including clinics, doctor's offices, urgent care centers and ambulatory surgery centers, serve as first point of contact with a health professional.",
        },
        {
            icon: "fas fa-store-alt",
            title: "Pharmacies and drug stores",
            desc: "Pharmacies and drug stores comprise establishments engaged in retailing prescription or nonprescription drugs and medicines, and other types of goods.",
        },
        {
            icon: "far fa-hospital",
            title: "Laboratory and research",
            desc: "A medical laboratory or clinical laboratory is a laboratory where tests are done on biological specimens in order to get information about the health of a patient.",
        },
        {
            icon: "fas fa-user-md",
            title: "Medical nursing home",
            desc: "Medical nursing homes, including residential treatment centers and geriatric care facilities, are health care institutions which have accommodation facilities.",
        },
    ];


    const data = [
        {
            icon: "fas fa-stethoscope",
            spanContent: "Cardiovascular centre"
        },
        {
            icon: "fas fa-baby",
            spanContent: "Childbirth Center"
        },
        {
            icon: "fas fa-heartbeat",
            spanContent: "Cardiology"
        },
        {
            icon: "fas fa-wheelchair",
            spanContent: "Skin Care"
        },
        {
            icon: "fas fa-flask",
            spanContent: "Laboratory Services"
        },
        {
            icon: "fas fa-certificate",
            spanContent: "Mammography"
        },
    ];

    useEffect(() => {
        const animatedElements = document.querySelectorAll(".animated");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                }
            });
        }, {
            threshold: 0.1,
        });

        animatedElements.forEach((el) => observer.observe(el));

        return () => animatedElements.forEach((el) => observer.unobserve(el));
    }, []);

    return (
        <>
            <Header home="true" />
            <br />

            {/* Start Body */}
            <div id="hm-service" className="animated-wrapper">
                <div className="layer-stretch">
                    <div className="layer-wrapper">
                        <div className="layer-ttl">
                            <h3 className="animated fadeInDown">WHAT WE DO</h3>
                        </div>
                        <div className="layer-container row">
                            <div className="hm-service-left col-md-5">
                                <img
                                    className="animated fadeInUp"
                                    src="./Assets/Images/Doctor.png"
                                    alt="Klinikal Hospital"
                                />
                            </div>
                            <div className="hm-service-right col-md-7">
                                <div className="paragraph-medium paragraph-black animated fadeInUp">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, delectus placeat hic voluptatem fuga nemo ad fugit? Beatae expedita doloribus obcaecati quam alias. Natus quas provident laboriosam voluptatem! Nostrum, sit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, delectus placeat hic voluptatem fuga nemo ad fugit? Beatae expedita doloribus obcaecati quam alias. Natus quas provident laboriosam voluptatem! Nostrum, sit!
                                </div>
                                <div className="hm-service row">
                                    {data.map(({ icon, spanContent }, index) => (
                                        <div key={index} className="col-6 col-sm-4 col-md-6 col-lg-4 block animated fadeInUp">
                                            <i className={icon}></i>
                                            <span>{spanContent}</span>
                                        </div>
                                    ))}

                                </div>
                                <div className="hm-service-view text-center">
                                    <Link
                                        to="/Services"
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "8px",
                                            fontSize: "16px",
                                            padding: "10px 20px",
                                            border: "2px solid #00c8c8",
                                            backgroundColor: "transparent",
                                            color: "#00c8c8",
                                            borderRadius: "25px",
                                            cursor: "pointer",
                                            transition: "all 0.3s ease",
                                            textDecoration: "none"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = "#00c8c8";
                                            e.target.style.color = "white";
                                            e.target.style.boxShadow = "0 4px 12px rgba(0, 200, 200, 0.3)";

                                            const span = e.target.querySelector("span");
                                            if (span) span.style.color = "white";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = "transparent";
                                            e.target.style.color = "#00c8c8";
                                            e.target.style.boxShadow = "none";

                                            const span = e.target.querySelector("span");
                                            if (span) span.style.color = "#00c8c8";
                                        }}
                                    >
                                        <i
                                            className="fa fa-eye"
                                            style={{ marginRight: "8px", fontSize: "16px", color: "inherit" }}
                                        ></i>
                                        <span style={{ color: "#00c8c8" }}>View All Services</span>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* End Body */}
            <br />
            <hr/>
            {/* Start Feature */}
            <div id="hm-feature" className="layer-stretch animated-wrapper" style={{ opacity: 1 }}>
                <div className="layer-wrapper layer-bottom-0">
                    <div className="layer-ttl">
                        <h3 className="animated fadeInDown">Why Choose Us</h3>
                    </div>
                    <div className="layer-container">
                        <div className="row">
                            {features.map(({ icon, title, desc }, index) => (
                                <div key={index} className="col-sm-6 col-md-4 col-lg-3 hm-feature-block animated fadeInUp"
                                    style={{ marginBottom: "30px" }}>
                                    <div className="icon"
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            borderRadius: "50%",
                                            backgroundColor: "#00c8c8",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: "20px",
                                            transition: "all 0.3s ease"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = "#009999";
                                            e.target.style.transform = "translateY(-5px)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = "#00c8c8";
                                            e.target.style.transform = "translateY(0)";
                                        }}
                                    >
                                        <i className={icon} style={{ fontSize: "24px", color: "white" }}></i>
                                    </div>
                                    <span style={{
                                        display: "block",
                                        fontSize: "18px",
                                        fontWeight: "600",
                                        marginBottom: "10px",
                                        color: "#333"
                                    }}>{title}</span>
                                    <p className="paragraph-small paragraph-black" style={{
                                        fontSize: "14px",
                                        lineHeight: "1.5",
                                        color: "#666"
                                    }}>{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* End Feature */}

            {/* Time Table */}
            <TimeTable data={timeTableData} isVisible={isTtVisible} refProp={ttRef} />
            {/* Time Table */}

            <Emergency />

            <Footer />
        </>
    );
}

export default Main;

