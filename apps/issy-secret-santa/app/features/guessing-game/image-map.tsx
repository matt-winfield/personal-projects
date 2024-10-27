import { Button } from '@/components/ui/button';
import { Location, locations } from '@/features/locations/locations';
import { cn } from '@/utils/misc';
import { useCallback, useState } from 'react';
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
    const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
    const [completedLocations, setCompletedLocations] = useState(
        [] as number[],
    );
    const [wrong, setWrong] = useState(false);
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

    const onCountryClick = useCallback((geo: GeoType) => {
        setSelectedCountry(geo);
        setWrong(false);
    }, []);

    const onCountrySubmit = useCallback(() => {
        if (!selectedCountry) {
            return;
        }

        if (
            selectedCountry.properties.name.toLowerCase() ===
            locations[currentLocationIndex].name.toLowerCase()
        ) {
            setCompletedLocations((prev) => [...prev, currentLocationIndex]);
            setCurrentLocationIndex((prev) => prev + 1);
            setWrong(false);
            setSelectedCountry(null);

            if (completedLocations.length === locations.length) {
                console.log('Game completed!');
            }
        } else {
            setWrong(true);
        }
    }, [selectedCountry, currentLocationIndex]);

    return (
        <div className="relative flex h-full w-full flex-1 flex-col items-stretch">
            <div className="absolute left-1/2 top-0 z-10 flex w-11/12 -translate-x-1/2 flex-col items-center rounded-b-2xl bg-background p-4 text-lg">
                <div className="text-center">
                    Where in the world was this image taken?
                </div>
                <img
                    src={locations[currentLocationIndex].mainImage}
                    className="max-h-52 max-w-full"
                />
            </div>
            <div className="absolute bottom-0 left-1/2 z-10 flex w-11/12 -translate-x-1/2 flex-col items-center rounded-t-2xl bg-amber-600 p-5 text-lg text-white">
                <div className="text-center">
                    Selected country: {selectedCountry?.properties.name}
                </div>
                {wrong && (
                    <div className="text-center text-red-700">
                        ❌ Incorrect! Try again
                    </div>
                )}
                <Button
                    className="mt-3"
                    onClick={onCountrySubmit}
                    disabled={selectedCountry === null}
                >
                    Submit
                </Button>
            </div>
            <div className="h-20 w-full bg-sky-200" />
            <ComposableMap className="w-full flex-1 bg-sky-200">
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
                                    onClick={() => onCountryClick(geo)}
                                    id={geo.rsmKey}
                                    style={{
                                        default: {
                                            stroke: '#88F',
                                            strokeWidth: 0.3,
                                            outline: 'none',
                                            fill: getCountryFill(
                                                selectedCountry,
                                                geo,
                                                completedLocations,
                                                locations,
                                            ),
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

const getCountryFill = (
    selectedCountry: GeoType | null,
    geo: GeoType,
    completedLocations: number[],
    locations: Location[],
) => {
    if (selectedCountry?.rsmKey === geo.rsmKey) {
        return '#F53';
    }

    if (
        completedLocations.includes(
            locations.findIndex(
                (location) => location.name === geo.properties.name,
            ),
        )
    ) {
        return '#0F0';
    }

    return '#112211';
};
