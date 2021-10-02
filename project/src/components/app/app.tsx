import Main from '../main/main';

type PropsType = {
  title: string,
  genre: string,
  release: string
}

function App({title, genre, release}: PropsType): JSX.Element {
  return (
    <Main
      title={title}
      genre={genre}
      release={release}
    />
  );
}

export default App;
