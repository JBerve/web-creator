import config from './config.json';

export interface Config {
    header: {
        title: string;
        subtitle: string;
        backgroundImage: string;
        navigation: Array<{ label: string; href: string }>;
    };
    content: {
        sections: Array<{
            type: string;
            heading?: string;
            content?: string;
            servicesList?: Array<{ title: string; description: string }>;
            backgroundImage?: string;
        }>;
    };
    contact: {
        email: string;
        phone: string;
    };
    footer: {
        text: string;
        socialLinks: {
            facebook: string;
            twitter: string;
            linkedin: string;
        };
    };
    theme: {
        primaryColor: string;
        secondaryColor: string;
        fontFamily: string;
    };
}

export const getConfig = (): Config => {
    return config; 
};