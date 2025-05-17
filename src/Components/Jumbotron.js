import React from "react";
import { RiWhatsappFill } from 'react-icons/ri';
import { IoIosCall } from "react-icons/io";
import JumbotronData from "../Data/Jumbotron";

function Jumbotron() {
    return (
        <div
            className="w-100 d-flex flex-column justify-content-center align-items-center text-center text-white"
            style={{
                backgroundImage: "url('./Assets/image.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh', // Ensures full screen height
            }}
        >
            <h1 className="text-body-emphasis">{JumbotronData.Heading}</h1>
            <p className="col-lg-8 mx-auto fs-5 text-white">
                {JumbotronData.Paragraph}
            </p>
            <div className="d-inline-flex gap-2 mt-3">
                <a
                    href="https://wa.me/966506790641"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2 hover-transform hover:scale-105 transition-all duration-300"
                >
                    <RiWhatsappFill color="white" size={24} />
                    <span className="text-white">{JumbotronData.Icons.WhatsApp}</span>
                </a>
                <a
                    href="tel:+966506790641"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-danger rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2 hover-transform hover:scale-105 transition-all duration-300"
                >
                    <IoIosCall color="white" size={24} />
                    <span className="text-white">{JumbotronData.Icons.PhoneCall}</span>
                </a>
            </div>
        </div>
    );
}

export default Jumbotron;
