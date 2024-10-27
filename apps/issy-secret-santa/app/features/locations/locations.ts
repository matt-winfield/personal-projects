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
        name: 'Andorra',
        mainImage: '/images/andorra/1.jpg',
        images: [
            { src: '/images/andorra/2.jpg', position: { x: 400, y: 150 } },
            { src: '/images/andorra/1.jpg', position: { x: 403, y: 149 } },
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
        name: 'United Kingdom',
        mainImage: '/images/uk/1.jpg',
        images: [
            { src: '/images/uk/2.jpg', position: { x: 391, y: 122 } },
            { src: '/images/uk/3.jpg', position: { x: 397, y: 123 } },
            { src: '/images/uk/1.jpg', position: { x: 394, y: 120 } },
        ],
    },
];
