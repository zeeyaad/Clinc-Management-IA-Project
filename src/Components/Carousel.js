import React from "react";

function ControlledCarousel(props) {
    var Images = props.Photo;

    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {Images.map((imgSrc, index) => (
                    <div
                        key={index}
                        className={`carousel-item text-center ${index === 0 ? "active" : ""}`}
                        data-bs-interval="500"
                    >
                        <img src={imgSrc} className="d-block mx-auto img-fluid" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ControlledCarousel;
