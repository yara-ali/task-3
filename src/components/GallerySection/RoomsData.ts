interface RoomsDataInterface{
    category : string
    title : string
    description : string
    images : string[]
}
const roomsData : RoomsDataInterface [] = [
    {
        category: 'Classrooms',
        title: 'Classrooms',
        description: 'Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.',
        images: [
        '/assets/imgs/classroom_1.png',
        '/assets/imgs/classroom_2.png',
        '/assets/imgs/classroom_3.png',
        '/assets/imgs/classroom_4.png',
        '/assets/imgs/classroom_4.png',
        '/assets/imgs/classroom_4.png',
        ]
    },
    {
        category: 'Library',
        title: 'Library',
        description: 'Our expansive library is a treasure trove of books, fostering a love for reading and supporting students literacy development.',
        images: [
        '/assets/imgs/Library-1.png',
        '/assets/imgs/Library-2.png',
        '/assets/imgs/Library-3.png',
        '/assets/imgs/Library-4.png',
        '/assets/imgs/Library-4.png',
        '/assets/imgs/Library-4.png',
        ]
    },
    {
        category: 'Science Lab',
        title: 'Science Lab',
        description: 'Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.',
        images: [
        '/assets/imgs/Lab-1.png',
        '/assets/imgs/Lab-2.png',
        '/assets/imgs/Lab-3.png',
        '/assets/imgs/Lab-4.png',
        '/assets/imgs/Lab-4.png',
        '/assets/imgs/Lab-4.png',
        ]
    },
    {
        category: 'Computer Lab',
        title: 'Computer Lab',
        description: 'Equipped with age-appropriate technology, the computer lab enhances students digital literacy and computational skills',
        images: [
        '/assets/imgs/Computer Lab-1.png',
        '/assets/imgs/Computer Lab-2.png',
        '/assets/imgs/Computer Lab-3.png',
        '/assets/imgs/Computer Lab-4.png',
        '/assets/imgs/Computer Lab-4.png',
        '/assets/imgs/Computer Lab-4.png',
        ]
    },
    {
        category: 'Garden and Nature Area',
        title: 'Garden and Nature Area',
        description: 'Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.',
        images: [
        '/assets/imgs/Garden-1.png',
        '/assets/imgs/Garden-2.png',
        '/assets/imgs/Garden-3.png',
        '/assets/imgs/Garden-4.png',
        '/assets/imgs/Garden-4.png',
        '/assets/imgs/Garden-4.png',
        ]
    },

];

export default roomsData;