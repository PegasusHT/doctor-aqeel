'use client';
import doctify_rating from '../../../../public/doctify_rating.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';
import { useLocale } from 'next-intl';

const Nav = ({ sections }: { sections: string[] }) => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

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
                    {sections.map((section) => (
                        <li key={section}>
                            <a href={`/${section.toLowerCase()}`}>{section}</a>
                        </li>
                    ))}
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