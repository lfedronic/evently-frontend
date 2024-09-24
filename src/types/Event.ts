export type Event = {
    id: number;
    title: string;
    description: string;
    date: string;
    location: {
        latitude: number;
        longitude: number;
    };
    image: string;
    attending: number;
    price: number;
};

