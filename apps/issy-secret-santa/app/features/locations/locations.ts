export type Location = {
    name: string;
    mainImage: string;
    images: LocationImage[];
};

export type LocationImage = {
    src: string;
    position: { x: number; y: number };
    width?: number;
    height?: number;
};

export const locations = [
    {
        name: 'Albania',
        mainImage: '/images/albania/3.jpg',
        images: [
            {
                src: '/images/albania/1.jpg',
                position: {
                    longitude: 19.8,
                    latitude: 41.1,
                },
            },
            {
                src: '/images/albania/2.jpg',
                position: {
                    longitude: 18.450000000000017,
                    latitude: 41.4,
                },
            },
            {
                src: '/images/albania/4.jpg',
                position: {
                    longitude: 20.25,
                    latitude: 42,
                },
            },
            {
                src: '/images/albania/5.jpg',
                position: {
                    longitude: 21.149999999999977,
                    latitude: 40.5,
                },
            },
            {
                src: '/images/albania/6.jpg',
                position: {
                    longitude: 21.600000000000023,
                    latitude: 42.3,
                },
            },
            {
                src: '/images/albania/3.jpg',
                position: {
                    longitude: 19.35,
                    latitude: 39.9,
                },
            },
        ],
    },
    {
        name: 'Costa Rica',
        mainImage: '/images/costa-rica/2.jpg',
        images: [
            {
                src: '/images/costa-rica/1.jpg',
                position: {
                    longitude: -84.9,
                    latitude: 9.3,
                },
            },
            {
                src: '/images/costa-rica/3.jpg',
                position: {
                    longitude: -86,
                    latitude: 10.8,
                },
            },
            {
                src: '/images/costa-rica/2.jpg',
                position: {
                    longitude: -84,
                    latitude: 10.5,
                },
            },
        ],
    },
    {
        name: 'Andorra',
        mainImage: '/images/andorra/1.jpg',
        images: [
            {
                src: '/images/andorra/2.jpg',
                position: {
                    longitude: 0,
                    latitude: 45,
                },
            },
            {
                src: '/images/andorra/1.jpg',
                position: {
                    longitude: 1.3500000000000227,
                    latitude: 45.300000000000004,
                },
            },
        ],
    },
    {
        name: 'Cyprus',
        mainImage: '/images/cyprus/1.jpg',
        images: [
            {
                src: '/images/cyprus/2.jpg',
                position: {
                    longitude: 33.75,
                    latitude: 36,
                },
            },
            {
                src: '/images/cyprus/3.jpg',
                position: {
                    longitude: 34.19999999999999,
                    latitude: 38.4,
                },
            },
            {
                src: '/images/cyprus/4.jpg',
                position: {
                    longitude: 32.85000000000002,
                    latitude: 37.05,
                },
            },
            {
                src: '/images/cyprus/1.jpg',
                position: {
                    longitude: 35.55000000000001,
                    latitude: 37.2,
                },
            },
        ],
    },
    {
        name: 'Ecuador',
        mainImage: '/images/galapagos-islands/3.jpg',
        images: [
            {
                src: '/images/galapagos-islands/1.jpg',
                position: {
                    longitude: -109.35,
                    latitude: 1.5,
                },
            },
            {
                src: '/images/galapagos-islands/2.jpg',
                position: {
                    longitude: -108.89999999999999,
                    latitude: -1.2000000000000028,
                },
            },
            {
                src: '/images/galapagos-islands/4.jpg',
                position: {
                    longitude: -106.2,
                    latitude: 1.2000000000000028,
                },
            },
            {
                src: '/images/galapagos-islands/5.jpg',
                position: {
                    longitude: -105.66000000000001,
                    latitude: -0.5999999999999943,
                },
            },
            {
                src: '/images/galapagos-islands/6.jpg',
                position: {
                    longitude: -103.95,
                    latitude: 0.29999999999999716,
                },
            },
            {
                src: '/images/galapagos-islands/3.jpg',
                position: {
                    longitude: -108,
                    latitude: 0,
                },
            },
        ],
    },
    {
        name: 'Greece',
        mainImage: '/images/greece/2.jpg',
        images: [
            {
                src: '/images/greece/1.jpg',
                position: {
                    longitude: 22.94999999999999,
                    latitude: 42.3,
                },
            },
            {
                src: '/images/greece/3.jpg',
                position: {
                    longitude: 23.62500000000003,
                    latitude: 40.49999999999999,
                },
            },
            {
                src: '/images/greece/2.jpg',
                position: {
                    longitude: 21.149999999999977,
                    latitude: 41.4,
                },
            },
        ],
    },
    {
        name: 'Indonesia',
        mainImage: '/images/indonesia/5.jpg',
        images: [
            {
                src: '/images/indonesia/1.jpg',
                position: {
                    longitude: 134.10000000000002,
                    latitude: -7.5,
                },
            },
            {
                src: '/images/indonesia/2.jpg',
                position: {
                    longitude: 132.75,
                    latitude: -7.200000000000003,
                },
            },
            {
                src: '/images/indonesia/3.jpg',
                position: {
                    longitude: 130.95,
                    latitude: -7.799999999999997,
                },
            },
            {
                src: '/images/indonesia/4.jpg',
                position: {
                    longitude: 136.8,
                    latitude: -7.049999999999997,
                },
            },
            {
                src: '/images/indonesia/6.jpg',
                position: {
                    longitude: 137.25,
                    latitude: -8.700000000000003,
                },
            },
            {
                src: '/images/indonesia/5.jpg',
                position: {
                    longitude: 135,
                    latitude: -9.000000000000014,
                },
            },
        ],
    },
    {
        name: 'Croatia',
        mainImage: '/images/croatia/3.jpg',
        images: [
            {
                src: '/images/croatia/1.jpg',
                position: {
                    longitude: 13.5,
                    latitude: 45.9,
                },
            },
            {
                src: '/images/croatia/2.jpg',
                position: {
                    longitude: 16.650000000000006,
                    latitude: 47.1,
                },
            },
            {
                src: '/images/croatia/3.jpg',
                position: {
                    longitude: 14.849999999999994,
                    latitude: 46.5,
                },
            },
        ],
    },
    {
        name: 'Colombia',
        mainImage: '/images/colombia/1.jpg',
        images: [
            {
                src: '/images/colombia/2.jpg',
                position: {
                    longitude: -85.5,
                    latitude: 4.5,
                },
            },
            {
                src: '/images/colombia/3.jpg',
                position: {
                    longitude: -86.39999999999999,
                    latitude: 6,
                },
            },
            {
                src: '/images/colombia/4.jpg',
                position: {
                    longitude: -89.1,
                    latitude: 3.9000000000000057,
                },
            },
            {
                src: '/images/colombia/5.jpg',
                position: {
                    longitude: -91.35,
                    latitude: 8.099999999999994,
                },
            },
            {
                src: '/images/colombia/6.jpg',
                position: {
                    longitude: -89.1,
                    latitude: 7.799999999999997,
                },
            },
            {
                src: '/images/colombia/7.jpg',
                position: {
                    longitude: -91.8,
                    latitude: 4.200000000000003,
                },
            },
            {
                src: '/images/colombia/1.jpg',
                position: {
                    longitude: -90,
                    latitude: 6,
                },
            },
        ],
    },
    {
        name: 'Italy',
        mainImage: '/images/italy/3.jpg',
        images: [
            {
                src: '/images/italy/1.jpg',
                position: {
                    longitude: 11.25,
                    latitude: 45.300000000000004,
                },
            },
            {
                src: '/images/italy/2.jpg',
                position: {
                    longitude: 11.25,
                    latitude: 43.949999999999996,
                },
            },
            {
                src: '/images/italy/3.jpg',
                position: {
                    longitude: 13.5,
                    latitude: 43.49999999999999,
                },
            },
        ],
    },
    {
        name: 'Morocco',
        mainImage: '/images/morocco/2.jpg',
        images: [
            {
                src: '/images/morocco/1.jpg',
                position: {
                    longitude: -6.75,
                    latitude: 36,
                },
            },
            {
                src: '/images/morocco/3.jpg',
                position: {
                    longitude: -9.900000000000006,
                    latitude: 33.3,
                },
            },
            {
                src: '/images/morocco/4.jpg',
                position: {
                    longitude: -6.300000000000011,
                    latitude: 34.800000000000004,
                },
            },
            {
                src: '/images/morocco/2.jpg',
                position: {
                    longitude: -9,
                    latitude: 34.5,
                },
            },
        ],
    },
    {
        name: 'Panama',
        mainImage: '/images/panama/2.jpg',
        images: [
            {
                src: '/images/panama/1.jpg',
                position: {
                    longitude: -95.4,
                    latitude: 11.099999999999994,
                },
            },
            {
                src: '/images/panama/3.jpg',
                position: {
                    longitude: -96.3,
                    latitude: 9.150000000000006,
                },
            },
            {
                src: '/images/panama/2.jpg',
                position: {
                    longitude: -97.64999999999999,
                    latitude: 10.5,
                },
            },
        ],
    },
    {
        name: 'Poland',
        mainImage: '/images/poland/1.jpg',
        images: [
            {
                src: '/images/poland/2.jpg',
                position: {
                    longitude: 18.00000000000003,
                    latitude: 52.8,
                },
            },
            {
                src: '/images/poland/1.jpg',
                position: {
                    longitude: 15.749999999999972,
                    latitude: 52.5,
                },
            },
        ],
    },
    {
        name: 'Thailand',
        mainImage: '/images/thailand/2.jpg',
        images: [
            {
                src: '/images/thailand/1.jpg',
                position: {
                    longitude: 120.14999999999998,
                    latitude: 17.400000000000006,
                },
            },
            {
                src: '/images/thailand/3.jpg',
                position: {
                    longitude: 117.67500000000001,
                    latitude: 16.200000000000003,
                },
            },
            {
                src: '/images/thailand/2.jpg',
                position: {
                    longitude: 117,
                    latitude: 18,
                },
            },
        ],
    },
    {
        name: 'Spain',
        mainImage: '/images/spain/1.jpg',
        images: [
            {
                src: '/images/spain/2.jpg',
                position: {
                    longitude: -6.75,
                    latitude: 43.199999999999996,
                },
            },
            {
                src: '/images/spain/3.jpg',
                position: {
                    longitude: -4.049999999999983,
                    latitude: 44.4,
                },
            },
            {
                src: '/images/spain/4.jpg',
                position: {
                    longitude: -6.75,
                    latitude: 41.4,
                },
            },
            {
                src: '/images/spain/5.jpg',
                position: {
                    longitude: -4.724999999999994,
                    latitude: 40.800000000000004,
                },
                width: 7,
                height: 7,
            },
            {
                src: '/images/spain/1.jpg',
                position: {
                    longitude: -4.5,
                    latitude: 42.6,
                },
                width: 6,
                height: 6,
            },
        ],
    },
    {
        name: 'Vietnam',
        mainImage: '/images/vietnam/1.jpg',
        images: [
            {
                src: '/images/vietnam/2.jpg',
                position: {
                    longitude: 121.94999999999999,
                    latitude: 21,
                },
            },
            {
                src: '/images/vietnam/3.jpg',
                position: {
                    longitude: 124.19999999999999,
                    latitude: 18.89999999999999,
                },
            },
            {
                src: '/images/vietnam/4.jpg',
                position: {
                    longitude: 126.90000000000003,
                    latitude: 14.099999999999994,
                },
            },
            {
                src: '/images/vietnam/1.jpg',
                position: {
                    longitude: 126,
                    latitude: 17.099999999999994,
                },
            },
        ],
    },
    {
        name: 'Egypt',
        mainImage: '/images/egypt/4.jpg',
        images: [
            {
                src: '/images/egypt/1.jpg',
                position: {
                    longitude: 30.150000000000006,
                    latitude: 31.5,
                },
            },
            {
                src: '/images/egypt/2.jpg',
                position: {
                    longitude: 29.700000000000017,
                    latitude: 27.599999999999994,
                },
            },
            {
                src: '/images/egypt/3.jpg',
                position: {
                    longitude: 34.64999999999998,
                    latitude: 28.200000000000003,
                },
            },
            {
                src: '/images/egypt/4.jpg',
                position: {
                    longitude: 32.39999999999998,
                    latitude: 30,
                },
            },
        ],
    },
    {
        name: 'United Kingdom',
        mainImage: '/images/uk/1.jpg',
        images: [
            {
                src: '/images/uk/2.jpg',
                position: {
                    longitude: -4.049999999999983,
                    latitude: 53.4,
                },
            },
            {
                src: '/images/uk/3.jpg',
                position: {
                    longitude: -1.3499999999999943,
                    latitude: 53.1,
                },
            },
            {
                src: '/images/uk/1.jpg',
                position: {
                    longitude: -2.6999999999999886,
                    latitude: 54,
                },
            },
        ],
    },
    {
        name: 'France',
        mainImage: '/images/france/2.jpg',
        images: [
            {
                src: '/images/france/1.jpg',
                position: {
                    longitude: -1.3499999999999943,
                    latitude: 49.5,
                },
            },
            {
                src: '/images/france/3.jpg',
                position: {
                    longitude: 0,
                    latitude: 47.4,
                },
            },
            {
                src: '/images/france/2.jpg',
                position: {
                    longitude: 2.25,
                    latitude: 48.6,
                },
            },
        ],
    },
];
