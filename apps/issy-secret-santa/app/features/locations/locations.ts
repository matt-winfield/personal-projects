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
                    longitude: 19.375402897109268,
                    latitude: 41.270368413201425,
                },
                width: 3,
                height: 3,
            },
            {
                src: '/images/albania/2.jpg',
                position: {
                    longitude: 17.588287118429378,
                    latitude: 41.63126681143717,
                },
            },
            {
                src: '/images/albania/4.jpg',
                position: {
                    longitude: 19.65327937664668,
                    latitude: 43.30013411779984,
                },
            },
            {
                src: '/images/albania/5.jpg',
                position: {
                    longitude: 21.421692520645877,
                    latitude: 40.69589918347151,
                },
            },
            {
                src: '/images/albania/6.jpg',
                position: {
                    longitude: 22.02533261932777,
                    latitude: 43.01516636919399,
                },
            },
            {
                src: '/images/albania/3.jpg',
                position: {
                    longitude: 18.907433254435574,
                    latitude: 39.44797050658869,
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
                    longitude: -84.26619179812998,
                    latitude: 9.128992906171533,
                },
            },
            {
                src: '/images/costa-rica/3.jpg',
                position: {
                    longitude: -85.72737796622414,
                    latitude: 10.29369357363656,
                },
            },
            {
                src: '/images/costa-rica/2.jpg',
                position: {
                    longitude: -83.64359943086806,
                    latitude: 10.568604797505287,
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
                    longitude: 0.6453880308158944,
                    latitude: 42.20615282834322,
                },
            },
            {
                src: '/images/andorra/1.jpg',
                position: {
                    longitude: 2.279033370681077,
                    latitude: 43.11304438569124,
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
                    longitude: 32.85146267410434,
                    latitude: 33.501074375740345,
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
                    longitude: 31.56590681388269,
                    latitude: 35.03258910571323,
                },
            },
            {
                src: '/images/cyprus/1.jpg',
                position: {
                    longitude: 33.766470788222904,
                    latitude: 34.95816579157682,
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
                    longitude: -90.23391040894165,
                    latitude: 0.6345849214916512,
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
                    longitude: -88.01304982340919,
                    latitude: 0.439595888895596,
                },
            },
            {
                src: '/images/galapagos-islands/5.jpg',
                position: {
                    longitude: -87.32858673418148,
                    latitude: -1.7136390852935932,
                },
            },
            {
                src: '/images/galapagos-islands/6.jpg',
                position: {
                    longitude: -86.35986324346312,
                    latitude: -0.4294310779736321,
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
                    longitude: 23.847112815980097,
                    latitude: 40.07417159597861,
                },
            },
            {
                src: '/images/greece/3.jpg',
                position: {
                    longitude: 24.471072339551483,
                    latitude: 38.328264333155886,
                },
            },
            {
                src: '/images/greece/2.jpg',
                position: {
                    longitude: 21.31661030376108,
                    latitude: 37.63152662439032,
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
                    longitude: 111.30939557924103,
                    latitude: -6.855967570392778,
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
                    longitude: 115.87735023618353,
                    latitude: -7.1942878634694125,
                },
            },
            {
                src: '/images/indonesia/6.jpg',
                position: {
                    longitude: 116.66573985441164,
                    latitude: -9.299008802145508,
                },
            },
            {
                src: '/images/indonesia/5.jpg',
                position: {
                    longitude: 114.47016665419062,
                    latitude: -9.786494942246733,
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
                    longitude: 14.656037924347402,
                    latitude: 44.085944110133426,
                },
            },
            {
                src: '/images/croatia/2.jpg',
                position: {
                    longitude: 17.50892971955085,
                    latitude: 45.418996109893385,
                },
            },
            {
                src: '/images/croatia/3.jpg',
                position: {
                    longitude: 15.643618796046155,
                    latitude: 44.974111603100795,
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
                    longitude: -70.51271281349845,
                    latitude: 2.771928182056854,
                },
            },
            {
                src: '/images/colombia/3.jpg',
                position: {
                    longitude: -71.69165063730502,
                    latitude: 4.575630503955736,
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
                    longitude: -75.99396256821538,
                    latitude: 7.089662176225616,
                },
            },
            {
                src: '/images/colombia/6.jpg',
                position: {
                    longitude: -74.46783530416727,
                    latitude: 6.459574552680209,
                },
            },
            {
                src: '/images/colombia/7.jpg',
                position: {
                    longitude: -75.71733439352293,
                    latitude: 3.2467708103911406,
                },
            },
            {
                src: '/images/colombia/1.jpg',
                position: {
                    longitude: -74.20575025154446,
                    latitude: 4.838133510984591,
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
                    longitude: 12.472686711885132,
                    latitude: 43.25900774949727,
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
                    longitude: -6.744973979584245,
                    latitude: 31.611851211175463,
                },
            },
            {
                src: '/images/morocco/4.jpg',
                position: {
                    longitude: -4.304953535746392,
                    latitude: 32.603040384996845,
                },
            },
            {
                src: '/images/morocco/2.jpg',
                position: {
                    longitude: -6.313775802363608,
                    latitude: 32.62335356373549,
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
                    longitude: -78.28512857189953,
                    latitude: 9.506386510285978,
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
                    longitude: 100.59883950091074,
                    latitude: 13.83932486886357,
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
                    longitude: 99.8516981651128,
                    latitude: 15.452098780809038,
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
                    longitude: 105.55340630431243,
                    latitude: 18.66778735704203,
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
                    longitude: 108.4445718924456,
                    latitude: 14.63511997101159,
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
                    longitude: -2.6008603846048572,
                    latitude: 52.31482190453795,
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
                    longitude: 0.7881369001746918,
                    latitude: 47.71002878611296,
                },
            },
            {
                src: '/images/france/3.jpg',
                position: {
                    longitude: 2.060261623790268,
                    latitude: 46.171887765771544,
                },
            },
            {
                src: '/images/france/2.jpg',
                position: {
                    longitude: 3.4573361971455085,
                    latitude: 47.18615552492713,
                },
            },
        ],
    },
];
