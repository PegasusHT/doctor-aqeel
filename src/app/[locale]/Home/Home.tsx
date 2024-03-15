import React from 'react';
import { useTranslations } from 'next-intl';
import Hero from './Sections/Hero';
import ServicesSect from './Sections/ServicesSect';
import Method from './Sections/Method';
import BlogSection from './Sections/BlogsSect';

const Home: React.FC = () => {
    const translations = useTranslations('Home');

    return (
        <div>
           <div className="relative flex justify-center h-[28rem] overflow-hidden text-center">
                <video autoPlay loop muted className="absolute w-screen md:h-4/5 transform min-w-full max-h-full h-full scale-150 object-cover">
                    <source src={'home.mp4'} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="relative z-30 p-5 h-20 ">
                    <h1 className='text-4xl mt-32 font-bold'>
                        <div className='flex flex-row'>
                            <p className='' style={{ color: '#961b1e' }}>Holistic care </p> 
                            <p className='pl-3'>for you </p>
                        </div>
                            <p>and your 
                                <br/>
                            hormones</p>  
                    </h1>
                    <p className='relative z-30 text-xs mt-6'>Exceptional care in endocrinology for children and adolescents</p>
                    <button className='relative z-30 mt-10 h-10 w-44 rounded-full text-white font-semibold'
                        style={{ backgroundColor: '#961b1e'}}>
                            See Services
                    </button>
                </div>
            </div>
            <Hero />
            <ServicesSect />
            <Method />
            <BlogSection />
        </div>
    );
};

export default Home; 