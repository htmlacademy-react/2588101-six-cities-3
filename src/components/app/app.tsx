import MainPage from '../../pages/main-page/main-page';

type AppPageProps = {
  placeCardCount: number;
}

function App({placeCardCount}: AppPageProps): JSX.Element {
  return (
    <MainPage placeCardCount={placeCardCount} />
  );
}

export default App;
