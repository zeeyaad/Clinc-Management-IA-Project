import React from 'react';

import { RiWhatsappFill } from 'react-icons/ri';

function WhatsAppIcon() {
    return (
        <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 rounded-full px-4 py-2 hover:scale-105 transition duration-300 bg-transparent"
        >
            <RiWhatsappFill color="#25D366" size={40} />
            <span className="text-green-600 font-bold">تواصل عبر الواتساب</span>
        </a>
    );
};

export default WhatsAppIcon;
