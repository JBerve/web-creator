import React from 'react';
import Link from 'next/link';

interface TopBarProps {
    clientName: string;
}

const TopBar: React.FC<TopBarProps> = ({ clientName }) => {
    return (
        <div className="bg-white bg-opacity-75 shadow-md fixed top-0 w-full z-50 font-sans">
            <div className="flex justify-between items-center w-4/5 max-w-screen-xl mx-auto py-2 px-4">
                <div className="flex items-center">
                    <Link href="/" className="text-2xl font-semibold text-gray-900">
                        {clientName}
                    </Link>
                </div>

                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="text-gray-900 hover:text-elegantBlueGreen">
                        Inicio
                    </Link>
                    <Link href="/about" className="text-gray-900 hover:text-elegantBlueGreen">
                        Biografía
                    </Link>
                    <Link href="/press" className="text-gray-900 hover:text-elegantBlueGreen">
                        Media
                    </Link>
                    <Link href="/contact" className="text-gray-900 hover:text-elegantBlueGreen">
                        Contacto
                    </Link>
                </div>

                <div className="hidden md:block">
                    <Link href="/login" className="text-gray-900 hover:text-elegantBlueGreen">
                        Iniciar Sesión
                    </Link>
                </div>
                
                <div className="md:hidden">
                    <input type="checkbox" id="menu-toggle" className="hidden peer" />
                    <label
                        htmlFor="menu-toggle"
                        className="block cursor-pointer text-gray-900 hover:text-elegantBlueGreen focus:outline-none"
                    >
                        ☰
                    </label>
                </div>
            </div>

            <div className="hidden peer-checked:block md:hidden bg-white bg-opacity-95">
                <div className="flex flex-col space-y-2 px-4 py-3">
                    <Link href="/" className="text-gray-900 hover:text-elegantBlueGreen">
                        Inicio
                    </Link>
                    <Link href="/about" className="text-gray-900 hover:text-elegantBlueGreen">
                        Biografía
                    </Link>
                    <Link href="/press" className="text-gray-900 hover:text-elegantBlueGreen">
                        Media
                    </Link>
                    <Link href="/contact" className="text-gray-900 hover:text-elegantBlueGreen">
                        Contacto
                    </Link>
                    <Link href="/login" className="text-gray-900 hover:text-elegantBlueGreen">
                        Iniciar Sesión
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopBar;