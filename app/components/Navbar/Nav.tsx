'use client';
import doctify_rating from '../../../public/doctify_rating.png';
import Image from 'next/image';

const sections = ['Home', 'About', 'Services', 'Reviews', 'Blog', 'FAQs', 'Contact'];

const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
}

const Nav = () => {
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
            <form>
                <label>
                    <select name="selectedLanguage" defaultValue="English" onChange={handleLanguageChange}>
                        <option value="English">English</option>
                        <option value="Arabic">Arabic</option>
                    </select>
                </label>
            </form>
        </div>
    );
};

export default Nav;