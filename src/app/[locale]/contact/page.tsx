import React from 'react';
import ContactDiv from './components/contactDiv';

const Contact: React.FC = () => {
    
    return (
        <div className='mb-14'>
            <div className="relative flex items-center justify-center h-64 lg:h-[16rem] ">
                <div className="absolute inset-0 overflow-hidden">
                    <div className='bg-left w-full h-full'
                        style={{backgroundImage: `url(https://dr-aqeel.com/wp-content/uploads/2024/01/11062b_c7976f504ca04194a833f8e2126efbc8mv2.png)`}}>
                    </div>
                </div>
                <div className="relative flex items-center justify-center h-64 mb-8">
                    <div className="relative z-10 flex flex-col justify-center items-center text-lg font-bold">
                        <h2 className='text-6xl lg:text-7xl'>Contact</h2>
                    </div>
                </div>
            </div>

            <ContactDiv />
        </div>
    );
};

export default Contact;