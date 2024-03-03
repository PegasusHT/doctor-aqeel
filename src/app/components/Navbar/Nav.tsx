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
                <ul className="flex gap-4 ml-3 mt-8 font-semibold">
                    {sections.map((section) => (
                        <li key={section}>
                            <a href={`/${section.toLowerCase()}`}>{section}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className='md:ml-auto'>
                <a
                    href='https://www.doctify.com/en-ae/specialist/aqeel-farooque'
                    target='_blank'
                    className='md:mr-8'
                >
                    <Image src={doctify_rating} alt="doctify rating" />
                </a>
            </div>
            <label>
                <select name="selectedLanguage"   
                 defaultValue={localActive}
                 disabled={isPending}
                 onChange={handleLanguageChange}>
                    <option value="en">English</option>
                    <option value="ar">Arabic</option>
                </select>
            </label>
        </div>
    );
};

export default Nav;