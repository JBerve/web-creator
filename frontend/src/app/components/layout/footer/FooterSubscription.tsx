'use client';

import React, { useState } from 'react';
import { ThemeConfig } from 'src/app/configs/configTypes';

interface FooterSubscriptionProps {
    subscriptionText?: string;
    primaryColor: string;
}

const FooterSubscription: React.FC<FooterSubscriptionProps> = ({
                                                                   subscriptionText,
                                                                   primaryColor,
                                                               }) => {
    const [email, setEmail] = useState<string>('');

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Subscribed email:', email);
        setEmail('');
    };

    return (
        <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4">Suscribirse</h3>
            <p className="mb-4">
                {subscriptionText ||
                    '¡Suscríbete para recibir contenido exclusivo y las últimas noticias!'}
            </p>
            <form onSubmit={handleSubscribe} className="flex w-full">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu email"
                    className="w-full p-2 border border-gray-300 rounded-l mb-4"
                    required
                />
                <button
                    type="submit"
                    className="p-2 rounded-r mb-4"
                    style={{ backgroundColor: primaryColor, color: '#fff' }}
                >
                    →
                </button>
            </form>
        </div>
    );
};

export default FooterSubscription;