import { Button } from '@/components/ui/button';
import { locations } from '@/features/locations/locations';
import { cn } from '@/utils/misc';
import { useState } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
} from 'react-simple-maps';

export const geoUrl = '/countries-50m.json';

type GeoType = {
    Type: string;
    rsmKey: string;
    properties: {
        name: string;
    };
};

const pictureOffset = { x: 1, y: 1 };
const initialZoom = 1.2;

export const ImageMap = () => {
    const [selectedCountry, setSelectedCountry] = useState<GeoType | null>(
        null,
    );
    const [zoom, setZoom] = useState(initialZoom);

    const onMoveEnd = ({
        zoom,
    }: {
        coordinates: [number, number];
        zoom: number;
    }) => {
        setZoom(zoom);
        const root = document.querySelector(':root') as HTMLElement;
        root.style.setProperty('--image-scale', (5 / zoom).toString());
    };

    return (
        <div className="relative h-full w-full flex-1">
            <div className="absolute left-1/2 top-0 z-10 flex w-11/12 -translate-x-1/2 flex-col items-center rounded-b-2xl bg-background p-5 text-lg">
                <div className="text-center">
                    Where in the world was this image taken?
                </div>
            </div>
            <div className="absolute bottom-0 left-1/2 z-10 flex w-11/12 -translate-x-1/2 flex-col items-center rounded-t-2xl bg-amber-700 p-5 text-lg text-white">
                <div className="text-center">
                    Selected country: {selectedCountry?.properties.name}
                </div>
                <Button
                    className="mt-3"
                    onClick={() => setSelectedCountry(null)}
                >
                    Submit
                </Button>
            </div>
            <ComposableMap className="h-full w-full bg-sky-200">
                <ZoomableGroup
                    zoom={initialZoom}
                    maxZoom={40}
                    onMoveEnd={onMoveEnd}
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo: GeoType) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onClick={() => {
                                        setSelectedCountry(geo);
                                    }}
                                    id={geo.rsmKey}
                                    style={{
                                        default: {
                                            stroke: '#88F',
                                            strokeWidth: 0.3,
                                            outline: 'none',
                                            fill:
                                                selectedCountry?.rsmKey ===
                                                geo.rsmKey
                                                    ? '#F53'
                                                    : '#112211',
                                        },
                                        hover: {
                                            fill: '#F53',
                                            outline: 'none',
                                        },
                                        pressed: {
                                            fill: '#F53',
                                            outline: 'none',
                                        },
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                    {locations
                        .flatMap((location) => location.images)
                        .map((image) => (
                            <image
                                href={image.src}
                                key={image.src}
                                x={image.position.x + pictureOffset.x}
                                y={image.position.y + pictureOffset.y}
                                width={image.width ?? 5}
                                height={image.height ?? 5}
                                style={{ transformBox: 'fill-box' }}
                                className={cn(
                                    'peer origin-center transition-all duration-300 ease-in-out hover:scale-[5] active:scale-[5] peer-hover:pointer-events-none peer-hover:opacity-0 peer-active:pointer-events-none peer-active:opacity-0',
                                    zoom < 5
                                        ? `scale-[var(--image-scale)] hover:scale-[calc(var(--image-scale)*10)] active:scale-[calc(var(--image-scale)*10)]`
                                        : '',
                                )}
                            />
                        ))}
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
};
