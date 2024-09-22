export interface HeaderConfig {
    title: string;
    subtitle: string;
    backgroundImage: string;
}

export interface TopBarConfig {
    showContactButton?: boolean;
    contactButtonText?: string;
}

export interface Section {
    type: string;
    heading?: string;
    content?: string;
    servicesList?: ServiceItem[];
    clients?: ClientTestimonial[];
    faqs?: FAQItem[];
}

export interface ServiceItem {
    title: string;
    description: string;
}

export interface ClientTestimonial {
    name: string;
    business: string;
    quote: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface Page {
    slug: string;
    navTitle?: string;
    header: HeaderConfig;
    content: {
        sections: Section[];
    };
}
