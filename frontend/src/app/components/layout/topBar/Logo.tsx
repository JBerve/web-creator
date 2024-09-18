import React from 'react';
import Link from 'next/link';

interface LogoProps {
    clientName: string;
    primaryColor: string;
}

const Logo: React.FC<LogoProps> = ({ clientName, primaryColor }) => {
    return (
        <div className="flex items-center">
            <Link href="/">
        <span className="text-2xl font-semibold" style={{ color: primaryColor }}>
          {clientName}
        </span>
            </Link>
        </div>
    );
};

export default Logo;