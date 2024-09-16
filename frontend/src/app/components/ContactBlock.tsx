import React from 'react';
import Link from 'next/link';

interface ContactSectionProps {
    contact: {
        email: string;
        buttonText: string;
    };
}

const ContactBlock: React.FC<ContactSectionProps> = ({ contact }) => {
    return (
        <section className="relative w-full bg-lightBlueGreen text-black py-10">
            <div className="max-w-screen-xl mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-6">Contacto</h2>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="w-full md:w-2/3 mb-6 md:mb-0 text-center md:text-left">
                        <p className="text-textColor">
                            ¿Necesitas hablar con nosotros? Envía un correo electrónico a
                            <a href={`mailto:${contact.email}`} className="text-elegantBlueGreen hover:text-blue-500"> {contact.email} </a>
                            y te responderemos lo antes posible. También puedes hacer clic en el botón de contacto
                            para enviar un formulario directamente desde el sitio web.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 md:text-right">
                        <Link href="/contact" className="bg-elegantBlueGreen text-white rounded py-3 px-6 hover:bg-blue-700 transition duration-300 inline-block">
                            {contact.buttonText}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactBlock;