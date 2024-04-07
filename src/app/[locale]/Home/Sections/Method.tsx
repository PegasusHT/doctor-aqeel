import React from 'react';
import ImageContainer from './components/imgContainer';
import {useTranslations} from 'next-intl';
import {ImageData} from '../../../../data/methodHomeData.json'

const Method: React.FC = () => {
    const t = useTranslations('HomeMethod');

    return (
        <div className="flex flex-col mt-24 lg:mb-28 items-center gap-2">
            <h2 className="text-xl lg:text-2xl font-semibold">{t('Title')}</h2>
            <h1 className='text-2xl lg:text-3xl font-bold'>{t('Intro')}</h1>
            <div className="flex flex-col my-10 px-5 gap-14 lg:mt-40 ">
                {ImageData.map((data, index) => {
                    const pos = index % 2 === 0 ? 'right' : 'left';
                    return (
                        <div key={index}>
                            <ImageContainer
                                key={index} position={pos}
                                imageUrl={data.imageUrl}
                                altText={data.altText}
                                title={data.title}
                                description={data.description}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Method;
