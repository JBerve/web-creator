import React from 'react';
import { ThemeConfig } from '@/app/configs/configTypes';

interface ClientBlockProps {
    heading?: string;
    clients?: Array<{ name: string; business: string; quote: string }>;
    theme: ThemeConfig;
}

const ClientBlock: React.FC<ClientBlockProps> = ({ heading, clients, theme }) => (
    <section
        className="my-8 w-full max-w-screen-xl mx-auto px-4"
        style={{ fontFamily: theme.fontFamily }}
    >
        <div className="text-left">
            {heading && (
                <h2
                    className="text-2xl font-semibold mb-4"
                    style={{ color: theme.primaryColor }}
                >
                    {heading}
                </h2>
            )}

            {clients && (
                <div className="space-y-4">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="border p-4 rounded-md shadow-sm"
                            style={{ backgroundColor: theme.secondaryColor }}
                        >
                            <p className="italic" style={{ color: theme.textColor }}>
                                &ldquo;{client.quote}&rdquo;
                            </p>
                            <p
                                className="font-bold mt-2"
                                style={{ color: theme.primaryColor }}
                            >
                                - {client.name}, {client.business}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </section>
);

export default ClientBlock;