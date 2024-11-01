import { useMap } from '@vis.gl/react-maplibre';
import type { Map as MapInstance } from 'maplibre-gl';
import { Fragment, useEffect, useRef } from 'react';
import { locations } from '../locations/locations';
import { cn } from '@/utils/misc';

export const ImageOverlay = () => {
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
                        />
                    ))}
                </Fragment>
            ))}
        </>
    );
};

const Image = ({
    src,
    lat,
    long,
    width,
    height,
}: {
    src: string;
    lat: number;
    long: number;
    width?: number;
    height?: number;
}) => {
    const map = useMap();
    const instance = map.current?.getMap() as MapInstance;
    const ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const moveListener = () => {
            const position = instance.project([long, lat]);
            if (!ref.current) return;
            ref.current.style.left = `${position.x}px`;
            ref.current.style.top = `${position.y}px`;
            ref.current.style.transform = `scale(${Math.pow(2, instance.getZoom()) / 2})`;
        };

        const loadListener = () => {
            moveListener();
        };

        instance.on('move', moveListener);
        instance.on('load', loadListener);
        return () => {
            instance.off('move', moveListener);
            instance.off('load', loadListener);
        };
    }, [instance, lat, long]);

    return (
        <img
            src={src}
            ref={ref}
            width={width ?? 5}
            height={height ?? 5}
            className={cn('pointer-events-none absolute left-0 top-0')}
        />
    );
};

// X is a value from 0 to 800
const convertXToLongitude = (x: number) => {
    return (x / 800) * 360 - 180;
};

// Y is a value from 0 to 600 (0 is top)
const convertYToLatitude = (y: number) => {
    return (y / 600) * -180 + 90;
};
