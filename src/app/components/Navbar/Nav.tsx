'use client';
import doctify_rating from '/public/doctify_rating.png';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';

type SectionMapping = {
    [key: string]: string;
};

const Nav = ({ sections }: { sections: string[] }) => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();
    const pathname = usePathname();

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        const pathNameArr = pathname.split('/');
        const filteredPathname = pathNameArr.slice(2).join('/');
        startTransition(() => {
            router.replace(`/${selectedLanguage}/${filteredPathname}`);
        });
    };

    const sectionMapping: SectionMapping = {
        'حول': 'about',
        "اتصل بنا": 'contact',
        'الخدمات': 'services',
        'المدونة': 'blog',
        'الأسئلة الشائعة': 'faqs',
    };

    return (
        <div className='gap-4 lg:flex lg:justify-start mt-4'>
            <nav className=''>
                <ul className="flex gap-4 ml-4 md:ml-6 xl:ml-8 mt-8 font-semibold text-sm md:text-base lg:text-xl">
                    {sections.map((section) => {
                        let expectedPathname;
                        let linkHref;

                        if (localActive === 'en') {
                            if (section === 'Home') {
                                expectedPathname = `/${localActive}`;
                                linkHref = `/${localActive}`;
                            } else {
                                expectedPathname = `/${localActive}/${section.toLowerCase()}`;
                                linkHref = `/${localActive}/${section.toLowerCase()}`;
                            }
                        } else {
                            if (section === 'الصفحة الرئيسية') {
                                expectedPathname = `/${localActive}`;
                                linkHref = `/${localActive}`;
                            } else {
                                expectedPathname = `/${localActive}/${sectionMapping[section.toLowerCase()]}`;
                                linkHref = `/${localActive}/${sectionMapping[section.toLowerCase()]}`;
                            }
                        }

                        const isActive = pathname === expectedPathname;

                        return (
                            <li key={section}>
                                <Link href={linkHref}>
                                    <span className={isActive ? 'text-red-900' : ''}>{section}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div className='invisible lg:visible flex-1'/>
            <div className='flex flex-col items-end lg:flex-row'>
                <div className=' mr-7 w-40 lg:w-full sm:ml-auto mt-4 sm:mt-4 md:mt-2 lg:mb-1'>
                    <a
                        href='https://www.doctify.com/en-ae/specialist/aqeel-farooque'
                        target='_blank'
                        className='md:mr-8'
                    >
                        <Image src={doctify_rating} 
                            width={210} height={120}
                            alt="doctify rating"/>
                    </a>
                </div>
                <label className='flex lg:m-6 md:justify-center mr-3 mb-4 ml-48 md:mt-6 lg:mt-7 lg:w-32 md:ml-0'>
                    <select
                        name="selectedLanguage"
                        defaultValue={localActive}
                        disabled={isPending}
                        onChange={handleLanguageChange}
                        className="bg-gray-200 border border-gray-300 mr-4 h-8 lg:h-12 ml-auto md:ml-0 text-xs md:text-base lg:text-xl mt-1 p-1 lg:px-4"
                    >
                        <option value="en">English</option>
                        <option value="ar">Arabic</option>
                    </select>
                </label>
            </div>
          
        </div>
    );
};

export default Nav;