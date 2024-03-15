import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="w-full h-3/5">
            <img src="https://dr-aqeel.com/wp-content/uploads/2024/01/dr_aqeel-1.png" alt="Portrait" className="w-full h-full" />
            <div className="flex flex-col gap-2 ml-8 mr-14 mt-8 ">
                <div className="">
                    <h1 className="text-xl font-bold">About</h1>
                </div>
                <div className="">
                    <h2 className="text-lg">Dr Aqeel Farooque</h2>
                </div>
                <div className="">
                    <p className="mr-10" style={{ color: '#2c2c74'}}>Expert in children's diabetes and endocrine diseases</p>
                </div>
                <div className="text-sm gap-x-2 mr-10 tracking-wide">
                    <p className="">
                    Dr Aqeel Farooque is a highly qualified and experienced Pediatric Endocrinologist who is passionate about helping children with endocrine-related health issues.</p>
                    <p>
                        He currently serves as the head of the Diabetes & Endocrinology Unit at Al Qassimi Women’s & Children’s Hospital, Sharjah. This is a tertiary referral center providing care for children of the Northern Emirates, with complex endocrine-related health issues.
                    </p>
                </div>
                <div className="mb-8 mt-3">
                    <button className='relative z-30 h-9 w-28 rounded-full text-white text-sm font-semibold'
                        style={{ backgroundColor: '#961b1e'}}>Read More</button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-4">
                <h1 className="text-2xl font-bold">Services</h1>   
                <p className='p-4 mx-10 text-sm mb-8'>His clinical expertise lies in pediatric diabetes & endocrinology, and he provides consultations for a wide range of endocrine-related health problems in children, including type 1, 2, and rare types of diabetes, as well as issues related to growth, puberty, thyroid, adrenal, pituitary, sex development, calcium, and metabolic bone disorders. He also works with children who have genetic abnormalities that may cause endocrine problems. </p> 
            </div>
        </div>
    );
};

export default Hero;