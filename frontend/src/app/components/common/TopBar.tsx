import React from 'react';
import Link from 'next/link';
import { ThemeConfig } from '@/app/configs/configTypes';

interface NavigationLink {
    title: string;
    href: string;
}

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
            <div className="hidden md:flex justify-between items-center w-4/5 max-w-screen-xl mx-auto py-2 px-4">
                {/* Left: Logo */}
                <div className="flex items-center">
                    <Link href="/">
            <span
                className="text-2xl font-semibold"
                style={{ color: theme.primaryColor }}
            >
              {clientName}
            </span>
                    </Link>
                </div>

                {/* Center: Navigation Links */}
                <div className="flex space-x-8">
                    {navigationLinks.map((link, index) => (
                        <Link href={link.href} key={index}>
              <span
                  className="hover:underline"
                  style={{ color: theme.primaryColor }}
              >
                {link.title}
              </span>
                        </Link>
                    ))}
                </div>

                {/* Right: Contact Button */}
                {showContactButton && (
                    <div>
                        <Link href="/contact">
              <span
                  className="py-2 px-4 rounded"
                  style={{
                      backgroundColor: theme.primaryColor,
                      color: '#fff',
                  }}
              >
                {contactButtonText || 'Contact'}
              </span>
                        </Link>
                    </div>
                )}
            </div>

            {/* Mobile View */}
            <div className="md:hidden">
                {/* Input for peer selector */}
                <input type="checkbox" id="menu-toggle" className="hidden peer" />

                {/* Mobile Top Bar */}
                <div className="flex justify-between items-center w-4/5 max-w-screen-xl mx-auto py-2 px-4">
                    {/* Left: Logo */}
                    <div className="flex items-center">
                        <Link href="/">
              <span
                  className="text-2xl font-semibold"
                  style={{ color: theme.primaryColor }}
              >
                {clientName}
              </span>
                        </Link>
                    </div>
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
                        {navigationLinks.map((link, index) => (
                            <Link href={link.href} key={index}>
                <span
                    className="hover:underline"
                    style={{ color: theme.primaryColor }}
                >
                  {link.title}
                </span>
                            </Link>
                        ))}
                        {showContactButton && (
                            <Link href="/contact">
                <span
                    className="hover:underline"
                    style={{ color: theme.primaryColor }}
                >
                  {contactButtonText || 'Contact'}
                </span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;