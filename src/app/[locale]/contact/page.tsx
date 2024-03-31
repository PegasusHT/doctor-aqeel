import React from 'react';
import ContactDiv from './components/contactDiv';
import Map from './components/map';

const Contact: React.FC = () => {

    return (
        <div className='mb-14'>
            <div className='mt-5' style={{ background: 'linear-gradient(to bottom, #827e7a, #F5DEB3)' }}>
                <div className="relative flex items-center justify-center h-64 mb-8">
                    <div className="relative z-10 flex flex-col justify-center items-center text-lg font-bold">
                        <h2 className='text-6xl'>Contact</h2>
                    </div>
                </div>
            </div>

            <ContactDiv />
            <Map />
        </div>
    );
};

export default Contact;