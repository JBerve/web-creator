import React from 'react';
import Link from 'next/link';

interface ContactButtonProps {
    contactButtonText?: string;
    primaryColor: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ contactButtonText = 'Contact', primaryColor }) => {
    return (
        <div>
            <Link href="/contact">
        <span
            className="py-2 px-4 rounded"
            style={{
                backgroundColor: primaryColor,
                color: '#fff',
            }}
        >
          {contactButtonText}
        </span>
            </Link>
        </div>
    );
};

export default ContactButton;