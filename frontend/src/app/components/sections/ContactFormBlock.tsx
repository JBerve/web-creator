// components/ContactFormBlock.tsx

import React from 'react';
import { ContactFormSection, ThemeConfig } from '@/app/configs/configTypes';

interface ContactFormBlockProps extends ContactFormSection {
    theme: ThemeConfig;
}

const ContactFormBlock: React.FC<ContactFormBlockProps> = ({ heading, theme }) => {
    return (
        <section className="py-8" style={{ fontFamily: theme.fontFamily }}>
            {heading && <h2 className="text-2xl mb-4" style={{ color: theme.primaryColor }}>{heading}</h2>}
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" required />
                </div>
                <div>
                    <label>Message</label>
                    <textarea required></textarea>
                </div>
                <button type="submit" style={{ backgroundColor: theme.primaryColor, color: '#fff' }}>
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default ContactFormBlock;