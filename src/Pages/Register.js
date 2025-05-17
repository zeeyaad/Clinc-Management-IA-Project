import React, { useEffect, useRef, useState } from "react";
import Form from "../Components/Form";
import Header from "../Components/header";
import Footer from "../Components/Footer";
import TimeTable from "../Components/TimeTable";

// Hook to detect if element is in view
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

function Register() {

    const timeTableData = [
        { Day: "SUN", Time: "10 AM - 5 PM" },
        { Day: "MON", Time: "10 AM - 5 PM" },
        { Day: "TUE", Time: "10 AM - 5 PM" },
        { Day: "WED", Time: "10 AM - 5 PM" },
        { Day: "THU", Time: "10 AM - 5 PM" },
        { Day: "FRI", Time: "10 AM - 5 PM" },
        { Day: "SAT", Time: "HOLIDAY" },
    ];

    const [ttRef, isTtVisible] = useInView({ threshold: 0.2 });

    return (
        <>
            <Header Register />
            <Form Register />

            {/* Time Table */}
            <TimeTable data={timeTableData} isVisible={isTtVisible} refProp={ttRef} />
            {/* Time Table */}

            {/* Emergency */}
            <div id="emergency">
                <div className="layer-stretch">
                    <div className="layer-wrapper animated-wrapper" style={{ opacity: "1" }}>
                        <div className="layer-ttl">
                            <h3 className="animated animated-down fadeInDown">On Emergency</h3>
                        </div>
                        <div className="layer-container">
                            <div className="paragraph-medium paragraph-black animated animated-up fadeInUp">
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique suntasdadsada
                            </div>
                            <div className="emergency-number">Call : 1800000001</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Emergency */}

            {/* Footer */}
            <Footer />
            {/* Footer */}
        </>
    );
}

export default Register;
