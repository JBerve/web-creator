import React from 'react';
import { ThemeConfig } from 'src/app/configs/configTypes';

interface FooterBusinessContactProps {
    secondaryColor: string;
}

const FooterBusinessContact: React.FC<FooterBusinessContactProps> = ({ secondaryColor }) => {
    return (
        <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4">Negocios</h3>
            <p className="mb-4">¿Necesitas un sitio web? ¡Contáctanos!</p>
            <a
                href="https://www.linkedin.com/in/juan-bautista-bervejillo/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ color: secondaryColor }}
            >
                Juan Bervejillo
            </a>
        </div>
    );
};

export default FooterBusinessContact;