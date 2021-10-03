import Main from '../main/main';

type AppProps = {
  title: string,
  genre: string,
  release: string
}

function App({title, genre, release}: AppProps): JSX.Element {
  return (
    <Main
      title={title}
      genre={genre}
      release={release}
    />
  );
}

export default App;
