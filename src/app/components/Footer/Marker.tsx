'use client';
import React from 'react';
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const Marker: React.FC = () => {
    return (
        <div className="bg-gray-300 flex justify-center text-center pt-2 h-12 pb-2">
            <div className='flex-1'></div>
            <p className="text-base mx-auto ml-auto pt-2">&copy; 2023 by Dr. Aqeel Farooque. All rights reserved.</p>
            <div className='flex justify-end flex-1'>
                <div className="ml-auto pr-5 pt-1">
                    <button onClick={() => window.scrollTo(0, 0)} className="focus:outline-none">
                        <BsFillArrowUpSquareFill size={30} color={'#046bd2'} />
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Marker;