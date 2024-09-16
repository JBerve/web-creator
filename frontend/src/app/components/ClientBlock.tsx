import React from 'react';

interface ClientBlockProps {
    heading?: string;
    clients?: Array<{ name: string; business: string; quote: string }>;
}

const ClientBlock: React.FC<ClientBlockProps> = ({ heading, clients }) => (
    <section className="my-8 w-full max-w-screen-xl mx-auto px-4">
        <div className="text-left">
            {heading && <h2 className="text-2xl font-semibold mb-4 text-gray-900">{heading}</h2>}

            {clients && (
                <div className="space-y-4">
                    {clients.map((client, index) => (
                        <div key={index} className="border p-4 rounded-md shadow-sm bg-gray-100">
                            <p className="italic">&ldquo;{client.quote}&rdquo;</p> {/* Curly quotes */}
                            <p className="font-bold mt-2">- {client.name}, {client.business}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </section>
);

export default ClientBlock;