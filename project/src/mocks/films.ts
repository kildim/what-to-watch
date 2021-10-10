import {Film} from '../types/film';

const MOCKS_COUNT = 8;

function* idMaker(): Generator<number> {
  let index = 0;
  while(true)
  {yield index++;}
}

const filmId: Generator<number> = idMaker();

export const films: Film[] = Array(MOCKS_COUNT).fill('').map(() =>
{
  const newID = filmId.next().value;
  return (
    {
      id: newID,
      name: `#${newID} The Grand Budapest Hotel`,
      posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
      previewImage: 'img/the-grand-budapest-hotel.jpg',
      backgroundImage: 'img/the-grand-budapest-hotel-bg.jpg',
      backgroundColor: '#ffffff',
      videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
      description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
      rating: 8.9,
      scoresCount: 240,
      director: 'Wes Anderson',
      starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
      runTime: 99,
      genre: 'Comedy',
      released: 2014,
      isFavorite: false,
    });
},
);
