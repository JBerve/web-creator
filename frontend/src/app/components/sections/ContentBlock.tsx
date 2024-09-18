import React from 'react';
import { ThemeConfig } from '@/app/configs/configTypes';

interface ContentBlockProps {
    heading?: string;
    subheading?: string;
    content?: string;
    servicesList?: Array<{ title: string; description: string }>;
    backgroundImage?: string;
    theme: ThemeConfig;
}

const ContentBlock: React.FC<ContentBlockProps> = ({
                                                       heading,
                                                       subheading,
                                                       content,
                                                       servicesList,
                                                       backgroundImage,
                                                       theme,
                                                   }) => (
    <section
        className="my-8 w-full max-w-screen-xl mx-auto px-4"
        style={{
            ...(backgroundImage
                ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }
                : {}),
            fontFamily: theme.fontFamily,
        }}
    >
        <div className="text-left">
            {heading && (
                <h2
                    className="text-2xl font-semibold mb-4"
                    style={{ color: theme.primaryColor }}
                >
                    {heading}
                </h2>
            )}
            {subheading && (
                <h3
                    className="text-xl mb-2"
                    style={{ color: theme.secondaryColor }}
                >
                    {subheading}
                </h3>
            )}
            {content && (
                <p className="mb-4" style={{ color: theme.textColor }}>
                    {content}
                </p>
            )}

            {servicesList && (
                <ul className="list-disc pl-5">
                    {servicesList.map((service, index) => (
                        <li key={index} className="mb-2" style={{ color: theme.textColor }}>
                            <strong>{service.title}:</strong> {service.description}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </section>
);

export default ContentBlock;