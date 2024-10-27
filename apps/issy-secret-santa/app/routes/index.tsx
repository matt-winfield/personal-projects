import { locations } from '@/features/locations/locations';
import { cn } from '@/utils/misc';
import { useState } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
} from 'react-simple-maps';

const geoUrl = '/countries-50m.json';

type GeoType = {
    Type: string;
    rsmKey: string;
    properties: {
        name: string;
    };
};

const pictureOffset = { x: 1, y: 1 };
const initialZoom = 1.2;

export default function Index() {
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
    };

    return (
        <main className="flex h-full flex-col items-center">
            <div className="h-[2rem] text-lg">
                {selectedCountry ? selectedCountry.properties.name : ''}
            </div>
            <ComposableMap className="w-full flex-1 bg-sky-200">
                <ZoomableGroup
                    zoom={initialZoom}
                    maxZoom={30}
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
                                    zoom && zoom < 5
                                        ? 'scale-[2] hover:scale-[10] active:scale-[10]'
                                        : '',
                                )}
                            />
                        ))}
                </ZoomableGroup>
            </ComposableMap>
        </main>
    );
}
