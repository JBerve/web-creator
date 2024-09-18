import React from 'react';
import Link from 'next/link';
import { NavigationLink } from '@/types';

interface NavigationLinksProps {
    navigationLinks: NavigationLink[];
    primaryColor: string;
    direction?: 'horizontal' | 'vertical';
    space?: string; // TailwindCSS spacing class, e.g., 'space-x-8' or 'space-y-2'
}

const NavigationLinks: React.FC<NavigationLinksProps> = ({
                                                             navigationLinks,
                                                             primaryColor,
                                                             direction = 'horizontal',
                                                             space = 'space-x-8',
                                                         }) => {
    const containerClass = direction === 'horizontal' ? `flex ${space}` : `flex flex-col ${space}`;

    return (
        <div className={containerClass}>
            {navigationLinks.map((link, index) => (
                <Link href={link.href} key={index}>
          <span className="hover:underline" style={{ color: primaryColor }}>
            {link.title}
          </span>
                </Link>
            ))}
        </div>
    );
};

export default NavigationLinks;