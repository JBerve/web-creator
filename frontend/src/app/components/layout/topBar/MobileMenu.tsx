import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import NavigationLinks from './NavigationLinks';
import ContactButton from './ContactButton';
import { ThemeConfig } from 'src/app/configs/configTypes';
import { NavigationLink } from '@/types';

interface MobileMenuProps {
    clientName: string;
    theme: ThemeConfig;
    navigationLinks: NavigationLink[];
    showContactButton?: boolean;
    contactButtonText?: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
                                                   clientName,
                                                   theme,
                                                   navigationLinks,
                                                   showContactButton,
                                                   contactButtonText,
                                               }) => {
    return (
        <div className="md:hidden">
            {/* Input for peer selector */}
            <input type="checkbox" id="menu-toggle" className="hidden peer" />

            {/* Mobile Top Bar */}
            <div className="flex justify-between items-center w-4/5 max-w-screen-xl mx-auto py-2 px-4">
                {/* Left: Logo */}
                <Logo clientName={clientName} primaryColor={theme.primaryColor} />
                {/* Menu Toggle Label */}
                <label
                    htmlFor="menu-toggle"
                    className="block cursor-pointer focus:outline-none"
                    style={{ color: theme.primaryColor }}
                >
                    ☰
                </label>
            </div>

            {/* Mobile Menu */}
            <div className="hidden peer-checked:block bg-white bg-opacity-95">
                <div className="flex flex-col space-y-2 px-4 py-3">
                    <NavigationLinks
                        navigationLinks={navigationLinks}
                        primaryColor={theme.primaryColor}
                        direction="vertical"
                        space="space-y-2"
                    />
                    {showContactButton && (
                        <ContactButton contactButtonText={contactButtonText} primaryColor={theme.primaryColor} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;