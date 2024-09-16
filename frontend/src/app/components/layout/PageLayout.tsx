import TopBar from "components/TopBar";
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import { ReactNode } from 'react';

interface PageLayoutProps {
    header: {
        title: string;
        subtitle: string;
        backgroundImage: string;
        navigation: Array<{ label: string; href: string }>;
    };
    footer: {
        text: string;
    };
    children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ header, footer, children }) => {
    return (
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
            <TopBar clientName="everylane" />
            <Header
                title={header.title}
                subtitle={header.subtitle}
                backgroundImage={header.backgroundImage}
                navigation={header.navigation}
            />
            <main className="flex-1">
                <div className="w-full mx-auto flex flex-col gap-8 ">
                    {children}
                </div>
            </main>
            <Footer text={footer.text} />
        </div>
    );
};

export default PageLayout;