import { getGlobalConfig, getPageConfig } from '@/app/configs/configProvider';
import PageLayout from '@/app/components/layout/PageLayout';
import DynamicSection from 'components/sections/DynamicSection';
import ContactSection from 'components/sections/ContactBlock';
import SEO from "components/SEO";

export default async function Home() {
    const pageData = getPageConfig('home');
    const globalConfig = getGlobalConfig();
    const { header, content } = pageData;
    const { pages, contact, footer, theme, topBar} = globalConfig;

    function capitalizeSlug(slug: string): string {
        if (slug === 'home') return 'Home';
        return slug.charAt(0).toUpperCase() + slug.slice(1);
    }

    const showContactButton = topBar?.showContactButton || false;

    const navigationLinks = Object.keys(pages)
        .filter((slug) => !(slug.toLowerCase() === 'contact' && showContactButton))
        .map((slug) => ({
            title: capitalizeSlug(slug),
            href: slug.toLowerCase() === 'home' ? '/' : `/${slug.toLowerCase()}`,
        }));
    
    return (
        <>
            <SEO
                title={header.title}
                description={header.subtitle}
                keywords="Everylane, small business, professional websites"
                ogImage="/images/header-bg-everylane.jpg"
                ogType="website"
                twitterCard="summary_large_image"
            />
            <PageLayout
                header={header}
                footer={footer}
                theme={theme}
                navigationLinks={navigationLinks}
                topBarConfig={topBar}
            >
                <DynamicSection sections={content.sections} theme={theme}/>
                <ContactSection
                    contact={{ email: contact.email || 'info@example.com', buttonText: 'Contact Us' }}
                    theme={theme}
                />
            </PageLayout>
        </>
    );
}