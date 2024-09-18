import React from 'react';
import Logo from './Logo';
import NavigationLinks from './NavigationLinks';
import ContactButton from './ContactButton';
import { ThemeConfig } from 'src/app/configs/configTypes';
import { NavigationLink } from '@/types';

interface DesktopMenuProps {
    clientName: string;
    theme: ThemeConfig;
    navigationLinks: NavigationLink[];
    showContactButton?: boolean;
    contactButtonText?: string;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({
                                                     clientName,
                                                     theme,
                                                     navigationLinks,
                                                     showContactButton,
                                                     contactButtonText,
                                                 }) => {
    return (
        <div className="hidden md:flex items-center w-4/5 max-w-screen-xl mx-auto py-2 px-4">
            {/* Left: Logo */}
            <Logo clientName={clientName} primaryColor={theme.primaryColor} />

            {/* Center: Navigation Links */}
            <div className="flex-1 flex justify-center">
                <NavigationLinks
                    navigationLinks={navigationLinks}
                    primaryColor={theme.primaryColor}
                    direction="horizontal"
                    space="space-x-8"
                />
            </div>

            {/* Right: Contact Button */}
            {showContactButton && (
                <ContactButton contactButtonText={contactButtonText} primaryColor={theme.primaryColor} />
            )}
        </div>
    );
};

export default DesktopMenu;