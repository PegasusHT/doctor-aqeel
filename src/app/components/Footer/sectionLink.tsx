'use client';
import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

type SectionMapping = {
    [key: string]: string;
};

const SectionLink = ({ sections }: { sections: string[] }) => {

    const localActive = useLocale();
    const pathname = usePathname();

    const sectionMapping: SectionMapping = {
        'حول': 'about',
        "اتصل بنا": 'contact',
        'الخدمات': 'services',
        'الأسئلة الشائعة': 'faqs',
    };

    return (
        <>
            {sections.map((section) => {
                let expectedPathname;
                let linkHref;

                if(localActive === 'en') {
                    expectedPathname = `/${localActive}/${section.toLowerCase()}`;
                    linkHref = `/${localActive}/${section.toLowerCase()}`;
                }
                else {
                    expectedPathname = `/${localActive}/${sectionMapping[section.toLowerCase()]}`;
                    linkHref = `/${localActive}/${sectionMapping[section.toLowerCase()]}`;
                }

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

