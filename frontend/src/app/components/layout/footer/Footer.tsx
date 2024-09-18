// src/components/layout/Footer/Footer.tsx

'use client';

import React from 'react';
import { FooterConfig, ThemeConfig } from 'src/app/configs/configTypes';
import { NavigationLink } from '@/types';
import FooterSubscription from './FooterSubscription';
import FooterNavigationLinks from './FooterNavigationLinks';
import FooterSocialLinks from './FooterSocialLinks';
import FooterBusinessContact from './FooterBusinessContact';

interface FooterProps {
    footer: FooterConfig;
    theme: ThemeConfig;
    navigationLinks: NavigationLink[];
}

const Footer: React.FC<FooterProps> = ({ footer, theme, navigationLinks }) => {
    const { showSubscription, subscriptionText, text, socialLinks } = footer;

    return (
        <footer className="bg-gray-100 mt-8 py-8" style={{ fontFamily: theme.fontFamily }}>
            <div
                className={`w-4/5 max-w-screen-xl mx-auto grid grid-cols-1 ${
                    showSubscription ? 'md:grid-cols-4' : 'md:grid-cols-3'
                } gap-8`}
                style={{ color: theme.primaryColor }}
            >
                {/* Subscription Section */}
                {showSubscription && (
                    <FooterSubscription
                        subscriptionText={subscriptionText}
                        primaryColor={theme.primaryColor}
                    />
                )}

                {/* Links Section */}
                <FooterNavigationLinks
                    navigationLinks={navigationLinks}
                    primaryColor={theme.primaryColor}
                />

                {/* Social Links */}
                {socialLinks && <FooterSocialLinks socialLinks={socialLinks} />}

                {/* Business Contact */}
                <FooterBusinessContact secondaryColor={theme.secondaryColor} />
            </div>
            <div className="text-center py-4 mt-8 border-t border-gray-300">
                <p>{text}</p>
            </div>
        </footer>
    );
};

export default Footer;