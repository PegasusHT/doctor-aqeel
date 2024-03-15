import React from 'react';

const ServicesSect: React.FC = () => {
    return (
        <div className="bg-gray-200 flex flex-col items-center gap-20 p-8">
            <div className="bg-neutral-100 mt-10 flex flex-col items-center h-96 w-11/12">
                <img src="https://dr-aqeel.com/wp-content/uploads/2024/01/insulin-child-teaser.jpg" alt="Image 1" className="" />
                <h2 className="text-xl mt-4">Diabetes Management</h2>
            </div>
            <div className="bg-neutral-100 flex flex-col items-center h-96 w-11/12">
                <img src="https://dr-aqeel.com/wp-content/uploads/2024/01/Picsart_23-05-14_00-20-50-989.jpg" alt="Image 2" className="" />
                <h2 className="text-xl mt-4">Growth Disorders</h2>
            </div>
            <div className="bg-neutral-100 flex flex-col items-center h-96 w-11/12">
                <img src="https://dr-aqeel.com/wp-content/uploads/2024/01/iStock_000018492225XSmall.jpg" alt="Image 3" className="" />
                <h2 className="text-xl mt-4">Puberty Disorders</h2>
            </div>
            <button className='relative z-30 mt-[-2rem] mb-[-4rem] h-8 w-36 rounded-full text-white font-semibold'
                        style={{ backgroundColor: '#961b1e'}}>
                See Services
            </button>
        </div>
    );
};

export default ServicesSect;