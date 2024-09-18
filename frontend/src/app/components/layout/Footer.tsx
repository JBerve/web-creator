'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ThemeConfig } from '@/app/configs/configTypes';

interface FooterProps {
    text: string;
    theme: ThemeConfig;
}

const Footer: React.FC<FooterProps> = ({ text, theme }) => {
    const [email, setEmail] = useState<string>('');

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Subscribed email:', email);
        setEmail('');
    };

    return (
        <footer className="bg-gray-100 mt-8 py-8" style={{ fontFamily: theme.fontFamily }}>
            <div className="w-4/5 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8" style={{ color: theme.primaryColor }}>
                {/* Subscription Section */}
                <div className="md:col-span-1">
                    <h3 className="text-lg font-semibold mb-4">Suscribirse</h3>
                    <p className="mb-4">¡Suscríbete para recibir contenido exclusivo y las últimas noticias!</p>
                    <form onSubmit={handleSubscribe} className="flex">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Tu email"
                            className="w-full p-2 border border-gray-300 rounded-l mb-4"
                            required
                        />
                        <button
                            type="submit"
                            className="p-2 rounded-r mb-4"
                            style={{ backgroundColor: theme.primaryColor, color: '#fff' }}
                        >
                            →
                        </button>
                    </form>
                </div>

                {/* Links Section */}
                <div className="md:col-span-2 flex justify-around">
                    {/* Enlaces */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
                        <ul>
                            {['Inicio', 'Biografía', 'Media', 'Contacto'].map((item, index) => (
                                <li className="mb-2" key={index}>
                                    <Link href={`/${item.toLowerCase()}`}>
                                        <span className="hover:underline">{item}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Cuenta */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Cuenta</h3>
                        <ul>
                            {['Iniciar Sesión', 'Cerrar Sesión', 'Mi Cuenta'].map((item, index) => (
                                <li className="mb-2" key={index}>
                                    <Link href={`/${item.replace(' ', '').toLowerCase()}`}>
                                        <span className="hover:underline">{item}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Business Contact */}
                <div className="md:col-span-1 text-center md:text-left">
                    <h3 className="text-lg font-semibold mb-4">Negocios</h3>
                    <p className="mb-4">¿Necesitas un sitio web? ¡Contáctanos!</p>
                    <a
                        href="https://www.linkedin.com/in/juan-bautista-bervejillo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        style={{ color: theme.secondaryColor }}
                    >
                        Juan Bervejillo
                    </a>
                </div>
            </div>
            <div className="text-center py-4 mt-8 border-t border-gray-300">
                <p>{text}</p>
            </div>
        </footer>
    );
};

export default Footer;