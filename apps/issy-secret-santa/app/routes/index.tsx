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

export default function Index() {
    const [selectedCountry, setSelectedCountry] = useState<GeoType | null>(
        null,
    );

    return (
        <main className="flex h-full flex-col items-center">
            <div className="h-[1rem] text-lg">
                {selectedCountry ? selectedCountry.properties.name : ''}
            </div>
            <ComposableMap className="w-full flex-grow">
                <ZoomableGroup zoom={1.2} maxZoom={20}>
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
                                            outline: '#FFF',
                                            fill:
                                                selectedCountry?.rsmKey ===
                                                geo.rsmKey
                                                    ? '#F53'
                                                    : undefined,
                                        },
                                        hover: {
                                            fill: '#F53',
                                        },
                                        pressed: {
                                            fill: '#E42',
                                        },
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </main>
    );
}
