'use client';
import { useEffect, useRef } from 'react';

const Map = () => {
    const mapRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.src = `https://www.google.com/maps/embed/v1/place?q=Sharjah&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
        }
    }, []);

    return (
        <div className="relative h-96 lg:h-[16rem] lg:w-full mr-4 my-10 lg:mr-10">
            <iframe
                ref={mapRef}
                className="w-full h-full"
                allowFullScreen
            />
        </div>
    );
};

export default Map;