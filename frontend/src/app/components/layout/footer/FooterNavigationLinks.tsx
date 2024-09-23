import React from 'react';
import Link from 'next/link';
import {NavigationLink} from "@/types";

interface FooterNavigationLinksProps {
    navigationLinks: NavigationLink[];
    primaryColor: string;
}

const FooterNavigationLinks: React.FC<FooterNavigationLinksProps> = ({
                                                                         navigationLinks,
                                                                         primaryColor,
                                                                     }) => {
    return (
        <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul>
                {navigationLinks.map((link, index) => (
                    <li className="mb-2" key={index}>
                        <Link href={link.href}>
              <span className="hover:underline" style={{ color: primaryColor }}>
                {link.title}
              </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterNavigationLinks;