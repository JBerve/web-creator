import React from 'react';
import { SocialLinks } from 'src/app/configs/configTypes';
import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
} from 'react-icons/fa';

interface FooterSocialLinksProps {
    socialLinks: SocialLinks;
}

const iconComponents: { [key: string]: React.ReactNode } = {
    facebook: <FaFacebook />,
    twitter: <FaTwitter />,
    linkedin: <FaLinkedin />,
    instagram: <FaInstagram />,
};

const FooterSocialLinks: React.FC<FooterSocialLinksProps> = ({ socialLinks }) => {
    return (
        <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <ul className="space-y-2">
                {Object.entries(socialLinks).map(([platform, url]) => {
                    const icon = iconComponents[platform.toLowerCase()];
                    if (!icon) {
                        return null;
                    }

                    return (
                        <li key={platform}>
                            <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <span className="text-2xl mr-2">{icon}</span>
                                <span className="hover:underline">
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default FooterSocialLinks;