import { useEffect } from 'react';
import { geoUrl } from './image-map';
import { locations } from '../locations/locations';

async function preloadResources() {
    await fetch(geoUrl);

    // Preload all images
    for (const location of locations) {
        for (const image of location.images) {
            const img = new Image();
            img.src = image.src;
        }
    }
}

export const usePreloadResources = () => {
    useEffect(() => {
        preloadResources();
    }, []);
};
