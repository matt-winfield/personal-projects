import { useMap } from '@vis.gl/react-maplibre';
import type { Map as MapInstance, MapMouseEvent } from 'maplibre-gl';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { locations as locationsOriginal } from '../locations/locations';
import { cn } from '@/utils/misc';
import { Button } from '@/components/ui/button';

const editMode = false;

interface ImageOverlayProps {
    completedLocations: string[];
}

const originalImageScaleFactor = 100;

export const ImageOverlay = ({ completedLocations }: ImageOverlayProps) => {
    const [activeImage, setActiveImage] = useState<string | null>();
    const [locations, setLocations] = useState(locationsOriginal);

    const nextImage = useCallback(() => {
        if (!activeImage) {
            setActiveImage(locations[0].images[0].src);
            return;
        }

        const currentLocationIndex = locations.findIndex((location) =>
            location.images.some((image) => image.src === activeImage),
        );
        const currentLocation = locations[currentLocationIndex];
        if (!currentLocation) return;

        const currentIndex = currentLocation.images.findIndex(
            (image) => image.src === activeImage,
        );
        const nextIndex = currentIndex + 1;
        if (nextIndex < currentLocation.images.length) {
            setActiveImage(currentLocation.images[nextIndex].src);
        } else {
            const nextLocation =
                locations[(currentLocationIndex + 1) % locations.length];
            setActiveImage(nextLocation.images[0].src);
        }
    }, [activeImage]);

    const prevImage = useCallback(() => {
        if (!activeImage) {
            setActiveImage(locations[0].images[0].src);
            return;
        }

        const currentLocationIndex = locations.findIndex((location) =>
            location.images.some((image) => image.src === activeImage),
        );
        const currentLocation = locations[currentLocationIndex];
        if (!currentLocation) return;

        const currentIndex = currentLocation.images.findIndex(
            (image) => image.src === activeImage,
        );
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
            setActiveImage(currentLocation.images[prevIndex].src);
        } else {
            const prevLocation =
                locations[
                    (currentLocationIndex - 1 + locations.length) %
                        locations.length
                ];
            setActiveImage(
                prevLocation.images[prevLocation.images.length - 1].src,
            );
        }
    }, [activeImage]);

    const clearActiveImage = useCallback(() => {
        setActiveImage(null);
    }, []);

    return (
        <>
            {locations.map((location) => (
                <Fragment key={location.name}>
                    {location.images.map((image) => (
                        <Image
                            key={image.src}
                            src={image.src}
                            lat={image.position.latitude}
                            long={image.position.longitude}
                            width={image.width}
                            height={image.height}
                            active={editMode && image.src === activeImage}
                            completed={completedLocations.includes(
                                location.name,
                            )}
                            locations={locations}
                            setLocations={setLocations}
                        />
                    ))}
                </Fragment>
            ))}
            {editMode && (
                <div className="fixed right-0 top-1/2 flex flex-col">
                    <div className="mb-1">
                        <Button onClick={prevImage}>Prev</Button>
                        <Button onClick={nextImage} className="ml-2">
                            Next
                        </Button>
                    </div>
                    <div>
                        <Button onClick={clearActiveImage} className="w-full">
                            Clear
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

interface ImageProps {
    src: string;
    lat: number;
    long: number;
    width?: number;
    height?: number;
    active?: boolean;
    completed: boolean;
    locations: typeof locationsOriginal;
    setLocations: (locations: typeof locationsOriginal) => void;
}

const Image = ({
    src,
    lat,
    long,
    width,
    height,
    active,
    completed,
    locations,
    setLocations,
}: ImageProps) => {
    const map = useMap();
    const instance = map.current?.getMap() as MapInstance;
    const ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const updateImage = () => {
            const position = instance.project([long, lat]);
            if (!ref.current) return;
            ref.current.style.left = `${position.x}px`;
            ref.current.style.top = `${position.y}px`;
            ref.current.style.transform = `scale(${Math.pow(2, instance.getZoom()) / (1.5 * originalImageScaleFactor)})`;
        };

        const clickListener = (e: MapMouseEvent) => {
            const image = locations
                .flatMap((location) => location.images)
                .find((image) => image.src === src);
            if (!image) return;
            image.position.latitude = e.lngLat.lat;
            image.position.longitude = e.lngLat.lng;
            setLocations([...locations]);
            console.log(locations);
        };

        instance.on('move', updateImage);
        instance.on('load', updateImage);
        if (editMode && active) {
            instance.on('click', clickListener);
        }
        return () => {
            instance.off('move', updateImage);
            instance.off('load', updateImage);
            if (editMode && active) {
                instance.off('click', clickListener);
            }
        };
    }, [instance, lat, long, active, src]);

    // Hack for iOS Mobile Safari to prevent image from being blurry
    // On Chrome and Firefox, the full image resolution is used when scaled up regardless of the original size
    // On iOS Mobile Safari, the image is pixelated when scaled up if the original size is small
    // So we scale up the image by a large factor, and then reverse this as part of the scale transform
    const scaledWidth = (width ?? 5) * originalImageScaleFactor;
    const scaledHeight = (height ?? 5) * originalImageScaleFactor;

    return (
        <img
            src={src}
            ref={ref}
            style={{
                maxWidth: `${scaledWidth}px`,
                maxHeight: `${scaledHeight}px`,
            }}
            className={cn(
                'pointer-events-none absolute origin-top-left opacity-0 transition-opacity duration-300',
                active && 'border border-red-500',
                completed && 'opacity-100',
            )}
        />
    );
};
