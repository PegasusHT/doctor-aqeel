'use client';
import React from 'react';
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import {useTranslations} from 'next-intl';

const Marker: React.FC = () => {
    const t = useTranslations('Footer');

    return (
        <div className="bg-gray-300 flex md:justify-center lg:items-center text-center pt-2 md:h-12 lg:h-16 pb-2">
            <div className='flex-1'></div>
            <p className="text-xs lg:text-xl mx-auto ml-auto pt-2">&copy; {t('copyright')} </p>
            <div className='flex justify-end flex-1'>
                <div className="fixed bottom-[-2px] lg:bottom-0 right-1 lg:right-4 pr-2 ">
                    <button onClick={() => window.scrollTo(0, 0)} className="focus:outline-none">
                        <BsFillArrowUpSquareFill color={'#046bd2'} 
                            className='block text-3xl lg:text-5xl' />
                    </button>
                </div>
            </div> 
        </div>

    );
};

export default Marker;