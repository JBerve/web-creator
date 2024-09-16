import React from 'react';

interface ContentBlockProps {
    heading?: string;
    subheading?: string;
    content?: string;
    servicesList?: Array<{ title: string; description: string }>;
    backgroundImage?: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ heading, subheading, content, servicesList, backgroundImage }) => (
    <section
        className="my-8 w-full max-w-screen-xl mx-auto px-4"  
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' } : {}}
    >
        <div className="text-left">
            {heading && <h2 className="text-2xl font-semibold mb-4 text-gray-900">{heading}</h2>}
            {subheading && <h3 className="text-xl mb-2 text-gray-700">{subheading}</h3>}
            {content && <p className="text-gray-700 mb-4">{content}</p>}
            
            {servicesList && (
                <ul className="list-disc pl-5">
                    {servicesList.map((service, index) => (
                        <li key={index} className="mb-2">
                            <strong>{service.title}:</strong> {service.description}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </section>
);

export default ContentBlock;