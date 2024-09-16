import { getConfig } from './configs/configProvider'; 
import PageLayout from 'components/layout/PageLayout';
import DynamicSection from 'components/DynamicSection';
import ContactSection from 'components/ContactBlock';

export default async function Home() {
    const config = getConfig();

    const { header, content, contact, footer } = config;

    return (
        <PageLayout header={header} footer={footer}>
            <DynamicSection sections={content.sections} />
            
            <ContactSection
                contact={{ email: contact.email || 'info@example.com', buttonText: 'Contact Us' }}
            />
        </PageLayout>
    );
}