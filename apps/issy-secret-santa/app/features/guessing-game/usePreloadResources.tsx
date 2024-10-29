import { useEffect, useState } from 'react';
import { geoUrl } from './image-map';
import { locations } from '../locations/locations';

async function preloadResources() {
    await fetch(geoUrl);

    // Preload the first main image
    const img = new Image();
    img.src = locations[0].mainImage;
}

export const usePreloadResources = () => {
    const [mapDataLoaded, setMapDataLoaded] = useState(false);

    useEffect(() => {
        preloadResources().then(() => setMapDataLoaded(true));
    }, []);

    return mapDataLoaded;
};
