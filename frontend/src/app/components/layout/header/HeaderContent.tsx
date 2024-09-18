import React from 'react';
import { ThemeConfig } from 'src/app/configs/configTypes';

interface HeaderContentProps {
    title: string;
    subtitle: string;
    theme: ThemeConfig;
}

const HeaderContent: React.FC<HeaderContentProps> = ({ title, subtitle, theme }) => {
    return (
        <div
            className="w-4/5 max-w-screen-xl mx-auto h-full flex flex-col justify-center"
            style={{ fontFamily: theme.fontFamily }}
        >
            <h1 className="text-4xl font-bold mb-2" style={{ color: theme.primaryColor }}>
                {title}
            </h1>
            <p className="text-xl mb-4" style={{ color: theme.secondaryColor }}>
                {subtitle}
            </p>
        </div>
    );
};

export default HeaderContent;