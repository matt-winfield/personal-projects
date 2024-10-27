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

export const locations: Location[] = [
    {
        name: 'Albania',
        mainImage: '/images/albania/3.jpg',
        images: [
            { src: '/images/albania/1.jpg', position: { x: 444, y: 153 } },
            { src: '/images/albania/2.jpg', position: { x: 441, y: 152 } },
            { src: '/images/albania/4.jpg', position: { x: 445, y: 150 } },
            { src: '/images/albania/5.jpg', position: { x: 447, y: 155 } },
            { src: '/images/albania/6.jpg', position: { x: 448, y: 149 } },
            { src: '/images/albania/3.jpg', position: { x: 443, y: 157 } },
        ],
    },
    {
        name: 'Costa Rica',
        mainImage: '/images/costa-rica/2.jpg',
        images: [
            { src: '/images/costa-rica/1.jpg', position: { x: 173, y: 264 } },
            { src: '/images/costa-rica/3.jpg', position: { x: 170, y: 259 } },
            { src: '/images/costa-rica/2.jpg', position: { x: 175, y: 260 } },
        ],
    },
    {
        name: 'Andorra',
        mainImage: '/images/andorra/1.jpg',
        images: [
            { src: '/images/andorra/2.jpg', position: { x: 400, y: 150 } },
            { src: '/images/andorra/1.jpg', position: { x: 403, y: 149 } },
        ],
    },
    {
        name: 'Cyprus',
        mainImage: '/images/cyprus/1.jpg',
        images: [
            { src: '/images/cyprus/2.jpg', position: { x: 475, y: 180 } },
            { src: '/images/cyprus/3.jpg', position: { x: 476, y: 172 } },
            { src: '/images/cyprus/4.jpg', position: { x: 473, y: 176.5 } },
            { src: '/images/cyprus/1.jpg', position: { x: 479, y: 176 } },
        ],
    },
    {
        name: 'Ecuador',
        mainImage: '/images/galapagos-islands/3.jpg',
        images: [
            {
                src: '/images/galapagos-islands/1.jpg',
                position: { x: 157, y: 295 },
            },
            {
                src: '/images/galapagos-islands/2.jpg',
                position: { x: 158, y: 304 },
            },
            {
                src: '/images/galapagos-islands/4.jpg',
                position: { x: 164, y: 296 },
            },
            {
                src: '/images/galapagos-islands/5.jpg',
                position: { x: 165.2, y: 302 },
            },
            {
                src: '/images/galapagos-islands/6.jpg',
                position: { x: 169, y: 299 },
            },
            {
                src: '/images/galapagos-islands/3.jpg',
                position: { x: 160, y: 300 },
            },
        ],
    },
    {
        name: 'Greece',
        mainImage: '/images/greece/2.jpg',
        images: [
            { src: '/images/greece/1.jpg', position: { x: 451, y: 159 } },
            { src: '/images/greece/3.jpg', position: { x: 452.5, y: 165 } },
            { src: '/images/greece/2.jpg', position: { x: 447, y: 162 } },
        ],
    },
    {
        name: 'Indonesia',
        mainImage: '/images/indonesia/5.jpg',
        images: [
            { src: '/images/indonesia/1.jpg', position: { x: 698, y: 325 } },
            { src: '/images/indonesia/2.jpg', position: { x: 695, y: 324 } },
            { src: '/images/indonesia/3.jpg', position: { x: 691, y: 326 } },
            { src: '/images/indonesia/4.jpg', position: { x: 704, y: 323.5 } },
            { src: '/images/indonesia/6.jpg', position: { x: 705, y: 329 } },
            { src: '/images/indonesia/5.jpg', position: { x: 700, y: 330 } },
        ],
    },
    {
        name: 'Croatia',
        mainImage: '/images/croatia/3.jpg',
        images: [
            { src: '/images/croatia/1.jpg', position: { x: 430, y: 147 } },
            { src: '/images/croatia/2.jpg', position: { x: 437, y: 143 } },
            { src: '/images/croatia/3.jpg', position: { x: 433, y: 145 } },
        ],
    },
    {
        name: 'Colombia',
        mainImage: '/images/colombia/1.jpg',
        images: [
            { src: '/images/colombia/2.jpg', position: { x: 210, y: 285 } },
            { src: '/images/colombia/3.jpg', position: { x: 208, y: 280 } },
            { src: '/images/colombia/4.jpg', position: { x: 202, y: 287 } },
            { src: '/images/colombia/5.jpg', position: { x: 197, y: 273 } },
            { src: '/images/colombia/6.jpg', position: { x: 202, y: 274 } },
            { src: '/images/colombia/7.jpg', position: { x: 196, y: 286 } },
            { src: '/images/colombia/1.jpg', position: { x: 200, y: 280 } },
        ],
    },
    {
        name: 'Italy',
        mainImage: '/images/italy/3.jpg',
        images: [
            { src: '/images/italy/1.jpg', position: { x: 425, y: 149 } },
            { src: '/images/italy/2.jpg', position: { x: 425, y: 153.5 } },
            { src: '/images/italy/3.jpg', position: { x: 430, y: 155 } },
        ],
    },
    {
        name: 'Morocco',
        mainImage: '/images/morocco/2.jpg',
        images: [
            { src: '/images/morocco/1.jpg', position: { x: 385, y: 180 } },
            { src: '/images/morocco/3.jpg', position: { x: 378, y: 189 } },
            { src: '/images/morocco/4.jpg', position: { x: 386, y: 184 } },
            { src: '/images/morocco/2.jpg', position: { x: 380, y: 185 } },
        ],
    },
    {
        name: 'Panama',
        mainImage: '/images/panama/2.jpg',
        images: [
            { src: '/images/panama/1.jpg', position: { x: 188, y: 263 } },
            { src: '/images/panama/3.jpg', position: { x: 186, y: 269.5 } },
            { src: '/images/panama/2.jpg', position: { x: 183, y: 265 } },
        ],
    },
    {
        name: 'Poland',
        mainImage: '/images/poland/1.jpg',
        images: [
            { src: '/images/poland/2.jpg', position: { x: 440, y: 124 } },
            { src: '/images/poland/1.jpg', position: { x: 435, y: 125 } },
        ],
    },
    {
        name: 'Thailand',
        mainImage: '/images/thailand/2.jpg',
        images: [
            { src: '/images/thailand/1.jpg', position: { x: 667, y: 242 } },
            { src: '/images/thailand/3.jpg', position: { x: 661.5, y: 246 } },
            { src: '/images/thailand/2.jpg', position: { x: 660, y: 240 } },
        ],
    },
    {
        name: 'Spain',
        mainImage: '/images/spain/1.jpg',
        images: [
            { src: '/images/spain/2.jpg', position: { x: 385, y: 156 } },
            { src: '/images/spain/3.jpg', position: { x: 391, y: 152 } },
            { src: '/images/spain/4.jpg', position: { x: 385, y: 162 } },
            {
                src: '/images/spain/5.jpg',
                position: { x: 389.5, y: 164 },
                width: 7,
                height: 7,
            },
            {
                src: '/images/spain/1.jpg',
                position: { x: 390, y: 158 },
                width: 6,
                height: 6,
            },
        ],
    },
    {
        name: 'Vietnam',
        mainImage: '/images/vietnam/1.jpg',
        images: [
            { src: '/images/vietnam/2.jpg', position: { x: 671, y: 230 } },
            { src: '/images/vietnam/3.jpg', position: { x: 676, y: 237 } },
            { src: '/images/vietnam/4.jpg', position: { x: 682, y: 253 } },
            { src: '/images/vietnam/1.jpg', position: { x: 680, y: 243 } },
        ],
    },
    {
        name: 'Egypt',
        mainImage: '/images/egypt/4.jpg',
        images: [
            { src: '/images/egypt/1.jpg', position: { x: 467, y: 195 } },
            { src: '/images/egypt/2.jpg', position: { x: 466, y: 208 } },
            { src: '/images/egypt/3.jpg', position: { x: 477, y: 206 } },
            { src: '/images/egypt/4.jpg', position: { x: 472, y: 200 } },
        ],
    },
    {
        name: 'United Kingdom',
        mainImage: '/images/uk/1.jpg',
        images: [
            { src: '/images/uk/2.jpg', position: { x: 391, y: 122 } },
            { src: '/images/uk/3.jpg', position: { x: 397, y: 123 } },
            { src: '/images/uk/1.jpg', position: { x: 394, y: 120 } },
        ],
    },
    {
        name: 'France',
        mainImage: '/images/france/2.jpg',
        images: [
            { src: '/images/france/1.jpg', position: { x: 397, y: 135 } },
            { src: '/images/france/3.jpg', position: { x: 400, y: 142 } },
            { src: '/images/france/2.jpg', position: { x: 405, y: 138 } },
        ],
    },
];
