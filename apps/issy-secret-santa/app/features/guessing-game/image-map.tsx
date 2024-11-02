import { Button } from '@/components/ui/button';
import { Location, locations } from '@/features/locations/locations';
import { cn } from '@/utils/misc';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';
import Confetti from 'react-confetti';
import * as reactLoaderSpinner from 'react-loader-spinner';
import { preloadImages } from './finish-screen';
const { Bars } = reactLoaderSpinner;
import type { Feature, Geometry } from 'geojson';
import 'maplibre-gl/dist/maplibre-gl.css';
import {
    Layer,
    Map,
    MapLayerMouseEvent,
    MapRef,
    Source,
} from '@vis.gl/react-maplibre';
import { ImageOverlay } from './image-overlay';

export const geoUrl = '/50m.geo.json';

type GeoType = {
    name: string;
    name_en: string;
    iso_a2: string;
    iso_a3: string;
    geounit: string;
    type: string;
    region_un: string;
    region_wb: string;
};

const initialZoom = 1.2;
const wrongGuessHintLimit = 3;

const countryFillLayerProps = {
    id: 'country-fill',
    type: 'fill',
    paint: {
        'fill-opacity': 0,
    },
};

// Ecuador doesn't have an outline on the map by default, but it's important for the game!
const ecuadorOutlineLayerProps = {
    id: 'equador-outline',
    type: 'line',
    paint: {
        'line-color': 'hsl(248,1%,41%)',
        'line-opacity': ['interpolate', ['linear'], ['zoom'], 0, 0.4, 4, 1],
        'line-width': [
            'interpolate',
            ['linear'],
            ['zoom'],
            3,
            1,
            5,
            1.2,
            12,
            3,
        ],
    },
};

const selectedCountryFillLayerProps = {
    id: 'selected-country-fill',
    type: 'fill',
    paint: {
        'fill-color': '#F53',
        'fill-opacity': 0.5,
    },
};

const hoveredCountryFillLayerProps = {
    id: 'hovered-country-fill',
    type: 'fill',
    paint: {
        'fill-color': '#F53',
        'fill-opacity': 0.5,
    },
};

const completedCountryFillLayerProps = {
    id: 'completed-country-fill',
    type: 'fill',
    paint: {
        'fill-color': '#0F0',
        'fill-opacity': 0.5,
    },
};

interface ImageMapProps {
    onFinish?: () => void;
}

export const ImageMap = ({ onFinish }: ImageMapProps) => {
    const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
    const [completedLocations, setCompletedLocations] = useState(
        [] as string[],
    );
    const [isWrong, setIsWrong] = useState(false);
    const [wrongGuesses, setWrongGuesses] = useState(0);
    const [showHelp, setShowHelp] = useState(false);
    const [confetti, setConfetti] = useState(false);
    const { width, height } = useWindowSize();
    const [selectedCountry, setSelectedCountry] = useState<GeoType | null>(
        null,
    );
    const [loading, setLoading] = useState(true);
    const [hoveredCountry, setHoveredCountry] = useState<GeoType | null>(null);

    const map = useRef<MapRef>(null);

    const getCountryFromMouseEvent = (e: MapLayerMouseEvent) => {
        if (!map.current) return;
        const features = map.current.queryRenderedFeatures(e.point) as Array<
            Feature<Geometry, GeoType>
        >;
        const countryFeature = features.find(
            (f: any) => f.source === 'countries',
        );
        return countryFeature?.properties;
    };

    const onCountrySubmit = useCallback(() => {
        if (!selectedCountry) {
            return;
        }

        if (
            selectedCountry.name.toLowerCase() ===
            locations[currentLocationIndex].name.toLowerCase()
        ) {
            setCompletedLocations((prev) => [...prev, selectedCountry.name]);
            setIsWrong(false);
            setSelectedCountry(null);
            setHoveredCountry(null);
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

    // Handle hovering over countries
    const onMouseMove = useCallback((e: MapLayerMouseEvent) => {
        const country = getCountryFromMouseEvent(e);
        if (country) {
            setHoveredCountry(country);
        } else {
            setHoveredCountry(null);
        }
    }, []);

    // Handle selecting a country
    const onMapClick = useCallback((e: MapLayerMouseEvent) => {
        const country = getCountryFromMouseEvent(e);
        if (country) {
            setSelectedCountry(country);
            setIsWrong(false);
        }
    }, []);

    const onMapLoad = useCallback(() => {
        setLoading(false);
        map.current?.getMap().dragRotate.disable();
        map.current?.getMap().keyboard.disable();
        map.current?.getMap().touchZoomRotate.disableRotation();
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
                    Selected country: {selectedCountry?.name}
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
            <div className="w-full flex-1 bg-sky-200">
                <Map
                    initialViewState={{
                        latitude: 0,
                        longitude: 0,
                        zoom: 1,
                    }}
                    style={{ width: '100%', height: '100%' }}
                    mapStyle="/openfreemap-simple.json"
                    onLoad={onMapLoad}
                    onMouseMove={onMouseMove}
                    onClick={onMapClick}
                    ref={map}
                >
                    <Source id="countries" type="geojson" data={geoUrl}>
                        <Layer {...countryFillLayerProps} />
                        <Layer
                            {...ecuadorOutlineLayerProps}
                            filter={['==', 'name', 'Ecuador']}
                        />
                        <Layer
                            {...selectedCountryFillLayerProps}
                            filter={['==', 'name', selectedCountry?.name ?? '']}
                        />
                        <Layer
                            {...hoveredCountryFillLayerProps}
                            filter={['==', 'name', hoveredCountry?.name ?? '']}
                        />
                        <Layer
                            {...completedCountryFillLayerProps}
                            filter={['in', 'name', ...completedLocations]}
                        />
                    </Source>
                    <ImageOverlay completedLocations={completedLocations} />
                </Map>
            </div>
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
