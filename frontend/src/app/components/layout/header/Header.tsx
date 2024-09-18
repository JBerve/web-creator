import React from 'react';
import HeaderBackground from './HeaderBackground';
import HeaderContent from './HeaderContent';
import { ThemeConfig } from 'src/app/configs/configTypes';

interface HeaderProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
    theme: ThemeConfig;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, backgroundImage, theme }) => {
    return (
        <header>
            <HeaderBackground backgroundImage={backgroundImage}>
                <HeaderContent title={title} subtitle={subtitle} theme={theme} />
            </HeaderBackground>
        </header>
    );
};

export default Header;