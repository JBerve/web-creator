import React from 'react';
import Link from 'next/link';
import { ThemeConfig } from '@/app/configs/configTypes';

interface ContactSectionProps {
    contact: {
        email: string;
        buttonText: string;
    };
    theme: ThemeConfig;
}

const ContactBlock: React.FC<ContactSectionProps> = ({ contact, theme }) => {
    return (
        <section
            className="relative w-full py-10"
            style={{
                backgroundColor: theme.secondaryColor,
                color: theme.primaryColor,
                fontFamily: theme.fontFamily,
            }}
        >
            <div className="max-w-screen-xl mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-6">Contacto</h2>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="w-full md:w-2/3 mb-6 md:mb-0 text-center md:text-left">
                        <p>
                            ¿Necesitas hablar con nosotros? Envía un correo electrónico a
                            <a
                                href={`mailto:${contact.email}`}
                                style={{ color: theme.primaryColor }}
                                className="hover:underline"
                            >
                                {' '}
                                {contact.email}{' '}
                            </a>
                            y te responderemos lo antes posible. También puedes hacer clic en el botón de contacto
                            para enviar un formulario directamente desde el sitio web.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 md:text-right">
                        <Link href="/contact">
                            <span
                                className="rounded py-3 px-6 inline-block"
                                style={{
                                    backgroundColor: theme.primaryColor,
                                    color: '#fff',
                                }}
                            >
                                {contact.buttonText}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactBlock;