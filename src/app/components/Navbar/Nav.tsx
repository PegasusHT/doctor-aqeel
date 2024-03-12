'use client';
import doctify_rating from '/public/doctify_rating.png';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';

const Nav = ({ sections }: { sections: string[] }) => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();
    const pathname = usePathname();
    
    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        startTransition(() => {
            router.replace(`/${selectedLanguage}`);
        });
    }

    return (
        <div className='gap-4 md:flex justify-end'>
            <nav>
                <ul className="flex gap-4 ml-3 mt-8 font-semibold text-xs md:text-base">
                    {sections.map((section) => {
                        let expectedPathname;
                        let linkHref;

                        if (section === 'Home') {
                            expectedPathname = `/${localActive}`;
                            linkHref = `/${localActive}`;
                        } else {
                            expectedPathname = `/${localActive}/${section.toLowerCase()}`;
                            linkHref = `/${localActive}/${section.toLowerCase()}`;
                        }

                        const isActive = pathname === expectedPathname;

                        return (
                            <li key={section}>
                                <Link href={linkHref}>
                                    <span className={isActive ? 'text-red-500' : ''}>{section}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div className='ml-48 md:ml-auto'>
                <a
                    href='https://www.doctify.com/en-ae/specialist/aqeel-farooque'
                    target='_blank'
                    className='md:mr-8'
                >
                    <Image src={doctify_rating} alt="doctify rating"/>
                </a>
            </div>
            <label className='flex md:justify-center mr-4 md:mt-6'>
                <select
                    name="selectedLanguage"
                    defaultValue={localActive}
                    disabled={isPending}
                    onChange={handleLanguageChange}
                    className="bg-gray-200 border border-gray-300 mr-4 h-8 ml-auto md:ml-0 text-xs md:text-base mt-2 p-1"
                >
                    <option value="en">English</option>
                    <option value="ar">Arabic</option>
                </select>
            </label>
        </div>
    );
};

export default Nav;