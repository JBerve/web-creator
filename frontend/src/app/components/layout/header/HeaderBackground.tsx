import React from 'react';

interface HeaderBackgroundProps {
    backgroundImage: string;
    children: React.ReactNode;
}

const HeaderBackground: React.FC<HeaderBackgroundProps> = ({ backgroundImage, children }) => {
    return (
        <div
            className="relative w-full h-96 bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50">{children}</div>
        </div>
    );
};

export default HeaderBackground;