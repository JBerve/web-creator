import TopBar from 'src/app/components/common/TopBar';
import Header from 'src/app/components/layout/Header';
import Footer from 'src/app/components/layout/Footer';
import { ReactNode } from 'react';
import {HeaderConfig, FooterConfig, ThemeConfig, NavigationLink, TopBarConfig} from '@/app/configs/configTypes';

interface PageLayoutProps {
    header: HeaderConfig;
    footer: FooterConfig;
    theme: ThemeConfig;
    navigationLinks: NavigationLink[];
    topBarConfig?: TopBarConfig;
    children: ReactNode;
}

const PageLayout = ({
                        header,
                        footer,
                        theme,
                        navigationLinks,
                        topBarConfig,
                        children,
                    }: PageLayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col">
            <TopBar
                clientName="Everylane"
                theme={theme}
                navigationLinks={navigationLinks}
                showContactButton={topBarConfig?.showContactButton}
                contactButtonText={topBarConfig?.contactButtonText}
            />
            <Header {...header} theme={theme} />
            <main className="flex-grow">
                <div className="max-w-screen-xl mx-auto px-4 py-8">{children}</div>
            </main>
            <Footer {...footer} theme={theme} />
        </div>
    );
};

export default PageLayout;