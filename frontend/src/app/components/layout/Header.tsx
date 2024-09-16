import React from 'react';

interface HeaderProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
    navigation: { label: string; href: string }[];
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, backgroundImage, navigation }) => (
    <header
        className="relative w-full h-96 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="w-4/5 max-w-screen-xl mx-auto h-full flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-2">{title}</h1>
                <p className="text-xl mb-4">{subtitle}</p>
            </div>

            <nav className="w-4/5 max-w-screen-xl mx-auto mt-4">
                <ul className="flex space-x-4">
                    {navigation.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} className="text-white hover:text-gray-300">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;