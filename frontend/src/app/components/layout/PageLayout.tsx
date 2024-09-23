import TopBar from 'components/layout/topBar/TopBar';
import Header from 'components/layout/header/Header';
import Footer from 'components/layout/footer/Footer';
import {HeaderConfig, FooterConfig, ThemeConfig, NavigationLink, TopBarConfig} from '@/app/configs/configTypes';

interface PageLayoutProps {
    header: HeaderConfig;
    footer: FooterConfig;
    theme: ThemeConfig;
    navigationLinks: NavigationLink[];
    topBarConfig?: TopBarConfig;
    children: React.ReactNode;
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
            <Footer
                footer={footer}
                theme={theme}
                navigationLinks={navigationLinks}
            />
        </div>
    );
};

export default PageLayout;