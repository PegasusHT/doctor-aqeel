import React from 'react';
import Marker from './Marker';
import LinkList from '../Navbar/LinksList';
import SectionLink from './sectionLink';
import {useTranslations} from 'next-intl';

const Footer: React.FC = () => {
    const t = useTranslations('Footer');
    const tNav = useTranslations('Nav');
    const sections = [tNav('About'), tNav('Services'), tNav('FAQs'), tNav('Contact')];

    return (
        <div className="bg-violet-100 pt-8 md:pt-20">
            <div className="flex flex-col md:grid md:grid-cols-[auto_auto_auto] h-[21rem] md:h-56
            items-center md:items-start md:ml-20">
                <div className="flex flex-col items-center lg:items-start">
                    <div className="pb-4 text-2xl lg:text-3xl font-bold" style={{color:'#961B1E'}}> {t('Contact Me')} </div>
                    <div className="text-lg lg:text-xl pb-1">info@dr-aqeel.com</div>
                    <div className="text-lg lg:text-xl pb-3">{t('Dubai & Sharjah')}</div>
                    <div className="">
                        <LinkList position='footer' />
                    </div>
                </div>
                <div className="hidden lg:text-xl md:grid grid-rows-4 gap-y-1 pr-4">
                    <SectionLink sections={ sections } />
                </div>
                <div className="mt-12 md:mr-10 md:mt-0">
                    <h1 className='text-xl lg:text-2xl ml-1 md:ml-0 font-semibold' style={{color:'#961B1E'}}> {t('subcribe')} </h1>
                    <form className='grid col-2'>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="border border-gray-300 h-12 lg:h-14 md:mr-10 mt-2 md:mt-4 p-2 w-96 lg:w-[19rem] md:w-64 md:ml-0"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 w-28 lg:w-32 text-white lg:text-xl h-10 lg:h-12 p-2 mt-2"
                        >
                            {t('submit')}
                        </button>
                    </form>
                </div>
            </div>
            <div className=''>
                <Marker />
            </div>
        </div>
    );
};

export default Footer;