import { Button } from '@/components/ui/button';
import { Location, locations } from '@/features/locations/locations';
import { cn } from '@/utils/misc';
import { useCallback, useEffect, useState } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
} from 'react-simple-maps';
import { useWindowSize } from '@uidotdev/usehooks';
import Confetti from 'react-confetti';
import * as reactLoaderSpinner from 'react-loader-spinner';
import { preloadImages } from './finish-screen';
const { Bars } = reactLoaderSpinner;
import type { Feature } from 'geojson';

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
const wrongGuessHintLimit = 3;

interface ImageMapProps {
    onFinish?: () => void;
}

export const ImageMap = ({ onFinish }: ImageMapProps) => {
    const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
    const [completedLocations, setCompletedLocations] = useState(
        [] as number[],
    );
    const [isWrong, setIsWrong] = useState(false);
    const [wrongGuesses, setWrongGuesses] = useState(0);
    const [showHelp, setShowHelp] = useState(false);
    const [confetti, setConfetti] = useState(false);
    const { width, height } = useWindowSize();
    const [selectedCountry, setSelectedCountry] = useState<GeoType | null>(
        null,
    );
    const [zoom, setZoom] = useState(initialZoom);
    const [loading, setLoading] = useState(true);

    const onMoveEnd = useCallback(
        ({ zoom }: { coordinates: [number, number]; zoom: number }) => {
            setZoom(zoom);
            const root = document.querySelector(':root') as HTMLElement;
            root.style.setProperty(
                '--image-scale',
                Math.min(20 / zoom, 8).toString(),
            );
        },
        [],
    );

    const onCountryClick = useCallback((geo: GeoType) => {
        setSelectedCountry(geo);
        setIsWrong(false);
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
            setIsWrong(false);
            setSelectedCountry(null);
            setConfetti(true);
            setWrongGuesses(0);
            setShowHelp(false);

            if (currentLocationIndex === locations.length - 1) {
                return;
            }

            setCurrentLocationIndex((prev) => prev + 1);
        } else {
            setIsWrong(true);
            setWrongGuesses((prev) => prev + 1);
        }
    }, [selectedCountry, currentLocationIndex]);

    const gameFinished = completedLocations.length === locations.length;

    const parseGeographies = useCallback((geo: Array<Feature>) => {
        if (geo.length > 0) {
            setLoading(false);
        }
        return geo;
    }, []);

    useEffect(() => {
        if (gameFinished) {
            preloadImages();
        }
    }, [gameFinished]);

    return (
        <div className="relative flex h-full w-full flex-1 flex-col items-stretch [user-select:none]">
            <div
                className={cn(
                    'text-md absolute left-1/2 top-0 z-10 flex w-11/12 -translate-x-1/2 flex-col items-center rounded-b-2xl bg-background px-4 pb-2 pt-1',
                    gameFinished &&
                        'pointer-events-none opacity-0 transition-opacity duration-300 ease-in-out',
                )}
            >
                <div className="text-center">
                    Where in the world was this photo taken?
                </div>
                <img
                    src={locations[currentLocationIndex].mainImage}
                    className="max-h-52 max-w-full"
                />
            </div>
            <div
                className={cn(
                    'absolute bottom-0 left-1/2 z-10 flex w-11/12 -translate-x-1/2 flex-col items-center rounded-t-2xl bg-amber-600 px-5 py-2 text-lg text-white',
                    gameFinished &&
                        'pointer-events-none opacity-0 transition-opacity duration-300 ease-in-out',
                )}
            >
                <div className="text-center">
                    Selected country: {selectedCountry?.properties.name}
                </div>
                {isWrong && (
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
                {wrongGuesses >= wrongGuessHintLimit && !showHelp && (
                    <Button
                        variant="ghost"
                        size="sm"
                        className="mt-3"
                        onClick={() => setShowHelp(true)}
                    >
                        I don't know, help!!
                    </Button>
                )}
                {showHelp && (
                    <div className="text-md mt-3 text-center">
                        {locations[currentLocationIndex].name}
                    </div>
                )}
            </div>
            <div
                className={cn(
                    'pointer-events-none absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center bg-background opacity-0 transition-opacity duration-300 ease-in-out',
                    'rounded-t-xl p-5',
                    gameFinished && 'opacity-1 pointer-events-auto',
                )}
            >
                <div className="flex flex-col items-center">
                    <div className="text-center text-4xl">Congratulations!</div>
                    <div className="text-center text-xl">
                        You have completed the game!
                    </div>
                    <Button className="mt-5" onClick={onFinish}>
                        Continue
                    </Button>
                </div>
            </div>
            <div className="h-20 w-full bg-sky-200" />
            <ComposableMap className="w-full flex-1 bg-sky-200">
                <ZoomableGroup
                    zoom={initialZoom}
                    maxZoom={40}
                    onMoveEnd={onMoveEnd}
                >
                    <Geographies
                        geography={geoUrl}
                        parseGeographies={parseGeographies}
                    >
                        {({ geographies }) =>
                            geographies.map((geo: GeoType) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onClick={() => onCountryClick(geo)}
                                    id={geo.rsmKey}
                                    style={{
                                        default: {
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
                    {!loading &&
                        locations.flatMap((location, index) => {
                            return location.images.map((image) => (
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
                                        !completedLocations.includes(index) &&
                                            'pointer-events-none opacity-0',
                                        zoom < 20
                                            ? `scale-[var(--image-scale)] hover:scale-[max(calc(var(--image-scale)*2),5)] active:scale-[max(calc(var(--image-scale)*2))]`
                                            : '',
                                    )}
                                />
                            ));
                        })}
                </ZoomableGroup>
            </ComposableMap>
            <Bars
                wrapperClass="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                visible={loading}
            />
            {confetti && (
                <Confetti
                    className="pointer-events-none fixed left-0 top-0 z-50"
                    width={width ?? 0}
                    height={height ?? 0}
                    confettiSource={{
                        x: (width ?? 0) / 2,
                        y: height ?? 0,
                        w: 2,
                        h: 0,
                    }}
                    initialVelocityX={5}
                    initialVelocityY={{ min: -10, max: -20 }}
                    recycle={false}
                    onConfettiComplete={() => setConfetti(false)}
                />
            )}
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
