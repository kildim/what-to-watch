import {FilmType} from '../types/types';

const MOCKS_COUNT = 40;

function* idMaker(): Generator<number> {
  let index = 0;
  while(true)
  {yield index++;}
}

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const genres = [
  'Comedy',
  'Thrillers',
  'Documentary',
  'Crime',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Action',
  'Fantasy',
  'Mystery',
];

const genGenre = () => genres[getRandomInteger(0,genres.length-1)];

const filmId: Generator<number> = idMaker();

export const films: FilmType[] = Array(MOCKS_COUNT).fill('').map(() =>
{
  const newID = filmId.next().value;
  return (
    {
      id: newID,
      name: `#${newID} The Grand Budapest Hotel`,
      posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
      previewImage: 'img/seven-years-in-tibet.jpg',
      backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
      backgroundColor: '#ffffff',
      videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
      rating: 8.9,
      scoresCount: 240,
      director: 'Wes Anderson',
      starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
      runTime: 99,
      genre: genGenre(),
      released: 2014,
      isFavorite: false,
    });
},
);
