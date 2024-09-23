import React from 'react';
import { ThemeConfig } from 'src/app/configs/configTypes';
import { NavigationLink } from '@/types';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

interface TopBarProps {
    clientName: string;
    theme: ThemeConfig;
    navigationLinks: NavigationLink[];
    showContactButton?: boolean;
    contactButtonText?: string;
}

const TopBar: React.FC<TopBarProps> = ({
                                           clientName,
                                           theme,
                                           navigationLinks,
                                           showContactButton,
                                           contactButtonText,
                                       }) => {
    return (
        <div
            className="bg-white bg-opacity-75 shadow-md fixed top-0 w-full z-50"
            style={{ fontFamily: theme.fontFamily }}
        >
            {/* Desktop View */}
            <DesktopMenu
                clientName={clientName}
                theme={theme}
                navigationLinks={navigationLinks}
                showContactButton={showContactButton}
                contactButtonText={contactButtonText}
            />

            {/* Mobile View */}
            <MobileMenu
                clientName={clientName}
                theme={theme}
                navigationLinks={navigationLinks}
                showContactButton={showContactButton}
                contactButtonText={contactButtonText}
            />
        </div>
    );
};

export default TopBar;