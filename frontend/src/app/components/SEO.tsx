// components/SEO.tsx

import Head from 'next/head';

interface SEOProps {
    title: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
    twitterCard?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, ogImage, ogType, twitterCard }) => {
    return (
        <Head>
            <title>{title} | Everylane</title>
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}
            {/* Open Graph */}
            {ogImage && <meta property="og:image" content={ogImage} />}
            {ogType && <meta property="og:type" content={ogType} />}
            {/* Twitter Card */}
            {twitterCard && <meta name="twitter:card" content={twitterCard} />}
        </Head>
    );
};

export default SEO;