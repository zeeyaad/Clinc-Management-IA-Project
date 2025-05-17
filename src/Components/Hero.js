import React from "react";
import { IoIosCall } from "react-icons/io";

function Hero() {
    const contents = [
        "تقديم كافه الخدمات بجودة عالية",
        "اسعار تنافسية",
        "خدمة طوال 24 ساعة",
    ];

    return (
        <div className="container col-xxl-8 px-4 py-5" dir="rtl">
            <div className="row align-items-center g-5 py-5">
                {/* Image Section */}
                <div className="col-10 col-sm-8 col-lg-6">
                    <img
                        src="./Assets/Logo.jpg"
                        className="d-block mx-lg-auto img-fluid rounded-3 shadow-lg"
                        alt="مقاولات وصيانة"
                        width="700"
                        height="500"
                        loading="lazy"
                    />
                </div>

                {/* Content Section */}
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-4">
                        لماذا تختار السهيل للمقاولات واعمال الصيانة؟
                    </h1>

                    <ul className="list-unstyled fs-5 mb-4">
                        {contents.map((item, index) => (
                            <li key={index} className="mb-3 d-flex align-items-center">
                                <span className="me-2">•</span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <a
                            href="tel:+966506790641"
                            className="btn btn-danger rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2 transition-all duration-300 hover:scale-105 flex-row-reverse"
                            role="button"
                            aria-label="اتصل بنا"
                        >
                            <IoIosCall color="white" size={24} />
                            <span className="text-white">اتصل بنا</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;