import PageMain from '../pages/page-main/page-main';

type AppProps = {
  pageMainCntCard: number;
};

function App(props: AppProps): JSX.Element {
  const { pageMainCntCard } = props;
  return (
    <PageMain
      cntCards={pageMainCntCard}
    />
  );
}

export default App;
