'use client';
import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

const SectionLink = ({ sections }: { sections: string[] }) => {

    const localActive = useLocale();
    const pathname = usePathname();

    return (
        <>
            {sections.map((section) => {
                let expectedPathname;
                let linkHref;

                linkHref = `/${localActive}/${section.toLowerCase()}`;

                expectedPathname = `/${localActive}/${section.toLowerCase()}`;
                linkHref = `/${localActive}/${section.toLowerCase()}`;

                const isActive = pathname === expectedPathname;

                return (
                    <a key={section}>
                        <Link href={linkHref}>
                            <span className={isActive ? 'text-red-900 active-link' : 'text-black'}>{section}</span>
                        </Link>
                    </a>
                );
            })}
        </>
    );
};

export default SectionLink;

