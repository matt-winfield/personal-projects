import { useState } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
} from 'react-simple-maps';

const geoUrl = '/countries-110m.json';

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
        <main className="relative h-full">
            <div className="text-center text-lg">
                {selectedCountry ? selectedCountry.properties.name : ''}
            </div>
            <ComposableMap>
                <ZoomableGroup minZoom={0.5} maxZoom={15}>
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
