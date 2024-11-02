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
                    longitude: 19.583044223686613,
                    latitude: 41.10462786544113,
                },
                width: 3,
                height: 3,
            },
            {
                src: '/images/albania/2.jpg',
                position: {
                    longitude: 18.414080913189196,
                    latitude: 41.73435964806234,
                },
            },
            {
                src: '/images/albania/4.jpg',
                position: {
                    longitude: 19.758098788189614,
                    latitude: 42.47420717189004,
                },
            },
            {
                src: '/images/albania/5.jpg',
                position: {
                    longitude: 21.009635639434066,
                    latitude: 40.85718066273108,
                },
            },
            {
                src: '/images/albania/6.jpg',
                position: {
                    longitude: 21.403784634371675,
                    latitude: 42.2908127309868,
                },
            },
            {
                src: '/images/albania/3.jpg',
                position: {
                    longitude: 19.272165899495604,
                    latitude: 39.508667719285086,
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
                    longitude: -84.260746092033,
                    latitude: 8.426326089499312,
                },
            },
            {
                src: '/images/costa-rica/3.jpg',
                position: {
                    longitude: -85.94782126121657,
                    latitude: 10.370986739228144,
                },
            },
            {
                src: '/images/costa-rica/2.jpg',
                position: {
                    longitude: -83.40476815543751,
                    latitude: 10.369898716900494,
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
                    longitude: 0.30110317357485883,
                    latitude: 42.2360592986023,
                },
            },
            {
                src: '/images/andorra/1.jpg',
                position: {
                    longitude: 2.4965344439035846,
                    latitude: 43.30305259107965,
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
                    longitude: 32.86114925867915,
                    latitude: 33.16772086379103,
                },
            },
            {
                src: '/images/cyprus/3.jpg',
                position: {
                    longitude: 32.762393907253966,
                    latitude: 36.532831862055446,
                },
            },
            {
                src: '/images/cyprus/4.jpg',
                position: {
                    longitude: 31.25332243299053,
                    latitude: 34.95629137889958,
                },
            },
            {
                src: '/images/cyprus/1.jpg',
                position: {
                    longitude: 34.24911339812425,
                    latitude: 34.77800890568061,
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
                    longitude: -90.0098721097975,
                    latitude: 0.8941968343637114,
                },
            },
            {
                src: '/images/galapagos-islands/2.jpg',
                position: {
                    longitude: -90.62169115446648,
                    latitude: -1.9641800461186136,
                },
            },
            {
                src: '/images/galapagos-islands/4.jpg',
                position: {
                    longitude: -87.09016855097644,
                    latitude: 1.1415901012162664,
                },
            },
            {
                src: '/images/galapagos-islands/5.jpg',
                position: {
                    longitude: -87.05057935018819,
                    latitude: -2.435911867055623,
                },
            },
            {
                src: '/images/galapagos-islands/6.jpg',
                position: {
                    longitude: -85.90153129835474,
                    latitude: -0.838688825909955,
                },
            },
            {
                src: '/images/galapagos-islands/3.jpg',
                position: {
                    longitude: -88.97809923272955,
                    latitude: -0.8707769357583146,
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
                    longitude: 22.555104754431284,
                    latitude: 39.001248473175906,
                },
            },
            {
                src: '/images/greece/3.jpg',
                position: {
                    longitude: 24.199526438276564,
                    latitude: 37.66868548615726,
                },
            },
            {
                src: '/images/greece/2.jpg',
                position: {
                    longitude: 20.90964026686018,
                    latitude: 37.647133747481405,
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
                    longitude: 113.23034450472375,
                    latitude: -7.992218978536542,
                },
            },
            {
                src: '/images/indonesia/2.jpg',
                position: {
                    longitude: 111.40039576787404,
                    latitude: -6.600006790396861,
                },
            },
            {
                src: '/images/indonesia/3.jpg',
                position: {
                    longitude: 109.58875989443942,
                    latitude: -8.406174556667082,
                },
            },
            {
                src: '/images/indonesia/4.jpg',
                position: {
                    longitude: 115.65617149166985,
                    latitude: -7.1105229793652995,
                },
            },
            {
                src: '/images/indonesia/6.jpg',
                position: {
                    longitude: 117.16682765303608,
                    latitude: -9.20160567238517,
                },
            },
            {
                src: '/images/indonesia/5.jpg',
                position: {
                    longitude: 114.60679804028791,
                    latitude: -10.182949493022562,
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
                    longitude: 14.810932034125614,
                    latitude: 43.50614384772706,
                },
            },
            {
                src: '/images/croatia/2.jpg',
                position: {
                    longitude: 17.108394507110546,
                    latitude: 45.98429092941598,
                },
            },
            {
                src: '/images/croatia/3.jpg',
                position: {
                    longitude: 15.734657890431208,
                    latitude: 44.63892758766826,
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
                    longitude: -69.97437068601326,
                    latitude: 3.160432154418274,
                },
            },
            {
                src: '/images/colombia/3.jpg',
                position: {
                    longitude: -71.28284712599908,
                    latitude: 5.134870792928652,
                },
            },
            {
                src: '/images/colombia/4.jpg',
                position: {
                    longitude: -73.11809897628021,
                    latitude: 1.9133607162840605,
                },
            },
            {
                src: '/images/colombia/5.jpg',
                position: {
                    longitude: -75.96408248738018,
                    latitude: 6.738271114966153,
                },
            },
            {
                src: '/images/colombia/6.jpg',
                position: {
                    longitude: -72.72149246160777,
                    latitude: 6.875479257356531,
                },
            },
            {
                src: '/images/colombia/7.jpg',
                position: {
                    longitude: -75.79978989609758,
                    latitude: 2.1548196174756953,
                },
            },
            {
                src: '/images/colombia/1.jpg',
                position: {
                    longitude: -74.29132982438253,
                    latitude: 4.283943717763378,
                },
                width: 7,
                height: 7,
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
                    longitude: 11.500940082874052,
                    latitude: 43.64048983482499,
                },
            },
            {
                src: '/images/italy/2.jpg',
                position: {
                    longitude: 11.72587131491332,
                    latitude: 41.788213897522894,
                },
            },
            {
                src: '/images/italy/3.jpg',
                position: {
                    longitude: 14.132112758967054,
                    latitude: 41.659070283032094,
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
                    longitude: -5.145660403962779,
                    latitude: 33.66678496924274,
                },
            },
            {
                src: '/images/morocco/3.jpg',
                position: {
                    longitude: -8.023151328048556,
                    latitude: 30.642563172232798,
                },
            },
            {
                src: '/images/morocco/4.jpg',
                position: {
                    longitude: -3.269124676887941,
                    latitude: 32.577728724868976,
                },
            },
            {
                src: '/images/morocco/2.jpg',
                position: {
                    longitude: -6.999415193308266,
                    latitude: 32.29587238886754,
                },
                width: 6,
                height: 6,
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
                    longitude: -78.47544291538465,
                    latitude: 9.292617621100177,
                },
            },
            {
                src: '/images/panama/3.jpg',
                position: {
                    longitude: -79.82703766384796,
                    latitude: 7.09749053857972,
                },
            },
            {
                src: '/images/panama/2.jpg',
                position: {
                    longitude: -81.2753019091698,
                    latitude: 9.182392789901684,
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
                    longitude: 20.550676056797727,
                    latitude: 52.977439734608225,
                },
            },
            {
                src: '/images/poland/1.jpg',
                position: {
                    longitude: 18.149927489576413,
                    latitude: 51.841829224741986,
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
                    longitude: 100.61712141436476,
                    latitude: 13.011175745922245,
                },
            },
            {
                src: '/images/thailand/3.jpg',
                position: {
                    longitude: 101.8944388169478,
                    latitude: 15.218870236051544,
                },
            },
            {
                src: '/images/thailand/2.jpg',
                position: {
                    longitude: 99.97584751424728,
                    latitude: 16.67021935330115,
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
                    longitude: -5.719406776746524,
                    latitude: 42.27699081031167,
                },
            },
            {
                src: '/images/spain/3.jpg',
                position: {
                    longitude: -1.6854143495695553,
                    latitude: 42.29629229544187,
                },
            },
            {
                src: '/images/spain/4.jpg',
                position: {
                    longitude: -5.34490949900524,
                    latitude: 40.76839493658002,
                },
            },
            {
                src: '/images/spain/5.jpg',
                position: {
                    longitude: -2.3729164462458243,
                    latitude: 39.53303313914165,
                },
                width: 7,
                height: 7,
            },
            {
                src: '/images/spain/1.jpg',
                position: {
                    longitude: -3.4715167353780316,
                    latitude: 41.32268596662857,
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
                    longitude: 105.3251039436276,
                    latitude: 19.549109222281956,
                },
            },
            {
                src: '/images/vietnam/3.jpg',
                position: {
                    longitude: 107.05851105509765,
                    latitude: 16.69386581497183,
                },
            },
            {
                src: '/images/vietnam/4.jpg',
                position: {
                    longitude: 107.71718336170886,
                    latitude: 11.25712798834111,
                },
            },
            {
                src: '/images/vietnam/1.jpg',
                position: {
                    longitude: 108.63181829701739,
                    latitude: 14.177550232515756,
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
                    longitude: 27.22672930460456,
                    latitude: 29.107236986826607,
                },
            },
            {
                src: '/images/egypt/2.jpg',
                position: {
                    longitude: 27.18857380138124,
                    latitude: 25.82313090400841,
                },
            },
            {
                src: '/images/egypt/3.jpg',
                position: {
                    longitude: 30.010144904417672,
                    latitude: 26.096371232108993,
                },
            },
            {
                src: '/images/egypt/4.jpg',
                position: {
                    longitude: 28.64090039437241,
                    latitude: 27.51950089032313,
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
                    longitude: -1.6701358712475383,
                    latitude: 51.70880964726206,
                },
            },
            {
                src: '/images/uk/3.jpg',
                position: {
                    longitude: -0.280903773377446,
                    latitude: 52.72580400381506,
                },
            },
            {
                src: '/images/uk/1.jpg',
                position: {
                    longitude: -1.4697711801202615,
                    latitude: 53.93719484088305,
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
                    longitude: 0.8907699053994804,
                    latitude: 48.47339251598737,
                },
            },
            {
                src: '/images/france/3.jpg',
                position: {
                    longitude: 1.426685648879129,
                    latitude: 45.492623437125644,
                },
            },
            {
                src: '/images/france/2.jpg',
                position: {
                    longitude: 3.4573361971455085,
                    latitude: 47.18615552492713,
                },
                width: 7,
                height: 7,
            },
        ],
    },
];
