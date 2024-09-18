import React, { Suspense, lazy } from 'react';
import { Section, SectionType, ThemeConfig } from '@/app/configs/configTypes';

const ContentBlock = lazy(() => import('./ContentBlock'));
const ClientBlock = lazy(() => import('./ClientBlock'));
const ContactFormBlock = lazy(() => import('./ContactFormBlock'));


const sectionComponentMap: Partial<Record<SectionType, React.LazyExoticComponent<React.FC<any>>>> = {
    [SectionType.About]: ContentBlock,
    [SectionType.Services]: ContentBlock,
    [SectionType.Clients]: ClientBlock,
    [SectionType.Text]: ContentBlock,
    [SectionType.ContactForm]: ContactFormBlock
};

interface DynamicSectionProps {
    sections: Section[];
    theme: ThemeConfig;
}

const DynamicSection: React.FC<DynamicSectionProps> = ({ sections, theme }) => {
    return (
        <div className="w-full max-w-screen-xl mx-auto px-4">
            <Suspense fallback={<div>Loading...</div>}>
                {sections.map((section, index) => {
                    const SectionComponent = sectionComponentMap[section.type];
                    if (!SectionComponent) {
                        console.warn(`Unknown section type: ${section.type}`);
                        return null;
                    }
                    return (
                        <SectionComponent key={index} {...section} theme={theme} />
                    );
                })}
            </Suspense>
        </div>
    );
};

export default DynamicSection;