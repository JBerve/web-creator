import { getPageConfig, getGlobalConfig } from '@/app/configs/configProvider';
import PageLayout from '@/app/components/layout/PageLayout';
import DynamicSection from '@/app/components/DynamicSection';
import SEO from "components/SEO";
import topBar from "components/common/TopBar";

export default async function DynamicPage({ params }: { params: { slug: string } }) {
    const pageData = getPageConfig(params.slug);
    const globalConfig = getGlobalConfig();
    const { header, content } = pageData;
    const { pages, footer, theme, topBar } = globalConfig;

    function capitalizeSlug(slug: string): string {
        if (slug === 'home') return 'Home';
        return slug.charAt(0).toUpperCase() + slug.slice(1);
    }

    const navigationLinks = Object.keys(pages).map((slug) => ({
        title: capitalizeSlug(slug),
        href: slug === 'home' ? '/' : `/${slug}`,
    }));
    
    return (
        <>
            <SEO
                title={header.title}
                description={header.subtitle}
                keywords={`Everylane, ${params.slug}`}
                ogImage={header.backgroundImage}
                ogType="article"
                twitterCard="summary_large_image"
            />
            <PageLayout
                header={header}
                footer={footer}
                theme={theme}
                navigationLinks={navigationLinks}
                topBarConfig={topBar}
            >
                <DynamicSection sections={content.sections} theme={theme} />
            </PageLayout>
        </>
    );
}