"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface FooterProps {
    text: string;
}

const Footer: React.FC<FooterProps> = ({ text }) => {
    const [email, setEmail] = useState<string>('');

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Subscribed email:', email);
        setEmail('');
    };

    return (
        <footer className="bg-gray-100 mt-8 py-8 font-sans">
            <div className="w-4/5 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
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
                            className="bg-elegantBlueGreen text-white p-2 rounded-r mb-4"
                        >
                            →
                        </button>
                    </form>
                </div>

                <div className="md:col-span-2 flex justify-around">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
                        <ul>
                            <li className="mb-2">
                                <Link href="/" className="hover:text-elegantBlueGreen">
                                    Inicio
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/about" className="hover:text-elegantBlueGreen">
                                    Biografía
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/press" className="hover:text-elegantBlueGreen">
                                    Media
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/contact" className="hover:text-elegantBlueGreen">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Cuenta</h3>
                        <ul>
                            <li className="mb-2">
                                <Link href="/login" className="hover:text-elegantBlueGreen">
                                    Iniciar Sesión
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/logout" className="hover:text-elegantBlueGreen">
                                    Cerrar Sesión
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/account" className="hover:text-elegantBlueGreen">
                                    Mi Cuenta
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="md:col-span-1 text-center md:text-left">
                    <h3 className="text-lg font-semibold mb-4">Negocios</h3>
                    <p className="mb-4">¿Necesitas un sitio web? ¡Contáctanos!</p>
                    <a
                        href="https://www.linkedin.com/in/juan-bautista-bervejillo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-elegantBlueGreen"
                    >
                        Juan Bervejillo
                    </a>
                </div>
            </div>
            <div className="text-center py-4 mt-8 border-t border-gray-300">
                <p className="text-gray-700">{text}</p>
            </div>
        </footer>
    );
};

export default Footer;