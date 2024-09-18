import React from 'react';
import { ThemeConfig } from '@/app/configs/configTypes';

interface HeaderProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
    theme: ThemeConfig;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, backgroundImage, theme }) => (
    <header
        className="relative w-full h-96 bg-cover bg-center text-white"
        style={{
            backgroundImage: `url(${backgroundImage})`,
            fontFamily: theme.fontFamily,
        }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="w-4/5 max-w-screen-xl mx-auto h-full flex flex-col justify-center">
                <h1
                    className="text-4xl font-bold mb-2"
                    style={{ color: theme.primaryColor }}
                >
                    {title}
                </h1>
                <p className="text-xl mb-4" style={{ color: theme.secondaryColor }}>
                    {subtitle}
                </p>
            </div>
        </div>
    </header>
);

export default Header;