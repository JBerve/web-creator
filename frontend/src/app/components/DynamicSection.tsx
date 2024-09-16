import React from 'react';
import ContentBlock from './ContentBlock';
import ClientBlock from './ClientBlock'; 

interface Section {
    type: string;
    heading?: string;
    subheading?: string;
    content?: string;
    servicesList?: Array<{ title: string; description: string }>;
    clients?: Array<{ name: string; business: string; quote: string }>; 
    backgroundImage?: string;
}

interface DynamicSectionProps {
    sections: Section[];
}

const DynamicSection: React.FC<DynamicSectionProps> = ({ sections }) => {
    return (
        <div className="w-full max-w-screen-xl mx-auto px-4">
            {sections.map((section, index) => {
                switch (section.type) {
                    case 'clients':
                        return (
                            <ClientBlock
                                key={index}
                                heading={section.heading}
                                clients={section.clients} 
                            />
                        );
                    default:
                        return (
                            <ContentBlock
                                key={index}
                                heading={section.heading}
                                subheading={section.subheading}
                                content={section.content}
                                servicesList={section.servicesList}
                                backgroundImage={section.backgroundImage}
                            />
                        );
                }
            })}
        </div>
    );
};

export default DynamicSection;