
export interface Config {
    header: HeaderConfig;
    topBar?: TopBarConfig;
    pages: Record<string, PageConfig>;
    contact: ContactInfo;
    footer: FooterConfig;
    theme: ThemeConfig;
}

export interface HeaderConfig {
    title: string;
    subtitle: string;
    backgroundImage: string;
}

export interface TopBarConfig {
    showContactButton?: boolean;
    contactButtonText?: string;
}

export interface PageConfig {
    header: HeaderConfig;
    content: PageContent;
}

export interface PageContent {
    sections: Section[];
}

export type Section =
    | AboutSection
    | ServicesSection
    | ClientsSection
    | TextSection
    | FAQSection
    | ContactFormSection;

export enum SectionType {
    About = 'about',
    Services = 'services',
    Clients = 'clients',
    Text = 'text',
    FAQ = 'faq',
    ContactForm = 'contactForm'
}

interface BaseSection {
    type: SectionType;
    heading?: string;
    backgroundImage?: string;
}

export interface AboutSection extends BaseSection {
    type: SectionType.About;
    content: string;
}

export interface ServicesSection extends BaseSection {
    type: SectionType.Services;
    servicesList: ServiceItem[];
}

export interface ClientsSection extends BaseSection {
    type: SectionType.Clients;
    clients: ClientTestimonial[];
}

export interface TextSection extends BaseSection {
    type: SectionType.Text;
    content: string;
}

export interface FAQSection extends BaseSection {
    type: SectionType.FAQ;
    faqs: FAQItem[];
}

export interface ContactFormSection extends BaseSection {
    type: SectionType.ContactForm;
    heading?: string;
}

export interface FAQItem {
    question: string;
    answer: string;
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

export interface ContactInfo {
    email: string;
    phone: string;
    address: string;
}

export interface FooterConfig {
    text: string;
    socialLinks: SocialLinks;
}

export interface SocialLinks {
    facebook: string;
    twitter: string;
    linkedin: string;
}

export interface ThemeConfig {
    primaryColor: string;
    secondaryColor: string;
    textColor: string;
    fontFamily: string;
}

export interface NavigationLink {
    title: string;
    href: string;
}